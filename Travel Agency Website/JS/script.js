window.addEventListener("scroll", () => {
    let header = document.querySelector("header");

    header.classList.toggle("sticky", scrollY);
})

let menuBar = document.querySelector("header .menu-bars");
let navlist = document.querySelector(".nav-list");

function clicked() {
    menuBar.classList.toggle("navlist-clicked");
    navlist.classList.toggle("navlist-clicked");

}