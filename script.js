(function(){
var VIDEOS=[
["Entre águas e vivências do Capibaribe","O Grito da Maré","nEUzrsyzQ88","Histórias de quem vive e sente o rio."],
["A química do mar","Ciência","uBObepKSa90","Como a química influencia a vida marinha e os ecossistemas costeiros."],
["Impactos ao manguezal","Meio Ambiente","7-Ftn1MgnEM","Os desafios que ameaçam um dos ecossistemas mais importantes do litoral."],
["Relatos e vivências de pescadora artesanal","Comunidade","I2uV-VQdX0s","O conhecimento de quem vive do mar."],
["Impactos à comunidade de zooplâncton","Pesquisa","4C5Hpkobh2Y","Como pequenas formas de vida são afetadas pelas mudanças ambientais."],
["Derramamento do óleo","Impactos Ambientais","bJ9H-6rL_vY","Consequências do maior desastre ambiental do litoral brasileiro."]];
var $=function(i){return document.getElementById(i)};

$("videos").innerHTML=VIDEOS.map(function(v,i){
 return '<article class="card rv"><button class="thumb" data-i="'+i+'" aria-label="Assistir: '+v[0]+'" style="--bg:url(https://img.youtube.com/vi/'+v[2]+'/hqdefault.jpg),linear-gradient(135deg,#087FBD,#07558A)"></button>'+
 '<div class="body"><span class="pill">'+v[1]+'</span><h3>'+v[0]+'</h3><p>'+v[3]+'</p><button class="btn" data-i="'+i+'">Assistir</button></div></article>';}).join("");

/*  Cartilhas 
   Para adicionar uma cartilha, copie um bloco abaixo, ponha a capa em assets/img/ e preencha os campos. */
var CARTILHAS=[
{titulo:"Conhecendo a meio-fauna",desc:"Uma introdução ilustrada aos organismos microscópicos que vivem entre os grãos de areia.",capa:"assets/img/cartilha-meiofauna.png",alt:"Capa da cartilha Vida entre grãos: conhecendo a meiofauna, Recife, 2023",arquivo:"assets/pdf/conhecendo a meio-fauna ebook.pdf"}
];

$("cartilhas-lista").innerHTML=CARTILHAS.map(function(c){return '<article class="cart rv"><img class="cart-capa" src="'+c.capa+'" alt="'+c.alt+'" loading="lazy"><div class="cart-txt"><span class="pill">CARTILHA</span><h3>'+c.titulo+'</h3><p>'+c.desc+'</p><div class="cart-acoes"><a class="btn" href="'+c.arquivo+'" target="_blank" rel="noopener">Visualizar <svg class="ico" aria-hidden="true"><use href="#i-ext"/></svg><span class="sr">'+c.titulo+' em PDF (abre em nova aba)</span></a><a class="btn alt" href="'+c.arquivo+'" download>Baixar PDF <svg class="ico" aria-hidden="true"><use href="#i-down"/></svg><span class="sr">'+c.titulo+'</span></a></div></div></article>'}).join("");

var modal=$("modal"),player=$("player"),last=null;
function open(i){last=document.activeElement;var id=VIDEOS[i][2];
 player.src="https://www.youtube-nocookie.com/embed/"+id+"?autoplay=1&rel=0";player.title=VIDEOS[i][0];
 $("ytlink").href="https://youtu.be/"+id;modal.hidden=false;$("close").focus();}
function close(){modal.hidden=true;player.src="";if(last)last.focus();}
$("videos").addEventListener("click",function(e){var b=e.target.closest("[data-i]");if(b)open(+b.dataset.i)});
$("close").onclick=close;modal.addEventListener("click",function(e){if(e.target===modal)close()});
document.addEventListener("keydown",function(e){if(e.key==="Escape"&&!modal.hidden)close()});

var menu=$("menu"),burger=$("burger");
burger.onclick=function(){burger.setAttribute("aria-expanded",menu.classList.toggle("open"))};
menu.addEventListener("click",function(e){if(e.target.tagName==="A"){menu.classList.remove("open");burger.setAttribute("aria-expanded","false")}});

var els=document.querySelectorAll(".rv");
if("IntersectionObserver" in window){var io=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){x.target.classList.add("on");io.unobserve(x.target)}})},{threshold:.12});els.forEach(function(el){io.observe(el)})}
else els.forEach(function(el){el.classList.add("on")});

var links=document.querySelectorAll("header nav a"),secs=[].map.call(links,function(a){return document.querySelector(a.getAttribute("href"))});
function spy(){var y=window.scrollY+120,cur=0;secs.forEach(function(s,i){if(s&&s.offsetTop<=y)cur=i});links.forEach(function(a,i){i===cur?a.setAttribute("aria-current","true"):a.removeAttribute("aria-current")})}
window.addEventListener("scroll",spy,{passive:true});spy();
})();