'use strict'

//스크롤 시 navbar 변경

const navbar = document.querySelector('#navbar');

document.addEventListener('scroll', () => { //스크롤 될때 {}안의 코드 실행
    const navbarHeight = navbar.getBoundingClientRect().height;
    if (window.scrollY > 160) {
        navbar.classList.add('navbar--down');

    } else {
        navbar.classList.remove('navbar--down');
    }
});

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
});


//arrow
const home2 = document.querySelector('#home')
const arrow = document.querySelector('.arrow')
document.addEventListener('scroll', () => {
    const homeHeight = home2.getBoundingClientRect().height;
    if(window.scrollY > 160) {
        arrow.classList.add('visible');
    }
    else{
        arrow.classList.remove('visible');
    }
});


//work

const workBtnContainer = document.querySelector('.work__categories')
const projectContainer = document.querySelector('.work_projects')
const projects= document.querySelectorAll('.project')
const remember = 1;
workBtnContainer.addEventListener('click', (e) => {
    const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
    if(filter==null) return;

    const active = document.querySelector('.category__btn.selected')
    active.classList.remove('selected');

    const target = e.target.nodeName === 'BUTTON' ? e.target : e.target.parentNode;

    target.classList.add('selected');

    projectContainer.classList.add('anim-out');
    setTimeout(() => {
        projects.forEach((project) => {
            if(filter === '*' || filter === project.dataset.type){
                project.classList.remove('invisible');
            }
            else{
                project.classList.add('invisible');
            }
        });
        projectContainer.classList.remove('anim-out');
    }, 200);
});



