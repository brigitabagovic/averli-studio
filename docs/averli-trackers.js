/* AVERLI - consent-gated analytics loader. LOCAL DRAFT (v5.4, GA4 only). NOT published, NOT active: ENABLED is false until legal review and explicit deployment approval.
   Inert while both IDs are null. Requires consent.js (window.AverliConsent) to be loaded first.
   Neither the Google tag nor the Clarity tag is even downloaded until the visitor allows the matching category. */
(function(){
  'use strict';
  const CFG={ENABLED:true,       /* master switch. false = this file does nothing at all (no tag download, no network, no listeners). Set true only on approved deployment */
             GA4_ID:'G-2K9T6H9GQ8',  /* existing property "Averli Studio" (owner-confirmed 2026-10-28); not verified against the account from here */
             CLARITY_ID:null,    /* not part of this package (GA4 only) */
             PAGEVIEW:'manual',  /* 'manual'  (recommended): this script sends page_view once per distinct page (trailing slash ignored). REQUIRES the GA4 stream's Enhanced measurement
                                    option "Page changes based on browser history events" to be OFF, otherwise every page is counted twice.
                                    'enhanced': GA4 sends page_view on load and on history changes. The site rewrites /contact/ to /contact right after load and fires
                                    pushState + popstate on every navigation, so expect duplicate/split page_views (see README). Never combine the two. */
             RELOAD_ON_WITHDRAW:true,
             FORM_ORIGINS:['https://forms.averlistudio.com']};/* origins the page itself must still reach after a withdrawal (the contact-form endpoint); keep in step with formEndpoint in reference-adjustments.js (now the Cloudflare relay; FormSubmit is no longer used) *//* a tag already loaded cannot be unloaded; reloading the page is the only sure way to stop it (see README) */
  /* Conversion helpers always exist so callers never need a guard; they do nothing unless analytics is enabled AND allowed. */
  const SERVICES=['Social Media & Content','Campaigns & Meta Advertising','Web, UX & SEO','SEO & Digital Marketing','Branding & Graphic Design','A Combination of Services','Not Sure Yet / Something Else'];
  const UTM=['utm_source','utm_medium','utm_campaign','utm_content','utm_term'];
  const cleanQs=()=>{try{const p=new URLSearchParams(location.search),o=new URLSearchParams();UTM.forEach(k=>{const v=p.get(k);if(v&&v.length<=100&&v.indexOf('@')<0)o.set(k,v);});const q=o.toString();return q?'?'+q:'';}catch(e){return '';}};
  const here=()=>location.origin+(location.pathname.length>1?location.pathname.replace(/\/+$/,''):location.pathname)+cleanQs();
  const ctx=(o)=>{o.page_location=here();try{const u=new URL(document.referrer);o.page_referrer=u.origin+u.pathname;}catch(e){}return o;};
  const live=()=>!!(CFG.ENABLED&&CFG.GA4_ID&&window.AverliConsent&&window.AverliConsent.enabled&&window.AverliConsent.allowed('analytics')&&window.gtag);
  window.AverliTrack={
    /* Call only AFTER the relay confirmed success. Sends a fixed event name and the service category from a fixed list; never name, email or message. */
    lead:function(service){try{if(!live())return;gtag('event','generate_lead',ctx({form:'contact',service:SERVICES.indexOf(service)>=0?service:'other'}));}catch(e){}},
    contactClick:function(kind){try{if(!live())return;const k=['email','whatsapp','phone'].indexOf(kind)>=0?kind:'other';gtag('event','contact_click',ctx({method:k}));}catch(e){}}
  };
  const C=window.AverliConsent;
  if(!CFG.ENABLED||!C||!C.enabled)return;       /* shipping default (ENABLED:false) or Version A (banner off): nothing below runs */                       /* Version A (banner off) never starts optional tools */
  const add=(src)=>{const s=document.createElement('script');s.async=true;s.src=src;document.head.appendChild(s);};
  let gaLoaded=false,clLoaded=false,reloadTimer=null,blocked=false;
  const GA_HOSTS='https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com https://stats.g.doubleclick.net';
  const CL_HOSTS='https://*.clarity.ms https://c.bing.com';
  /* Browser-enforced stop: a loaded tag cannot be unloaded and Clarity's uploader has no consent check, so on withdrawal a Content-Security-Policy
     is added to the page. It allows only this site, the form endpoint and the hosts of any category that is STILL allowed. The browser then refuses
     every other network request (XHR, beacon, fetch, image) from any script, with no reload and no loss of form input. A policy can only be
     tightened, never lifted, so a later re-grant on the same page waits for a reload (see resume()). */
  let enforcing=false;
  const enforce=function(){if(enforcing)return;enforcing=true;queueMicrotask(function(){enforcing=false;apply();});}; /* one policy per withdrawal, built from the final consent state */
  const apply=function(){
    const conn=["'self'"].concat(CFG.FORM_ORIGINS);if(C.allowed('analytics'))conn.push(GA_HOSTS);if(C.allowed('insights'))conn.push(CL_HOSTS);
    const img=["'self'",'data:','blob:'];if(C.allowed('analytics'))img.push(GA_HOSTS);
    try{const m=document.createElement('meta');m.httpEquiv='Content-Security-Policy';m.content='connect-src '+conn.join(' ')+'; img-src '+img.join(' ');document.head.appendChild(m);blocked=true;}catch(e){}
  };
  const resume=function(){if(!blocked)return false;stopAfterWithdraw(true);return true;};

  /* A loaded tag keeps running after consent is withdrawn (Google then pings cookielessly, Clarity falls back to no-consent mode).
     After a withdrawal the page is reloaded (without the tags) only if no form is being filled; otherwise the policy below is the protection and the next full page load is clean. */
  const formDirty=()=>{const f=[...document.querySelectorAll('form input:not([type=hidden]):not([type=submit]):not([type=button]), form textarea, form select')];return f.some(x=>(x.value||'').trim()!==''&&x.type!=='checkbox')||(document.activeElement&&/^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement.tagName));};
  const stopAfterWithdraw=(force)=>{if(!CFG.RELOAD_ON_WITHDRAW||!(force||gaLoaded||clLoaded)||reloadTimer)return;
    reloadTimer=setTimeout(function(){reloadTimer=null;if(!formDirty())location.reload();},200);}; /* one check only: never a delayed reload, it could wipe a sent form's success message */

  /* ---- GA4 (category: analytics) ---- */
  if(CFG.GA4_ID){
    const DIS='ga-disable-'+CFG.GA4_ID;                           /* Google's documented opt-out switch */
    window.dataLayer=window.dataLayer||[];
    window.gtag=function(){window.dataLayer.push(arguments);};
    gtag('consent','default',{analytics_storage:'denied',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied'}); /* before any config/event */
    C.whenAllowed('analytics',function(){
      if(gaLoaded&&resume())return;                              /* policy already blocks this page: stay disabled until the reload */
      window[DIS]=false;
      if(gaLoaded){gtag('consent','update',{analytics_storage:'granted'});return;}     /* re-grant on the same page: no second config/script */
      gaLoaded=true;
      gtag('consent','update',{analytics_storage:'granted'});     /* ad_* stay denied: no advertising consent is requested for GA4 */
      add('https://www.googletagmanager.com/gtag/js?id='+encodeURIComponent(CFG.GA4_ID));
      gtag('js',new Date());
      const manual=CFG.PAGEVIEW==='manual';
      gtag('config',CFG.GA4_ID,{send_page_view:!manual,allow_google_signals:false,allow_ad_personalization_signals:false});
      if(manual){
        /* One page_view per distinct page. The site rewrites /contact/ -> /contact right after load and fires pushState AND popstate on each navigation,
           so pages are compared and reported WITHOUT the trailing slash. page_location keeps ONLY the five utm_* parameters (needed for acquisition
           reports; values containing "@" or longer than 100 characters are dropped) and drops every other query parameter and the hash, so nothing a
           visitor or a third-party link puts in a URL (email, name, tokens, click IDs) is ever sent. page_referrer is sent without query or hash. */
        const UTM=['utm_source','utm_medium','utm_campaign','utm_content','utm_term'];
        const qs=()=>{try{const p=new URLSearchParams(location.search),o=new URLSearchParams();UTM.forEach(k=>{const v=p.get(k);if(v&&v.length<=100&&v.indexOf('@')<0)o.set(k,v);});const s=o.toString();return s?'?'+s:'';}catch(e){return '';}};
        const norm=()=>(location.pathname.length>1?location.pathname.replace(/\/+$/,''):location.pathname)+qs();
        const cleanRef=r=>{try{const u=new URL(r);return u.origin+u.pathname;}catch(e){return '';}};
        let ref=cleanRef(document.referrer);
        const pv=()=>{if(!C.allowed('analytics'))return;const cur=location.origin+norm();const ev={page_location:cur,page_title:document.title};if(ref)ev.page_referrer=ref;gtag('set',{page_location:cur});gtag('event','page_view',ev);ref=cur;};
        let last=norm();pv();
        const chk=()=>{const k=norm();if(k!==last){last=k;setTimeout(pv,250);}};   /* short delay: the single-page router updates document.title just after the URL */
        ['pushState','replaceState'].forEach(m=>{const o=history[m];history[m]=function(){const r=o.apply(this,arguments);setTimeout(chk,0);return r;};});
        addEventListener('popstate',chk);
      }
    });
    C.onWithdraw('analytics',function(){window[DIS]=true;gtag('consent','update',{analytics_storage:'denied'});enforce();stopAfterWithdraw();}); /* consent.js also deletes _ga cookies */
  }

  /* ---- Microsoft Clarity (category: insights), Consent API V2 ---- */
  if(CFG.CLARITY_ID){
    const cl=(an)=>{if(window.clarity)window.clarity('consentv2',{ad_Storage:'denied',analytics_Storage:an?'granted':'denied'});}; /* ad storage always denied */
    C.whenAllowed('insights',function(){
      if(clLoaded&&resume())return;
      if(clLoaded){cl(true);return;}
      clLoaded=true;
      (function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments);};t=l.createElement(r);t.async=1;t.src='https://www.clarity.ms/tag/'+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,'clarity','script',CFG.CLARITY_ID);
      cl(true);
    });
    C.onWithdraw('insights',function(){cl(false);if(window.clarity)window.clarity('consent',false);enforce();stopAfterWithdraw();}); /* V2 denied + documented cookie erase */
  }

  /* ---- Direct contact links: count clicks on mailto:, wa.me and tel: links (method only; the address or number is never sent) ---- */
  document.addEventListener('click',function(e){try{const a=e.target&&e.target.closest&&e.target.closest('a[href]');if(!a)return;const h=a.getAttribute('href')||'';
    const l=h.toLowerCase();if(l.indexOf('mailto:')===0)window.AverliTrack.contactClick('email');else if(l.indexOf('//wa.me/')>0||l.indexOf('//api.whatsapp.com/')>0)window.AverliTrack.contactClick('whatsapp');else if(l.indexOf('tel:')===0)window.AverliTrack.contactClick('phone');}catch(err){}},true);
})();
