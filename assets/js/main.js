$ = document.querySelector.bind(document);
$$ = document.querySelectorAll.bind(document);


var tabs = $$(".timeline-point")
var panes = $$(".history__content")

tabs.forEach((tab,i) => {
    const pane = panes[i];

    tab.onclick = function () {
        $(".timeline-point.checked").classList.remove("checked")
        $(".history__content.active").classList.remove("active")

        this.classList.add("checked")
        pane.classList.add("active")
    }
});