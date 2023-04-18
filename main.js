'use strict'

//스크롤 시 navbar 변경

const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll', () => { //스크롤 될때 {}안의 코드 실행
    if(window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--down');
    }
    else {
        navbar.classList.remove('navbar--down')
    }
})

//Handle Scrolling when Tapping navbar menu
//data-link 및 event listener 이용한 방법도 존재
function scrollToSection(sectionName) {
    var section = document.getElementById(sectionName);
    section.scrollIntoView({behavior: "smooth"});
}


//스크롤에 따른 home fade 효과
const home = document.querySelector('.home__container')

document.addEventListener('scroll', () => { //스크롤 될때 {}안의 코드 실행
    const homeHeight = home.getBoundingClientRect().height;
    const homeBottom = home.getBoundingClientRect().bottom;

    const fadePercent = (homeBottom / homeHeight) * 100;

    home.style.opacity = `${fadePercent}%`;
})