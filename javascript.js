function dataDocumento() {
  let lastModDate = new Date(document.lastModified);
  let options = { year: 'numeric', month: 'long', day: '2-digit' };
  return `Última atualização em ${lastModDate.toLocaleDateString('pt-br', options)}`;
}
function topo() {
  let string = '' +
    '<header><img src="imagens/topo.jpg" alt="Agatha Christie"></header>' +
    '<nav><ul>' +
    '<li><a href="index.html">HOME</a></li>' +
    '<li><a href="biografia.html">BIOGRAFIA</a></li>' +
    '<li><a href="livros.html">LIVROS</a></li>' +
    '<li><a href="links.html">LINKS</a></li>' +
    '<li><a href="personagens.html">PERSONAGENS</a></li>' +
    '</ul></nav>';
  let body = document.getElementById("container");
  body.innerHTML = string + body.innerHTML;
}
function rodape() {
  let string = `<footer><p>E-mail: <a href="mailto:paulomgj@gmail.com">paulomgj@gmail.com</a></p><p>${dataDocumento()}</p></footer>`;
  var body = document.getElementById("container");
  body.innerHTML += string;
}
function openWin() {
  let img = this.getAttribute("href");
  let title = this.firstChild.nodeValue.toUpperCase();
  let pagina = `<!DOCTYPE html>` +
    `<html lang="pt"><head><title>${title}</title></head>` +
    `<body style="padding: 0; margin: 0;">` +
    `<div><img src="${img}" alt="Foto de ${title}" onload="javascript:resizeTo(this.width+9,this.height+57)">` +
    `</div></body></html>`;
  let janela = open('', 'foto', 'width=100,height=100');
  janela.document.write(pagina);
  janela.document.close();
  return false;
}
function registerEvents() {
  let anchors = document.getElementsByTagName("a");
  for (let i = 0; i < anchors.length; i++) {
    let anchor = anchors[i];
    let rel = anchor.getAttribute("data-popup");
    if (rel == "true") { anchor.onclick = openWin; }
  }
}
function funcoes() {
  topo();
  rodape();
  registerEvents();
}
window.onload = funcoes;