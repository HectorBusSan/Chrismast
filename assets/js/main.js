// show menu
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');

    // showmenu
if(navToggle){
    navToggle.addEventListener('click', ()=>{
        navMenu.classList.add('show-menu');
    })
}
    // hiddenmenu
if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu');
    })
}
// remove menu mobile
const navLink = document.querySelectorAll('.nav__link');
function linkAction(){
    // const navMenu =document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// change background header
function scrollHeader(){
    const header = document.getElementById('header');
    if(this.scrollY>=50)header.classList.add('scroll-header');
    else header.classList.remove('scroll-header');
}
window.addEventListener('scroll',scrollHeader);

// swiper
let newSwiper = new Swiper(".new-swiper", {
    spaceBetween: 24,
    loop: 'true',
    slidesPerView: "auto",
    centeredSlides: true,
    
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
    breakpoints:{
        992: {
            spaceBetween: 80,
        },
    },
});
// scroll section active links
const sections= document.querySelectorAll('section[id]');

function scrollActive(){
    const scrollY = window.pageYOffset;

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
        sectionTop =current.offsetTop - 58,
        sectionId=current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    })
}
window.addEventListener('scroll',scrollActive);

// scroll up
function scrollUp(){
    const scrollUp=document.getElementById('scroll-up');
    if(this.scrollY>=350) scrollUp.classList.add('show-scroll');
    else scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll',scrollUp)

// dark light theme
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme =   'bx-sun';
    // select topic
const selectedTheme= localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');
    //  current theme for inteface validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'ligth';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun';
    // valitable if user previusly chose topic
if(selectedTheme){
    document.body.classList[selectedTheme ==='dark' ? 'add' : 'remove'](darkTheme);
    themeButton.classList[selectedIcon  ==='bx bx-moon' ? 'add' : 'remove'](iconTheme);
}
// active or desactive manualy
themeButton.addEventListener('click',()=>{
    // add and remove dark icon
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    // save the icon
    localStorage.setItem('selected-theme',getCurrentTheme());
    localStorage.setItem('selected-icon',getCurrentIcon());
})

// scroll reveal
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay:400,
    // reset: true
})
sr.reveal('.home__img, .new__container, .footer__container')
sr.reveal('.home__data, .section__title',{delay:500})
sr.reveal('.giving__content, .gift__card',{interval:100})
sr.reveal('.celebrate__data,.message__form,.footer__img1',{origin:'left'})
sr.reveal('.celebrate__img,.message__img,.footer__img2',{origin:'right'})
