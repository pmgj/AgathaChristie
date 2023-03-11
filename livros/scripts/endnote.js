function endnote() {
    var section = document.querySelector("section[data-type='afterword']#endnotes");
    if (section) {
        var out = "";
        var endnotes = document.querySelectorAll("span[data-type='endnote']");
        for (var i = 0; i < endnotes.length; i++) {
            var endnote = endnotes[i];
            out += "<p id='endnoteref" + (i + 1) + "'><sup><a href='#endnote" + (i + 1) + "'>" + (i + 1) + "</a></sup> " + endnote.textContent + "</p>";
            endnote.innerHTML = "<sup id='endnote" + (i + 1) + "'><a href='#endnoteref" + (i + 1) + "'>" + (i + 1) + "</a></sup>";
        }
        section.innerHTML += out;
    }
}
window.addEventListener("load", endnote);