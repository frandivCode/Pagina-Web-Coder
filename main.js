var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

//Menu
let menu = document.querySelector(".menu-icon");
let navbar = document.querySelector(".navbar-principal");

menu.onclick = () => {
    menu.classList.toggle("move")
    navbar.classList.toggle("open-menu")
}
/* Menu se cierra y scrollea al enlace */
window.onscroll = () => {
    menu.classList.remove("move");
    navbar.classList.remove("open-menu");
}
