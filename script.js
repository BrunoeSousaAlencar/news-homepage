const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('#menu-ativo');

hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})