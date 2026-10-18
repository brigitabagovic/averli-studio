(() => {
  const labels=['Brand identity','Digital design','Social content','Campaign creative','Print design','Art direction'];
  let scheduled=false;
  const update=()=>{scheduled=false;document.querySelectorAll('[data-framer-name="Clients"] [data-framer-name="Logo"]').forEach((e,i)=>{if(!e.dataset.averliLabel)e.dataset.averliLabel=labels[i%labels.length];});};
  const observer=new MutationObserver(()=>{if(!scheduled){scheduled=true;requestAnimationFrame(update);}});
  observer.observe(document.documentElement,{childList:true,subtree:true});update();
})();
