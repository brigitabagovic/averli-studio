/* AVERLI STUDIO - consent manager. English and Croatian.
   It stores and reports the visitor's choice and gates optional tools. It loads NO analytics or advertising script itself.
   Optional tools may start ONLY inside AverliConsent.whenAllowed(category, start) (or from the "averli:consent" event) and only
   when the visitor has allowed that category. Optional categories are off until the visitor turns them on.
   AUTO_BANNER is switched by the package build: false = no optional tools exist yet, so no banner is shown. */
(()=>{
  if(window.AverliConsent)return;
  const AUTO_BANNER=/*AUTO_BANNER*/true;
  const KEY='averli_consent',VERSION=1,MAX_AGE=365*864e5; // choice is asked again after 12 months or when VERSION changes
  const LANG=/^hr/i.test(document.documentElement.lang||'')?'hr':'en';
  const PATH={en:{privacy:'/privacy-policy/',cookies:'/cookie-policy/'},hr:{privacy:'/hr/politika-privatnosti/',cookies:'/hr/politika-kolacica/'}};
  const T={
    en:{eyebrow:'Cookies &amp; privacy',barH:'Your choice',
      barT:'We would like to use one optional analytics cookie (Google Analytics 4) to understand how this website is used. It is off unless you accept, and you can change your mind at any time. The contact form works the same either way. See the <a href="{c}" data-averli-legal>Cookie Policy</a> and <a href="{p}" data-averli-legal>Privacy Policy</a>.',
      accept:'Accept',reject:'Reject',prefs:'Preferences',mdH:'Cookie preferences',
      mdT:'Choose whether we may use analytics. Your choice applies to this browser. You can change or withdraw it at any time from &ldquo;Cookie settings&rdquo; in the footer.',
      nec:'Necessary',always:'Always on',necD:'Remembers your cookie choice in this browser (stored locally, not sent to us). Nothing else is needed for the site to work.',required:'Required',
      save:'Save preferences',close:'Close',details:'Details',cp:'Cookie Policy',pp:'Privacy Policy',
      okAll:'Analytics accepted.',okNone:'Analytics rejected.',okSave:'Preferences saved.',
      cats:{analytics:['Analytics','Google Analytics 4','Shows us, in aggregate, which pages are visited, where visitors come from and whether the contact form is completed.']}},
    hr:{eyebrow:'Kolačići i privatnost',barH:'Vaš izbor',
      barT:'Željeli bismo koristiti jedan neobavezni analitički kolačić (Google Analytics 4) kako bismo razumjeli kako se ova web-stranica koristi. Isključen je ako ne prihvatite, a izbor možete promijeniti u bilo kojem trenutku. Kontakt obrazac radi jednako u oba slučaja. Pogledajte <a href="{c}" data-averli-legal>Politiku kolačića</a> i <a href="{p}" data-averli-legal>Politiku privatnosti</a>.',
      accept:'Prihvati',reject:'Odbij',prefs:'Postavke',mdH:'Postavke kolačića',
      mdT:'Odaberite smijemo li koristiti analitiku. Izbor vrijedi za ovaj preglednik. Možete ga promijeniti ili povući u bilo kojem trenutku putem poveznice „Postavke kolačića” u podnožju.',
      nec:'Nužni',always:'Uvijek uključeno',necD:'Pamti Vaš izbor o kolačićima u ovom pregledniku (pohranjeno lokalno, ne šalje se nama). Ništa drugo nije potrebno za rad stranice.',required:'Obavezno',
      save:'Spremi postavke',close:'Zatvori',details:'Detalji',cp:'Politika kolačića',pp:'Politika privatnosti',
      okAll:'Analitika je prihvaćena.',okNone:'Analitika je odbijena.',okSave:'Postavke su spremljene.',
      cats:{analytics:['Analitika','Google Analytics 4','Pokazuje nam, zbirno, koje se stranice posjećuju, odakle posjetitelji dolaze i ispunjava li se kontakt obrazac.']}}
  }[LANG];
  const CATS=['analytics'];
  const BASE=(()=>{try{const s=document.currentScript&&document.currentScript.src;if(s){const p=new URL('.',s).pathname;return p.endsWith('/')?p.slice(0,-1):p;}}catch(e){}return '';})();
  const PRIVACY=BASE+PATH[LANG].privacy,COOKIES=BASE+PATH[LANG].cookies;
  if(!AUTO_BANNER)document.documentElement.classList.add('cc-off'); // hides every "Cookie settings" control while no optional tool exists
  let mem=null,state=read(),bar=null,modal=null,live=null,lastFocus=null;
  const subs=[],gates=[],withdraws=[];
  function read(){try{const v=JSON.parse(localStorage.getItem(KEY));if(v&&v.v===VERSION&&Date.now()-v.ts<MAX_AGE)return v;}catch(e){}return mem&&mem.v===VERSION&&Date.now()-mem.ts<MAX_AGE?mem:null;}
  function snap(){return {decided:!!state,analytics:!!(state&&state.analytics),insights:!!(state&&state.insights),advertising:!!(state&&state.advertising),timestamp:state?state.ts:null};}
  const allowed=c=>!!(state&&state[c]);
  function clearCookies(){ // on withdrawal remove the cookies optional tools may have set (names are the vendors' documented ones)
    const names=[/^_ga$/,/^_ga_/,/^_gid$/,/^_gat/,/^_clck$/,/^_clsk$/,/^CLID$/,/^MUID$/,/^ANONCHK$/,/^SM$/,/^_fbp$/,/^_fbc$/];
    const host=location.hostname,parts=host.split('.'),domains=['',host,'.'+host];
    for(let i=1;i<parts.length-1;i++)domains.push('.'+parts.slice(i).join('.'));
    document.cookie.split(';').forEach(c=>{const n=c.split('=')[0].trim();if(names.some(r=>r.test(n)))domains.forEach(d=>{document.cookie=n+'=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/'+(d?';domain='+d:'');});});
  }
  function runGates(){gates.forEach(g=>{if(!g.done&&allowed(g.cat)){g.done=true;try{g.fn();}catch(e){}}});}
  function save(c){
    const prev=snap(),next={v:VERSION,ts:Date.now(),analytics:!!c.analytics};
    state=next;mem=next;try{localStorage.setItem(KEY,JSON.stringify(next));}catch(e){}
    const dropped=CATS.filter(k=>prev[k]&&!next[k]);
    if(dropped.length){clearCookies();withdraws.forEach(w=>{if(dropped.includes(w.cat))try{w.fn();}catch(e){}});gates.forEach(g=>{if(dropped.includes(g.cat))g.done=false;});}
    const s=snap();window.dispatchEvent(new CustomEvent('averli:consent',{detail:s}));subs.forEach(f=>{try{f(s);}catch(e){}});runGates();
  }
  function reset(){state=null;mem=null;try{localStorage.removeItem(KEY);}catch(e){}clearCookies();}
  const el=(tag,cls,html)=>{const n=document.createElement(tag);if(cls)n.className=cls;if(html!=null)n.innerHTML=html;return n;};
  const fill=s=>s.replace('{c}',COOKIES).replace('{p}',PRIVACY);
  function announce(msg){if(!live)return;live.textContent='';setTimeout(()=>{live.textContent=msg;},30);}
  function root(){let r=document.querySelector('.cc-root');if(!r){r=el('div','cc-root');r.setAttribute('data-averli-consent','');live=el('div','cc-live');live.setAttribute('role','status');live.setAttribute('aria-live','polite');r.appendChild(live);document.body.appendChild(r);}return r;}
  function closeBar(){if(bar){bar.remove();bar=null;}}
  function showBar(){
    if(bar||modal)return;const r=root();
    bar=el('section','cc-bar');bar.setAttribute('role','region');bar.setAttribute('aria-labelledby','cc-bar-h');
    bar.innerHTML='<p class="cc-k">'+T.eyebrow+'</p><h2 class="cc-h" id="cc-bar-h">'+T.barH+'</h2><p class="cc-t">'+fill(T.barT)+'</p>'
      +'<div class="cc-row"><button type="button" class="cc-b" data-cc="accept">'+T.accept+'</button><button type="button" class="cc-b" data-cc="reject">'+T.reject+'</button><button type="button" class="cc-b cc-b-sub" data-cc="prefs">'+T.prefs+'</button></div>';
    r.appendChild(bar);
  }
  function openPrefs(opener){
    lastFocus=opener||document.activeElement;closeBar();if(modal)return;const r=root();const cur=snap();
    const ov=el('div','cc-ov');modal=ov;
    const items=CATS.map(id=>{const c=T.cats[id];return '<li><div><p class="cc-cn">'+c[0]+'<small>'+c[1]+'</small></p><p class="cc-cd">'+c[2]+'</p></div><button type="button" class="cc-sw" role="switch" aria-checked="'+(cur[id]?'true':'false')+'" data-cat="'+id+'" aria-label="'+c[0]+' ('+c[1]+')"><span class="cc-sr">'+c[0]+'</span></button></li>';}).join('');
    ov.innerHTML='<div class="cc-md" role="dialog" aria-modal="true" aria-labelledby="cc-md-h" tabindex="-1"><button type="button" class="cc-x" data-cc="close" aria-label="'+T.close+'">&times;</button><p class="cc-k">'+T.eyebrow+'</p><h2 class="cc-h" id="cc-md-h">'+T.mdH+'</h2>'
      +'<p class="cc-t">'+T.mdT+'</p>'
      +'<ul class="cc-list"><li><div><p class="cc-cn">'+T.nec+'<small>'+T.always+'</small></p><p class="cc-cd">'+T.necD+'</p></div><span class="cc-on">'+T.required+'</span></li>'+items+'</ul>'
      +'<div class="cc-foot"><button type="button" class="cc-b" data-cc="accept">'+T.accept+'</button><button type="button" class="cc-b" data-cc="reject">'+T.reject+'</button><button type="button" class="cc-b" data-cc="save">'+T.save+'</button></div>'
      +'<p class="cc-note">'+T.details+': <a href="'+COOKIES+'" data-averli-legal>'+T.cp+'</a> &middot; <a href="'+PRIVACY+'" data-averli-legal>'+T.pp+'</a></p></div>';
    r.appendChild(ov);ov.querySelector('.cc-md').focus();
  }
  function closePrefs(){if(!modal)return;modal.remove();modal=null;if(lastFocus&&lastFocus.focus&&document.contains(lastFocus))lastFocus.focus();}
  function trap(e){
    if(!modal)return;
    if(e.key==='Escape'){e.preventDefault();e.stopPropagation();closePrefs();if(!state&&AUTO_BANNER)showBar();return;}
    if(e.key!=='Tab')return;
    const f=[...modal.querySelectorAll('button,a[href]')].filter(n=>!n.disabled&&n.offsetParent!==null);if(!f.length)return;
    const first=f[0],last=f[f.length-1],a=document.activeElement;
    if(e.shiftKey&&(a===first||a===modal.querySelector('.cc-md'))){e.preventDefault();last.focus();}
    else if(!e.shiftKey&&a===last){e.preventDefault();first.focus();}
  }
  document.addEventListener('keydown',trap,true);
  document.addEventListener('click',e=>{
    const open=e.target.closest&&e.target.closest('[data-averli-consent-open]');
    if(open){e.preventDefault();e.stopPropagation();if(AUTO_BANNER)openPrefs(open);return;}
    const lg=e.target.closest&&e.target.closest('a[data-averli-legal]');
    if(lg&&!e.defaultPrevented&&e.button===0&&!e.metaKey&&!e.ctrlKey&&!e.shiftKey&&lg.target!=='_blank'){e.preventDefault();e.stopPropagation();location.assign(lg.href);return;} // static pages: always a full page load, never the single-page router
    const b=e.target.closest&&e.target.closest('[data-cc],.cc-sw');const rt=document.querySelector('.cc-root');if(!b||!rt||!rt.contains(b))return;
    e.preventDefault();
    if(b.classList.contains('cc-sw')){b.setAttribute('aria-checked',b.getAttribute('aria-checked')==='true'?'false':'true');return;}
    const act=b.getAttribute('data-cc');
    if(act==='accept'){save({analytics:1});closeBar();closePrefs();announce(T.okAll);}
    else if(act==='reject'){save({});closeBar();closePrefs();announce(T.okNone);}
    else if(act==='prefs'){openPrefs(b);}
    else if(act==='save'){const c={};modal.querySelectorAll('.cc-sw').forEach(s=>{c[s.getAttribute('data-cat')]=s.getAttribute('aria-checked')==='true';});save(c);closeBar();closePrefs();announce(T.okSave);}
    else if(act==='close'){closePrefs();if(!state)showBar();}
  },true);
  document.addEventListener('click',e=>{if(modal&&e.target===modal){closePrefs();if(!state)showBar();}});
  window.AverliConsent={
    enabled:AUTO_BANNER,lang:LANG,get:snap,allowed,
    whenAllowed:(cat,fn)=>{if(!CATS.includes(cat)||typeof fn!=='function')return;const g={cat,fn,done:false};gates.push(g);runGates();}, // the ONLY place an optional tool may be started
    onWithdraw:(cat,fn)=>{if(CATS.includes(cat)&&typeof fn==='function')withdraws.push({cat,fn});},
    on:f=>{subs.push(f);if(state)try{f(snap());}catch(e){}},
    open:()=>{if(AUTO_BANNER)openPrefs();},reset:()=>{reset();closePrefs();closeBar();if(AUTO_BANNER)showBar();},categories:CATS.slice()
  };
  const start=()=>{if(AUTO_BANNER&&!state)showBar();if(AUTO_BANNER&&/[?&]cc=prefs\b/.test(location.search))openPrefs();};
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start);else start();
})();
