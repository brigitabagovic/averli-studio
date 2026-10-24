/* =====================================================================
   AVERLI STUDIO - CONTACT CONFIGURATION (the one place to edit contact details)
   Used by the footer, the Contact page and the inquiry form.
   - email:          shown on the Contact page and in the footer; also the inbox the inquiry form delivers to.
   - phone:          leave EMPTY to keep the footer "Phone" link hidden (the footer does not show the WhatsApp number).
   - whatsappNumber: digits only, international format without "+" (used for https://wa.me/<number>).
   - whatsappDisplay:the number as shown on the Contact page.
   - formEndpoint:   where the inquiry form POSTs. Currently FormSubmit (https://formsubmit.co), which forwards each inquiry to the
                     email below. It needs ONE-TIME activation: the first submission makes FormSubmit email an activation link to that
                     inbox; click it once and every later inquiry is delivered. Alternative: a Formspree form URL
                     ("https://formspree.io/f/xxxxxxxx"). The endpoint is public by design (no secret is stored here).
                     While empty the form validates but cannot send (it says so; it never fakes success).
   - privacyUrl:     optional link to a privacy page; leave empty if there is none.
   ===================================================================== */
window.AVERLI_CONTACT={
  email:"creativeaverlistudio@gmail.com",
  phone:"",
  whatsappNumber:"385919728684",
  whatsappDisplay:"+385 91 972 8684",
  formEndpoint:"https://formsubmit.co/ajax/creativeaverlistudio@gmail.com",
  privacyUrl:""
};
(() => {
  const labels=['Brand identity','Digital design','Social content','Campaign creative','Print design','Art direction'];
  let scheduled=false;
  const update=()=>{scheduled=false;document.querySelectorAll('[data-framer-name="Clients"] [data-framer-name="Logo"]').forEach((e,i)=>{if(!e.dataset.averliLabel)e.dataset.averliLabel=labels[i%labels.length];});};
  const observer=new MutationObserver(()=>{if(!scheduled){scheduled=true;requestAnimationFrame(update);}});
  observer.observe(document.documentElement,{childList:true,subtree:true});update();
})();
// Gyalaktika case study: full narrative (native HTML/CSS) and undistorted gallery tiles. Scoped to that page only.
(()=>{
  const SEC=[
   {id:'a',lab:'01 / The Brief',sub:'Before the first ad, get the facts',html:`
    <h2 class="gy-big">The brief had a clear objective. The method needed to follow it.</h2>
    <p>The first step was <strong>a detailed questionnaire</strong> completed with the dance school’s trainer. Rather than jumping into visuals or choosing an advertising objective, the brief explored the class format, enrollment dates, pricing, existing marketing, brand tone, audience motivations, likely barriers, available video material, the registration process and what happened after an enquiry came in.</p>
    <p><strong>The business goal:</strong> Bring new members into Gyalaktika’s September dance classes.</p>
    <p><strong>The campaign targets set in the initial brief:</strong> <strong>20 completed online applications</strong> and, ultimately, <strong>10 new paying members</strong>. Increasing the school’s social following was a secondary ambition, not the main conversion target.</p>
    <p>The brief initially proposed €50 in ad spend, with flexibility to increase it if the campaign warranted it. The later Leads phase was run with a <strong>separate €85 lifetime budget</strong>. These are different planning stages, not interchangeable totals.</p>
    <div class="gy-note"><p class="gy-lab">Case note</p><p>The job wasn’t to generate attention for its own sake. The job was to give interested people a clear path to register.</p></div>`},
   {id:'b',figs:'<div class="gy-figs"><figure class="gy-fig"><img src="/assets/averli-gyalaktika/still-community-vibe.webp" width="720" height="1280" alt="Frame from the V2 Training video: friends sitting on steps with the on-screen text “Dobra vibra”" loading="lazy" decoding="async"><figcaption>V2 · A frame from the video</figcaption></figure><figure class="gy-fig"><img src="/assets/averli-gyalaktika/still-community-crew.webp" width="720" height="1280" alt="Frame from the V1 Community video with the on-screen text “Ostaneš zbog ekipe”" loading="lazy" decoding="async"><figcaption>V1 · A frame from the video</figcaption></figure></div>',lab:'02 / The Audience',sub:'Follow the human clues',html:`
    <h2 class="gy-big">Who would actually say yes to joining?</h2>
    <p>The answers gave the creative work a specific audience rather than a vague demographic. Most current participants were <strong>women aged approximately 25–35</strong>; the intended new member was active, curious, eager to improve and interested in belonging to a group. The client also identified a possible hesitation: <strong>arriving alone at an unfamiliar class can feel intimidating</strong>.</p>
    <p>The brand’s strongest advantages were the <strong>atmosphere, mutual support, authenticity, energy and genuine training</strong> — not simply the fact that a dance class was available. The ads needed to reflect those qualities without sounding like generic promotional copy. The client requested an energetic, knowledgeable and playful tone in Croatian.</p>
    <p>For the Leads phase, the campaign targeted <strong>women aged 23–40 in Zagreb and the surrounding area</strong>, aligned with the intended participants and the available budget.</p>
    <p><strong>What this changed creatively:</strong></p>
    <ul>
     <li><strong>Community / V1 — “Dođeš zbog plesa”</strong> presented the social atmosphere and the idea of finding your group.</li>
     <li><strong>Training / V2 — “Ozbiljan trening”</strong> showed the physicality, discipline and energy of the classes.</li>
     <li><strong>New Group / V3 — “Nova ekipa / 29.09.”</strong> added a direct, time-relevant reason to register for the new intake.</li>
    </ul>
    <p>Creative selection, messaging and final approvals were informed by the client’s questionnaire and follow-up feedback. The campaign <strong>tested these angles</strong> rather than assuming that one message would work for everyone.</p>`},
   {id:'c',figs:'<figure class="gy-fig"><img src="/assets/averli-gyalaktika/still-enrollment-cta.webp" width="720" height="1280" alt="Frame from the V2 ad showing the Gyalaktika logo, class details, start date 29.09.2026 and the Prijavi se button" loading="lazy" decoding="async"><figcaption>V2 · Enrollment call to action</figcaption></figure>',lab:'03 / The First Clue',sub:'Visits are not applications',html:`
    <h2 class="gy-big">The numbers were moving. Were people signing up?</h2>
    <p>The first Meta <strong>Traffic</strong> campaign used two video creatives and sent people to an external registration form. It generated low-cost landing-page visits, but the client received only <strong>two completed applications</strong> through that route.</p>
    <p>The original questionnaire had already revealed an important limitation: the external form <strong>did not have a dedicated confirmation page or reliable conversion tracking back to Meta</strong>. The client learned about completed forms through notifications and a response sheet. Visits were visible, but submitted applications were not a dependable optimization signal for the campaign.</p>
    <div class="gy-note"><p class="gy-lab">The clue</p><p>Meta was being asked to find people likely to visit the page. Gyalaktika needed people likely to complete an enquiry.</p></div>
    <p>This was not evidence that the audience or the creative had failed. It was evidence that <strong>the platform objective and the business objective were not sufficiently aligned</strong>.</p>`},
   {id:'d',figs:'<figure class="gy-fig"><img src="/assets/averli-gyalaktika/still-new-intake.webp" width="720" height="1280" alt="Frame from the V3 video with the on-screen text “29.09.”" loading="lazy" decoding="async"><figcaption>V3 · The 29.09. intake</figcaption></figure>',lab:'04 / The Move',sub:'Optimize for the action that matters',html:`
    <h2 class="gy-big">The goal didn’t change. The optimization did.</h2>
    <p>The approach shifted to a dedicated <strong>Meta Leads</strong> campaign with an <strong>Instant Form</strong> inside Facebook and Instagram. The form reduced the number of steps between seeing an ad and submitting an enquiry, while giving the platform <strong>an in-app lead event to optimize for and report on</strong>.</p>
    <p>The setup involved the advertising account, linked profiles, campaign objective, geographic and demographic audience, an €85 lifetime budget, form configuration, ad copy, video variations, approvals and performance monitoring.</p>
    <p><strong>The practical change:</strong> Stop treating visits as the main result. Measure actual Meta form submissions.</p>
    <p>This also meant <strong>revisiting the creative</strong> based on the observed cost and volume of leads, rather than simply keeping every variation live.</p>
    <div class="gy-note"><p class="gy-lab">The distinction</p><p>The business objective did not change: registrations and new members. The Meta campaign optimization objective changed from <strong>Traffic</strong> to <strong>Leads</strong>.</p></div>`,
    extra:`<div class="gy-flow" role="list">
      <div class="gy-step" role="listitem"><p class="gy-lab">01</p><h3>Traffic</h3><p>Visits to an external registration form. Two completed applications.</p></div>
      <div class="gy-arrow" aria-hidden="true">→</div>
      <div class="gy-step" role="listitem"><p class="gy-lab">02</p><h3>Meta Leads</h3><p>An Instant Form inside Facebook and Instagram, with an in-app lead event to measure.</p></div>
      <div class="gy-arrow" aria-hidden="true">→</div>
      <div class="gy-step" role="listitem"><p class="gy-lab">03</p><h3>Creative Tests</h3><p>V1 paused. V2 and V3 tested side by side in the Leads campaign.</p></div>
    </div>`},
   {id:'e',lab:'05 / The Creative Test',sub:'The evidence changes the plan',html:`
    <h2 class="gy-big">Three variations. One enrollment goal.</h2>
    <p><strong>V1 / Community</strong> used the group atmosphere as the opening hook. It was paused after <strong>€2.48 spent and no leads</strong> in the Leads campaign.</p>
    <p><strong>V2 / Training</strong> emphasized the training itself. It brought in <strong>21 leads at approximately €1.67 per lead</strong> and became the stronger early performer.</p>
    <p><strong>V3 / New Group</strong> introduced a fresh, enrollment-focused message tied to the upcoming intake. The campaign reused the same Instant Form, changed the video and copy, and tested V3 alongside the active V2. V3 generated <strong>26 leads at approximately €1.82 per lead</strong>.</p>
    <p>The important point is not that one video ‘won’ in every sense. The point is that <strong>the campaign responded to actual performance</strong>: pause an unproductive ad, keep a working option active and give a new concept a proper test.</p>`,
    extra:`<div class="gy-tests">
      <div class="gy-test"><img src="/assets/averli-gyalaktika/thumb-v1.webp" width="540" height="960" alt="Frame from the V1 Community video" loading="lazy" decoding="async"><h3>V1 / Community</h3><b>0</b><span>Leads · €2.48 spent</span><p>Paused.</p></div>
      <div class="gy-test"><img src="/assets/averli-gyalaktika/thumb-v2.webp" width="540" height="960" alt="Frame from the V2 Training video" loading="lazy" decoding="async"><h3>V2 / Training</h3><b>21</b><span>Leads · ≈ €1.67 per lead</span><p>The stronger early performer.</p></div>
      <div class="gy-test"><img src="/assets/averli-gyalaktika/thumb-v3.webp" width="540" height="960" alt="Frame from the V3 New Group video" loading="lazy" decoding="async"><h3>V3 / New Group</h3><b>26</b><span>Leads · ≈ €1.82 per lead</span><p>Tested alongside V2.</p></div>
    </div>`},
   {id:'f',lab:'The Evidence',sub:'What the campaign actually delivered',dark:1,html:`
    <h2 class="gy-big">What the Leads campaign delivered.</h2>
    <p>An earlier Traffic campaign contributed <strong>two additional completed applications</strong> through the external route. These are counted separately from the 47 Instant Form leads because they came from a different campaign and conversion process; together they make the 49 total enquiries shown below.</p>
    <div class="gy-note"><p class="gy-lab">Measurement note</p><p>The original client brief called for 20 completed online applications and 10 new paying members. The 47 reported results are Meta Instant Form leads, not independently verified paid memberships or confirmed attendance. They should not be described as 47 new members or as a proven membership conversion rate. Follow-up membership outcomes were not supplied.</p></div>`,
    extra:`<div class="gy-hero-num"><b>47</b><span>Meta Instant Form leads</span></div>
    <div class="gy-stats">
      <div class="gy-stat"><b>49</b><span>Total campaign enquiries</span></div>
      <div class="gy-stat"><b>€1.81</b><span>Average cost per lead</span></div>
      <div class="gy-stat"><b>7,091</b><span>People reached</span></div>
      <div class="gy-stat"><b>16,945</b><span>Impressions</span></div>
    </div>
    <p class="gy-acc">47 Meta Instant Form leads and 2 applications from the earlier Traffic campaign. Enquiries are not confirmed memberships.</p>`},
   {id:'g',lab:'07 / The Finding',sub:'The right question changes the work',html:`
    <h2 class="gy-big">A little less guessing. A much clearer signal.</h2>
    <p>What made this campaign effective as a learning process was the connection between the initial discovery, the audience’s real motivations, the creative message and the action Meta was asked to deliver. The early traffic data uncovered <strong>an objective-and-tracking mismatch</strong>. The response was not to buy more of the same traffic, but to <strong>make the campaign accountable to enquiries</strong> and keep testing the message.</p>
    <p>From the client questionnaire to the final creative comparison, <strong>every important decision had a reason behind it</strong>.</p>
    <div class="gy-note"><p class="gy-lab">Closing line</p><p>Good creative catches attention. A well-structured campaign knows what to measure next.</p></div>`}
  ];

  const OV={id:'ov',lab:'Project overview',sub:'',html:`
    <h2 class="gy-big">The brief was simple. Getting there took a closer look.</h2>
    <p>Gyalaktika Zagreb is a dancehall school in Croatia preparing for its September 2026 enrollment period.</p>
    <p>Before launching the campaign, AVERLI prepared a detailed client questionnaire to understand the school’s goals, target audience, unique positioning, existing marketing activities and potential barriers to registration.</p>
    <p>The objective was clear: <strong>generate 20 completed applications</strong>, with the longer-term business goal of attracting <strong>10 new members</strong>.</p>
    <p>The campaign focused on <strong>women aged 23–40 in Zagreb and the surrounding area</strong>, combining audience research, creative direction, technical campaign setup and performance-based optimization.</p>`,
   extra:`<dl class="gy-info">
     <div class="gy-cell key"><dt>Primary objective</dt><dd><span class="gy-n">20</span><strong>Completed Applications</strong></dd></div>
     <div class="gy-cell key"><dt>Business goal</dt><dd><span class="gy-n">10</span><strong>New Members</strong></dd></div>
     <div class="gy-cell key"><dt>Duration</dt><dd><span class="gy-n">19</span><strong>Calendar Days</strong></dd></div>
     <div class="gy-cell key"><dt>Meta Leads campaign</dt><dd><span class="gy-d">September 6–24, 2026</span></dd></div>
     <div class="gy-cell"><dt>Client</dt><dd>Gyalaktika Zagreb</dd></div>
     <div class="gy-cell"><dt>Project</dt><dd>September Dance Enrollment Campaign</dd></div>
     <div class="gy-cell"><dt>Services</dt><dd>Campaign Strategy · Meta Advertising · Lead Generation · Creative Testing</dd></div>
     <div class="gy-cell"><dt>Target audience</dt><dd>Women Aged 23–40, Zagreb &amp; Surrounding Area</dd></div>
    </dl>
`};

  const A='/assets/averli-gyalaktika/';
  const VT=[{src:A+'v2-training.mp4',poster:A+'thumb-v2.webp',cap:'V2 / Training',alt:'V2 Training ad video on a smartphone'},{src:A+'v3-new-group.mp4',poster:A+'thumb-v3.webp',cap:'V3 / New group',alt:'V3 New Group ad video on a smartphone'}];
  const reduced=matchMedia('(prefers-reduced-motion: reduce)');
  const io='IntersectionObserver'in window?new IntersectionObserver(es=>{es.forEach(e=>{const v=e.target;if(e.isIntersecting){if(!v.getAttribute('src')){v.src=v.dataset.src;}if(!reduced.matches){const p=v.play();if(p&&p.catch)p.catch(()=>{});}}else v.pause();});},{threshold:.35}):null;
  function mountVideo(wrap,d){
    if(wrap.querySelector('[data-gy="vt"]'))return;
    const o=document.createElement('div');o.className='gy-vt';o.dataset.gy='vt';
    o.innerHTML='<p class="gy-vt-lab">AVERLI / Case file 001</p><div class="gy-vt-phone"><video muted loop playsinline preload="none" poster="'+d.poster+'" aria-label="'+d.alt+'"></video><i></i></div><p class="gy-vt-cap">'+d.cap+'</p>';
    const v=o.querySelector('video');v.dataset.src=d.src;v.muted=true;
    if(reduced.matches)v.controls=true;
    wrap.appendChild(o);
    if(io)io.observe(v);else{v.src=d.src;v.controls=true;}
  }
  const build=s=>{
    const el=document.createElement('section');el.className='gy-sec'+(s.dark?' gy-dark':'');el.dataset.gy=s.id;
    el.innerHTML='<div class="gy-l"><p class="gy-lab">'+s.lab+'</p>'+(s.sub?'<p class="gy-sub">'+s.sub+'</p>':'')+(s.figs||'')+'</div><div class="gy-r">'+s.html+'</div>'+(s.extra||'');
    return el;
  };
  // "The missing piece": an archived-notice style statement between 03 / The First Clue and 04 / The Move
  const buildMiss=()=>{
    const el=document.createElement('section');el.className='gy-miss';el.dataset.gy='miss';
    el.innerHTML='<div class="gm-wrap"><article class="gm-paper" aria-labelledby="gm-h">'
      +'<p class="gm-lab">Case file / The missing piece</p>'
      +'<div class="gm-rule gm-rule-d" aria-hidden="true"></div>'
      +'<h2 class="gm-big" id="gm-h">Missing</h2>'
      +'<div class="gm-rule" aria-hidden="true"></div>'
      +'<p class="gm-sub">A clear path from clicks to enquiries.</p>'
      +'<div class="gm-notes">'
        +'<div class="gm-note"><h3 class="gm-nh">The clue</h3><p>The initial Traffic campaign brought people to the registration page, but only two completed applications came through the external form.</p></div>'
        +'<div class="gm-note"><h3 class="gm-nh">The move</h3><p>Shift the focus from website visits to lead generation, using Meta Instant Forms to make it easier for interested people to enquire.</p></div>'
      +'</div>'
      +'<p class="gm-foot">Case status / Direction found <span aria-hidden="true">&#8599;</span></p>'
      +'</article></div>';
    return el;
  };
  const revealMiss=el=>{
    if(matchMedia('(prefers-reduced-motion: reduce)').matches||!('IntersectionObserver' in window)){el.classList.add('gm-in');return;}
    const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){el.classList.add('gm-in');io.disconnect();}}),{threshold:.2});
    io.observe(el);
  };
  const isGy=()=>/gyalaktika-zagreb/.test(location.pathname);
  const clean=()=>{
    document.querySelectorAll('[data-gy]').forEach(n=>n.remove());
    document.body.classList.remove('averli-gy');
    document.querySelectorAll('.gy-bg,.gy-wrap,.gy-abs,.gy-col,.gy-row,.gy-hide,.gyh-bg,.gyh-hero').forEach(n=>n.classList.remove('gy-bg','gy-wrap','gy-abs','gy-col','gy-row','gy-hide','gyh-bg','gyh-hero'));
  };
  function sync(){
    if(!isGy()){if(document.body.classList.contains('averli-gy')||document.querySelector('[data-gy]'))clean();return;}
    const tiles=[...document.querySelectorAll('[style*="averli-gyalaktika/0"]')].filter(t=>/averli-gyalaktika\/0[1-4]/.test(t.getAttribute('style')||''));
    if(tiles.length<4)return;
    document.body.classList.add('averli-gy');
    const r2=tiles[2]&&tiles[2].parentElement&&tiles[2].parentElement.parentElement&&tiles[2].parentElement.parentElement.parentElement&&tiles[2].parentElement.parentElement.parentElement.parentElement;
    if(r2)r2.classList.add('gy-hide');
    tiles.slice(0,2).forEach((t,i)=>{if(t.parentElement)mountVideo(t.parentElement,VT[i]);});
    for(const t of tiles){
      const w=t.parentElement,a=w&&w.parentElement,c=a&&a.parentElement,r=c&&c.parentElement;
      t.classList.add('gy-bg');if(w)w.classList.add('gy-wrap');if(a)a.classList.add('gy-abs');if(c)c.classList.add('gy-col');if(r)r.classList.add('gy-row');
    }
    const hb=document.querySelector('[style*="averli-gyalaktika/00"]');
    if(hb){hb.classList.add('gyh-bg');const hc=hb.parentElement&&hb.parentElement.parentElement&&hb.parentElement.parentElement.parentElement;if(hc)hc.classList.add('gyh-hero');}
    if(document.querySelector('[data-gy]:not([data-gy="vt"])'))return;
    const rowOf=t=>t.parentElement.parentElement.parentElement.parentElement;
    const row1=rowOf(tiles[0]),row2=rowOf(tiles[2]);
    if(!row1||!row2||row1===row2)return;
    const gallery=row1.parentElement,outer=gallery.parentElement,focus=row2.nextElementSibling,meta=gallery.previousElementSibling;
    const by={};SEC.forEach(s=>{by[s.id]=build(s);});
    if(meta)outer.insertBefore(build(OV),meta);
    by.miss=buildMiss();
    ['a','b','c','miss','d'].forEach(id=>outer.insertBefore(by[id],gallery));revealMiss(by.miss);
    by.e.classList.add('gy-in');by.f.classList.add('gy-in');by.g.classList.add('gy-in');setPad(gallery);gallery.insertBefore(by.e,row2);
    ['f','g'].forEach(id=>gallery.insertBefore(by[id],focus));
  }
  const setPad=g=>{const p=parseFloat(getComputedStyle(g).paddingLeft)||0;document.querySelectorAll('.gy-dark.gy-in').forEach(n=>n.style.setProperty('--gy-pad',p+'px'));};
  addEventListener('resize',()=>{const g=document.querySelector('.gy-dark.gy-in');if(g&&g.parentElement)setPad(g.parentElement);});
  let t;const schedule=()=>{cancelAnimationFrame(t);t=requestAnimationFrame(sync);};
  new MutationObserver(schedule).observe(document.documentElement,{childList:true,subtree:true});
  addEventListener('popstate',schedule);schedule();
})();

// ===== AVERLI brand refinement: approved thin wordmark + primary logo (traced from AVERLI_STUDIO_BRAND_BOOK_FINAL.pdf) =====
(()=>{
  const WM='<div class="wm-mask"></div>'; // the logo itself is the original file /assets/brand/averli-logotip.svg, painted through a mask (see .wm-mask in reference-adjustments.css)
  const LK='AVERLI STUDIO'; // one text node, one element: typography comes from the single .averli-lk rule
  const cap=0.519; // vertical centre of the old heavy caps within its text box
  function overlay(host,svgMarkup,css,cls){
    let o=host.querySelector(':scope > .'+cls);
    if(!o){o=document.createElement('div');o.className=cls;o.setAttribute('aria-hidden','true');o.innerHTML=svgMarkup;host.appendChild(o);}
    if(css)Object.assign(o.style,css);return o;
  }
  function big(strong){
    const svg=strong.closest('svg');if(!svg||!svg.parentElement)return;
    const host=svg.parentElement;if(getComputedStyle(host).position==='static')host.style.position='relative';
    strong.classList.add('averli-hide-text');
    const hr=host.getBoundingClientRect(),sr=strong.getBoundingClientRect();if(!hr.width||!sr.width)return;
    const css={left:((sr.left-hr.left)/hr.width*100)+'%',top:(((sr.top-hr.top)+sr.height*cap)/hr.height*100)+'%',width:(sr.width*0.961/hr.width*100)+'%'};
    overlay(host,WM,css,'averli-wm');
  }
  function nav(strong){
    const p=strong.closest('p');const host=p&&p.parentElement;if(!host)return;
    p.classList.add('averli-hide-text');if(getComputedStyle(host).position==='static')host.style.position='relative';
    overlay(host,LK,null,'averli-lk');
  }
  let run=function(){
    document.querySelectorAll('strong.framer-text').forEach(s=>{
      if(s.textContent.trim()!=='AVERLI')return;
      const fs=parseFloat(getComputedStyle(s).fontSize);
      if(fs>100){if(!s.classList.contains('averli-hide-text')||!s.closest('svg').parentElement.querySelector(':scope > .averli-wm'))big(s);}
      else if(!s.closest('p').classList.contains('averli-hide-text'))nav(s);
    });
  }
  function mobileNav(){
    document.querySelectorAll('nav a').forEach(a=>{
      if(a.textContent.trim()!=='AVERLI Studio'||a.classList.contains('averli-hide-text'))return;
      const host=a.parentElement;if(!host)return;
      a.classList.add('averli-hide-text');if(getComputedStyle(host).position==='static')host.style.position='relative';
      overlay(host,LK,null,'averli-lk');
    });
  }
  const run0=run;run=()=>{run0();mobileNav();};
  let t;const sched=()=>{cancelAnimationFrame(t);t=requestAnimationFrame(run);};
  new MutationObserver(sched).observe(document.documentElement,{childList:true,subtree:true});
  addEventListener('resize',()=>{document.querySelectorAll('.averli-wm').forEach(n=>n.remove());sched();});
  sched();
})();

// ===== AVERLI Bordeaux accents (experiment) =====
// Set to false to return to the original black-and-white appearance. All accent styling lives under html.averli-accents.
const AVERLI_ACCENTS=true;
(()=>{
  document.documentElement.classList.toggle('averli-accents',AVERLI_ACCENTS);
  if(!AVERLI_ACCENTS)return;
  const norm=p=>{p=p.replace(/\/index\.html$/,'').replace(/\/+$/,'');return p===''?'/':p;};
  function mark(){
    const here=norm(location.pathname);
    document.querySelectorAll('a.framer-G5Sai.framer-7cqj94').forEach(a=>{
      const h=a.getAttribute('href')||'';if(h.indexOf('#')!==-1)return;
      if(!a.closest('nav')||/^(mailto|tel):/.test(h))return;
      let p;try{p=norm(new URL(h,location.href).pathname);}catch{return;}
      const on=p===here||(p.endsWith('/works')&&here.indexOf('/works/')!==-1&&here!==p)||(p==='/'&&false);
      a.classList.toggle('averli-current',on);
    });
  }
  let t;const s=()=>{cancelAnimationFrame(t);t=requestAnimationFrame(mark);};
  new MutationObserver(s).observe(document.documentElement,{childList:true,subtree:true});addEventListener('popstate',s);s();
})();

// ACKitchen: the card exists on the homepage / work list, but its case-study page has not been built yet.
// Until then the card does not navigate (avoids opening the project template with empty content). Set to true once /works/ackitchen is implemented.
const ACKITCHEN_PAGE_READY=true;
if(!ACKITCHEN_PAGE_READY)document.addEventListener('click',e=>{const a=e.target.closest&&e.target.closest('a[href$="/ackitchen"],a[href$="works/ackitchen"]');if(a){e.preventDefault();e.stopPropagation();}},true);

// ===== ACKitchen case study (CASE FILE / 002) — built on the same section system as the Gyalaktika page. Scoped to /works/ackitchen only. =====
(()=>{
  const A='/assets/ackitchen/';
  const isAck=()=>/\/works\/ackitchen\/?$/.test(location.pathname);
  const img=(f,w,h,alt,extra)=>'<img src="'+A+f+'" width="'+w+'" height="'+h+'" alt="'+alt+'" loading="lazy" decoding="async"'+(extra||'')+'>';
  const fig=(f,w,h,alt,cap,cls)=>'<figure class="ack-fig'+(cls?' '+cls:'')+'">'+img(f,w,h,alt)+'<figcaption>'+cap+'</figcaption></figure>';
  const POSTS=[
    [1,'Awareness','Graphic','Performance nutrition. Delivered.','post-01-graphic.webp',648,810],
    [2,'Awareness','Carousel','Not a meal delivery service','post-02-carousel.webp',648,810],
    [3,'Awareness','Reel concept','Meet the chef','post-03-reel-concept.webp',648,810],
    [4,'Consideration','Photo','Your week, handled','post-04-photo.webp',648,810],
    [5,'Education','Graphic','Nutrition is logistics','post-05-graphic.webp',648,810],
    [6,'Education','Carousel','Why most nutrition fails','post-06-carousel.webp',648,810],
    [7,'Consideration','Reel concept','The kitchen process','post-07-reel-concept.webp',648,1152],
    [8,'Awareness','Photo','Meet Allen Campbell','post-08-photo.webp',648,810],
    [9,'Awareness','Graphic','Busy week? Real food.','post-09-graphic.webp',648,810],
    [10,'Education','Carousel','The source matters','post-10-carousel.webp',648,810],
    [11,'Education','Reel concept','One ingredient, one insight','post-11-reel-concept.webp',648,1152],
    [12,'Consideration','Photo','The label is the proof','post-12-photo.webp',648,810]
  ];
  const pad=n=>String(n).padStart(2,'0');
  const P=n=>POSTS[n-1];
  const postFig=(n,cls)=>{const p=P(n);return fig('posts/'+p[4],p[5],p[6],'Post '+pad(p[0])+' — '+p[3]+' ('+p[2].toLowerCase()+', ACKitchen launch concept)','Post '+pad(p[0])+' · '+p[2],cls);};
  const slides=(key,name,title)=>{let h='';for(let i=1;i<=6;i++)h+='<li class="ack-slide">'+img('carousels/post-'+key+'-'+name+'-slide-0'+i+'.webp',432,540,title+' — slide '+i+' of 6')+'</li>';return h;};
  const car=(key,name,title,label)=>'<div class="ack-car" data-ack-car><div class="ack-car-bar"><p class="gy-lab">'+label+'</p><div class="ack-car-ctl"><button type="button" data-dir="-1" aria-label="Previous slides">←</button><button type="button" data-dir="1" aria-label="Next slides">→</button></div></div><ol class="ack-track" tabindex="0" role="region" aria-label="'+title+', six slides">'+slides(key,name,title)+'</ol></div>';

  const OVK={id:'ov',lab:'Project overview',sub:'',html:
   '<h2 class="gy-big">The facts first.</h2>'+
   '<p><strong>Brand studied:</strong> ACKitchen, a performance-nutrition food brand associated in the source concept with Chef Allen Campbell.</p>'+
   '<p><strong>The assignment:</strong> develop a coherent Instagram launch strategy and content system, not simply a collection of attractive food posts.</p>'+
   '<p><strong>The objective:</strong> introduce what makes ACKitchen different, establish credibility in performance nutrition and explain its practical value to distinct audiences <strong>before pushing conversion</strong>.</p>'+
   '<div class="gy-note"><p class="gy-lab">Project status</p><p>Independently developed strategic and creative concept — proposed, not an executed or published campaign. No publishing dates, engagement, followers, ad results or sales outcomes are claimed.</p></div>',
   extra:'<dl class="gy-info">'+
    '<div class="gy-cell key"><dt>Audience segments</dt><dd><span class="gy-n">3</span><strong>Defined audiences</strong></dd></div>'+
    '<div class="gy-cell key"><dt>Content roles</dt><dd><span class="gy-n">4</span><strong>Strategic roles</strong></dd></div>'+
    '<div class="gy-cell key"><dt>Post concepts</dt><dd><span class="gy-n">12</span><strong>Launch grid</strong></dd></div>'+
    '<div class="gy-cell key"><dt>Status</dt><dd><span class="gy-d">Independent concept</span></dd></div>'+
    '<div class="gy-cell"><dt>Project</dt><dd>Social Media Launch Strategy &amp; Content Direction</dd></div>'+
    '<div class="gy-cell"><dt>Disciplines</dt><dd>Social Media Strategy · Audience Segmentation · Creative Direction · Copywriting · Social Media Design</dd></div>'+
    '<div class="gy-cell"><dt>Target audiences</dt><dd>Performance-first individuals · Busy health-conscious professionals · People with specific dietary or recovery needs</dd></div>'+
    '<div class="gy-cell"><dt>The work</dt><dd>Brand positioning · Audience analysis · Four content roles · Copy and creative for 12 posts · Complete 12-post launch grid</dd></div>'+
   '</dl>'};

  const SEC=[
   {id:'case',lab:'The Case',sub:'The obvious answer wasn’t the whole story',html:
    '<h2 class="gy-big">The obvious answer wasn’t the whole story.</h2>'+
    '<p>At first glance, ACKitchen delivers prepared meals. <strong>But delivery was never the real differentiator.</strong> Its positioning rests on performance nutrition, culinary expertise and sourcing standards. The investigation began with one question: <strong>how do you make those invisible standards visible in a social feed?</strong></p>'+
    '<p>The objective wasn’t to fill 12 squares. It was to create an introduction that could explain the brand, earn attention and connect <strong>expert knowledge with everyday relevance</strong>.</p>',
    figs:postFig(1)},
   {id:'clues',lab:'01 / The Clues',sub:'Look beyond the product',html:
    '<h2 class="gy-big">Look beyond the product.</h2>'+
    '<p>The source positioning revealed three assets worth communicating: <strong>Chef Allen Campbell’s expertise, ingredient standards and a structured approach to nutrition.</strong> It also revealed an important tension. People may understand the value of eating well but still struggle to make it work consistently. Convenience is useful; without context, however, it can make a specialist brand look like another delivery service.</p>'+
    '<p>That became the first strategic distinction: <strong>the food is the origin; delivery is the mechanism.</strong> The content needed to demonstrate the thinking, people and processes behind each meal.</p>',
    figs:postFig(8)},
   {id:'aud',lab:'02 / The Audience',sub:'Same product, different motivations',html:
    '<h2 class="gy-big">Same product. Different motivations.</h2>'+
    '<p>Three audience segments informed the messaging. Instead of treating them as one generic wellness audience, the strategy looked for the shared barrier: <strong>turning good nutritional intentions into repeatable habits.</strong> This connects the brand’s expertise to a real-life problem.</p>',
    extra:'<div class="ack-cols ack-cols3"><div class="ack-card"><p class="gy-lab">Segment 01</p><h3>Performance-first individuals</h3><p>Value execution and standards, <strong>not more basic nutrition advice</strong>.</p></div>'+
     '<div class="ack-card"><p class="gy-lab">Segment 02</p><h3>Busy health-conscious professionals</h3><p>Need <strong>consistency without daily planning fatigue</strong>.</p></div>'+
     '<div class="ack-card"><p class="gy-lab">Segment 03</p><h3>Specific-need clients</h3><p>Look for <strong>dependable, expert-led choices</strong> that fit a precise routine.</p></div></div>'},
   {id:'strat',lab:'03 / The Strategy',sub:'Every post needs a job',html:
    '<h2 class="gy-big">Every post needs a job.</h2>'+
    '<p>The wider content framework assigns four roles. The proposed first 12 posts focus on <strong>awareness, education and consideration</strong>, building context and trust before a harder sales push. Conversion is part of the larger framework, <strong>not a fabricated fourth content type inside this particular grid</strong>.</p>'+
    '<p>The creative rules were equally focused: <strong>authority, clarity and restraint.</strong> Less generic wellness language. More specific evidence of expertise.</p>',
    extra:'<div class="ack-cols ack-cols4"><div class="ack-card"><p class="gy-lab">Role 01 · In this grid</p><h3>Awareness</h3><p>Communicates philosophy, expertise and sourcing.</p></div>'+
     '<div class="ack-card"><p class="gy-lab">Role 02 · In this grid</p><h3>Education</h3><p>Makes nutrition principles accessible and worth saving.</p></div>'+
     '<div class="ack-card"><p class="gy-lab">Role 03 · In this grid</p><h3>Consideration</h3><p>Shows real meals, preparation and product details.</p></div>'+
     '<div class="ack-card ack-later"><p class="gy-lab">Role 04 · Later phase</p><h3>Conversion</h3><p>Would introduce clear entry points such as meal plans or product programmes.</p></div></div>'},
   {id:'micro',lab:'The Creative / A closer look',sub:'',html:'<h2 class="gy-big">Three posts. Three purposes.</h2><p>A cohesive feed, but never content for content’s sake. Each post was designed to do a different job.</p>',
    extra:'<ul class="ack-trio">'+
     '<li class="ack-trio-i">'+img('posts/'+P(1)[4],648,810,'Post 01 — '+P(1)[3]+' (ACKitchen launch concept)')+'<p class="gy-lab">01 / Awareness</p><h3>Establish the identity.</h3><p>Position ACKitchen as performance nutrition, not just meal delivery.</p></li>'+
     '<li class="ack-trio-i">'+img('posts/'+P(5)[4],648,810,'Post 05 — '+P(5)[3]+' (ACKitchen launch concept)')+'<p class="gy-lab">05 / Education</p><h3>Shift the perspective.</h3><p>Show why consistent nutrition depends on structure, not just willpower.</p></li>'+
     '<li class="ack-trio-i">'+img('posts/'+P(12)[4],648,810,'Post 12 — '+P(12)[3]+' (ACKitchen launch concept)')+'<p class="gy-lab">12 / Consideration</p><h3>Make the value visible.</h3><p>Use product labelling to communicate transparency and build trust.</p></li>'+'</ul>'},
   {id:'cre',lab:'04 / The Creative',sub:'Follow the thinking',html:
    '<h2 class="gy-big">Follow the thinking.</h2>'+
    '<p>The concepts were not designed as interchangeable tiles. <strong>Each format answers a different question.</strong> Three flagship carousels carry the argument; the other formats support it.</p>'},
   {id:'c2',lab:'Post 02 / The Reframe',sub:'Awareness · Carousel',html:
    '<p>“ACKitchen is not a meal delivery service.” This six-slide carousel <strong>challenges the obvious category label</strong>, then reveals what sits behind the service: sourcing, standards and performance nutrition. A hook that leads to a clearer positioning.</p>',
    extra:car('02','positioning','Post 02 — Not a meal delivery service','Six slides')},
   {id:'sup',lab:'The supporting formats',sub:'Graphics, photos and Reel concepts',html:
    '<p><strong>The supporting formats had their own roles.</strong> Graphic posts carry sharp positioning statements. Photo-led posts show the product in context, with prepared meals and transparent labelling.</p>'+
    '<p>The three proposed Reels introduce the chef, show kitchen preparation and communicate one approachable ingredient insight. The original Reel videos are not available, so <strong>only their concept stills and planned roles are presented here</strong>.</p>',
    extra:'<div class="ack-reels"><p class="gy-lab">Reel concepts · static references, not video</p><div class="ack-reel-row">'+
     [3,7,11].map(n=>postFig(n)).join('')+'</div></div>'},
   {id:'sys',lab:'05 / The Content System',sub:'See the full picture',html:
    '<h2 class="gy-big">See the full picture.</h2>'+
    '<p>The proposed Instagram launch grid brings all <strong>12 concepts</strong> into one visual rhythm: editorial statements alternate with food, people and preparation. The pinned brand declaration leads; educational carousels add substance; photos explain the everyday offer; Reel concepts introduce motion and human presence into the plan.</p>'+
    '<p>This is not a claim that the account was launched. <strong>It is the completed content architecture and a set of visual proposals</strong> showing how a coherent brand story could unfold across the first posts.</p>',
    extra:'<div class="ack-posts"><p class="gy-lab">The other nine post concepts · Posts 03, 07 and 11 are the Reel concepts shown above</p><ul class="ack-post-grid">'+
     POSTS.filter(p=>p[2]!=='Reel concept').map(p=>'<li><figure class="ack-fig">'+img('posts/'+p[4],p[5],p[6],'Post '+pad(p[0])+' — '+p[3]+' ('+p[2].toLowerCase()+')')+'<figcaption><span>Post '+pad(p[0])+'</span> '+p[3]+'<em>'+p[1]+' · '+p[2]+'</em></figcaption></figure></li>').join('')+'</ul></div>'},
   {id:'find',lab:'06 / The Finding',sub:'A system, not a collection of posts',dark:1,html:
    '<h2 class="gy-big">A system, not a collection of posts.</h2>'+
    '<p>The final output was a full proposed launch system, delivered as <strong>work products, not performance metrics</strong>. No results are attributed to this unexecuted concept.</p>'+
    '<p>The creative conclusion: <strong>the food gets delivered. The expertise has to come through first.</strong></p>'+
    '<div class="gy-note"><p class="gy-lab">Portfolio disclosure</p><p>Independent social media strategy and design concept. Images and brand references were taken from the source presentation. No campaign execution, live publishing or growth outcomes are claimed.</p></div>',
    extra:'<div class="gy-stats ack-deliver"><div class="gy-stat"><b>3</b><span>Audience segments</span></div><div class="gy-stat"><b>4</b><span>Strategic content roles</span></div><div class="gy-stat"><b>12</b><span>Post concepts</span></div><div class="gy-stat"><b>3</b><span>Six-slide carousels</span></div><div class="gy-stat"><b>1</b><span>Coordinated launch grid</span></div></div>'}
  ];
  const build=s=>{
    const el=document.createElement('section');el.className='gy-sec ack-sec'+(s.id==='ov'?' gy-ov':' gy-in')+(s.dark?' gy-dark':'');el.dataset.ack=s.id;
    if(s.raw){el.classList.add('ack-raw');el.innerHTML=s.html;return el;}
    el.innerHTML='<div class="gy-l"><p class="gy-lab">'+s.lab+'</p>'+(s.sub?'<p class="gy-sub">'+s.sub+'</p>':'')+(s.figs||'')+'</div><div class="gy-r">'+s.html+'</div>'+(s.extra||'');
    return el;
  };
  function wireCarousels(root){
    root.querySelectorAll('[data-ack-car]').forEach(c=>{
      if(c.dataset.wired)return;c.dataset.wired='1';
      const tr=c.querySelector('.ack-track');
      c.querySelectorAll('button').forEach(b=>b.addEventListener('click',()=>{tr.scrollBy({left:(+b.dataset.dir)*Math.max(240,tr.clientWidth*.8),behavior:'smooth'});}));
    });
  }
  function clean(){
    document.querySelectorAll('[data-ack]').forEach(n=>n.remove());
    document.body.classList.remove('averli-ack');
    document.querySelectorAll('.ack-hide,.gyh-bg,.gyh-hero').forEach(n=>n.classList.remove('ack-hide','gyh-bg','gyh-hero'));
  }
  function sync(){
    if(!isAck()){if(document.body.classList.contains('averli-ack'))clean();return;}
    const gallery=document.querySelector('.framer-1d7ivlv');
    const hero=document.querySelector('.framer-g4v1hi');
    const meta=document.querySelector('.framer-ujltor');
    if(!gallery||!hero||!meta||gallery.children.length<3)return;
    document.body.classList.add('averli-ack');
    const hb=hero.querySelector('[style*="ackitchen-cover"]');
    if(hb){hb.classList.add('gyh-bg');const hc=hb.parentElement&&hb.parentElement.parentElement&&hb.parentElement.parentElement.parentElement;if(hc)hc.classList.add('gyh-hero');}
    // meta cell: this is an independent concept, so "Year" becomes "Status"
    const yc=meta.querySelector('.framer-19ahizp-container');
    if(yc){const leaves=[...yc.querySelectorAll('*')].filter(e=>e.children.length===0);if(leaves[0]&&/^year$/i.test(leaves[0].textContent.trim())){leaves[0].textContent='Status';if(leaves[1])leaves[1].textContent='Independent concept';}}
    if(document.querySelector('[data-ack]')){wireCarousels(document);return;}
    const rows=[...gallery.children].filter(c=>c.querySelector('[style*="ackitchen-cover"]'));
    rows.forEach(r=>r.classList.add('ack-hide'));
    const focus=[...gallery.children].find(c=>/project focus/i.test(c.textContent));
    const outer=gallery.parentElement;
    outer.insertBefore(build(OVK),meta);
    SEC.forEach(s=>gallery.insertBefore(build(s),focus||null));
    const gp=parseFloat(getComputedStyle(gallery).paddingLeft)||0;
    gallery.querySelectorAll('.gy-dark.gy-in').forEach(n=>n.style.setProperty('--gy-pad',gp+'px'));
    wireCarousels(document);
  }
  let t;const sched=()=>{cancelAnimationFrame(t);t=requestAnimationFrame(sync);};
  new MutationObserver(sched).observe(document.documentElement,{childList:true,subtree:true});
  addEventListener('popstate',sched);sched();
})();

// ===== Elysian Haven case study (CASE FILE / 003). Same section system as the Gyalaktika / ACKitchen pages. Scoped to /works/elysian-haven only. =====
(()=>{
  const A='/assets/elysian-haven/';
  const isEl=()=>/\/works\/elysian-haven\/?$/.test(location.pathname);
  const im=(f,w,h,alt,x)=>'<img src="'+A+'img/'+f+'" width="'+w+'" height="'+h+'" alt="'+alt+'" loading="lazy" decoding="async"'+(x||'')+'>';
  const fg=(f,w,h,alt,cap,cls)=>'<figure class="ack-fig el-fig'+(cls?' '+cls:'')+'">'+im(f,w,h,alt)+(cap?'<figcaption>'+cap+'</figcaption>':'')+'</figure>';
  const OV={id:'ov',lab:'Project overview',sub:'',html:
   '<h2 class="gy-big">The facts first.</h2>'+
   '<p><strong>Brand:</strong> Elysian Haven, a luxury resort concept.</p>'+
   '<p><strong>Context:</strong> a hospitality destination still in development.</p>'+
   '<p><strong>The objective:</strong> build a <strong>distinctive premium presence ahead of opening</strong>.</p>'+
   '<p><strong>The work:</strong> EH monogram and logo, core identity, colour and typography direction, branded touchpoint concepts, social visuals and Story motion.</p>'};
  const cell=(inner,cap,mode)=>'<figure class="el-cell"><div class="el-media'+(mode?' '+mode:'')+'">'+inner+'</div><figcaption>'+cap+'</figcaption></figure>';
  const sw=(n,hex,note)=>'<li class="el-sw"><span class="el-chip" style="background:'+hex+'"></span><b>'+n+'</b><i>'+hex+'</i><em>'+note+'</em></li>';
  const SEC=[
   {id:'case',lab:'01 / The Case',sub:'A first impression, before the first arrival',html:
    '<h2 class="gy-big">A first impression, before the first arrival.</h2>'+
    '<p>How do you introduce a destination when the destination itself is still taking shape?</p>'+
    '<p>For Elysian Haven, the challenge was to <strong>make the promise of a luxury stay feel recognisable before the resort opened</strong>. With the property still in development, an identity had to stand in for the experience: distinctive enough to be remembered, calm enough to feel considered and flexible enough to extend beyond a logo.</p>'+
    '<div class="gy-note"><p class="gy-lab">The question</p><p>How can a brand suggest the feeling of a place that people haven’t visited yet?</p></div>',
    figs:fg('door-identity.webp',1080,1350,'Elysian Haven monogram and logotype in white on a deep green door','Identity on a deep green door · concept')},
   {id:'clue',lab:'02 / The Clue',sub:'Luxury doesn’t need to raise its voice',html:
    '<h2 class="gy-big">Luxury doesn’t need to raise its voice.</h2>'+
    '<p>The direction was found in a few consistent details: <strong>deep forest green, soft ivory, expressive serif lettering and a restrained EH monogram</strong>. Together they suggest privacy, warmth and understated confidence rather than obvious extravagance.</p>'+
    '<p>The logo needed to work at two extremes — from a single intimate mark on a cushion to an unmistakable signature across hotel stationery. The visual language had to feel equally at home in a guest room, by the water or on a small screen.</p>'+
    '<div class="gy-note"><p class="gy-lab">The clue</p><p>The strongest luxury cues are often the quietest.</p></div>',
   extra:'<div class="el-grid el-g3 el-clue">'+cell(im('gold-foil-stationery.webp',2048,1536,'Gold-coloured Elysian Haven logo on a forest-green envelope'),'Gold foil on forest green · concept','r45')+cell(im('pillow-sunlight.webp',1080,1350,'Forest green monogrammed cushion on sunlit white bedding'),'One intimate mark · concept','r45')+cell('<video controls playsinline preload="metadata" poster="'+A+'media/story-poster.jpg" aria-label="Elysian Haven vertical Story video, about seven seconds"><source src="'+A+'media/elysian-haven-story-original.mp4" type="video/mp4"></video>','Story concept · 9:16 · 7 seconds','r45 contain dark')+'</div>'},
   {id:'move',lab:'03 / The Move',sub:'Give the promise a signature',html:
    '<h2 class="gy-big">Give the promise a signature.</h2>'+
    '<p>The identity centres on the <strong>EH monogram and Elysian Haven logotype</strong>. Two original colourways — ivory on forest green and forest green on ivory — give the mark a consistent foundation. A softly metallic gold treatment appears in selected presentation mockups as an additional premium detail, not an always-on effect.</p>'+
    '<p>Around the identity, a supporting system of spacious layouts, photography and refined typography creates room for the materials and textures to speak. <strong>Nothing needs to shout to be noticed.</strong></p>',
   extra:'<div class="el-brand"><p class="gy-lab">Brand identity / one page</p>'+
    '<div class="el-logos"><figure>'+im('official-logo-dark.png',1263,1786,'Original Elysian Haven monogram and wordmark in ivory on forest green')+'<figcaption>Primary · ivory on forest green</figcaption></figure><figure>'+im('official-logo-light.png',1264,1786,'Original Elysian Haven monogram and wordmark in forest green on ivory')+'<figcaption>Reverse · forest green on ivory</figcaption></figure>'+
    '<div class="el-spec"><ul class="el-sws">'+sw('Forest Green','#143429','Core')+sw('Warm Ivory','#EFECE8','Core')+sw('Soft Gold','#C8A75D','Supporting · suggested')+sw('Natural Stone','#B9AEA1','Supporting · suggested')+'</ul>'+
    '<div class="el-type"><p class="gy-lab">Typography direction</p><p>A high-contrast editorial serif paired with an understated modern sans. Suggested web pair: <strong>EB Garamond</strong> (display) and <strong>Manrope</strong> (supporting). The typeface of the supplied outlined logo cannot be verified, so it is not named.</p></div></div></div></div>'},
   {id:'app',lab:'04 / The Applications',sub:'Follow the mark beyond the page',html:
    '<h2 class="gy-big">Follow the mark beyond the page.</h2>'+
    '<p>An identity for a resort cannot live only on a screen. It has to feel believable in the small details that shape a stay. The visual concepts explore the brand across <strong>business cards, bags, towels, a dining plate and a door hanger</strong>, with poolside accessories extending the language into more playful hospitality moments.</p>'+
    '<p>Different objects. Different materials. <strong>The same recognisable signature.</strong> These are designed applications and mockups — not photographs proving that the resort is already operating.</p>',
   extra:'<div class="el-grid el-g3">'+
    cell(im('business-cards.webp',2048,1536,'Elysian Haven identity on dark green and ivory business card mockups'),'Business cards','r11')+
    cell(im('branded-shopping-bag.webp',1365,2048,'Dark forest green branded hospitality bag'),'Hospitality bag','r11 pos-bag')+
    cell(im('embroidered-towels.webp',1080,1350,'Two folded forest-green Elysian Haven branded towels'),'Embroidered towels','r11')+
    cell(im('do-not-disturb.webp',2048,1365,'Dark green Elysian Haven do-not-disturb sign on a wooden door handle'),'Door hanger','r11 pos-hanger')+
    cell(im('dining-plate.webp',1080,1350,'Deep green plate with gold rim and EH monogram'),'Dining plate','r11')+
    cell(im('pool-rings.webp',1080,1350,'Green and cream Elysian Haven branded pool rings on a pebble shore'),'Poolside accessories','r11')+'</div>'},
   {id:'soc',lab:'05 / The Social World',sub:'A sense of place, before the place',html:
    '<h2 class="gy-big">A sense of place, before the place.</h2>'+
    '<p>The social direction carries the same visual cues online: <strong>architectural details, tactile fabrics, green-and-ivory contrasts and carefully selected brand moments</strong>. Instead of making premature promises about a finished property, the content creates anticipation through atmosphere and consistency.</p>'+
    '<p>A curated grid of existing concept visuals shows how the identity could translate into an Instagram presence. A short vertical motion piece brings the monogram into a more cinematic setting — <strong>a glimpse of the mood rather than an announcement of an opening date</strong>.</p>'+
    '<div class="gy-note"><p class="gy-lab">Content direction</p><p>Atmosphere · Signature Details · Anticipation</p></div>',
   extra:'<ul class="el-posts">'+[["01_VELVET_LOGO","Green velvet with the Elysian Haven logo"],["02_PILLOW_IN_SUNLIGHT","Branded cushion on a bed in natural sunlight"],["03_GREEN_DOORS_LOGO","Green doors with the Elysian Haven identity"],["04_GREEN_DINING_PLATE","Green plate with gold rim in a table setting"],["05_BRANDED_BUSINESS_CARDS","Two Elysian Haven business cards"],["06_EMBROIDERED_TOWELS","Two embroidered Elysian Haven towels"],["07_GREEN_SHOPPING_BAG","Green branded shopping bag"],["08_GREEN_AND_IVORY_BALLOONS","Green and ivory branded balloons"],["09_GREEN_AND_IVORY_POOL_RINGS","Green and ivory branded pool rings"]].map(function(x){return '<li class="el-post"><img src="'+A+'grid/'+x[0]+'.webp" width="1100" height="1100" alt="'+x[1]+'" loading="lazy" decoding="async"></li>';}).join('')+'</ul>'},
   {id:'find',lab:'06 / The Finding',sub:'The brand arrived before the guests',dark:1,html:
    '<h2 class="gy-big">The brand arrived before the guests.</h2>'+
    '<p>The outcome is a <strong>coherent identity proposal</strong>, from the original EH logo to its application across hospitality materials and social content. The project demonstrates how branding can give a future destination a recognisable personality before its physical experience is ready.</p>'+
    '<p><strong>A place takes time to build. Its identity can start telling the story now.</strong></p>'+
    '<div class="gy-note"><p class="gy-lab">Portfolio clarification</p><p>Elysian Haven is shown here as a pre-opening hospitality branding and visual concept using supplied original identity artwork, mockups and Story motion. The portfolio does not claim the resort has opened, that mockups were manufactured, or that social content was published.</p></div>'}
  ];
  const build=s=>{
    const el=document.createElement('section');el.className='gy-sec ack-sec'+(s.id==='ov'?' gy-ov':' gy-in')+(s.dark?' gy-dark':'');el.dataset.el=s.id;
    el.innerHTML='<div class="gy-l"><p class="gy-lab">'+s.lab+'</p>'+(s.sub?'<p class="gy-sub">'+s.sub+'</p>':'')+(s.figs||'')+'</div><div class="gy-r">'+s.html+'</div>'+(s.extra||'');
    return el;
  };
  function clean(){
    document.querySelectorAll('[data-el]').forEach(n=>{const v=n.querySelector('video');if(v)v.pause();n.remove();});
    document.body.classList.remove('averli-el');
    document.querySelectorAll('.el-hide,.gyh-bg,.gyh-hero').forEach(n=>n.classList.remove('el-hide','gyh-bg','gyh-hero'));
  }
  function sync(){
    if(!isEl()){if(document.body.classList.contains('averli-el'))clean();return;}
    const gallery=document.querySelector('.framer-1d7ivlv'),hero=document.querySelector('.framer-g4v1hi'),meta=document.querySelector('.framer-ujltor');
    if(!gallery||!hero||!meta||gallery.children.length<3)return;
    document.body.classList.add('averli-el');
    const hb=hero.querySelector('[style*="elysian-haven-cover"]');
    if(hb){hb.classList.add('gyh-bg');const hc=hb.parentElement&&hb.parentElement.parentElement&&hb.parentElement.parentElement.parentElement;if(hc)hc.classList.add('gyh-hero');}
    const yc=meta.querySelector('.framer-19ahizp-container');
    if(yc){const lv=[...yc.querySelectorAll('*')].filter(e=>e.children.length===0);if(lv[0]&&/^year$/i.test(lv[0].textContent.trim())){lv[0].textContent='The case';if(lv[1])lv[1].style.display='none';}}
    if(document.querySelector('[data-el]'))return;
    [...gallery.children].filter(c=>c.querySelector('[style*="elysian-haven-cover"]')).forEach(r=>r.classList.add('el-hide'));
    const focus=[...gallery.children].find(c=>/project focus/i.test(c.textContent));
    meta.parentElement.insertBefore(build(OV),meta);
    SEC.forEach(s=>gallery.insertBefore(build(s),focus||null));
    const gp=parseFloat(getComputedStyle(gallery).paddingLeft)||0;
    gallery.querySelectorAll('.gy-dark.gy-in').forEach(n=>n.style.setProperty('--gy-pad',gp+'px'));
  }
  let t;const sched=()=>{cancelAnimationFrame(t);t=requestAnimationFrame(sync);};
  new MutationObserver(sched).observe(document.documentElement,{childList:true,subtree:true});
  addEventListener('popstate',sched);sched();
})();

// ===== Vitality Bloom case study (CASE FILE / 004). Same section system as the other case studies. Scoped to /works/vitality-bloom only. =====
(()=>{
  const A='/assets/vitality-bloom/';
  const isVb=()=>/\/works\/vitality-bloom\/?$/.test(location.pathname);
  const im=(f,w,h,alt,x)=>'<img src="'+A+'img/'+f+'" width="'+w+'" height="'+h+'" alt="'+alt+'" loading="lazy" decoding="async"'+(x||'')+'>';
  const cell=(inner,cap,mode,ratio)=>'<figure class="el-cell"><div class="el-media'+(mode?' '+mode:'')+'"'+(ratio?' style="aspect-ratio:'+ratio+'"':'')+'>'+inner+'</div><figcaption>'+cap+'</figcaption></figure>';
  const OV={id:'ov',lab:'Project overview',sub:'',html:'<h2 class="gy-big">The facts first.</h2>',
   extra:'<div class="vb-facts"><div class="vb-fact"><p class="gy-lab">The brand</p><h3>Vitality Bloom</h3><p>An emerging beauty and wellness brand bringing thoughtful design to everyday self-care.</p></div><div class="vb-fact"><p class="gy-lab">The project</p><h3>Identity meets campaign.</h3><p>A freelance creative project connecting brand identity, product packaging and digital campaign design.</p></div><div class="vb-fact"><p class="gy-lab">The product</p><h3>Radiance Collagen Powder</h3><p>The featured beauty supplement, introduced with an offer of 20% off and free shipping.</p></div><div class="vb-fact"><p class="gy-lab">The objective</p><h3>From first impression to action.</h3><p>Create a seamless visual journey from campaign content to a dedicated product landing page.</p></div><div class="vb-fact"><p class="gy-lab">The audience</p><h3>Beauty meets wellness.</h3><p>Adults aged 25–40 interested in skincare, self-care and a more considered approach to everyday wellness.</p></div><div class="vb-fact"><p class="gy-lab">The creative scope</p><h3>One idea. Multiple touchpoints.</h3><p>Logo and visual identity · Packaging design · Audience research · UX planning · Landing page design · Social content · Animated banner · Reel.</p></div></div>'};
  const sw=(n,hex)=>'<li class="el-sw"><span class="el-chip" style="background:'+hex+'"></span><b>'+n+'</b><i>'+hex+'</i></li>';
  const logos=[['01_LOGO_OLIVE_PRIMARY.jpg',768,469,'Vitality Bloom primary logo in cream on olive','Primary · olive'],['02_LOGO_ESPRESSO_PRIMARY.jpg',775,469,'Vitality Bloom primary logo in cream on espresso brown','Primary · espresso'],['03_LOGO_CREAM_PRIMARY.jpg',773,469,'Vitality Bloom primary logo in olive on cream','Primary · cream'],['04_ROUND_MARK_OLIVE.jpg',768,478,'Vitality Bloom circular mark on olive','Circular mark · olive'],['05_ROUND_MARK_ESPRESSO.jpg',775,478,'Vitality Bloom circular mark on espresso brown','Circular mark · espresso'],['06_ROUND_MARK_CREAM.jpg',773,478,'Vitality Bloom circular mark on cream','Circular mark · cream']];
  const SEC=[
   {id:'case',lab:'01 / The Case',sub:'Looking good wasn’t the whole brief',html:
    '<h2 class="gy-big">Looking good wasn’t the whole brief.</h2>'+
    '<p>The obvious direction for a beauty product? Make it look beautiful. <strong>But a polished image alone doesn’t explain why someone should stop, trust the message or take the next step.</strong></p>'+
    '<p>Vitality Bloom needed more than an attractive jar. The assignment was to build a recognisable identity around a beauty-and-wellness promise, then translate that identity into a landing experience and campaign content for <strong>Radiance Collagen Powder</strong>.</p>'+
    '<p>The original offer was direct — <strong>20% off plus free shipping</strong>. The creative challenge was to give that offer context without losing the brand’s calm, natural character.</p>'+
    '<div class="gy-note"><p class="gy-lab">The question</p><p>How do you connect a desirable first impression with a clear path to action?</p></div>'},
   {id:'pair',raw:1,html:'<div class="vb-pair"><figure class="vb-p1">'+im('logo-embossed.jpg',3118,2000,'Vitality Bloom logo embossed on an olive paper surface with soft leaf shadows')+'<figcaption>Brand mark · embossed concept</figcaption></figure><figure class="vb-p2">'+im('mobile-mockup.jpg',2667,4000,'Vitality Bloom mobile website concept on a phone resting on a grey surface')+'<figcaption>Mobile website concept</figcaption></figure></div>'},
   {id:'clues',lab:'02 / The Clues',sub:'Two reasons people say yes',html:
    '<h2 class="gy-big">Two reasons people say yes.</h2>'+
    '<p>The source project included a competitor-reference exercise, two customer personas and a user journey map. These are <strong>research and planning tools</strong>, not proof of market-wide consumer behaviour.</p>'+
    '<p>One audience mindset is drawn to <strong>aspirational wellness, an appealing visual identity and simple daily rituals</strong>. Another is more selective, looking for <strong>transparent information, understandable ingredients and credible explanations</strong> before considering a purchase.</p>'+
    '<p>That contrast shaped the direction: build desire, but make the information easy to find. Beauty may earn the first glance. <strong>Clarity has to earn the next one.</strong></p>'+
    '<div class="gy-note"><p class="gy-lab">The clue</p><p>Attention and reassurance are different jobs. Good campaign design makes room for both.</p></div>'},
   {id:'id',lab:'03 / The Identity',sub:'A brand needs a signature',html:
    '<h2 class="gy-big">A brand needs a signature.</h2>'+
    '<p>Before the product could become the campaign’s centrepiece, Vitality Bloom needed a consistent visual language.</p>'+
    '<p>The identity exploration develops a <strong>botanical-inspired symbol from V and B letterform experimentation</strong>, paired with the Vitality Bloom wordmark. Primary logo versions and a secondary circular lockup support different applications without changing the character of the brand.</p>'+
    '<p>A restrained, nature-led palette combines deep brown, earth olive, warm sand, sage olive and soft cream. The type pairing contrasts <strong>Butler</strong>, the original primary display typeface, with <strong>Coco Gothic</strong>, the original secondary typeface.</p>'+
    '<p>The result is intentionally gentle but not generic: <strong>warmth for the beauty side, structure for the information side.</strong></p>',
    extra:'<div class="el-brand"><p class="gy-lab">Brand identity / source specification</p>'+
     '<div class="el-grid el-g3" style="margin-top:16px">'+logos.map(l=>cell(im(l[0],l[1],l[2],l[3]),l[4],'','8/5')).join('')+'</div>'+
     '<div class="vb-spec"><ul class="vb-sws">'+sw('Deep Brown','#352A1B')+sw('Earth Olive','#504B33')+sw('Warm Sand','#B79C74')+sw('Sage Olive','#9C9873')+sw('Soft Cream','#E8DCC4')+'</ul>'+
     '<div class="el-type"><p class="gy-lab">Typography · source specification</p><p><strong>Butler</strong> (primary, editorial display) and <strong>Coco Gothic</strong> (secondary, clear modern support). Brand values in the original brief: natural ingredients, radiant skin, inner wellness, sustainable practices.</p></div></div></div>'},
   {id:'prod',lab:'04 / The Product',sub:'Give the promise a form',html:
    '<h2 class="gy-big">Give the promise a form.</h2>'+
    '<p>The hero product was <strong>Radiance Collagen Powder</strong>, selected for a focused promotional push rather than an unfocused presentation of the brand’s full range.</p>'+
    '<p>The packaging direction carries the same olive-and-cream identity as the wider brand, with a botanical surface treatment and a clean hierarchy that brings the product name forward. In the campaign imagery, the package becomes the visual anchor: recognisable enough to move between a product still-life, a landing page and social content.</p>'+
    '<p>The original brief described a beauty-and-wellness audience looking for radiant skin and everyday self-care. Marketing copy in the source explores skin hydration, elasticity and a natural glow. <strong>Those are promotional messages from the concept, not independently verified clinical claims.</strong></p>'+
    '<div class="gy-note"><p class="gy-lab">The move</p><p>Make one product immediately recognisable — then use the surrounding content to explain the offer.</p></div>',
    extra:'<div class="el-grid" style="grid-template-columns:minmax(0,1fr)">'+cell(im('landing-collage.jpg',5000,3333,'Vitality Bloom landing page concept: desktop hero on a laptop surrounded by product, quiz, testimonial and blog sections'),'Landing page concept · desktop design on a laptop mockup','contain','5000/3333')+'</div>'},
   {id:'jour',lab:'05 / The Journey',sub:'A click is only the beginning',html:
    '<h2 class="gy-big">A click is only the beginning.</h2>'+
    '<p>The research moved beyond aesthetics to the sequence a potential customer might follow: <strong>discover the product, understand the benefit, evaluate the offer, then decide whether to continue.</strong></p>'+
    '<p>That is why the campaign did not end at a social post. The landing page needed a clear visual hierarchy, a recognisable product, a focused promotional message and a next action that was easy to find.</p>'+
    '<p>For a more cautious buyer, clarity about ingredients and product details matters as much as the visual appeal. The concept therefore balances <strong>editorial storytelling with concise benefit-led content</strong>, rather than making the page feel like a catalogue of competing offers.</p>',
    extra:'<div class="vb-jm" role="region" aria-label="User journey map, scrollable table" tabindex="0"><table class="vb-jt"><caption class="gy-lab">User journey map</caption><thead><tr><th scope="col">Phase</th><th scope="col">Aware</th><th scope="col">Join <small>(Purchase from LP)</small></th><th scope="col">Use <small>(Initial Product Use)</small></th><th scope="col">Develop <small>(Loyalty &amp; Advocacy)</small></th><th scope="col">Leave <small>(Potential Churn)</small></th></tr></thead><tbody><tr class="vb-sub"><th scope="row">Substage title</th><td>Sees Promotion / Discovers Brand</td><td>Evaluates Landing Page &amp; Makes Purchase</td><td>First Experience with Product &amp; Routine Integration</td><td>Sees Results, Engages Further, Recommends</td><td>Considers Alternatives / Stops Using</td></tr><tr><th scope="row">User Actions<small>(Blank + Arrow)</small></th><td>➡️ Browses Instagram feed/stories. Sees a visually appealing Vitality Bloom ad for “Radiance Collagen Powder” with 20% off.</td><td>➡️ Clicks ad. Lands on Vitality Bloom LP. Scans hero section, offer, key benefits (“Glow from within”). Feels positive about the aesthetic. Clicks “Shop &amp; Save Now.” <em>(Proceeds to checkout)</em></td><td>➡️ Receives product. Admires packaging. Reads instructions. Mixes powder into a drink. Tries it for the first time. Starts incorporating into daily routine.</td><td>➡️ Uses consistently for a few weeks. Notices improved skin radiance. Feels good. Follows Vitality Bloom on IG. Likes/comments on posts. Tells a friend about it. Considers other products.</td><td>➡️ Product runs out, forgets to reorder. Sees a compelling ad from a competitor. Price increases. Doesn’t feel the results are significant enough for the cost anymore.</td></tr><tr><th scope="row">Thoughts / Questions<small>(Blank Box)</small></th><td>“Ooh, this looks nice! Collagen? And a discount?” “Is this a new brand? The vibe is good.” “What are the actual benefits?”</td><td>“The page looks trustworthy and clean.” “Natural ingredients, that’s good.” “20% off + free shipping is a good deal.” “Will this actually work for my skin?” “Is it easy to buy?”</td><td>“Hope this tastes okay and isn’t a hassle to mix.” “How long will it take to see results?” “Is this something I can stick with?”</td><td>“My skin definitely looks brighter!” “I actually enjoy taking this.” “What else does this brand offer?” “I should tell [friend’s name] about this.”</td><td>“Is this still the best option for me?” “Maybe I should try that other brand everyone is talking about.” “Did it really make <em>that</em> much of a difference?”</td></tr><tr><th scope="row">Pain Points<small>(Red Box)</small></th><td>Ad might get lost in a busy feed. Initial skepticism about a new brand. Unclear if it’s just another fad.</td><td>Landing page slow to load. Information is hard to find or overwhelming. Trust signals are weak (no reviews visible initially). CTA isn’t clear or compelling enough.</td><td>Unpleasant taste or texture. Complicated preparation. Forgetting to take it daily. No immediate visible results leading to doubt.</td><td>Not seeing desired results quickly enough. Lack of ongoing engagement from the brand (new content, tips). Product is often out of stock.</td><td>Perceived lack of continued value for money. Better or cheaper alternatives appear. Lifestyle changes. Negative experience with customer service.</td></tr><tr><th scope="row">Emotional State<small>(Neutral face line)</small></th><td>Neutral 😐 -&gt; Curious 🙂</td><td>Interested 🤔 -&gt; Hopeful/Excited 😊</td><td>Anticipatory 🙂 -&gt; (Potentially) Neutral 😐 / Satisfied 😊</td><td>Happy 😍 -&gt; Confident/Loyal 🥰</td><td>Indifferent 😑 -&gt; Considering 🤔 / Disappointed 🙁</td></tr><tr><th scope="row">Opportunities<small>(Green Box)</small></th><td>Highly engaging ad visual. Clear, concise offer. Smooth transition to LP. Use of trusted influencer (if applicable).</td><td>Fast-loading, visually appealing LP. Clear benefit statements. Strong social proof (testimonials). Easy-to-find CTA. Simple purchase process.</td><td>Pleasant taste/texture. Clear usage instructions. Tips for incorporating into routine. Beautiful packaging enhances experience.</td><td>Visible results. Engaging social media content. Community features (e.g., user stories). Loyalty program. Email marketing with tips &amp; new offers.</td><td>Re-engagement campaigns. Subscription offers. Requesting feedback to improve. Highlighting new benefits or formulations.</td></tr></tbody></table></div>'},
   {id:'land',lab:'06 / The Landing Page',sub:'Follow the visitor, not just the look',html:
    '<h2 class="gy-big">Follow the visitor, not just the look.</h2>'+
    '<p>The landing concept brings the identity into a dedicated digital destination. Soft natural shapes, warm neutrals, botanical cues and the olive product pack tie the page back to the campaign creative.</p>'+
    '<p>At the top, visitors see the <strong>Radiance Collagen Powder</strong> proposition and <strong>20% off plus free shipping</strong> offer. A clear call to action and a simple reading order move the experience from attraction toward consideration.</p>'+
    '<p>Desktop and mobile layouts were designed as part of the same visual system. The original Figma concept also includes proposed interactive paths such as <em>Take Quiz</em> and <em>Shop More</em>. <strong>These are prototype intentions, not a deployed e-commerce checkout.</strong></p>'+
    '<div class="gy-note"><p class="gy-lab">The decision</p><p>Consistency should survive the screen size.</p></div>',
    extra:'<div class="vb-dev"><p class="vb-dev-k">From desktop to mobile</p><p class="vb-dev-s">Desktop and mobile design concepts · animated · not a live site</p><div class="vb-dev-stage"><div class="vb-laptop"><div class="vb-lscreen"><video autoplay muted loop playsinline preload="auto" disablepictureinpicture aria-label="Vitality Bloom desktop campaign design, animated"><source src="'+A+'media/landing-desktop.mp4" type="video/mp4"></video></div><div class="vb-lbase"></div></div><div class="vb-phone"><div class="vb-pscreen"><video autoplay muted loop playsinline preload="auto" disablepictureinpicture aria-label="Vitality Bloom mobile campaign design, animated"><source src="'+A+'media/landing-mobile.mp4" type="video/mp4"></video></div></div></div></div>'},
   {id:'find',lab:'08 / The Finding',sub:'A product isn’t a campaign on its own',html:
    '<h2 class="gy-big">A product isn’t a campaign on its own.</h2>'+
    '<p>The outcome is a complete <strong>freelance branding and digital campaign design package</strong>: logo development, visual identity, product packaging presentation, audience and journey thinking, a responsive landing concept, social formats and actual short-form motion.</p>'+
    '<p>No sales, orders, ad delivery, conversion rate or measured campaign performance are asserted. The evidence is the <strong>finished creative system</strong> and the way its parts work together.</p>'+
    '<p><strong>The glow catches the eye. The connected experience gives it somewhere to go.</strong></p>'+
    '<div class="gy-note"><p class="gy-lab">Portfolio clarification</p><p>Freelance design and campaign concept based on the supplied project brief and materials. The shown packaging and web layouts include design mockups and prototypes. Promotional product benefit claims are reproduced or summarised as creative copy, not medical verification. No launched campaign metrics or business outcomes are presented.</p></div>'}
  ];
  const build=s=>{
    const el=document.createElement('section');el.className='gy-sec ack-sec'+(s.id==='ov'?' gy-ov':' gy-in')+(s.dark?' gy-dark':'');el.dataset.vb=s.id;
    if(s.raw){el.innerHTML=s.html;return el;}
    el.innerHTML='<div class="gy-l"><p class="gy-lab">'+s.lab+'</p>'+(s.sub?'<p class="gy-sub">'+s.sub+'</p>':'')+'</div><div class="gy-r">'+s.html+'</div>'+(s.extra||'');
    return el;
  };
  function clean(){
    document.querySelectorAll('[data-vb]').forEach(n=>{const v=n.querySelector('video');if(v)v.pause();n.remove();});
    document.body.classList.remove('averli-vb');
    document.querySelectorAll('.vb-hide,.gyh-bg,.gyh-hero').forEach(n=>n.classList.remove('vb-hide','gyh-bg','gyh-hero'));
  }
  function sync(){
    if(!isVb()){if(document.body.classList.contains('averli-vb'))clean();return;}
    const gallery=document.querySelector('.framer-1d7ivlv'),hero=document.querySelector('.framer-g4v1hi'),meta=document.querySelector('.framer-ujltor');
    if(!gallery||!hero||!meta||gallery.children.length<3)return;
    document.body.classList.add('averli-vb');
    const hb=hero.querySelector('[style*="vitality-bloom-cover"]');
    if(hb){hb.classList.add('gyh-bg');const hc=hb.parentElement&&hb.parentElement.parentElement&&hb.parentElement.parentElement.parentElement;if(hc)hc.classList.add('gyh-hero');}
    const yc=meta.querySelector('.framer-19ahizp-container');
    if(yc){const lv=[...yc.querySelectorAll('*')].filter(e=>e.children.length===0);if(lv[0]&&/^year$/i.test(lv[0].textContent.trim())){lv[0].textContent='Project';if(lv[1])lv[1].textContent='Freelance project';}}
    if(matchMedia('(prefers-reduced-motion: reduce)').matches)document.querySelectorAll('.vb-dev video').forEach(v=>{v.removeAttribute('autoplay');v.controls=true;v.pause();});
    if(document.querySelector('[data-vb]'))return;
    [...gallery.children].filter(c=>c.querySelector('[style*="vitality-bloom-cover"]')).forEach(r=>r.classList.add('vb-hide'));
    const focus=[...gallery.children].find(c=>/project focus/i.test(c.textContent));
    meta.parentElement.insertBefore(build(OV),meta);
    SEC.forEach(s=>gallery.insertBefore(build(s),focus||null));
    const gp=parseFloat(getComputedStyle(gallery).paddingLeft)||0;
    gallery.querySelectorAll('.gy-dark.gy-in').forEach(n=>n.style.setProperty('--gy-pad',gp+'px'));
  }
  let t;const sched=()=>{cancelAnimationFrame(t);t=requestAnimationFrame(sync);};
  new MutationObserver(sched).observe(document.documentElement,{childList:true,subtree:true});
  addEventListener('popstate',sched);sched();
})();

// ===== Lastavica Cruising case study (CASE FILE / 005). Same section system as the other case studies. Scoped to /works/lastavica-cruising only. =====
(()=>{
  const A='/assets/lastavica/';
  const isLa=()=>/\/works\/lastavica-cruising\/?$/.test(location.pathname);
  const im=(p,w,h,alt)=>'<img src="'+A+p+'" width="'+w+'" height="'+h+'" alt="'+alt+'" loading="lazy" decoding="async">';
  const cell=(inner,cap,mode,ratio)=>'<figure class="el-cell"><div class="el-media'+(mode?' '+mode:'')+'"'+(ratio?' style="aspect-ratio:'+ratio+'"':'')+'>'+inner+'</div>'+(cap?'<figcaption>'+cap+'</figcaption>':'')+'</figure>';
  const ph=(p,alt,cap)=>cell(im(p,1080,1350,alt),cap,'r45');
  const facts=[['For','Lastavica Cruising','Luxury yacht cruising on the Croatian Adriatic.'],['Project','Social media content and visual storytelling','For a premium travel experience.'],['My role','Creative direction and visual design','Social media visual design, creative direction, destination and route content, and social content planning.'],['Deliverables','Social content system','Social post designs, route and itinerary graphics, story concepts, lifestyle-led content and a sample 12-post content plan.']];
  const OV={id:'ov',lab:'Project overview',sub:'',html:'<h2 class="gy-big">The facts first.</h2>',
   extra:'<div class="vb-facts">'+facts.map(f=>'<div class="vb-fact"><p class="gy-lab">'+f[0]+'</p><h3>'+f[1]+'</h3><p>'+f[2]+'</p></div>').join('')+'</div>'};
  const routes=[
   ['CENTRAL','Central Dalmatia',['Route teaser','Itinerary · option A','Itinerary · option B']],
   ['NORTH','North Dalmatia',['Route teaser','Itinerary · option A','Itinerary · option B']]];
  const files=['01_ROUTE_TEASER','02_ITINERARY_OPTION_A','03_ITINERARY_OPTION_B'];
  const routeBlock=routes.map(r=>'<div class="la-route"><p class="gy-lab">'+r[1]+'</p><div class="el-grid el-g3" style="margin-top:14px">'+files.map((f,i)=>ph('route/'+r[0]+'_'+f+'.webp',r[1]+' — '+r[2][i].toLowerCase()+' creative',r[2][i])).join('')+'</div></div>').join('');
  const posts=[['01_CENTRAL_DALMATIA_ROUTE','Central Dalmatia route post'],['02_ONBOARD_SERVICE','Onboard service post'],['03_YACHT_EXTERIOR','Yacht exterior post'],['04_AERIAL_DAYLIGHT','Aerial daylight post'],['05_NORTH_DALMATIA_ROUTE','North Dalmatia route post'],['06_LIFESTYLE_SUNDECK','Lifestyle sundeck post'],['07_NAUTICAL_DETAILS','Nautical details post'],['08_TOAST_AT_SEA','Toast at sea post'],['09_YACHT_DOCKED','Yacht docked post'],['10_LIFESTYLE_RELAXED_GUEST','Lifestyle relaxed guest post'],['11_AERIAL_DEEP_NAVY','Aerial deep navy post'],['12_SOUTH_DALMATIA_ROUTE','South Dalmatia route post']];
  const grid='<ul class="el-posts la-posts">'+posts.map(p=>'<li class="el-post"><a href="'+A+'full/'+p[0]+'_FULL.jpg" target="_blank" rel="noopener" aria-label="Open full-size: '+p[1]+'"><img src="'+A+'posts/'+p[0]+'_SQUARE.webp" width="1080" height="1080" alt="'+p[1]+'" loading="lazy" decoding="async"></a></li>').join('')+'</ul><p class="la-cap">12-post sample content plan · Individual post assets, arranged as a responsive grid.</p>';
  const SEC=[
   {id:'brief',lab:'The Brief',sub:'',html:'<h2 class="gy-big">Sell the experience, not just the itinerary.</h2><p>A luxury cruise is more than a list of ports. The content needed to make the experience feel tangible: <strong>the vessel, the sea, the onboard details, and the places waiting beyond the horizon.</strong></p>',
    extra:'<div class="el-grid el-g2 la-g2">'+ph('img/YACHT_AERIAL_DAYLIGHT.webp','Aerial view of the Lastavica yacht in daylight','Aerial · daylight')+ph('img/YACHT_EXTERIOR.webp','Exterior of the Lastavica yacht','The vessel')+'</div>'},
   {id:'appr',lab:'The Approach',sub:'',html:'<h2 class="gy-big">From a boat to a world people want to step into.</h2><p>I developed a visual approach that combines <strong>striking yacht imagery with relaxed lifestyle photography</strong>, nautical details and clear route information. Deep Adriatic blues and warm, understated typography keep the communication premium, while <strong>destination-focused content makes it useful</strong>.</p>'},
   {id:'dir',lab:'Content Direction',sub:'',html:'<h2 class="gy-big">The journey has more than one story.</h2><p>The content balances three complementary angles: <strong>the atmosphere on board, the yacht and its services, and the destinations and routes.</strong> This gives the feed variation without losing its identity.</p>',
    extra:'<div class="el-grid el-g3">'+ph('img/NAUTICAL_ROPE_DETAIL.webp','Nautical rope detail on the yacht','Nautical details')+ph('img/TOAST_AT_SEA.jpg','A toast at sea','Toast at sea')+ph('img/LIFESTYLE_RELAXED_GUEST.webp','A relaxed guest on board','Relaxed on board')+'</div>'},
   {id:'route',lab:'Route Content',sub:'',html:'<h2 class="gy-big">Make the destination easy to imagine.</h2><p>The route designs present <strong>Central, North and South Dalmatia as distinct travel stories.</strong> Each route has an introductory visual and itinerary variations, allowing audiences to explore the journey without losing the aspirational mood.</p>',
    extra:'<div class="la-routes">'+routeBlock+'</div>'},
   {id:'stories',lab:'Social Stories',sub:'',html:'<h2 class="gy-big">Small moments. A bigger picture.</h2><p>Story formats extend the visual language to quick, mobile-first moments: <strong>discovery, onboard service, the luxury cruise experience, destinations, contact information and route highlights.</strong></p>',
    extra:'<ul class="la-srow"><li class="la-sf"><video data-lazyplay muted loop playsinline preload="metadata" aria-label="Lastavica Cruising story video 6"><source src="'+A+'story/stori-6.mp4" type="video/mp4"></video></li><li class="la-sf"><video data-lazyplay muted loop playsinline preload="metadata" aria-label="Lastavica Cruising story video 7"><source src="'+A+'story/stori-7.mp4" type="video/mp4"></video></li><li class="la-sf"><video data-lazyplay muted loop playsinline preload="metadata" aria-label="Lastavica Cruising story video 8"><source src="'+A+'story/stori-8.mp4" type="video/mp4"></video></li><li class="la-sf"><video data-lazyplay muted loop playsinline preload="metadata" aria-label="Lastavica Cruising story video 9"><source src="'+A+'story/stori-9.mp4" type="video/mp4"></video></li><li class="la-sf"><img src="'+A+'story/stori-2.jpg" width="1080" height="1920" alt="Lastavica Cruising story" loading="lazy" decoding="async"></li></ul>'},
   {id:'take',lab:'The Takeaway',sub:'',html:'<h2 class="gy-big">Consistency doesn’t have to look repetitive.</h2><p>The result is a connected content system: <strong>distinct stories, a recognisable visual direction, and a feed designed to communicate the feeling of a luxury Adriatic journey.</strong></p><div class="gy-note"><p class="gy-lab">Portfolio clarification</p><p>This case file documents the creative work and content planning shown here; it does not claim campaign performance, booking results or published-post metrics.</p></div>'},
   {id:'plan',lab:'Monthly Content Plan',sub:'',html:'<h2 class="gy-big">A feed with a point of view.</h2><p>The sample 12-post plan brings the content directions together into a cohesive social grid: <strong>yacht photography, hospitality, destination routes, lifestyle, and nautical details.</strong> It shows how individual posts can work as a coordinated series while remaining strong on their own.</p>',
    extra:grid}
  ];
  const build=s=>{
    const el=document.createElement('section');el.className='gy-sec ack-sec'+(s.id==='ov'?' gy-ov':' gy-in');el.dataset.la=s.id;
    el.innerHTML='<div class="gy-l"><p class="gy-lab">'+s.lab+'</p></div><div class="gy-r">'+s.html+'</div>'+(s.extra||'');
    return el;
  };
  function clean(){
    document.querySelectorAll('[data-la]').forEach(n=>{n.querySelectorAll('video').forEach(v=>v.pause());n.remove();});
    document.body.classList.remove('averli-la');
    document.querySelectorAll('.la-hide,.gyh-bg,.gyh-hero').forEach(n=>n.classList.remove('la-hide','gyh-bg','gyh-hero'));
  }
  function sync(){
    if(!isLa()){if(document.body.classList.contains('averli-la'))clean();return;}
    const gallery=document.querySelector('.framer-1d7ivlv'),hero=document.querySelector('.framer-g4v1hi'),meta=document.querySelector('.framer-ujltor');
    if(!gallery||!hero||!meta||gallery.children.length<3)return;
    document.body.classList.add('averli-la');
    const hb=hero.querySelector('[style*="lastavica-cover"]');
    if(hb){hb.classList.add('gyh-bg');const hc=hb.parentElement&&hb.parentElement.parentElement&&hb.parentElement.parentElement.parentElement;if(hc)hc.classList.add('gyh-hero');}
    const yc=meta.querySelector('.framer-19ahizp-container');
    if(yc){const lv=[...yc.querySelectorAll('*')].filter(e=>e.children.length===0);if(lv[0]&&/^year$/i.test(lv[0].textContent.trim())){lv[0].textContent='Project';if(lv[1])lv[1].textContent='Social content';}}
    if(document.querySelector('[data-la]'))return;
    [...gallery.children].filter(c=>c.querySelector('[style*="lastavica-cover"]')||/project focus/i.test(c.textContent)).forEach(r=>r.classList.add('la-hide'));
    const focus=[...gallery.children].find(c=>/project focus/i.test(c.textContent));
    meta.parentElement.insertBefore(build(OV),meta);
    SEC.forEach(s=>gallery.insertBefore(build(s),focus||null));
  }
  let t;const sched=()=>{cancelAnimationFrame(t);t=requestAnimationFrame(sync);};
  new MutationObserver(sched).observe(document.documentElement,{childList:true,subtree:true});
  addEventListener('popstate',sched);sched();
})();

// ===== Villa Unuk case study (CASE FILE / 006). Same section system as the other case studies. Scoped to /works/villa-unuk only. =====
(()=>{
  const A='/assets/villa-unuk/';
  const isVu=()=>/\/works\/villa-unuk\/?$/.test(location.pathname);
  const pg=(n,alt,cap)=>'<figure class="vu-pg"><img src="'+A+'pages/p'+n+'.jpg" width="2021" height="1429" alt="'+alt+'" loading="lazy" decoding="async"><figcaption>'+cap+'</figcaption></figure>';
  const mk=(f,w,h,alt,cap)=>'<figure class="vu-pg"><img src="'+A+'mock/'+f+'" width="'+w+'" height="'+h+'" alt="'+alt+'" loading="lazy" decoding="async"><figcaption>'+cap+'</figcaption></figure>';
  const facts=[
   ['The client','Villa Unuk','A luxury real-estate development in Primošten, Croatia, comprising two exclusive villas.'],
   ['The purpose','A refined sales brochure','Present the architecture, setting, amenities and property information for prospective buyers, including an international audience.'],
   ['The role','Design, layout and floor plans','Design and layout of the brochure, typographic and visual hierarchy, integration of architectural images, and manual redrawing of floor plans for clear publication.'],
   ['The deliverable','23 pages, landscape format','A German-language digital brochure designed with a print-publication sensibility.'],
   ['The year','2024','Primošten, Croatia.']];
  const OV={id:'ov',lab:'Project overview',sub:'',html:'<h2 class="gy-big">The facts first.</h2>',
   extra:'<div class="vb-facts">'+facts.map(f=>'<div class="vb-fact"><p class="gy-lab">'+f[0]+'</p><h3>'+f[1]+'</h3><p>'+f[2]+'</p></div>').join('')+'</div>'};
  const sched=[['14','15','Keller / basement','Basement: area schedule and floor plan'],['16','17','Erdgeschoss / ground floor','Ground floor: area schedule and floor plan'],['18','19','Erster Stock / first floor','First floor: area schedule and floor plan'],['20','21','Zweiter Stock / second floor','Second floor: area schedule and floor plan']];
  const plans=sched.map(s=>'<div class="vu-row">'+pg(s[0],'Villa Unuk brochure page '+s[0]+': area schedule','Page '+s[0]+' · Area schedule')+pg(s[1],'Villa Unuk brochure page '+s[1]+': '+s[3],'Page '+s[1]+' · Floor plan, redrawn')+'</div>').join('');
  const video='<div class="vu-video"><figure class="vu-vfig"><video id="vu-flip" autoplay muted loop playsinline preload="metadata" poster="'+A+'brochure-poster.jpg" aria-label="Villa Unuk brochure page-turn animation"><source src="'+A+'brochure-flip.mp4" type="video/mp4"></video><figcaption><button type="button" class="vu-pause" aria-pressed="false">Pause</button></figcaption></figure></div>';
  const SEC=[
   {id:'case',lab:'The Case',sub:'',html:'<h2 class="gy-big">A property can make an impression. The details have to make the case.</h2><p>Villa Unuk had striking architectural visuals and a desirable Adriatic setting. The challenge was to bring the entire proposition together — <strong>from the first photograph to the final floor plan</strong> — in one coherent, premium sales document.</p><p>The brochure needed to feel aspirational <strong>without leaving the practical questions unanswered</strong>. Every section had a job: create interest, add context and make the information easier to explore.</p>'},
   {id:'dir',lab:'The Creative Direction',sub:'',html:'<h2 class="gy-big">Less noise. More room for the property.</h2><p>Large architectural renderings, generous white space and deliberate typography created a calm editorial rhythm. Rich coastal imagery introduces the setting; structured copy explains the opportunity; <strong>carefully controlled layouts keep the visual language consistent</strong> as the subject moves from lifestyle to technical detail.</p><p>The design supports the property’s premium positioning <strong>without asking decoration to do the work of information</strong>.</p>',
    extra:'<div class="vu-pair vu-mix"><figure class="vu-pg"><img src="'+A+'mock/marble-phone.jpg" width="1447" height="2048" alt="Open Villa Unuk brochure on a marble surface next to a phone" loading="lazy" decoding="async"><figcaption>Brochure mockup</figcaption></figure>'+mk('multi-spread.jpg',2048,1365,'Several Villa Unuk brochure spreads arranged on a surface','Brochure mockup · editorial spreads')+'</div>'},
   {id:'loc',lab:'The Location Story',sub:'',html:'<h2 class="gy-big">First, the view. Then, the full picture.</h2><p>A property is also its surroundings. The brochure introduces Primošten with coastal photography, a location overview and practical context — <strong>connecting the development to the wider Adriatic lifestyle</strong>.</p><p>Those pages create a natural transition between the emotional appeal of a destination and <strong>the facts a buyer needs to evaluate a property</strong>.</p>',
    extra:'<div class="vu-pair">'+pg('08','Villa Unuk brochure page 08: Primošten location story','Page 08')+pg('09','Villa Unuk brochure page 09: regional map','Page 09')+'</div>'},
   {id:'clue',lab:'Beyond the Layout / The Technical Clue',sub:'',html:'<h2 class="gy-big">The drawings were never just an appendix.</h2><p>The brochure also required clear presentation of the buildings’ layouts. Alongside the editorial design, <strong>I manually redrew floor plans</strong> and prepared them for the brochure’s visual system — bringing technical information into a readable, consistent format.</p><p>The aim was not to redesign the architecture. It was to make the drawings work as communication: <strong>precise enough to be useful, restrained enough to belong in a premium publication</strong>.</p>',
    extra:'<div class="vu-car" data-vu-car><div class="vu-car-bar"><p class="gy-lab">Redrawn floor plans · <span class="vu-count">1 / 4</span></p><div class="vu-car-ctl"><button type="button" data-dir="-1" aria-label="Previous floor plan">←</button><button type="button" data-dir="1" aria-label="Next floor plan">→</button></div></div><ol class="vu-track" tabindex="0" role="region" aria-label="Villa Unuk floor plans, four drawings"><li class="vu-slide" aria-label="Floor plan 1 of 4"><img src="'+A+'pages/plan-1.webp" width="1941" height="1349" alt="Villa Unuk floor plan, Basement (Keller), redrawn for the brochure" loading="lazy" decoding="async"></li><li class="vu-slide" aria-label="Floor plan 2 of 4"><img src="'+A+'pages/plan-2.webp" width="1941" height="1349" alt="Villa Unuk floor plan, Ground floor (Erdgeschoss), redrawn for the brochure" loading="lazy" decoding="async"></li><li class="vu-slide" aria-label="Floor plan 3 of 4"><img src="'+A+'pages/plan-3.webp" width="1941" height="1349" alt="Villa Unuk floor plan, First floor (Erster Stock), redrawn for the brochure" loading="lazy" decoding="async"></li><li class="vu-slide" aria-label="Floor plan 4 of 4"><img src="'+A+'pages/plan-4.webp" width="1941" height="1349" alt="Villa Unuk floor plan, Second floor (Zweiter Stock), redrawn for the brochure" loading="lazy" decoding="async"></li></ol></div>'},
   {id:'motion',dark:1,lab:'The Brochure in Motion',sub:'',html:'<h2 class="gy-big">Open the case. Turn the page.</h2><p>Twenty-three pages bring the story together: the architecture, the views, the surroundings, the specifications and the plans. Presented as an open publication, the brochure reveals <strong>how the entire reading experience works — not just its individual pages</strong>.</p>',
    extra:video},
   {id:'final',lab:'The Final Piece',sub:'',html:'<h2 class="gy-big">Built to be seen. Designed to be understood.</h2><p>The finished design brings luxury imagery and detailed real-estate information into <strong>one editorial system</strong>. It is a showcase of brochure design, visual storytelling and the careful production work that happens between a concept and its final pages.</p><div class="gy-note"><p class="gy-lab">Presentation note</p><p>This project demonstrates design work and production skills. No sales figures, buyer conversion, print run, architectural authorship or investment returns are presented as outcomes of this design work.</p></div>'}
  ];
  const build=s=>{
    const el=document.createElement('section');el.className='gy-sec ack-sec'+(s.id==='ov'?' gy-ov':' gy-in')+(s.dark?' gy-dark':'');el.dataset.vu=s.id;
    el.innerHTML='<div class="gy-l"><p class="gy-lab">'+s.lab+'</p></div><div class="gy-r">'+s.html+'</div>'+(s.extra||'');
    return el;
  };
  function wireCar(){
    document.querySelectorAll('[data-vu-car]').forEach(c=>{if(c.dataset.wired)return;c.dataset.wired='1';
      const tr=c.querySelector('.vu-track'),cnt=c.querySelector('.vu-count');const n=tr.children.length;
      const idx=()=>Math.max(0,Math.min(n-1,Math.round(tr.scrollLeft/Math.max(1,tr.clientWidth))));
      const upd=()=>{if(cnt)cnt.textContent=(idx()+1)+' / '+n;};
      const go=d=>{const i=Math.max(0,Math.min(n-1,idx()+d));tr.scrollTo({left:i*tr.clientWidth,behavior:'smooth'});};
      c.querySelectorAll('button').forEach(b=>b.addEventListener('click',()=>go(+b.dataset.dir)));
      tr.addEventListener('scroll',()=>{cancelAnimationFrame(tr._r);tr._r=requestAnimationFrame(upd)});
      tr.addEventListener('keydown',e=>{if(e.key==='ArrowRight'){e.preventDefault();go(1)}else if(e.key==='ArrowLeft'){e.preventDefault();go(-1)}});
    });
  }
  function wireVideo(){
    const v=document.getElementById('vu-flip');if(!v||v.dataset.wired)return;v.dataset.wired='1';v.muted=true;
    const btn=document.querySelector('.vu-pause');
    const rm=matchMedia('(prefers-reduced-motion: reduce)').matches;
    if(rm){v.removeAttribute('autoplay');v.pause();if(btn){btn.textContent='Play';btn.setAttribute('aria-pressed','true')}}
    if(btn)btn.addEventListener('click',()=>{if(v.paused){v.play();btn.textContent='Pause';btn.setAttribute('aria-pressed','false')}else{v.pause();btn.textContent='Play';btn.setAttribute('aria-pressed','true')}});
    if('IntersectionObserver' in window&&!rm){new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting){if(btn&&btn.getAttribute('aria-pressed')!=='true'){const p=v.play();if(p&&p.catch)p.catch(()=>{})}}else v.pause()})},{threshold:.25}).observe(v)}
  }
  function clean(){
    document.querySelectorAll('[data-vu]').forEach(n=>{n.querySelectorAll('video').forEach(v=>v.pause());n.remove();});
    document.body.classList.remove('averli-vu');
    document.querySelectorAll('.vu-hide,.gyh-bg,.gyh-hero').forEach(n=>n.classList.remove('vu-hide','gyh-bg','gyh-hero'));
  }
  function sync(){
    if(!isVu()){if(document.body.classList.contains('averli-vu'))clean();return;}
    const gallery=document.querySelector('.framer-1d7ivlv'),hero=document.querySelector('.framer-g4v1hi'),meta=document.querySelector('.framer-ujltor');
    if(!gallery||!hero||!meta||gallery.children.length<3)return;
    document.body.classList.add('averli-vu');
    const hb=hero.querySelector('[style*="villa-unuk-cover"]');
    if(hb){hb.classList.add('gyh-bg');const hc=hb.parentElement&&hb.parentElement.parentElement&&hb.parentElement.parentElement.parentElement;if(hc)hc.classList.add('gyh-hero');}
    if(document.querySelector('[data-vu]')){wireVideo();wireCar();return;}
    [...gallery.children].filter(c=>c.querySelector('[style*="villa-unuk-cover"]')||/project focus/i.test(c.textContent)).forEach(r=>r.classList.add('vu-hide'));
    meta.parentElement.insertBefore(build(OV),meta);
    SEC.forEach(s=>gallery.insertBefore(build(s),null));
    wireVideo();wireCar();
  }
  let t;const sched2=()=>{cancelAnimationFrame(t);t=requestAnimationFrame(sync);};
  new MutationObserver(sched2).observe(document.documentElement,{childList:true,subtree:true});
  addEventListener('popstate',sched2);sched2();
})();

// ===== Hero tagline: typed once on page load. All characters are laid out (hidden) first, so nothing moves while typing. =====
(()=>{
  const SRC=/^CREATIVE INVESTIGATIONS\s*\/\/\s*SOCIAL\s*·\s*CAMPAIGNS\s*·\s*SEO\s*·\s*DESIGN$/;
  const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
  let played=false;
  const glass='<svg class="ct-glass" viewBox="0 0 12 12" width="11" height="11" aria-hidden="true" focusable="false"><circle cx="4.9" cy="4.9" r="3.5" fill="none" stroke="currentColor" stroke-width=".7"/><path d="M7.6 7.6 11 11" fill="none" stroke="currentColor" stroke-width=".7" stroke-linecap="round"/></svg>';
  const tok=s=>[...s].map(c=>'<span class="ct-t">'+(c===' '?' ':c)+'</span>').join('');
  const sep='<span class="ct-t ct-sep">'+glass+'</span>';
  function build(h){
    const full=h.textContent.replace(/\s+/g,' ').trim();
    h.setAttribute('aria-label',full);
    h.classList.add('ct-ready');
    h.innerHTML='<span class="ct-wrap" aria-hidden="true">'+tok('CREATIVE INVESTIGATIONS')+tok('  //  ')+'<span class="ct-grp">'+tok('SOCIAL')+sep+tok('CAMPAIGNS')+sep+tok('SEO')+sep+tok('DESIGN')+'</span>'+'</span>';
    const w=h.firstChild,ts=[...w.querySelectorAll('.ct-t')];
    if(reduced||played){ts.forEach(t=>t.classList.add('on'));return}
    played=true;
    const cur=document.createElement('span');cur.className='ct-cur';w.appendChild(cur);
    const place=i=>{const t=ts[Math.max(0,Math.min(ts.length-1,i))];cur.style.left=(i<0?t.offsetLeft:t.offsetLeft+t.offsetWidth)+'px';cur.style.top=t.offsetTop+'px';cur.style.height=t.offsetHeight+'px'};
    place(-1);
    let seed=7;const rnd=()=>{seed=(seed*9301+49297)%233280;return seed/233280};
    const gaps=ts.map((t,i)=>{const prev=i?ts[i-1].textContent:'';let g=38+rnd()*52;if(prev===' ')g+=70+rnd()*60;if(i>0&&ts[i-1].classList.contains('ct-sep'))g+=80;if(t.classList.contains('ct-sep'))g+=40;return g});
    const total=gaps.reduce((x,y)=>x+y,0),scale=3500/total;
    let i=0,at=500;
    const step=()=>{ts[i].classList.add('on');place(i);i++;if(i<ts.length){at=gaps[i]*scale;setTimeout(step,at)}else{setTimeout(()=>cur.remove(),450)}};
    // start immediately: the template's own entrance motion is switched off in CSS, so the line is still from the first frame
    place(-1);step();
  }
  function scan(){
    document.querySelectorAll('h6.framer-text').forEach(h=>{
      if(h.querySelector('.ct-wrap'))return;
      if(SRC.test(h.textContent.replace(/\s+/g,' ').trim()))build(h);
    });
  }
  let t;const s=()=>{cancelAnimationFrame(t);t=requestAnimationFrame(scan)};
  new MutationObserver(s).observe(document.documentElement,{childList:true,subtree:true,characterData:true});s();
})();

// ===== Motion system: gentle page entrance + once-only scroll reveals + subtle hover zoom on clickable images. Project case-study pages only. =====
// Content is never hidden by CSS alone: the hidden state is applied by this script, and only to blocks that are still below the fold.
(()=>{
  const PROJECT=/\/works\/(gyalaktika-zagreb|ackitchen|elysian-haven|vitality-bloom|lastavica-cruising|villa-unuk)\/?$/;
  const isProject=()=>PROJECT.test(location.pathname);
  const reduced=matchMedia('(prefers-reduced-motion: reduce)');
  const REVEAL='.gy-sec .gy-l,.gy-sec .gy-r,.gy-sec>.gy-info,.gy-sec>.gy-flow,.gy-sec>.gy-tests,.gy-sec>.gy-hero-num,.gy-sec>.gy-stats,.gy-sec>.vb-facts,.gy-sec>.vu-pair,.gy-sec>.vu-car,.gy-sec>.vu-video,.gy-sec>.el-grid,.gy-sec>.la-srow,.gy-sec>.la-posts,.gy-sec>.la-single,.gy-sec>.ack-trio,.gy-sec>.ack-reels,.gy-sec>.ack-post-grid,.gy-sec>.ack-cols,.gy-sec>.ack-car,.gy-sec>.el-brand,.gy-sec>.vb-dev,.gy-sec>.vb-reel,.la-routes>*';
  let io=null,entrancePending=true,lastPath=location.pathname;
  const ensureIO=()=>io||(io=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('m-in');io.unobserve(e.target)}})},{threshold:.08,rootMargin:'0px 0px -6% 0px'}));
  function prep(el){
    if(el.dataset.m)return;el.dataset.m='1';
    if(reduced.matches)return;
    const r=el.getBoundingClientRect();
    if(r.bottom<0||r.top<innerHeight*.92)return; // already on screen (or above): leave it untouched
    el.classList.add('m-pre');ensureIO().observe(el);
  }
  function entrance(){
    const hero=document.querySelector('.framer-g4v1hi');if(!hero||hero.dataset.mEnter)return false;
    hero.dataset.mEnter='1';if(reduced.matches)return true;
    hero.classList.remove('m-enter');void hero.offsetWidth;hero.classList.add('m-enter');
    hero.addEventListener('animationend',()=>hero.classList.remove('m-enter'),{once:true});
    return true;
  }
  function scan(){
    if(!isProject())return;
    if(entrancePending&&entrance())entrancePending=false;
    document.querySelectorAll(REVEAL).forEach(prep);
  }
  let t;const sched=()=>{cancelAnimationFrame(t);t=requestAnimationFrame(scan)};
  function onRoute(){
    if(location.pathname===lastPath)return;lastPath=location.pathname;
    if(isProject()){entrancePending=true;document.querySelectorAll('[data-m-enter]').forEach(n=>delete n.dataset.mEnter)}
    sched();
  }
  ['pushState','replaceState'].forEach(k=>{const o=history[k];history[k]=function(){const r=o.apply(this,arguments);setTimeout(onRoute,0);return r}});
  addEventListener('popstate',()=>setTimeout(onRoute,0));
  new MutationObserver(sched).observe(document.documentElement,{childList:true,subtree:true});
  sched();
})();

// ===== Homepage lower sections (What AVERLI does / Connected disciplines / About). Text for the services, process and headline is edited in the runtime; this adds the related-project links, the supporting line and the compact About block. =====
(()=>{
  const REL=[
    {title:/^Social Media & Content$/i,items:[{name:'ACKitchen',desc:'Social Media Strategy & Content Planning',slug:'ackitchen'}]},
    {title:/^Campaigns & Meta Advertising$/i,items:[{name:'Gyalaktika Zagreb',desc:'Meta Lead Generation & Campaign Optimisation',slug:'gyalaktika-zagreb'}]},
    {title:/^Branding & Graphic Design$/i,items:[{name:'Elysian Haven',desc:'Brand Identity & Visual Direction',slug:'elysian-haven'},{name:'Vitality Bloom',desc:'Brand & Campaign Design',slug:'vitality-bloom'}]}];
  // route through the template's own links so client-side navigation keeps working
  const go=(sel,e)=>{const a=document.querySelector(sel);if(a){e.preventDefault();a.click()}};
  function services(){
    const sec=document.querySelector('section.framer-1t4yc1d');if(!sec)return;
    sec.querySelectorAll('.framer-l4p4on').forEach(col=>{
      if(col.querySelector('.hm-rel'))return;
      const t=col.querySelector('.framer-1x2ayhb p');if(!t)return;
      const r=REL.find(x=>x.title.test(t.textContent.trim()));if(!r)return;
      const d=document.createElement('div');d.className='hm-rel';
      d.innerHTML='<p class="hm-rel-k">Related project'+(r.items.length>1?'s':'')+'</p>'+r.items.map(x=>'<p class="hm-rel-t"><strong>'+x.name+'</strong> — '+x.desc+'</p><a class="hm-rel-a" href="./works/'+x.slug+'">View case file ↗</a>').join('');
      d.querySelectorAll('a').forEach((a,i)=>a.addEventListener('click',e=>go('a[href="./works/'+r.items[i].slug+'"]',e)));
      col.appendChild(d);
    });
  }
  function connected(){
    const sec=document.querySelector('section.framer-9boaux');if(!sec)return;
    const host=sec.querySelector('.framer-1jhyczt');if(!host||host.querySelector('.hm-support'))return;
    const p=document.createElement('p');p.className='hm-support';p.textContent='A logo, a post, an ad — each reveals a piece of the picture. AVERLI connects the details so your brand makes sense wherever people find it.';
    const h=host.querySelector('.framer-4iu732');(h&&h.nextSibling)?host.insertBefore(p,h.nextSibling):host.appendChild(p);
  }
  function about(){
    const sec=document.querySelector('section.framer-12prkh7');if(!sec||sec.querySelector('.hm-about'))return;
    const d=document.createElement('div');d.className='hm-about';
    d.innerHTML='<h2 class="hm-about-h">There’s always more to the story.</h2><p class="hm-about-p">Behind AVERLI is a curious mind with an eye for detail. A studio bringing design, content and campaigns together — from the first question to the final move.</p><a class="hm-about-a" href="./about">Meet AVERLI ↗</a>';
    d.querySelector('a').addEventListener('click',e=>go('section.framer-12prkh7 > a.framer-rvpoa2',e));
    sec.appendChild(d);
  }
  let t;const run=()=>{cancelAnimationFrame(t);t=requestAnimationFrame(()=>{services();connected();about()})};
  new MutationObserver(run).observe(document.documentElement,{childList:true,subtree:true});run();
})();


// ===== The Process: project image + caption follow the selected accordion step (no auto-rotation) =====
(()=>{
  const A='/assets/';
  const STEPS=[
    {img:A+'averli-gyalaktika/00-home-cover-wide.webp',w:1672,h:941,alt:'Gyalaktika Zagreb: three smartphones showing the Meta ad creatives',cap:'Gyalaktika Zagreb / Selected work'},
    {img:A+'ackitchen/ackitchen-cover.webp',w:1672,h:941,alt:'ACKitchen: four vertical social media compositions',cap:'ACKitchen / Selected work'},
    {img:A+'vitality-bloom/vitality-bloom-cover.webp',w:1536,h:1024,alt:'Vitality Bloom: Radiance Collagen Powder packaging on a stone surface',cap:'Vitality Bloom / Selected work'},
    {img:A+'villa-unuk/villa-unuk-cover.jpg',w:2048,h:1152,alt:'Villa Unuk: brochure spreads mockup',cap:'Villa Unuk / Selected work'}];
  let ro=null,cur=-1;
  const isOpen=it=>{const t=it.querySelector('.framer-vq9pfq');return !!t&&t.getBoundingClientRect().height>40};
  function openIndex(items){const k=items.findIndex(isOpen);return k<0?(cur<0?0:cur):k}
  function show(card,i){
    if(i===cur)return;cur=i;
    card.querySelectorAll('.pr-img').forEach((el,k)=>el.classList.toggle('on',k===i));
    card.querySelectorAll('.pr-cap-t').forEach((el,k)=>el.classList.toggle('on',k===i));
  }
  function mount(){
    const wrap=document.querySelector('.framer-1qnej8o');const acc=document.querySelector('.framer-hdq487-container');
    if(!wrap||!acc||wrap.querySelector('.pr-card'))return;
    const items=[...acc.querySelectorAll('.framer-TFmVP')];if(items.length!==4)return;
    const card=document.createElement('figure');card.className='pr-card';
    card.innerHTML='<div class="pr-frame">'+STEPS.map(s=>'<img class="pr-img" src="'+s.img+'" width="'+s.w+'" height="'+s.h+'" alt="'+s.alt+'" decoding="async">').join('')+'</div><figcaption class="pr-cap" aria-live="polite">'+STEPS.map(s=>'<span class="pr-cap-t">'+s.cap+'</span>').join('')+'</figcaption>';
    wrap.insertBefore(card,wrap.firstChild);
    show(card,openIndex(items));
    // one step open at a time: opening a step closes any other open step, and the image follows the opened step
    acc.addEventListener('click',ev=>{
      const it=ev.target.closest&&ev.target.closest('.framer-TFmVP');const k=items.indexOf(it);if(k<0||ev.isTrusted===false)return;
      let tries=0;const check=()=>{
        if(!isOpen(items[k])){if(++tries<8)setTimeout(check,100);return}
        items.forEach((o,i)=>{if(i!==k&&isOpen(o)){const h=o.querySelector('.framer-81no4k')||o;const r=h.getBoundingClientRect();const o2={bubbles:true,cancelable:true,composed:true,view:window,clientX:r.left+r.width/2,clientY:r.top+r.height/2,button:0,pointerId:1,pointerType:'mouse',isPrimary:true};['pointerover','pointerdown','mousedown','pointerup','mouseup','click'].forEach(t=>h.dispatchEvent(t.indexOf('pointer')===0?new PointerEvent(t,o2):new MouseEvent(t,o2)))}});
        show(card,k);
      };setTimeout(check,120);
    });
    items.forEach(e=>{});
  }
  let t;const run=()=>{cancelAnimationFrame(t);t=requestAnimationFrame(mount)};
  new MutationObserver(run).observe(document.documentElement,{childList:true,subtree:true});run();
})();


// ---- page metadata for the two overlay pages (title, description, Open Graph, X) ----
const ABOUT_META={title:"About AVERLI | Social, Campaigns, SEO & Design",desc:"Codename: AVERLI. A creative studio that looks closer at the brand, audience and message, connecting social media, Meta advertising, SEO, digital marketing and design."};
const CONTACT_META={title:"Contact AVERLI | Start a New Case Inquiry",desc:"Tell AVERLI what you are working on: social media, Meta advertising, SEO, digital marketing or brand and graphic design. Every good project starts with a conversation."};
function setPageMeta(m){
  try{
    if(document.title!==m.title)document.title=m.title;
    const set=(sel,v)=>{const e=document.head.querySelector(sel);if(e&&e.getAttribute('content')!==v)e.setAttribute('content',v);};
    set('meta[name="description"]',m.desc);set('meta[property="og:title"]',m.title);set('meta[property="og:description"]',m.desc);
    set('meta[name="twitter:title"]',m.title);set('meta[name="twitter:description"]',m.desc);
  }catch(e){}
}

// ===== Footer + Contact page + inquiry form =====
// All contact details come from AVERLI_CONTACT at the top of this file.
(()=>{
  const C=window.AVERLI_CONTACT||{};
  const EMAIL=(C.email||'').trim(),PHONE=(C.phone||'').trim(),WA=(C.whatsappNumber||'').trim(),WAD=(C.whatsappDisplay||'').trim(),ENDPOINT=(C.formEndpoint||'').trim(),PRIVACY=(C.privacyUrl||'').trim();
  const SRC=document.currentScript&&document.currentScript.src;
  let BASE='';
  try{if(SRC){const p=new URL('.',SRC).pathname;BASE=p.endsWith('/')?p.slice(0,-1):p;}}catch(e){}
  const CONTACT_PATH=BASE+'/contact';
  const isContact=()=>{const p=location.pathname.endsWith('/')?location.pathname.slice(0,-1):location.pathname;return p===CONTACT_PATH;};
  const isHome=()=>{const p=location.pathname;return p===BASE||p===BASE+'/'||p===BASE+'/index.html';};
  const reduce=()=>matchMedia('(prefers-reduced-motion: reduce)').matches;
  const tel=PHONE.split(' ').join('');
  const ARROW='<span class="ft-ar" aria-hidden="true">&#8599;</span>';

  // ---------- navigation ----------
  const RID={'/':'augiA20Il','/about':'BbQ_EKpO6','/works':'nA9oYVbz3','/contact':'Cn7Ctc01'};
  let topUntil=0;
  let pendingHash=location.hash?location.hash.slice(1):'';
  function navTo(path,hash){
    const url=(path==='/'?BASE+'/':BASE+path)+(hash?'#'+hash:'');
    const samePage=(path==='/'&&isHome())||(path!=='/'&&location.pathname.replace(/\/$/,'')===BASE+path);
    if(samePage){
      history.replaceState(history.state,'',url);
      if(hash){pendingHash=hash;scrollToHash();}else window.scrollTo({top:0,behavior:reduce()?'auto':'smooth'});
      return;
    }
    pendingHash=hash||'';
    // the template router reads its own state object on popstate, so hand it a well-formed one
    const prev=history.state&&typeof history.state==='object'?history.state:{};
    const st=Object.assign({},prev,{routeId:path.indexOf('/works/')===0?'Pp8PM4SnJ':RID[path],hash:hash||undefined,entryId:Date.now().toString(36)+'-'+Math.random().toString(36).slice(2)});
    delete st.pathVariables;if(path.indexOf('/works/')===0)st.pathVariables={KQblNzsHL:path.slice(7)};
    history.pushState(st,'',url);
    window.dispatchEvent(new PopStateEvent('popstate',{state:st}));
    topUntil=hash?0:Date.now()+1200;
    if(!hash)window.scrollTo(0,0);
    sched();setTimeout(sched,400);setTimeout(sched,900);
  }
  function scrollToHash(){
    if(!pendingHash)return;
    const el=document.getElementById(pendingHash);
    if(!el||el.getBoundingClientRect().height===0)return;
    const id=pendingHash;pendingHash='';
    const go=b=>el.scrollIntoView({behavior:b,block:'start'});
    go(reduce()?'auto':'smooth');
    setTimeout(()=>{const t=document.getElementById(id);if(t&&Math.abs(t.getBoundingClientRect().top-parseFloat(getComputedStyle(t).scrollMarginTop||0))>40)go('auto')},900);
  }
  document.addEventListener('click',e=>{
    if(e.defaultPrevented||e.button||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;
    const a=e.target.closest&&e.target.closest('a');if(!a)return;
    if(a.dataset.ctNav){
      e.preventDefault();e.stopPropagation();
      const h=a.dataset.ctHash||'';navTo(a.dataset.ctNav,h);return;
    }
    const href=a.getAttribute('href')||'';
    if(/^mailto:/i.test(href)&&(a.closest('nav')||a.closest('.framer-aqbm0g-container'))){
      e.preventDefault();e.stopPropagation();navTo('/contact');
    }
  },true);

  // ---------- footer ----------
  const link=(label,path,hash,extra)=>'<li><a class="ft-a" href="'+(path==='/'?BASE+'/':BASE+path)+(hash?'#'+hash:'')+'" data-ct-nav="'+path+'"'+(hash?' data-ct-hash="'+hash+'"':'')+'>'+label+(extra||'')+'</a></li>';
  function footerCols(){
    const contactItems=[link('Send an Inquiry','/contact','',ARROW)];
    if(EMAIL)contactItems.push('<li><a class="ft-a ft-row" href="mailto:'+EMAIL+'">'+ICON_MAIL+'<span>'+esc(EMAIL)+'</span></a></li>');
    if(WA)contactItems.push('<li><a class="ft-a ft-row" href="https://wa.me/'+WA+'" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp '+esc(WAD||WA)+' (opens in a new tab)">'+ICON_WA+'<span>'+esc(WAD||WA)+'</span></a></li>');
    if(PHONE)contactItems.push('<li><a class="ft-a" href="tel:'+tel+'" aria-label="Call '+PHONE+'">Phone</a></li>');
    return '<div class="ft-col"><p class="ft-k">Studio</p><ul>'+link('Home','/')+link('Work','/','work')+link('About','/about')+'</ul></div>'
      +'<div class="ft-col"><p class="ft-k">Services</p><ul>'+link('Social Media &amp; Content','/','services-social')+link('Campaigns &amp; Meta Advertising','/','services-campaigns')+link('SEO &amp; Digital Marketing','/','services-seo')+link('Branding &amp; Graphic Design','/','services-branding')+'</ul></div>'
      +'<div class="ft-col"><p class="ft-k">Contact</p><ul>'+contactItems.join('')+'</ul></div>';
  }
  function footers(){
    document.querySelectorAll('footer').forEach(f=>{
      const old=f.querySelector('.framer-m9i7iu');
      if(old&&!f.querySelector('.ft-cols')){
        old.classList.add('ft-old');
        const n=document.createElement('nav');n.className='ft-cols';n.setAttribute('aria-label','Footer');n.innerHTML=footerCols();
        old.parentElement.insertBefore(n,old);
      }
      const cta=f.parentElement&&f.parentElement.querySelector('.framer-aqbm0g-container a');
      const cta2=cta||f.querySelector('.framer-aqbm0g-container a');
      if(cta2){if(cta2.getAttribute('href')!==CONTACT_PATH)cta2.setAttribute('href',CONTACT_PATH);cta2.dataset.ctNav='/contact';}
    });
    // the nav link's text node carries extra rolling-text markup, so match on its first word (desktop bar and mobile menu both)
    [...document.querySelectorAll('nav a')].filter(a=>/^contact(\s|$)/i.test(a.textContent.trim())).forEach(navC=>{
      if(navC.getAttribute('href')!==CONTACT_PATH)navC.setAttribute('href',CONTACT_PATH);navC.dataset.ctNav='/contact';
      navC.classList.toggle('averli-current',isContact());
    });
  }
  function anchors(){
    if(!isHome())return;
    const w=document.querySelector('section.framer-lewzqs');if(w&&w.id!=='work')w.id='work';
    const s=document.getElementById('services');
    if(s)s.querySelectorAll('.framer-l4p4on').forEach(col=>{
      const t=col.querySelector('.framer-1x2ayhb p');if(!t)return;
      const x=t.textContent.trim().toLowerCase();
      const id=x.indexOf('social')===0?'services-social':x.indexOf('campaigns')===0?'services-campaigns':x.indexOf('seo')===0?'services-seo':x.indexOf('branding')===0?'services-branding':'';
      if(id&&col.id!==id)col.id=id;
    });
  }

  // ---------- contact page ----------
  const OPTS=['Social Media & Content','Campaigns & Meta Advertising','SEO & Digital Marketing','Branding & Graphic Design','A Combination of Services','Not Sure Yet / Something Else'];
  const esc=s=>s.split('&').join('&amp;').split('<').join('&lt;').split('>').join('&gt;');
  const field=(id,label,req,inner)=>'<div class="ct-f" data-f="'+id+'"><label class="ct-l" for="ct-'+id+'">'+label+(req?'<span class="ct-req" aria-hidden="true">*</span>':'')+'</label>'+inner+'<p class="ct-err" id="ct-e-'+id+'" hidden></p></div>';
  const ICON_MAIL='<svg class="ct-ic" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><rect x="3" y="5" width="18" height="14" rx="1.5"/><path d="M3.5 6.5l8.5 6.5 8.5-6.5"/></svg>';
  const ICON_WA='<svg class="ct-ic" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M3.2 20.8l1.3-4.6A8.9 8.9 0 1 1 8 19.6l-4.8 1.2z"/><path d="M9.2 8.3c-.3.5-.5 1.1-.3 1.8.6 2 2.4 3.9 4.6 4.7.7.3 1.4.1 1.9-.3l.5-.8-1.8-1-.8.6c-.9-.4-1.8-1.3-2.2-2.2l.5-.8-.9-1.9-.7-.1z"/></svg>';
  function directBlock(){
    return '<p class="ct-k">Prefer to reach out directly?</p><ul class="ct-dl">'
      +(EMAIL?'<li><a class="ct-dm" href="mailto:'+EMAIL+'">'+ICON_MAIL+'<span>'+esc(EMAIL)+'</span></a></li>':'')
      +(WA?'<li><a class="ct-dm" href="https://wa.me/'+WA+'" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp '+esc(WAD||WA)+' (opens in a new tab)">'+ICON_WA+'<span>'+esc(WAD||WA)+'</span></a></li>':'')
      +(PHONE?'<li><a class="ct-dm" href="tel:'+tel+'"><span>'+esc(PHONE)+'</span></a></li>':'')+'</ul>';
  }
  function pageHtml(){
    return '<div class="ct-in">'
     +'<div class="ct-head"><p class="ct-k ct-case"><span class="ct-sr">Case file / New inquiry</span><span class="ct-ty" aria-hidden="true">Case file / New inquiry</span><svg class="ct-mg" viewBox="0 0 16 16" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.1" stroke-linecap="round" aria-hidden="true" focusable="false"><circle cx="6.5" cy="6.5" r="4.6"/><path d="M10 10l4.2 4.2"/></svg></p><h1 class="ct-h">Got something in mind? Let’s look closer.</h1><p class="ct-intro">Something isn&rsquo;t working? A new idea is taking shape? Tell me what you&rsquo;re working on. Every good investigation starts with a conversation.</p></div>'
     +'<div class="ct-fw"><form class="ct-form" novalidate><div class="ct-fields">'
     +field('name','Your name',true,'<input id="ct-name" name="name" type="text" autocomplete="name" required aria-describedby="ct-e-name">')
     +field('email','Email address',true,'<input id="ct-email" name="email" type="email" autocomplete="email" inputmode="email" required aria-describedby="ct-e-email">')
     +field('brand','Your brand / business',false,'<input id="ct-brand" name="business" type="text" autocomplete="organization">')
     +field('help','What needs a closer look?',true,'<div class="ct-sel"><select id="ct-help" name="service" required aria-describedby="ct-e-help"><option value="" selected disabled>Select an option</option>'+OPTS.map(o=>'<option value="'+esc(o)+'">'+esc(o)+'</option>').join('')+'</select></div>')
     +field('msg','Tell me about the case',true,'<textarea id="ct-msg" name="message" rows="5" required placeholder="The idea, the challenge, or whatever brought you here&hellip;" aria-describedby="ct-e-msg"></textarea>')
     +'<div class="ct-hp" aria-hidden="true"><label>Leave this field empty<input type="text" name="_gotcha" tabindex="-1" autocomplete="off"><input type="text" name="_honey" tabindex="-1" autocomplete="off"></label></div>'
     +'</div><div class="ct-after"><div class="ct-act"><button class="ct-btn" type="submit"><span class="ct-bt">Send the case</span> <span class="ct-ba" aria-hidden="true">&#8599;</span></button>'
     +'<p class="ct-note">Your details are used only to respond to your inquiry.'+(PRIVACY?' <a href="'+PRIVACY+'">Privacy</a>':'')+'</p></div>'
     +'<div class="ct-st" role="status" aria-live="polite"></div></div>'
     +'</form></div>'
     +'<div class="ct-direct">'+directBlock()+'</div>'
     +'</div>';
  }
  function wire(sec){
    const form=sec.querySelector('form'),st=sec.querySelector('.ct-st'),btn=sec.querySelector('.ct-btn'),bt=sec.querySelector('.ct-bt');
    const val={
      name:v=>v.trim()?'':'Please tell me your name.',
      email:v=>!v.trim()?'Please enter your email address.':/^[^@ ]+@[^@ ]+[.][^@ ]+$/.test(v.trim())?'':'That email address doesn’t look right.',
      help:v=>v?'':'Please choose what needs a closer look.',
      msg:v=>v.trim()?'':'Please tell me about the case.'
    };
    const el={name:form.querySelector('#ct-name'),email:form.querySelector('#ct-email'),help:form.querySelector('#ct-help'),msg:form.querySelector('#ct-msg')};
    const show=(k,m)=>{
      const e=form.querySelector('#ct-e-'+k),i=el[k];if(!e||!i)return;
      e.textContent=m;e.hidden=!m;
      if(m){i.setAttribute('aria-invalid','true');}else i.removeAttribute('aria-invalid');
      i.closest('.ct-f').classList.toggle('bad',!!m);
    };
    const check=k=>{const m=val[k](el[k].value);show(k,m);return !m;};
    Object.keys(el).forEach(k=>{
      el[k].addEventListener('blur',()=>{if(el[k].value||el[k].getAttribute('aria-invalid'))check(k);});
      el[k].addEventListener('input',()=>{if(el[k].getAttribute('aria-invalid'))check(k);});
      el[k].addEventListener('change',()=>{if(el[k].getAttribute('aria-invalid'))check(k);});
    });
    let busy=false;
    const setBusy=b=>{busy=b;btn.disabled=b;btn.setAttribute('aria-busy',b?'true':'false');sec.classList.toggle('ct-busy',b);bt.textContent=b?'Sending…':'Send the case';};
    const msg=(m,err)=>{st.textContent=m;st.classList.toggle('err',!!err);};
    form.addEventListener('submit',async ev=>{
      ev.preventDefault();if(busy)return;
      msg('');
      const keys=Object.keys(el),bad=keys.filter(k=>!check(k));
      if(bad.length){el[bad[0]].focus();msg(bad.length===1?'Please check the highlighted field.':'Please check the highlighted fields.',true);return;}
      const data=new FormData(form);
      if(data.get('_gotcha')||data.get('_honey'))return;
      if(!ENDPOINT){
        msg('This form isn’t connected yet, so your message could not be sent.'+(EMAIL?' Please email '+EMAIL+' instead.':''),true);return;
      }
      data.append('_subject','New AVERLI case inquiry');data.append('_captcha','false');data.append('_template','table');
      setBusy(true);msg('Sending your inquiry…');
      try{
        const res=await fetch(ENDPOINT,{method:'POST',body:data,headers:{Accept:'application/json'}});
        let body=null;try{body=await res.json();}catch(e){}
        if(res.ok&&body&&!(body.errors&&body.errors.length)&&body.success!==false&&body.success!=='false'&&(body.ok===true||body.success===true||body.success==='true'||body.next!==undefined)){
          const w=sec.querySelector('.ct-fw');
          w.innerHTML='<div class="ct-ok" tabindex="-1" role="status"><h2>Case received.</h2><p>Your message is in. I’ll take a closer look and get back to you.</p></div>';
          const ok=w.querySelector('.ct-ok');ok.focus({preventScroll:true});
          ok.scrollIntoView({behavior:reduce()?'auto':'smooth',block:'center'});
          return;
        }
        throw new Error('rejected');
      }catch(err){
        setBusy(false);
        msg('Your inquiry could not be sent. Your details are still here — please try again'+(EMAIL?' or email '+EMAIL:'')+'.',true);
      }
    });
  }
  function contact(){
    const root=document.querySelector('.framer-76E43');
    const html=document.documentElement;
    if(!isContact()){
      if(html.classList.contains('averli-contact')){html.classList.remove('averli-contact');}
      document.querySelectorAll('[data-ct]').forEach(n=>n.remove());
      return;
    }
    html.classList.add('averli-contact');
    setPageMeta(CONTACT_META);
    if(!root||document.querySelector('[data-ct]'))return;
    const sec=document.createElement('section');sec.className='ct-page';sec.setAttribute('data-ct','1');sec.setAttribute('aria-label','Contact');
    sec.innerHTML=pageHtml();
    root.parentElement.insertBefore(sec,root.nextSibling);
    wire(sec);
    typeLabel(sec);
  }
  function typeLabel(sec){
    const box=sec.querySelector('.ct-ty');if(!box)return;
    const txt=box.textContent;box.textContent='';
    const chars=[...txt].map(ch=>{const s=document.createElement('span');s.textContent=ch;s.className='ct-c';box.appendChild(s);return s;});
    if(reduce()){chars.forEach(s=>s.classList.add('on'));return;}
    const cur=document.createElement('span');cur.className='ct-cur';cur.setAttribute('aria-hidden','true');
    const per=Math.round(1000/chars.length);let i=0;
    box.insertBefore(cur,chars[0]);
    const step=()=>{
      if(!box.isConnected)return;
      if(i>=chars.length){cur.remove();return;}
      chars[i].classList.add('on');i++;
      if(i<chars.length)box.insertBefore(cur,chars[i]);else cur.remove();
      setTimeout(step,per);
    };
    setTimeout(step,per);
  }

  function sync(){footers();anchors();contact();scrollToHash();if(topUntil>Date.now()&&!pendingHash&&window.scrollY>0)window.scrollTo(0,0);}
  let t;const sched=()=>{cancelAnimationFrame(t);t=requestAnimationFrame(sync);};
  new MutationObserver(sched).observe(document.documentElement,{childList:true,subtree:true});
  addEventListener('popstate',sched);sched();
})();

// ===== About page (CODENAME: AVERLI). Built here and shown in place of the template's About content, only on /about. =====
(()=>{
  const SRC=document.currentScript&&document.currentScript.src;
  let BASE='';
  try{if(SRC){const p=new URL('.',SRC).pathname;BASE=p.endsWith('/')?p.slice(0,-1):p;}}catch(e){}
  const isAbout=()=>{const p=location.pathname.endsWith('/')?location.pathname.slice(0,-1):location.pathname;return p===BASE+'/about';};
  const reduce=()=>matchMedia('(prefers-reduced-motion: reduce)').matches;
  const A='/assets/';
  const href=p=>BASE+p;
  const lnk=(p,txt)=>'<a class="ab-a" href="'+href(p)+'" data-ct-nav="'+p+'">'+txt+'</a>';

  // moving strip: only the six published projects, each image taken from that project's own folder
  const STRIP=[
    ['averli-gyalaktika/01-creative-training.webp','Gyalaktika Zagreb: Meta ad creative on a phone'],
    ['ackitchen/posts/post-01-graphic.webp','ACKitchen: Performance nutrition social post'],
    ['elysian-haven/grid/03_GREEN_DOORS_LOGO.webp','Elysian Haven: logo on a green door'],
    ['lastavica/posts/06_LIFESTYLE_SUNDECK_SQUARE.webp','Lastavica Cruising: lifestyle social post'],
    ['vitality-bloom/vitality-bloom-cover.webp','Vitality Bloom: packaging on a stone surface'],
    ['villa-unuk/mock/multi-spread.jpg','Villa Unuk: brochure spreads'],
    ['averli-gyalaktika/02-creative-new-group.webp','Gyalaktika Zagreb: second Meta ad creative'],
    ['ackitchen/posts/post-05-graphic.webp','ACKitchen: Nutrition is logistics social post'],
    ['elysian-haven/grid/07_GREEN_SHOPPING_BAG.webp','Elysian Haven: branded shopping bag'],
    ['lastavica/story/stori-2.jpg','Lastavica Cruising: social story'],
    ['villa-unuk/mock/marble-phone.jpg','Villa Unuk: brochure and phone on marble'],
    ['ackitchen/posts/post-04-photo.webp','ACKitchen: fresh produce photograph']];
  const stripHtml=(hidden)=>STRIP.map((s,i)=>'<figure class="ab-st"><img src="'+A+s[0]+'" alt="'+(hidden?'':s[1])+'" '+(hidden?'aria-hidden="true" ':'')+'draggable="false" '+(i<4&&!hidden?'':'loading="lazy" ')+'decoding="async"></figure>').join('');

  const PRINCIPLES=[
    ['01','Look closer','The audience, the message, the details and the numbers all leave clues. Understanding them comes before choosing the solution.'],
    ['02','Connect the dots','Good design, relevant content and purposeful campaigns shouldn’t exist in separate worlds. Every piece should support the bigger picture.'],
    ['03','Make the move','Once the direction is clear, the work begins. Thoughtful visuals, consistent communication and campaigns built around meaningful objectives.']];

  const WORK=[
    ['ackitchen','ACKitchen','Social Media & Content','ackitchen/ackitchen-cover.webp','ACKitchen: four vertical social media compositions'],
    ['gyalaktika-zagreb','Gyalaktika Zagreb','Campaigns & Meta Advertising','averli-gyalaktika/00-home-cover-wide.webp','Gyalaktika Zagreb: three phones showing Meta ad creatives'],
    ['vitality-bloom','Vitality Bloom','Branding & Graphic Design','vitality-bloom/vitality-bloom-cover.webp','Vitality Bloom: collagen powder packaging on a stone surface'],
    ['villa-unuk','Villa Unuk','Editorial & Print Design','villa-unuk/mock/multi-spread.jpg','Villa Unuk: brochure spreads laid out on a surface']];

  const AREAS=[
    ['Social Media & Content',['Social Media Management','Content Strategy','Content Planning','Content Creation','Social Media Design']],
    ['Campaigns & Meta Advertising',['Campaign Strategy','Facebook & Instagram Ads','Campaign Creatives','Audience Targeting','Campaign Optimisation']],
    ['SEO & Digital Marketing',['SEO','Digital Marketing Strategy','Online Presence','Content Optimisation']],
    ['Branding & Graphic Design',['Brand Identity','Logo Design','Graphic Design','Digital Design','Packaging','Editorial & Print Design']]];

  const FAQ=[
    ['What can AVERLI help me with?','AVERLI works across social media and content, campaigns and Meta advertising, SEO and digital marketing, and branding and graphic design. That can mean content planning and creation, Facebook and Instagram campaigns, search visibility and online presence, visual identities or design for digital and print.'],
    ['Can I book just one service?','Absolutely. You can choose a single service or combine several, depending on what your brand needs. There’s no fixed package — we’ll shape the approach around your goals.'],
    ['Do I need to have a clear brief?','Not at all. A general idea, a challenge or even a question is enough to start the conversation. We can define the direction and requirements together.'],
    ['How does a project begin?','Start by sending an inquiry through the '+lnk('/contact','Contact page')+'. We’ll discuss your business, goals and what you need, then define a suitable scope and next steps.'],
    ['How is pricing determined?','Pricing depends on the services, complexity, deliverables and timeline involved. The proposed scope and cost are discussed before work begins.'],
    ['How long does a project take?','That depends on the project. A single design deliverable, a campaign and ongoing social media management have different timelines. We’ll agree on a realistic schedule for the work.']];

  const esc=s=>s.split('&').join('&amp;');
  function html(){
    return ''
    +'<section class="ab-hero"><div class="ab-wrap">'
      +'<p class="ab-k ab-rv">About / Creative investigations</p>'
      +'<h1 class="ab-code ab-rv">Codename: AVERLI</h1>'
      +'<div class="ab-hero-row ab-rv"><p class="ab-follow">Follow the clues.<br>Find the direction.</p>'
      +'<p class="ab-lead">AVERLI is a creative studio connecting social media, campaigns, SEO, digital marketing and design. With an eye for detail and a mind for strategy, the work starts by looking closer — at the brand, the audience, the message and the opportunities others might overlook.</p></div>'
    +'</div></section>'
    +'<div class="ab-strip" aria-label="Selected work from six AVERLI projects" role="group"><div class="ab-track">'+stripHtml(false)+stripHtml(true)+'</div></div>'
    +'<section class="ab-sec"><div class="ab-wrap ab-two">'
      +'<p class="ab-k ab-rv">The way we see it</p>'
      +'<div class="ab-main ab-rv"><h2 class="ab-h">The obvious answer isn’t always the right one.</h2>'
      +'<p class="ab-p">More posts? A new visual identity? Another campaign? Maybe. But before making a move, it helps to understand what the brand actually needs. That’s where AVERLI starts.</p></div>'
      +'<ol class="ab-rows">'+PRINCIPLES.map(r=>'<li class="ab-row ab-rv"><span class="ab-n">'+r[0]+'</span><h3 class="ab-rt">'+r[1]+'</h3><p class="ab-rd">'+r[2]+'</p></li>').join('')+'</ol>'
    +'</div></section>'
    +'<section class="ab-sec ab-think"><div class="ab-wrap ab-two">'
      +'<p class="ab-k ab-rv">Behind the thinking</p>'
      +'<div class="ab-main ab-rv"><h2 class="ab-h ab-h-xl">A design eye. A marketing mind. A closer look at both.</h2>'
      +'<p class="ab-p">AVERLI brings visual design, content thinking and hands-on digital marketing together. That means looking beyond how something appears to consider what it communicates, who it reaches and what it needs to achieve.</p>'
      +'<p class="ab-sub">Different disciplines. One connected point of view.</p></div>'
    +'</div></section>'
    +'<section class="ab-sec ab-conn"><div class="ab-wrap ab-two">'
      +'<p class="ab-k ab-rv">The work connects</p>'
      +'<div class="ab-main ab-rv"><h2 class="ab-h">Different disciplines. One bigger picture.</h2>'
      +'<p class="ab-p">Sometimes the clue is in the content. Sometimes it’s in the campaign. Sometimes the identity needs a closer look. The right solution depends on what the brand actually needs.</p></div>'
      +'<ul class="ab-grid">'+WORK.map(w=>'<li class="ab-card ab-rv"><a href="'+href('/works/'+w[0])+'" data-ct-nav="/works/'+w[0]+'" aria-label="View case file: '+w[1]+'"><span class="ab-img"><img src="'+A+w[3]+'" alt="'+w[4]+'" loading="lazy" decoding="async"></span><span class="ab-cn">'+w[1]+'</span><span class="ab-cc">'+esc(w[2])+'</span></a></li>').join('')+'</ul>'
    +'</div></section>'
    +'<section class="ab-sec ab-areas"><div class="ab-wrap ab-two">'
      +'<p class="ab-k ab-rv">Areas of focus</p>'
      +'<div class="ab-main ab-rv"><h2 class="ab-h">What we investigate. What we create.</h2>'
      +'<p class="ab-p">From the first idea to the details that bring it together, AVERLI works across four connected areas.</p></div>'
      +'<div class="ab-cols">'+AREAS.map((a,i)=>'<div class="ab-col ab-rv"><h3 class="ab-ct"><span class="ab-cx">0'+(i+1)+'</span>'+esc(a[0])+'</h3><ul>'+a[1].map(i=>'<li>'+esc(i)+'</li>').join('')+'</ul></div>').join('')+'</div>'
    +'</div></section>'
    +'<section class="ab-sec ab-faq"><div class="ab-wrap ab-two ab-faq-g">'
      +'<div class="ab-fh ab-rv"><p class="ab-k">The usual questions</p><h2 class="ab-h">Before we open a case.</h2><p class="ab-p">A few things worth knowing before we get started.</p></div>'
      +'<div class="ab-acc ab-rv">'+FAQ.map((f,i)=>'<div class="ab-qa'+(i===0?' open':'')+'"><h3><button type="button" class="ab-q" id="ab-q'+i+'" aria-expanded="'+(i===0)+'" aria-controls="ab-a'+i+'"><span class="ab-qn">0'+(i+1)+'</span><span class="ab-qt">'+f[0]+'</span><span class="ab-qi" aria-hidden="true"></span></button></h3><div class="ab-ap" id="ab-a'+i+'" role="region" aria-labelledby="ab-q'+i+'"><div class="ab-ai"><p>'+f[1]+'</p></div></div></div>').join('')+'</div>'
    +'</div></section>';
  }
  function wire(page){
    page.querySelectorAll('.ab-q').forEach(b=>b.addEventListener('click',()=>{
      const qa=b.closest('.ab-qa'),open=!qa.classList.contains('open');
      page.querySelectorAll('.ab-qa.open').forEach(o=>{if(o!==qa){o.classList.remove('open');o.querySelector('.ab-q').setAttribute('aria-expanded','false');}});
      qa.classList.toggle('open',open);b.setAttribute('aria-expanded',open?'true':'false');
    }));
    const items=page.querySelectorAll('.ab-rv');
    if(reduce()||!('IntersectionObserver' in window)){items.forEach(i=>i.classList.add('in'));return;}
    const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}}),{threshold:.12,rootMargin:'0px 0px -6% 0px'});
    items.forEach(i=>io.observe(i));
    // anything already on screen reveals at once so nothing waits for a scroll
    requestAnimationFrame(()=>items.forEach(i=>{const r=i.getBoundingClientRect();if(r.top<innerHeight)i.classList.add('in');}));
  }
  function sync(){
    const html0=document.documentElement;
    if(!isAbout()){
      if(html0.classList.contains('averli-about'))html0.classList.remove('averli-about');
      document.querySelectorAll('[data-ab]').forEach(n=>n.remove());
      return;
    }
    html0.classList.add('averli-about');
    setPageMeta(ABOUT_META);
    const root=document.querySelector('.framer-76E43');
    if(!root||document.querySelector('[data-ab]'))return;
    const page=document.createElement('div');page.className='ab-page';page.setAttribute('data-ab','1');
    page.innerHTML=html();
    root.parentElement.insertBefore(page,root.nextSibling);
    wire(page);
  }
  let t;const sched=()=>{cancelAnimationFrame(t);t=requestAnimationFrame(sync);};
  new MutationObserver(sched).observe(document.documentElement,{childList:true,subtree:true});
  addEventListener('popstate',sched);sched();
})();


// ===== Lazy autoplay: videos marked data-lazyplay start only while on screen and pause when scrolled away (same muted, looping, inline behaviour; no off-screen downloading/decoding) =====
(()=>{
  if(!('IntersectionObserver' in window))return;
  const io=new IntersectionObserver(es=>es.forEach(e=>{
    const v=e.target;
    if(e.isIntersecting){const p=v.play();if(p&&p.catch)p.catch(()=>{});}else v.pause();
  }),{threshold:.2,rootMargin:'120px 0px'});
  const scan=()=>document.querySelectorAll('video[data-lazyplay]:not([data-lp])').forEach(v=>{v.dataset.lp='1';v.muted=true;io.observe(v);});
  let t;new MutationObserver(()=>{cancelAnimationFrame(t);t=requestAnimationFrame(scan);}).observe(document.documentElement,{childList:true,subtree:true});scan();
})();

// ===== Work page introduction (black header above the first project). Replaces the template's title, sentence and statistics row; everything below is untouched. =====
(()=>{
  const isWorks=()=>{const p=location.pathname.endsWith('/')?location.pathname.slice(0,-1):location.pathname;return /\/works$/.test(p);};
  const reduce=()=>matchMedia('(prefers-reduced-motion: reduce)').matches;
  const HTML='<div class="wk-in">'
    +'<p class="wk-k">The archive / Selected case files</p>'
    +'<div class="wk-row"><h1 class="wk-h">Work</h1>'
    +'<div class="wk-r"><h2 class="wk-s">Different briefs. Different clues.</h2>'
    +'<p class="wk-p">From social media strategy and Meta campaigns to branding, packaging and editorial design. Different challenges, different approaches &mdash; each one worth a closer look.</p></div></div>'
    +'<a class="wk-go" href="#case-files">Explore the case files <span aria-hidden="true">&#8600;</span></a>'
    +'</div>';
  function target(){return document.querySelector('section.framer-12e03dj .framer-dfvnfg-container');}
  function sync(){
    const root=document.querySelector('.wk-intro');
    if(!isWorks()){if(root)root.remove();document.querySelectorAll('.wk-main').forEach(m=>m.classList.remove('wk-main'));return;}
    const main=document.querySelector('main.framer-1g7i5py');
    if(!main)return;
    const first=target();if(first&&first.id!=='case-files')first.id='case-files';
    if(main.querySelector('.wk-intro'))return;
    main.classList.add('wk-main');
    const d=document.createElement('div');d.className='wk-intro';d.innerHTML=HTML;
    main.insertBefore(d,main.firstChild);
    d.querySelector('.wk-go').addEventListener('click',e=>{
      const t=target();if(!t)return;
      e.preventDefault();e.stopPropagation();
      const y=t.getBoundingClientRect().top+window.scrollY-96;
      window.scrollTo({top:y,behavior:reduce()?'auto':'smooth'});
    });
  }
  let t;const sched=()=>{cancelAnimationFrame(t);t=requestAnimationFrame(sync);};
  new MutationObserver(sched).observe(document.documentElement,{childList:true,subtree:true});
  addEventListener('popstate',sched);sched();
})();

// ===== Hero film on phones (up to 600px wide): portrait version of the film + readable live text =====
// The desktop film has its chat text baked into the video and it shrinks to unreadable size on a phone. For phones the film is
// reframed to 4:5 around the laptop, the baked chat area is replaced by a clean plate, and the same conversation is drawn as real
// text (Playfair Display, ~15px) in step with the video's clock. The desktop video and its script (hero-video.js) are untouched.
(()=>{
  const MQ=matchMedia('(max-width: 600px)');
  const reduced=matchMedia('(prefers-reduced-motion: reduce)');
  const MSRC='/assets/hero-video-mobile.mp4',MPOSTER='/assets/hero-video-mobile-poster.webp';
  const MSG=[
    {k:'u',at:1.8,t:'I keep asking myself...What should my business be doing online?'},
    {k:'a',at:3.18,cps:40,t:'Let’s start with what we know. What are you doing online right now?'},
    {k:'u',at:7.8,t:'Website, Instagram, ads… I’m just not sure what’s working.'},
    {k:'a',at:9.5,cps:20,t:'I think there’s a missing piece.'},
    {k:'u',at:13.3,t:'Okay… like what?'},
    {k:'a',at:14.28,cps:41,t:'One clear strategy connecting your content, design and campaigns.'}];
  const DOTS=[[2.4,3.18],[8.9,9.5],[13.4,14.28]];
  const FINAL_AT=16.8,TITLE={at:16.7,cps:8.5,t:'AVERLI STUDIO'},SUB_AT=17.9,HERE={at:19.25,cps:14,t:'You’re already here!'};
  const esc=s=>s.replace(/&/g,'&amp;').replace(/</g,'&lt;');
  const typed=(m,t)=>{const n=Math.max(0,Math.min(m.t.length,Math.floor((t-m.at)*m.cps)));return '<span>'+esc(m.t.slice(0,n))+'</span><span class="hv-rest">'+esc(m.t.slice(n))+'</span>';};
  function frameHtml(t){
    if(t>=FINAL_AT){
      const sub=Math.max(0,Math.min(1,(t-SUB_AT)/.5));
      return '<div class="hv-final"><p class="hv-case">CASE FILE OPENED</p><p class="hv-title">'+typed(TITLE,t)+'</p><p class="hv-sub" style="opacity:'+sub.toFixed(2)+'">SOCIAL MEDIA · CAMPAIGNS · DESIGN</p><p class="hv-here">'+(t>=HERE.at?typed(HERE,t):'&nbsp;')+'</p></div>';
    }
    let h='<div class="hv-list">';
    for(const m of MSG){
      if(t<m.at)break;
      h+=m.k==='u'?'<div class="hv-b">'+esc(m.t)+'</div>':'<p class="hv-a">'+typed(m,t)+'</p>';
    }
    if(DOTS.some(d=>t>=d[0]&&t<d[1]))h+='<div class="hv-d"><i></i><i></i></div>';
    return h+'</div>';
  }
  function bind(film){
    const video=film.querySelector('video'),source=video&&video.querySelector('source');
    if(!video||!source)return;
    const section=film.parentElement;
    let raf=0,last='';
    const screen=()=>film.querySelector('.hv-screen');
    const draw=t=>{const el=screen();if(!el)return;const h=frameHtml(t);if(h!==last){el.innerHTML=h;last=h;}};
    const tick=()=>{draw(video.currentTime);raf=requestAnimationFrame(tick);};
    const start=()=>{cancelAnimationFrame(raf);raf=requestAnimationFrame(tick);};
    const stop=()=>{cancelAnimationFrame(raf);draw(reduced.matches?21.5:video.currentTime);};
    const inView=()=>{const r=film.getBoundingClientRect();const vh=innerHeight;return r.bottom>vh*.1&&r.top<vh*.9&&!document.hidden;};
    function toMobile(){
      if(film.dataset.hv==='m')return;
      film.dataset.hv='m';film.dataset.hvSrc=source.getAttribute('src')||'';film.dataset.hvPoster=video.getAttribute('poster')||'';
      film.classList.add('hv-m');if(section)section.classList.add('hv-m-sec');
      const s=document.createElement('div');s.className='hv-screen';s.setAttribute('aria-hidden','true');film.insertBefore(s,film.querySelector('.averli-film-controls')||null);
      source.setAttribute('src',MSRC);video.setAttribute('poster',MPOSTER);video.load();
      video.addEventListener('play',start);video.addEventListener('pause',stop);video.addEventListener('seeked',()=>draw(video.currentTime));video.addEventListener('loadeddata',()=>draw(reduced.matches?21.5:video.currentTime));
      draw(reduced.matches?21.5:0);
      // the template's script only reacts to scrolling; start playback ourselves when the film is already on screen
      if(!reduced.matches)setTimeout(()=>{if(inView()){const p=video.play();if(p&&p.catch)p.catch(()=>{});}},60);
    }
    function toDesktop(){
      if(film.dataset.hv!=='m')return;
      film.dataset.hv='';cancelAnimationFrame(raf);
      film.classList.remove('hv-m');if(section)section.classList.remove('hv-m-sec');
      const s=screen();if(s)s.remove();
      source.setAttribute('src',film.dataset.hvSrc);if(film.dataset.hvPoster)video.setAttribute('poster',film.dataset.hvPoster);video.load();
      if(inView()&&!reduced.matches){const p=video.play();if(p&&p.catch)p.catch(()=>{});}
    }
    film.__hvSwitch=()=>MQ.matches?toMobile():toDesktop();
    film.__hvSwitch();
  }
  function scan(){document.querySelectorAll('.averli-hero-film').forEach(f=>{if(!f.__hvSwitch)bind(f);});}
  MQ.addEventListener('change',()=>document.querySelectorAll('.averli-hero-film').forEach(f=>f.__hvSwitch&&f.__hvSwitch()));
  let t;new MutationObserver(()=>{cancelAnimationFrame(t);t=requestAnimationFrame(scan);}).observe(document.documentElement,{childList:true,subtree:true});scan();
})();
