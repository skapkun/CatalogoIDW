// Código JavaScript aqui

const header = document.querySelector("header");

window.addEventListener("scroll", function(){
    header.classList.toggle("stick", this.window.scrollY > 0);
});
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

let isMenuOpen = false;

menu.onclick = () => {
    isMenuOpen = !isMenuOpen;  
    if (isMenuOpen) {
        menu.classList.add('bx-x');  
        navbar.classList.add('open');  
    } else {
        menu.classList.remove('bx-x');  
        navbar.classList.remove('open');  
    }
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('open');
};

const sr = ScrollReveal ({
    distance: '60px',
    duration: 2500, 
    reset: true
});

sr.reveal('.home-text', {delay:200, origin: 'left'});
sr.reveal('.home-img', {delay:200, origin: 'right'});

sr.reveal('.container, .about, .menu, .contact', {delay:200, origin: 'bottom'});

function contactUs() {
    const nomeInput = document.querySelector('input[name="nomeUsuario"]');
    const emailInput = document.querySelector('input[name="email"]');
    const submitInput = document.querySelector('input[name="submit"]');

    const nome = nomeInput.value;
    const email = emailInput.value;
    const submit = submitInput.value;
    const url = `result.html?nome=${encodeURIComponent(nome)}&email=${encodeURIComponent(email)}&submit=${encodeURIComponent(submit)}`;
     
    window.location.href = url;
}