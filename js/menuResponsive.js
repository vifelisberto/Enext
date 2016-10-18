function menuResponsivo() {
    var menu = document.getElementById("myNav");
    if (menu.className === "nav") {
        menu.className += " responsive";
    } else {
        menu.className = "nav";
    }
}