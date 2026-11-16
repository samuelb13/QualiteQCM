const $=s=>document.querySelector(s),KEY="revisions-qualite-v1",XK="revisions-qualite-xp";
let P={},XP=0;try{P=JSON.parse(localStorage.getItem(KEY)||"{}");XP=+localStorage.getItem(XK)||0}catch(e){}
const save=()=>{try{localStorage.setItem(KEY,JSON.stringify(P));localStorage.setItem(XK,XP)}catch(e){}};
const ALL=[];THEMES.forEach(t=>t.q.forEach((x,i)=>ALL.push({id:t.id+"-"+i,t:t.id,q:x[0],o:x.slice(1,5),e:x[5]||"Bonne réponse : "+x[1]})));
const shuf=a=>{a=[...a];for(let i=a.length-1;i>0;i--){const j=Math.random()*(i+1)|0;[a[i],a[j]]=[a[j],a[i]]}return a};
const pct=l=>l.length?Math.round(100*l.filter(q=>P[q.id]===1).length/l.length):0;
const wrong=()=>ALL.filter(q=>P[q.id]===0);
const medal=p=>p>=90?"🥇":p>=70?"🥈":p>=40?"🥉":"";
const lvl=()=>{$("#lvl").textContent="⭐ Niv. "+(Math.floor(XP/100)+1)+" · "+XP+" XP"};
let timer=null;
function route(){clearInterval(timer);const h=location.hash||"#/",[,v,id]=h.split("/");lvl();
 document.querySelectorAll("header a").forEach(a=>a.classList.toggle("on",a.getAttribute("href")===h));
 if(v==="fiche")fiche(id);else if(v==="qcm")start(id==="retravailler"?wrong():ALL.filter(q=>q.t===id),id==="retravailler"?"Questions à retravailler":THEMES.find(t=>t.id===id).nom);
 else if(v==="exos")exos();else if(v==="ex")exo(id);else if(v==="examen")examen();else home()}
function home(){const w=wrong().length;
 $("main").innerHTML=`<div class="card hero"><div class="emojis">🎓</div><h1>Prêt à réviser la qualité ?</h1><div class="row" style="justify-content:center"><div><div class="big">${pct(ALL)} %</div><span class="mut">réussite · ${ALL.filter(q=>q.id in P).length}/${ALL.length} questions vues</span></div></div><p><a class="btn" href="#/examen">⏱️ Examen blanc</a></p></div>
 <div class="card row"><div class="grow"><b>🧩 Exercices variés</b><div class="mut">Relier, frises à compléter, classer, remettre dans l’ordre.</div></div><a class="btn" href="#/exos">Y aller</a></div>
 ${w?`<div class="card row"><div class="grow"><b>🎯 ${w} question${w>1?"s":""} à retravailler</b><div class="mut">Tes dernières erreurs, à transformer en points.</div></div><a class="btn" href="#/qcm/retravailler">Les revoir</a></div>`:""}
 ${THEMES.map(t=>{const l=ALL.filter(q=>q.t===t.id),p=pct(l);return`<div class="card theme" style="--c:${t.col}"><div class="row"><span class="ico">${t.ico}</span><div class="grow"><b>${t.nom}</b> <span class="tag">${t.src}</span> <span class="medal">${medal(p)}</span><div class="bar"><i style="width:${p}%"></i></div><span class="mut">${p} % · ${l.length} questions</span></div><a class="btn sec" href="#/fiche/${t.id}">📖 Fiche</a><a class="btn" href="#/qcm/${t.id}">▶ QCM</a></div></div>`}).join("")}
 <p class="mut">🥉 40 % · 🥈 70 % · 🥇 90 % de réussite par thème. <button class="sec" id="rz">Tout remettre à zéro</button></p>`;
 $("#rz").onclick=()=>{if(confirm("Effacer toute ta progression ?")){P={};XP=0;save();route()}}}
function fiche(id){const t=THEMES.find(x=>x.id===id);
 $("main").innerHTML=`<a href="#/">← Retour</a><h1>${t.ico} ${t.nom}</h1><div class="card fiche theme" style="--c:${t.col}">${t.fiche}</div><a class="btn" href="#/qcm/${id}">S’entraîner sur ce thème</a>`}
function start(list,titre){
 if(!list.length){$("main").innerHTML=`<a href="#/">← Retour</a><h1>${titre}</h1><div class="card">Rien à retravailler, bravo ! 🎉</div>`;return}
 run(shuf(list),{titre})}
function examen(){const per=Math.ceil(24/THEMES.length);let l=[];THEMES.forEach(t=>l.push(...shuf(ALL.filter(q=>q.t===t.id)).slice(0,per)));l=shuf(l).slice(0,20);
 $("main").innerHTML=`<a href="#/">← Retour</a><h1>⏱️ Examen blanc</h1><div class="card"><p>${l.length} questions mélangées, 20 minutes. Corrections à la fin.</p><button id="go">C’est parti</button></div>`;
 $("#go").onclick=()=>run(l,{titre:"Examen blanc",exam:true,sec:1200})}
function run(list,{titre,exam,sec}){let i=0,score=0,miss=[],left=sec,streak=0,gain=0,tk=()=>{};
 const end=()=>{clearInterval(timer);const p=Math.round(100*score/list.length);save();lvl();
  $("main").innerHTML=`<div class="card hero"><div class="emojis">${p>=80?"🏆🎉":p>=50?"👍":"💪"}</div><h1>${titre} : ${score}/${list.length}</h1><div class="big">${p} %</div><div class="bar"><i style="width:${p}%"></i></div><b>+${gain} XP</b></div>
  ${miss.length?`<h2>À revoir</h2>`+miss.map(m=>`<div class="card"><b>${m.q}</b><p>✅ <b>${m.o[0]}</b>${m.pick?`<br><span class="mut">❌ Ta réponse : ${m.pick}</span>`:""}</p><div class="mut">${m.e}</div></div>`).join(""):`<div class="card">Aucune erreur, parfait ! 🌟</div>`}
  <a class="btn" href="#/">Accueil</a> <button class="sec" onclick="route()">Recommencer</button>`};
 const show=()=>{const q=list[i],opts=shuf(q.o.map((t,k)=>({t,ok:k===0})));
  $("main").innerHTML=`<div class="row"><a href="#/">✕</a><span class="grow mut">${titre} · ${i+1}/${list.length}</span>${streak>1?`<span class="fire">🔥 ${streak}</span>`:""}${exam?`<b id="tm"></b>`:""}</div><div class="bar"><i style="width:${100*i/list.length}%"></i></div><h2>${q.q}</h2><div>${opts.map((o,k)=>`<button class="opt" data-k="${k}">${o.t}</button>`).join("")}</div><div id="fb"></div>`;
  tk=()=>{if($("#tm"))$("#tm").textContent="⏱️ "+Math.floor(left/60)+":"+String(left%60).padStart(2,"0")};tk();
  document.querySelectorAll(".opt").forEach(b=>b.onclick=()=>{const o=opts[b.dataset.k];P[q.id]=o.ok?1:0;let g=0;
   if(o.ok){score++;streak++;g=10+Math.min(streak-1,5)*2}else{streak=0;miss.push({...q,pick:o.t})}
   XP+=g;gain+=g;save();lvl();
   if(exam){next();return}
   document.querySelectorAll(".opt").forEach((x,k)=>{x.disabled=true;if(opts[k].ok)x.classList.add("ok")});if(!o.ok)b.classList.add("ko");
   $("#fb").innerHTML=`<div class="expl ${o.ok?"g":"b"}"><b>${o.ok?"Bien joué ! +"+g+" XP":"Pas cette fois."}</b><br>${q.e}</div><button id="nx">${i+1<list.length?"Suivante":"Résultat"}</button>`;$("#nx").onclick=next;$("#nx").focus()})};
 const next=()=>{i++;i<list.length?show():end()};
 if(exam)timer=setInterval(()=>{left--;if(left<=0){list.slice(i).forEach(q=>miss.push({...q}));end()}else tk()},1000);
 show()}

const KL={rel:"🔗 Relier termes et définitions",fri:"📅 Frises à compléter",cla:"🗂️ Classer",ord:"🔢 Remettre dans l’ordre"};
function exos(){$("main").innerHTML=`<a href="#/">← Retour</a><h1>🧩 Exercices variés</h1>`+Object.keys(KL).map(k=>`<h2>${KL[k]}</h2>`+EX.filter(e=>e.k===k).map(e=>`<div class="card row"><div class="grow"><b>${e.t}</b></div><span>${P["ex-"+e.id]===1?"✅":P["ex-"+e.id]===0?"❌":""}</span><a class="btn" href="#/ex/${e.id}">Jouer</a></div>`).join("")).join("")}
function exo(id){const e=EX.find(x=>x.id===id);$("main").innerHTML=`<a href="#/exos">← Retour</a><h1>${e.t}</h1><div id="ex"></div><p><button id="ck">Vérifier</button> <button class="sec" id="rs">Recommencer</button></p><div id="res"></div>`;
 $("#rs").onclick=()=>exo(id);
 const done=(ok,n)=>{const g=ok*5;XP+=g;P["ex-"+id]=ok===n?1:0;save();lvl();$("#ck").disabled=true;$("#res").innerHTML=`<div class="card hero"><div class="emojis">${ok===n?"🎉":"💪"}</div><b>${ok}/${n} · +${g} XP</b></div>`};
 if(e.k==="ord"){let L=shuf(e.items);if(L.join()===e.items.join())L.reverse();
  const draw=()=>{$("#ex").innerHTML=L.map((t,i)=>`<div class="card oi"><span>${t}</span><button class="sec" data-m="${i}" data-d="-1">↑</button><button class="sec" data-m="${i}" data-d="1">↓</button></div>`).join("");
   document.querySelectorAll(".oi button").forEach(b=>b.onclick=()=>{const i=+b.dataset.m,j=i+ +b.dataset.d;if(j<0||j>=L.length)return;[L[i],L[j]]=[L[j],L[i]];draw()})};draw();
  $("#ck").onclick=()=>{let ok=0;document.querySelectorAll(".oi").forEach((c,i)=>{const g=L[i]===e.items[i];if(g)ok++;c.classList.add(g?"ok":"ko");if(!g)c.querySelector("span").innerHTML+=`<small>✅ ${e.items[i]}</small>`;c.querySelectorAll("button").forEach(b=>b.remove())});done(ok,L.length)}}
 else{const O=e.opts||shuf([...new Set(e.rows.map(r=>r[1]))]);
  $("#ex").innerHTML=e.rows.map((r,i)=>`<div class="card xr"><div>${r[0]}</div><select><option value="">Choisir…</option>${O.map((o,k)=>`<option value="${k}">${o}</option>`).join("")}</select></div>`).join("");
  $("#ck").onclick=()=>{let ok=0;document.querySelectorAll(".xr").forEach((c,i)=>{const v=c.querySelector("select").value,g=v!==""&&O[v]===e.rows[i][1];if(g)ok++;c.classList.add(g?"ok":"ko");if(!g)c.firstElementChild.innerHTML+=`<small>✅ ${e.rows[i][1]}</small>`;c.querySelector("select").disabled=true});done(ok,e.rows.length)}}}
window.addEventListener("hashchange",route);route();
