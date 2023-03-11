function toc() {
    var nav = document.querySelector("nav[data-type='toc']");
    if (nav) {
        var out = "<ol>";
        var chapters = document.querySelectorAll("body > section[data-type='chapter'], body > section[data-type='preface']");
        for (var i = 0; i < chapters.length; i++) {
            var chapter = chapters[i];
            var title = chapter.querySelector("h1");
            var str = (title.textContent.trim().length > 0) ? title.textContent : "Capítulo " + (i + 1);
            chapter.id = "chapter" + (i + 1);
            out += "<li><a href='#chapter" + (i + 1) + "'>" + str + "</a></li>";
        }
        out += "</ol>";
        nav.innerHTML += out;
    }
}
window.addEventListener("load", toc);