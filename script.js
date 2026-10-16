const $=s=>document.querySelector(s),R=document.documentElement;
const T={fr:{},
en:{n1:"About",n2:"Background",n3:"Projects",n4:"Skills",n5:"Community & Passions",n6:"Contact",
role:"3rd-year E-Business student – ESSECT, Tunis",intro:"Passionate about computer science, AI and art, I build practical solutions that blend technical skill and creativity.",cv:"Download my CV",
a1:"Third-year E-Business student at ESSECT, among the top performers at my university, with a strong background in computer science, information systems, web development, databases, artificial intelligence and digital technologies.",
a2:"Alongside my studies, I nurture a genuine passion for art, creativity and theatre. Curious by nature, I enjoy understanding complex problems, finding answers and designing concrete solutions.",
e1:"Bachelor's – E-Business",e2:"Internship at Discovery",e3:"Research Internship at Université Laval",
p1:"E-Commerce Web Platform",p1d:"Web application with two access levels: user accounts and an owner account able to add products and set prices. Users interact through comments and ratings.",
p2:"Challenge Platform",p2d:"Platform for creating challenges, with user interaction through ratings and comments.",
p3:"Student Study-Tracking App (Java)",p3d:"Java application helping students organize their studies with tracking dashboards and AI-powered progress statistics.",
p4:"Chatbot",p4d:"Design and development of a chatbot.",
k1:"Web",k1c:"Web integration",k2:"Data & AI",k2b:"Artificial intelligence",k3:"Software Engineering",k3c:"Algorithms & data structures",k3d:"IT project management",k4:"Soft skills",
soft:"Creativity, analytical thinking, curiosity, proposing new ideas, adaptability, teamwork, autonomy, stress management.",
c1:"Community involvement",c2:"Passions",hob:"Theatre, painting, reading, dance.",c3:"Languages",lng:"French, Arabic, English.",
send:"Send",fname:"Your name",femail:"Your email",fmsg:"Your message"},
ar:{n1:"نبذة عني",n2:"المسار",n3:"المشاريع",n4:"المهارات",n5:"الالتزام والهوايات",n6:"اتصل بي",
role:"طالبة في السنة الثالثة تجارة إلكترونية – ESSECT، تونس",intro:"شغوفة بالإعلامية والذكاء الاصطناعي والفن، أبتكر حلولًا عملية تجمع بين التقنية والإبداع.",cv:"تحميل سيرتي الذاتية",
a1:"طالبة في السنة الثالثة تجارة إلكترونية بـ ESSECT ومن بين المتفوقين في جامعتي، بخلفية تقنية قوية في الإعلامية ونظم المعلومات وتطوير الويب وقواعد البيانات والذكاء الاصطناعي والتكنولوجيات الرقمية.",
a2:"إلى جانب دراستي، أنمّي شغفًا حقيقيًا بالفن والإبداع والمسرح. أحب فهم المشكلات المعقدة وإيجاد الإجابات وتصميم حلول ملموسة.",
e1:"إجازة – تجارة إلكترونية",e2:"تربص في Discovery",e3:"تربص بحثي في جامعة لافال",
p1:"منصة تجارة إلكترونية",p1d:"تطبيق ويب بمستويي وصول: حسابات المستخدمين وحساب المالك القادر على إضافة المنتجات وتحديد الأسعار. يتفاعل المستخدمون عبر التعليقات والتقييمات.",
p2:"منصة التحديات",p2d:"منصة لإنشاء التحديات مع تفاعل المستخدمين عبر التقييمات والتعليقات.",
p3:"تطبيق Java لمتابعة الدراسة",p3d:"تطبيق Java يساعد الطلبة على تنظيم دراستهم عبر لوحات متابعة وإحصائيات مدعومة بالذكاء الاصطناعي.",
p4:"روبوت محادثة",p4d:"تصميم وتطوير روبوت محادثة.",
k1:"الويب",k1c:"إدماج الويب",k2:"البيانات والذكاء الاصطناعي",k2b:"الذكاء الاصطناعي",k3:"هندسة البرمجيات",k3c:"الخوارزميات وهياكل البيانات",k3d:"إدارة المشاريع المعلوماتية",k4:"المهارات الشخصية",
soft:"الإبداع، التفكير التحليلي، الفضول، اقتراح الأفكار، التأقلم، العمل الجماعي، الاستقلالية، إدارة الضغط.",
c1:"العمل الجمعوي",c2:"الهوايات",hob:"المسرح، الرسم، القراءة، الرقص.",c3:"اللغات",lng:"الفرنسية، العربية، الإنجليزية.",
send:"إرسال",fname:"اسمك",femail:"بريدك الإلكتروني",fmsg:"رسالتك"}};
// capture French from the page itself (single source of truth for SEO)
document.querySelectorAll('[data-i]').forEach(e=>T.fr[e.dataset.i]=e.textContent);
document.querySelectorAll('[data-ph]').forEach(e=>T.fr[e.dataset.ph]=e.placeholder);
function setLang(l){
  R.lang=l;R.dir=l==='ar'?'rtl':'ltr';$('#lang').value=l;try{localStorage.setItem('l',l)}catch(e){}
  document.querySelectorAll('[data-i]').forEach(e=>e.textContent=T[l][e.dataset.i]);
  document.querySelectorAll('[data-ph]').forEach(e=>e.placeholder=T[l][e.dataset.ph]);
}
$('#lang').onchange=e=>setLang(e.target.value);
function setTheme(t){R.dataset.theme=t;$('#th').textContent=t==='dark'?'🌙':'☀️';try{localStorage.setItem('t',t)}catch(e){}}
$('#th').onclick=()=>setTheme(R.dataset.theme==='dark'?'light':'dark');
let sl,st;try{sl=localStorage.getItem('l');st=localStorage.getItem('t')}catch(e){}
setTheme(st||'dark');if(sl&&T[sl]&&sl!=='fr')setLang(sl);
$('#f').onsubmit=e=>{e.preventDefault();
  location.href=`mailto:menifaicha@gmail.com?subject=${encodeURIComponent('Portfolio – '+$('#fn').value)}&body=${encodeURIComponent($('#fm').value+'\n\n'+$('#fe').value)}`};
const io=new IntersectionObserver(es=>es.forEach(x=>x.isIntersecting&&x.target.classList.add('in')),{threshold:.12});
document.querySelectorAll('.rv').forEach(e=>io.observe(e));
// particles
const c=$('#bg'),x=c.getContext('2d');let W,H,P=[],m={x:-999,y:-999};
function rs(){W=c.width=innerWidth;H=c.height=innerHeight;P=Array.from({length:Math.min(110,Math.floor(W*H/14000))},()=>({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.5,vy:(Math.random()-.5)*.5,r:Math.random()*2+1,c:Math.random()<.5?'192,132,252':'244,114,182'}))}
addEventListener('resize',rs);addEventListener('mousemove',e=>{m.x=e.clientX;m.y=e.clientY});
addEventListener('touchmove',e=>{m.x=e.touches[0].clientX;m.y=e.touches[0].clientY},{passive:true});
(function loop(){x.clearRect(0,0,W,H);const lt=R.dataset.theme==='light',a=lt?.55:.8;
  for(const p of P){const dx=p.x-m.x,dy=p.y-m.y,d=Math.hypot(dx,dy);if(d<140){p.x+=dx/d*2;p.y+=dy/d*2}
    p.x+=p.vx;p.y+=p.vy;if(p.x<0||p.x>W)p.vx*=-1;if(p.y<0||p.y>H)p.vy*=-1;
    x.beginPath();x.arc(p.x,p.y,p.r,0,6.283);x.fillStyle=`rgba(${p.c},${a})`;x.fill()}
  for(let i=0;i<P.length;i++)for(let j=i+1;j<P.length;j++){const d=Math.hypot(P[i].x-P[j].x,P[i].y-P[j].y);
    if(d<110){x.strokeStyle=`rgba(${P[i].c},${(1-d/110)*(lt?.25:.35)})`;x.lineWidth=.7;x.beginPath();x.moveTo(P[i].x,P[i].y);x.lineTo(P[j].x,P[j].y);x.stroke()}}
  requestAnimationFrame(loop)})();
rs();
