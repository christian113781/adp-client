lucide.createIcons();
const btn=document.getElementById('menuBtn');const menu=document.getElementById('mobileMenu');
btn?.addEventListener('click',()=>menu.classList.toggle('hidden'));
menu?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>menu.classList.add('hidden')));

// Temporary demo notice: pops up every 20s (timer restarts after each close)
(()=>{
  const INTERVAL=20000;
  const modal=document.getElementById('demoModal');
  if(!modal) return;
  let timer;
  const schedule=()=>{clearTimeout(timer);timer=setTimeout(open,INTERVAL)};
  const open=()=>{
    modal.classList.add('open');modal.setAttribute('aria-hidden','false');
    modal.querySelector('.demo-card').focus();
  };
  const close=()=>{
    modal.classList.remove('open');modal.setAttribute('aria-hidden','true');
    schedule();
  };
  modal.querySelectorAll('[data-demo-close]').forEach(el=>el.addEventListener('click',close));
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&modal.classList.contains('open'))close()});
  schedule();
})();
