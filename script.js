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
/* "arquivo" = PDF dentro do site: quando o arquivo existe, o card mostra Visualizar + Baixar PDF.
   "link" = PDF em outro site: serve de alternativa (botão Acessar cartilha) enquanto o arquivo não estiver em assets/pdf/.
   "capa" é opcional: sem capa, aparece um cartão azul com ícone de livro. "rotulo" é opcional (padrão: CARTILHA). */
{titulo:"Conhecendo a meiofauna",desc:"Uma introdução ilustrada aos organismos microscópicos que vivem entre os grãos de areia.",capa:"assets/img/cartilha-meiofauna.png",alt:"Capa da cartilha Vida entre grãos: conhecendo a meiofauna, Recife, 2023",arquivo:"assets/pdf/conhecendo a meio-fauna ebook.pdf"},
{titulo:"O tesouro do Capibaribe",desc:"Uma aventura pelo rio Capibaribe, valorizando sua biodiversidade.",capa:"assets/img/cartilha-capi.png",alt:"Capa da cartilha Capi em O Tesouro do Capibaribe, com uma capivara diante do Recife",arquivo:"assets/pdf/Capi e o tesouro do capibaribe ebook.pdf",link:"https://editora.ufrpe.br/sites/editora.ufrpe.br/files/Capi%20e%20o%20tesouro%20do%20capibaribe%20ebook.pdf"},
{titulo:"Moluscos bivalves",desc:"Apresenta os moluscos bivalves e suas características.", capa:"assets/img/moluscos-bivalves.jpeg",arquivo:"assets/pdf/CARTILHA MOLUSCOS BIVALVES  e-book.pdf",link:"https://editora.ufrpe.br/sites/editora.ufrpe.br/files/CARTILHA%20MOLUSCOS%20BIVALVES%20%20e-book.pdf"},
{titulo:"Metodologia e processamento de escamas e conchas de pescado",desc:"Programa REMARTEC: apresenta iniciativas de educação e sensibilização ambiental relacionadas aos ambientes marinhos e costeiros.", capa:"assets/img/programa-remartec.jpeg",arquivo:"assets/pdf/E-BOOK PROGRAMA remartec.pdf",link:"https://editora.ufrpe.br/sites/editora.ufrpe.br/files/E-BOOK%20PROGRAMA%20remartec.pdf"},
{titulo:"Guia de aulas de campo em espaços educativos",rotulo:"CARTILHA · PARTE 1",desc:"Reúne orientações e propostas para atividades educativas em espaços de campo.", capa:"assets/img/guia-aulas-de-campo-parte-1.jpeg",arquivo:"assets/pdf/ebook - Guia de aulas de campo em espaços educativos.pdf",link:"https://editora.ufrpe.br/sites/editora.ufrpe.br/files/ebook%20-%20Guia%20de%20aulas%20de%20campo%20em%20espa%C3%A7os%20educativos.pdf"},
{titulo:"Guia de aulas de campo em espaços educativos",rotulo:"CARTILHA · PARTE 2",desc:"Segunda parte do guia, com orientações e propostas para atividades educativas em espaços de campo.", capa:"assets/img/guia-aulas-de-campo-parte-2.jpeg",arquivo:"assets/pdf/ebook Guia de Aulas de Campo em Espaços Educativos Parte 2.pdf",link:"https://editora.ufrpe.br/sites/editora.ufrpe.br/files/ebook%20Guia%20de%20Aulas%20de%20Campo%20em%20Espa%C3%A7os%20Educativos%20Parte%202.pdf"},
{titulo:"Oceano Vivo – Metodologia ativa",desc:"Propõe uma metodologia ativa para aprender sobre os oceanos e seus organismos.",capa:"assets/img/oceano-vivo.jpeg", arquivo:"assets/pdf/OCEANO VIVO - METODOLOGIA ATIVA_V1.pdf",link:"https://editora.ufrpe.br/sites/editora.ufrpe.br/files/OCEANO%20VIVO%20-%20METODOLOGIA%20ATIVA_V1.pdf"}
];

function capaHTML(c){
 if(c.capa)return '<div class="cart-capa" style="--capa:url(\''+c.capa+'\')"><img src="'+c.capa+'" alt="'+(c.alt||"")+'" loading="lazy"></div>';
 return '<div class="cart-capa sem" aria-hidden="true"><svg class="ico"><use href="#i-book"/></svg></div>';}
function pdfBtns(c){var h=encodeURI(c.arquivo);return '<a class="btn" href="'+h+'" target="_blank" rel="noopener">Visualizar <svg class="ico" aria-hidden="true"><use href="#i-ext"/></svg><span class="sr">'+c.titulo+' em PDF (abre em nova aba)</span></a><a class="btn alt" href="'+h+'" download>Baixar PDF <svg class="ico" aria-hidden="true"><use href="#i-down"/></svg><span class="sr">'+c.titulo+'</span></a>';}
function linkBtn(c){return '<a class="btn" href="'+c.link.replace(/&/g,"&amp;")+'" target="_blank" rel="noopener">Acessar cartilha <svg class="ico" aria-hidden="true"><use href="#i-ext"/></svg><span class="sr">'+c.titulo+' (abre em nova aba)</span></a>';}

$("cartilhas-lista").innerHTML=CARTILHAS.map(function(c,i){return '<article class="cart rv">'+capaHTML(c)+'<div class="cart-txt"><span class="pill">'+(c.rotulo||"CARTILHA")+'</span><h3>'+c.titulo+'</h3><p>'+c.desc+'</p><div class="cart-acoes" id="acoes-'+i+'">'+((c.arquivo&&!c.link)?pdfBtns(c):linkBtn(c))+'</div></div></article>'}).join("");

/* Se o PDF local existir, troca o botão "Acessar cartilha" por "Visualizar" + "Baixar PDF" */
CARTILHAS.forEach(function(c,i){if(!(c.arquivo&&c.link))return;
 fetch(encodeURI(c.arquivo),{method:"HEAD"}).then(function(r){
  if(r.ok&&/pdf/i.test(r.headers.get("content-type")||""))$("acoes-"+i).innerHTML=pdfBtns(c)}).catch(function(){})});

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