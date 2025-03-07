const menuBars = document.getElementById("menu-bars");
const navbar = document.querySelector(".navbar");

menuBars.onclick = () => {
    navbar.classList.toggle("show");
};

let section = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header .navbar a");

window.onscroll = () => {
    section.forEach((sec) => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
            navLinks.forEach((links) => {
                links.classList.remove("active");
                document
                    .querySelector("header .navbar a[href*=" + id + "]")
                    .classList.add("active");
            });
        }
    });

    menuBars.classList.remove("fa-times");
    navbar.classList.remove("show");
};