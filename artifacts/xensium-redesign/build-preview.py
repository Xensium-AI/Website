import re
css = open('snap.css').read()
body = open('snap-body.html').read()
css = re.sub(r'@font-face\s*\{[^}]*\}', '', css)
css = ':root{--font-manrope:"Manrope";}\n' + css
css = re.sub(r'url\(/_next/[^)]*\)', 'none', css)

def from_css(name):
    """Read the real hashed class name out of the compiled stylesheet.

    Deriving it from the markup fails: an inactive-at-snapshot class never
    appears in the body, and every CSS-Modules class gets its OWN hash, so
    borrowing another class's suffix produces a name that does not exist.
    """
    m = re.search(r'\.(' + name + r'__[A-Za-z0-9_-]+)', css)
    if not m:
        raise SystemExit('FATAL: %s not found in stylesheet' % name)
    return m.group(1)

NAV   = from_css('Header_linkActive')
MOPEN = from_css('Header_mobileOpen')
MACT  = from_css('Header_mobileLinkActive')
print('resolved classes:', NAV, MOPEN, MACT)

shim = 'var NAV_ACTIVE="%s",MOBILE_OPEN="%s",MOBILE_ACTIVE="%s";\n' % (NAV, MOPEN, MACT) + r'''
(function(){
  var q=function(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s));};
  var lock=0;

  /* ---- transcript: replay the call turn by turn, then loop ---- */
  (function(){
    var box=document.querySelector('[class*="LiveCallDemo_transcript"]');
    var actions=document.querySelector('[class*="LiveCallDemo_actions"]');
    if(!box) return;
    var turns=q('[class*="LiveCallDemo_aiTurn"],[class*="LiveCallDemo_callerTurn"]',box);
    if(!turns.length) return;
    var typing=null;
    var av=turns[0].querySelector('span');
    function makeTyping(){
      var d=document.createElement('div');
      d.style.cssText='display:flex;gap:9px;align-items:center';
      d.innerHTML='<span style="flex:none;width:28px;height:28px;border-radius:8px;background:#e7f5fd;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:12px;color:#06699f">Xe</span>'+
        '<div style="display:flex;gap:4px;background:#eef2f7;padding:11px 14px;border-radius:12px">'+
        '<span class="tdot"></span><span class="tdot" style="animation-delay:.2s"></span><span class="tdot" style="animation-delay:.4s"></span></div>';
      return d;
    }
    var t=[];
    function clear(){ t.forEach(clearTimeout); t=[]; if(typing&&typing.parentNode){typing.parentNode.removeChild(typing);} typing=null; }
    function play(){
      clear();
      turns.forEach(function(el){el.style.display='none';});
      if(actions) actions.style.display='none';
      var d=500;
      turns.forEach(function(el,i){
        t.push(setTimeout(function(){
          if(typing&&typing.parentNode){typing.parentNode.removeChild(typing);typing=null;}
          el.style.display='';
          el.style.animation='none'; void el.offsetWidth; el.style.animation='';
          box.scrollTop=box.scrollHeight;
          if(i<turns.length-1){
            typing=makeTyping(); box.appendChild(typing); box.scrollTop=box.scrollHeight;
          }
        },d));
        d+=1400;
      });
      t.push(setTimeout(function(){
        if(actions){actions.style.display='';}
        box.scrollTop=box.scrollHeight;
      },d));
      t.push(setTimeout(play,d+3200));
    }
    var st=document.createElement('style');
    st.textContent='.tdot{width:6px;height:6px;border-radius:50%;background:#0877b9;animation:tblink 1.2s infinite}@keyframes tblink{0%,80%,100%{opacity:.25}40%{opacity:1}}';
    document.head.appendChild(st);
    var rp=document.querySelector('[class*="LiveCallDemo_replay"]');
    if(rp) rp.addEventListener('click',play);
    if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches) play();
  })();

  /* ---- FAQ accordion ---- */
  q('#faq button').forEach(function(btn){
    btn.addEventListener('click',function(){
      var open=btn.getAttribute('aria-expanded')==='true';
      q('#faq button').forEach(function(b){
        b.setAttribute('aria-expanded','false');
        var w=document.getElementById(b.getAttribute('aria-controls'));
        if(w){w.setAttribute('aria-hidden','true');w.style.gridTemplateRows='0fr';}
        var i=b.querySelector('span:last-child'); if(i) i.style.transform='rotate(0deg)';
      });
      if(!open){
        btn.setAttribute('aria-expanded','true');
        var w=document.getElementById(btn.getAttribute('aria-controls'));
        if(w){w.setAttribute('aria-hidden','false');w.style.gridTemplateRows='1fr';}
        var i=btn.querySelector('span:last-child'); if(i) i.style.transform='rotate(45deg)';
      }
    });
  });

  /* ---- mobile menu ---- */
  var mb=document.querySelector('button[aria-controls="mobile-nav"]'), mn=document.getElementById('mobile-nav');
  if(mb&&mn){
    mb.addEventListener('click',function(){
      var open=mb.getAttribute('aria-expanded')==='true';
      mb.setAttribute('aria-expanded',String(!open));
      if(open){mn.setAttribute('hidden','');mn.classList.remove(MOBILE_OPEN);}
      else{mn.removeAttribute('hidden');mn.classList.add(MOBILE_OPEN);}
    });
    q('a',mn).forEach(function(a){a.addEventListener('click',function(){
      mb.setAttribute('aria-expanded','false');mn.setAttribute('hidden','');mn.classList.remove(MOBILE_OPEN);});});
  }

  /* ---- scroll spy that holds the clicked item ---- */
  var links=q('nav[aria-label="Main"] a[href^="#"], #mobile-nav a[href^="#"]');
  var ids=['problem','solution','features','how-it-works','results','faq'];
  function mark(id){
    links.forEach(function(a){
      var on=a.getAttribute('href')==='#'+id;
      if(on)a.setAttribute('aria-current','location'); else a.removeAttribute('aria-current');
      if(a.closest('#mobile-nav')) a.classList.toggle(MOBILE_ACTIVE,on);
      else a.classList.toggle(NAV_ACTIVE,on);
    });
  }
  links.forEach(function(a){a.addEventListener('click',function(){
    lock=Date.now()+900; mark(a.getAttribute('href').slice(1));});});
  var frame=0;
  function pick(){
    frame=0;
    if(Date.now()<lock) return;
    var hdr=document.querySelector('header');
    var line=(hdr?hdr.offsetHeight:68)+24, cur='';
    ids.forEach(function(id){
      var el=document.getElementById(id);
      if(el&&el.getBoundingClientRect().top<=line) cur=id;
    });
    if(window.innerHeight+window.scrollY>=document.body.scrollHeight-4) cur=ids[ids.length-1];
    mark(cur);
  }
  window.addEventListener('scroll',function(){ if(!frame) frame=requestAnimationFrame(pick); },{passive:true});
  pick();
})();'''

page = '''<title>Xensium Redesign Preview</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<style>
html{background:#fff;}
body{margin:0;background:#fff;color:#0d1729;font-family:"Manrope",system-ui,sans-serif;}
%s
</style>
%s
<script>%s</script>
''' % (css, body, shim)
open('/home/user/Website/artifacts/xensium-redesign/preview.html','w').write(page)
print('preview rebuilt:', len(page), 'bytes')
