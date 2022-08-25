const hamburger = document.querySelector('#hamburger');

const nav = document.querySelector('#nav-menu');

hamburger.addEventListener("click", function(){
    nav.classList.toggle('hidden')
    hamburger.classList.toggle('hamburger-active')
});

// navbar fixed

window.onscroll = function(){
    const header = document.querySelector('header');
    const fixnav = header.offsetTop;

    if (window.pageYOffset > fixnav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
};

// SCROLL REVEAL

const sr = ScrollReveal({
    origin: 'left',
    distance: '50px',
    duration: 2000,
    reset: true
});

sr.reveal(` #hero, #helper, #footer, .KontakKiri, #artikel, .buatkiri`, {
    interval:200
});

const srRight = ScrollReveal({
    origin: 'top',
    distance: '50px',
    duration: 2000,
    reset: true
});

srRight.reveal(` .KontakKanan, #data, .buatkanan`, {
    interval:200
});