function dataDocumento() {
  var monthname = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
  var lastModDate = new Date(document.lastModified);
  var month = lastModDate.getMonth();
  var date = lastModDate.getDate();
  var year = lastModDate.getFullYear();
  var retorno = "Última atualização em ";

  if (date < 10) { retorno += "0"; }
  retorno += date + " de " + monthname[month] + " de " + year;
  return retorno;
}
function topo() {
  var string = '' +
    '<h1><img src="imagens/topo.jpg" alt="Agatha Christie"></h1>' +
    /*'<object data="imagens/topo.jpg" type="image/jpg">'+
      '<h1>Agatha Christie</h1>'+
    '</object>'+*/
    '<ul id="hMenu">' +
    '<li><a href="index.html">HOME</a></li>' +
    '<li><a href="biografia.html">BIOGRAFIA</a></li>' +
    '<li><a href="livros.html">LIVROS</a></li>' +
    '<li><a href="links.html">LINKS</a></li>' +
    '<li><a href="personagens.html">PERSONAGENS</a></li>' +
    '</ul>';
  var body = document.getElementById("container");
  body.innerHTML = string + body.innerHTML;
}
function rodape() {
  var string = '' +
    '<div id="copyright">' +
    '<ul id="botoes">' +
    '<li><a href="http://online.htmlvalidator.com/php/onlinevallite.php?url=referer">cse xhtml</a> </li>' +
    '<li><a href="http://validator.w3.org/check/referer">xhtml</a> </li>' +
    '<li><a href="http://jigsaw.w3.org/css-validator/check/referer">css</a> </li>' +
    '<li><a href="http://bobby.watchfire.com/bobby/bobbyServlet?URL=' + document.location + '&amp;output=Submit&amp;gl=sec508&amp;test=">508</a> </li>' +
    '<li><a href="http://bobby.watchfire.com/bobby/bobbyServlet?URL=' + document.location + '&amp;output=Submit&amp;gl=wcag1-aaa&amp;test=">wcag aaa</a></li>' +
    '</ul>' +
    '<p>E-mail: <a href="mailto:paulomgj@gmail.com">paulomgj@gmail.com</a></p>' +
    '<p>' + dataDocumento() + '</p>' +
    '</div>';
  var body = document.getElementById("container");
  body.innerHTML += string;
}
function openWin() {
  var img = this.getAttribute("href");
  var title = this.firstChild.nodeValue.toUpperCase();
  var pagina = `<!DOCTYPE html>`
    `<html lang="pt"><head><title>${title}</title></head>`
    `<body style="padding: 0; margin: 0;">`
    `<div><img src="${img}" alt="Foto de ${title}" onload="javascript:resizeTo(this.width+9,this.height+57)">`
    `</div></body></html>`;
  var janela = open('', 'foto', 'width=100,height=100,resizable=yes');
  janela.document.write(pagina);
  janela.document.close();
  return false;
}
function registerEvents() {
  var anchors = document.getElementsByTagName("a");
  for (var i = 0; i < anchors.length; i++) {
    var anchor = anchors[i];
    var rel = anchor.getAttribute("data-popup");
    if (rel == "true") { anchor.onclick = openWin; }
  }
}
function funcoes() {
  topo();
  rodape();
  registerEvents();
}
window.onload = funcoes;