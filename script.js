const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const menuClose = document.querySelector('.menu-close');
const menuAside = document.querySelector('.menu-aside');

const body = document.body;




hamburger.addEventListener('click',()=>{
    menu.classList.toggle('isActive');
    menuClose.classList.toggle('isActive');
    menuAside.classList.toggle('isActive');
    body.classList.toggle('body-bg');
})
