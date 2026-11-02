/* Motor común de las páginas de viaje · Gemeenschappelijke motor voor de reispagina's */
(function(){
const V = window.VIAJE;

const T = {
  nl: {
    demo:"Voorbeeldsjabloon · het definitieve programma verschijnt hier",
    programa:"Programma", diaadia:"Dag per dag", practico:"Praktische info", antes:"Voor vertrek",
    llevar:"Wat meenemen", aloj:"Verblijf", salida:"Vertrek", regreso:"Terugkeer", organiza:"Organisatie", precio:"Prijs",
    dia:"Dag", dias:"dagen", dia1:"dag", todo:"Alles", todoSub:"Volledig programma",
    imprimir:"🖨️ Programma afdrukken", compartir:"📤 Delen", copiado:"Link gekopieerd",
    ant:"← Vorige dag", sig:"Volgende dag →", faltan:n=>`Nog ${n} dagen`, manana:"Morgen is het zover!", viaje:"We zijn op reis!",
    days:["zondag","maandag","dinsdag","woensdag","donderdag","vrijdag","zaterdag"],
    months:["januari","februari","maart","april","mei","juni","juli","augustus","september","oktober","november","december"],
    fecha:(d,m)=>`${d} ${m}`,
    tags:{encuentro:"Vertrek",bus:"Bus",tren:"Trein",metro:"Metro",taxi:"Taxi",visita:"Bezoek",compras:"Winkelen",comida:"Eten",actividad:"Activiteit",libre:"Vrije tijd",hotel:"Hotel",vuelta:"Terugreis"},
    plan:"Plan", sub:"Ledenreis"
  },
  es: {
    demo:"Plantilla de ejemplo · el programa definitivo se publicará aquí",
    programa:"Programa", diaadia:"Día a día", practico:"Información práctica", antes:"Antes de salir",
    llevar:"Qué llevar", aloj:"Alojamiento", salida:"Salida", regreso:"Regreso", organiza:"Organiza", precio:"Precio",
    dia:"Día", dias:"días", dia1:"día", todo:"Todo", todoSub:"Ver el programa entero",
    imprimir:"🖨️ Imprimir programa", compartir:"📤 Compartir", copiado:"Enlace copiado",
    ant:"← Día anterior", sig:"Próximo día →", faltan:n=>`Faltan ${n} días`, manana:"¡Es mañana!", viaje:"¡Estamos de viaje!",
    days:["domingo","lunes","martes","miércoles","jueves","viernes","sábado"],
    months:["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"],
    fecha:(d,m)=>`${d} de ${m}`,
    tags:{encuentro:"Salida",bus:"Autobús",tren:"Tren",metro:"Metro",taxi:"Taxi",visita:"Visita",compras:"Compras",comida:"Comida",actividad:"Actividad",libre:"Descanso",hotel:"Hotel",vuelta:"Regreso"},
    plan:"Plan", sub:"Viaje de socios"
  }
};
const ICON = {encuentro:"📍",bus:"🚌",tren:"🚆",metro:"🚇",taxi:"🚕",visita:"🏛️",compras:"🛍️",comida:"🍽️",actividad:"✨",libre:"☕",hotel:"🛏️",vuelta:"🏠"};

let LANG = "nl";
try{ const s = localStorage.getItem("calb-lang"); if (s==="es"||s==="nl") LANG = s; }catch(e){}
const L = () => T[LANG];
const tr = x => (x && typeof x === "object" && !Array.isArray(x)) ? (x[LANG] ?? x.es ?? x.nl ?? "") : (x ?? "");
const esc = s => String(tr(s)||"").replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const D = s => { const [y,m,d]=s.split("-").map(Number); return new Date(y,m-1,d); };
const cap = s => s.charAt(0).toUpperCase()+s.slice(1);
const fmt = s => { const d=D(s); return `${L().days[d.getDay()]} ${L().fecha(d.getDate(), L().months[d.getMonth()])}`; };
const $ = id => document.getElementById(id);

const hoy = new Date(); hoy.setHours(0,0,0,0);
const hoyStr = `${hoy.getFullYear()}-${String(hoy.getMonth()+1).padStart(2,"0")}-${String(hoy.getDate()).padStart(2,"0")}`;

/* Día por defecto: la fecha de hoy si es día de viaje; si no, el mismo día de la semana; si no, el primero */
function diaPorDefecto(){
  let i = V.dias.findIndex(d=>d.fecha===hoyStr);
  if (i < 0) i = V.dias.findIndex(d=>D(d.fecha).getDay()===hoy.getDay());
  return i < 0 ? 0 : i;
}
let current = diaPorDefecto();

function render(){
  document.documentElement.lang = LANG;
  const t = L();
  document.title = `${tr(V.titulo)} · Amistades Belgas de Levante`;
  $("demo").hidden = !V.ejemplo; $("demo").textContent = t.demo;
  $("titulo").textContent = tr(V.titulo);
  $("subtitulo").textContent = tr(V.subtitulo) || t.sub;
  $("lbl-programa").textContent = t.programa; $("lbl-diaadia").textContent = t.diaadia;
  $("lbl-practico").textContent = t.practico; $("lbl-antes").textContent = t.antes; $("lbl-llevar").textContent = t.llevar;
  $("btn-print").textContent = t.imprimir; $("btn-share").textContent = t.compartir;

  // pills
  const ini=D(V.inicio), fin=D(V.fin), nd=Math.round((fin-ini)/864e5)+1;
  const rango = ini.getMonth()===fin.getMonth()
    ? `${ini.getDate()} – ${t.fecha(fin.getDate(), t.months[fin.getMonth()])}`
    : `${t.fecha(ini.getDate(), t.months[ini.getMonth()])} – ${t.fecha(fin.getDate(), t.months[fin.getMonth()])}`;
  const faltan = Math.round((ini-hoy)/864e5);
  let cuenta = faltan>1 ? t.faltan(faltan) : faltan===1 ? t.manana : (hoy<=fin ? t.viaje : "");
  $("pills").innerHTML = `<span class="pill">📅 ${rango}</span><span class="pill">📍 ${esc(V.destino)}</span><span class="pill">${nd} ${nd===1?t.dia1:t.dias}</span>` + (cuenta?`<span class="pill y">${cuenta}</span>`:"");
  window.__rango = rango;

  // tarjetas
  const E = V.encuentro||{};
  $("info").innerHTML =
    `<div class="card red"><div class="ic">🚏</div><h3>${t.salida}</h3><p><b>${esc(E.hora)}</b> · ${esc(E.lugar)}</p>${tr(E.nota)?`<p>${esc(E.nota)}</p>`:""}</div>`+
    `<div class="card"><div class="ic">🏠</div><h3>${t.regreso}</h3><p>${esc(V.regreso)}</p></div>`+
    `<div class="card blk"><div class="ic">📞</div><h3>${t.organiza}</h3><p>${esc(V.organiza)}</p>${tr(V.contacto)?`<p><b>${esc(V.contacto)}</b></p>`:""}${tr(V.precio)?`<p>${t.precio}: <b>${esc(V.precio)}</b></p>`:""}</div>`;

  // pestañas
  $("tabs").innerHTML = V.dias.map((d,i)=>`<button class="tab" data-i="${i}"><b>${cap(t.days[D(d.fecha).getDay()])} ${D(d.fecha).getDate()}</b><span>${esc(d.titulo)}</span></button>`).join("")
    + `<button class="tab all" data-i="all"><b>${t.todo}</b><span>${t.todoSub}</span></button>`;
  $("tabs").querySelectorAll(".tab").forEach(b=>b.onclick=()=>go(b.dataset.i==="all"?"all":Number(b.dataset.i), true));

  // días
  const n = V.dias.length;
  $("dias").innerHTML = V.dias.map((d,i)=>`
  <article class="day" id="dia${i}">
    <div class="day-head">
      <div>
        <div class="n">${t.dia} ${i+1} · ${fmt(d.fecha)}</div>
        <h3>${esc(d.titulo)}</h3>
        <p>${esc(d.resumen)}</p>
      </div>
      <div class="day-photo">${d.foto?`<img src="${esc(d.foto)}" alt="${esc(d.titulo)}" onerror="this.nextElementSibling.style.display='flex';this.remove()">`:""}<div class="ph" ${d.foto?'style="display:none"':''}><img src="/logo-256.png" alt=""></div></div>
    </div>
    <ol class="tl">${d.actividades.map(a=>`
      <li class="act" data-d="${d.fecha}" data-h="${esc(a.hora)}">
        <div class="h">${a.hora?esc(a.hora):"·"}</div>
        <div class="dot"><i>${ICON[a.tipo]||"•"}</i></div>
        <div class="body"><span class="tag">${t.tags[a.tipo]||t.plan}</span><br><b>${esc(a.titulo)}</b>${tr(a.detalle)?`<p>${esc(a.detalle)}</p>`:""}</div>
      </li>`).join("")}
    </ol>
    <div class="day-nav">
      ${i>0?`<button class="btn ghost prev" data-go="${i-1}">${t.ant}<small>${cap(t.days[D(V.dias[i-1].fecha).getDay()])} · ${esc(V.dias[i-1].titulo)}</small></button>`:""}
      ${i<n-1?`<button class="btn next" data-go="${i+1}">${t.sig}<small>${cap(t.days[D(V.dias[i+1].fecha).getDay()])} · ${esc(V.dias[i+1].titulo)}</small></button>`:""}
    </div>
  </article>`).join("");
  $("dias").querySelectorAll("[data-go]").forEach(b=>b.onclick=()=>{ go(Number(b.dataset.go), true); });

  // qué llevar y alojamiento
  $("llevar").innerHTML = (V.llevar||[]).map(x=>`<li>${esc(x)}</li>`).join("");
  const A = V.alojamiento||{};
  $("aloj").innerHTML = `<div class="ic">🛏️</div><h3>${t.aloj}</h3><p><b>${esc(A.nombre)}</b></p><p>${esc(A.zona)}</p><p>${esc(A.nota)}</p>`;
  $("aloj").style.display = tr(A.nombre) ? "" : "none";

  $("lang-sel").value = LANG;
  go(current, false);
  marcarAhora();
  pintarMapa();
}

function go(i, scroll){
  current = i;
  document.querySelectorAll(".tab").forEach(b=>b.classList.toggle("on", String(b.dataset.i)===String(i)));
  document.querySelectorAll(".day").forEach((el,k)=>el.classList.toggle("on", i==="all" || k===i));
  const tab = document.querySelector(`.tab[data-i="${i}"]`);
  if (tab) tab.scrollIntoView({behavior:"smooth", inline:"center", block:"nearest"});
  if (scroll) $("programa").scrollIntoView({behavior:"smooth"});
}

function marcarAhora(){
  const now=new Date(), nm=now.getHours()*60+now.getMinutes();
  const items=[...document.querySelectorAll(`.act[data-d="${hoyStr}"]`)];
  items.forEach(el=>el.classList.remove("now","past"));
  let cur=-1;
  items.forEach((el,k)=>{ const [h,m]=el.dataset.h.split(":").map(Number); if(!isNaN(h) && h*60+(m||0)<=nm) cur=k; });
  items.forEach((el,k)=>{ if(k<cur) el.classList.add("past"); if(k===cur) el.classList.add("now"); });
}
setInterval(marcarAhora, 60000);

let map, markers=[];
function pintarMapa(){
  try{
    if (!V.mapa || !V.mapa.length || !window.L) throw 0;
    const Lf = window.L;
    if (!map){
      map = Lf.map("map",{scrollWheelZoom:false});
      Lf.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:"© OpenStreetMap"}).addTo(map);
      map.fitBounds(V.mapa.map(p=>[p[1],p[2]]),{padding:[40,40]});
    }
    markers.forEach(m=>m.remove()); markers=[];
    const pin = n => Lf.divIcon({className:"",html:`<div style="background:#990000;color:#ffcc00;border:3px solid #ffcc00;border-radius:50%;width:32px;height:32px;display:flex;align-items:center;justify-content:center;font:700 14px Inter">${n}</div>`,iconSize:[32,32],iconAnchor:[16,16]});
    V.mapa.forEach(([nm,la,lo],i)=>markers.push(Lf.marker([la,lo],{icon:pin(i+1)}).addTo(map).bindPopup(`<b>${esc(nm)}</b>`)));
  }catch(e){ $("map").style.display="none"; }
}

$("lang-sel").onchange = e => { LANG = e.target.value; try{ localStorage.setItem("calb-lang", LANG); }catch(_){} render(); };
$("btn-print").onclick = () => window.print();
$("btn-share").onclick = () => {
  const data = {title:tr(V.titulo), text:`${tr(V.titulo)} · ${window.__rango}`, url:location.href};
  if (navigator.share) navigator.share(data).catch(()=>{});
  else {
    try{ navigator.clipboard.writeText(location.href); }catch(e){}
    const b=document.createElement("div"); b.textContent=L().copiado;
    b.style.cssText="position:fixed;bottom:24px;left:50%;transform:translateX(-50%);background:#141414;color:#fff;padding:10px 18px;border-radius:999px;z-index:99";
    document.body.appendChild(b); setTimeout(()=>b.remove(),1800);
  }
};
if (V.portada) $("hero").insertAdjacentHTML("afterbegin",`<img class="bgimg" src="${esc(V.portada)}" alt="" onerror="this.remove()">`);

render();
})();
