(() => {
  const reduced=matchMedia('(prefers-reduced-motion: reduce)');
  const mounted=new Map();
  let settings={video:'/assets/hero-video.mp4',poster:'/assets/hero-video-poster.webp',transcript:[]};
  const label=(button,text)=>{button.textContent=text;button.setAttribute('aria-label',text+' hero film');};
  function mount(section){
    if(mounted.has(section))return;
    const film=document.createElement('div');film.className='averli-hero-film';film.dataset.averliFilm='';
    const video=document.createElement('video');video.className='averli-hero-video';video.muted=true;video.loop=true;video.defaultMuted=true;video.playsInline=true;video.preload='metadata';video.poster=settings.poster;video.setAttribute('aria-label','AVERLI studio introduction, shown on a laptop');video.setAttribute('playsinline','');
    const source=document.createElement('source');source.src=settings.video;source.type='video/mp4';video.append(source);
    const controls=document.createElement('div');controls.className='averli-film-controls';
    const caption=document.createElement('span');caption.className='averli-film-caption';caption.textContent='Design · Social · Performance';
    const toggle=document.createElement('button');toggle.type='button';label(toggle,'Play');
    const expand=document.createElement('button');expand.type='button';expand.textContent='Full screen ↗';expand.setAttribute('aria-label','View hero film full screen');
    const transcript=document.createElement('div');transcript.className='averli-film-transcript';transcript.id='averli-film-transcript';transcript.textContent=settings.transcript.join(' ');video.setAttribute('aria-describedby',transcript.id);
    controls.append(caption,toggle,expand);film.append(video,controls,transcript);
    let inView=false,userPaused=false;
    const play=()=>{video.play().catch(()=>label(toggle,'Play'));};
    const sync=()=>{if(inView&&!document.hidden&&!userPaused&&!reduced.matches&&!video.ended)play();else video.pause();};
    const observer=new IntersectionObserver(entries=>{inView=entries[0].isIntersecting&&entries[0].intersectionRatio>=.4;sync();},{threshold:[0,.4,.8]});
    video.addEventListener('play',()=>label(toggle,'Pause'));
    video.addEventListener('pause',()=>{if(!video.ended)label(toggle,'Play');});
    video.addEventListener('ended',()=>{userPaused=true;label(toggle,'Replay');film.classList.add('film-complete');});
    video.addEventListener('error',()=>{film.classList.add('film-error');caption.textContent='The film could not load. Please refresh to try again.';});
    toggle.addEventListener('click',()=>{if(video.paused||video.ended){if(video.ended){video.currentTime=0;film.classList.remove('film-complete');}userPaused=false;play();}else{userPaused=true;video.pause();}});
    expand.addEventListener('click',()=>{if(film.requestFullscreen)film.requestFullscreen().catch(()=>{});else if(video.webkitEnterFullscreen)video.webkitEnterFullscreen();});
    const onMotion=()=>sync();reduced.addEventListener('change',onMotion);
    document.addEventListener('visibilitychange',sync);
    section.classList.add('averli-film-section');
    // The film fills the existing template media section. Native section transitions remain in place.
    section.append(film);observer.observe(section);
    mounted.set(section,()=>{observer.disconnect();video.pause();video.removeAttribute('src');source.removeAttribute('src');video.load();reduced.removeEventListener('change',onMotion);document.removeEventListener('visibilitychange',sync);});
  }
  function update(){
    for(const [section,dispose]of mounted)if(!section.isConnected){dispose();mounted.delete(section);}
    const section=document.querySelector('[data-framer-name="Hero Image "]');if(section)mount(section);
  }
  let scheduled=false;
  const observer=new MutationObserver(()=>{if(!scheduled){scheduled=true;requestAnimationFrame(()=>{scheduled=false;update();});}});
  fetch('/content.json').then(r=>r.ok?r.json():null).then(content=>{if(content?.hero?.video)settings={video:content.hero.video,poster:content.hero.poster||settings.poster,transcript:content.hero.videoTranscript||[]};}).catch(()=>{}).finally(()=>{observer.observe(document.documentElement,{childList:true,subtree:true});update();});
})();
