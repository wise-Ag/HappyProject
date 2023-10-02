//card img에 마우스 hover했을 때 다른 이미지 보여주기
const card_img_happy = document.querySelector('.card__img--happy');
card_img_happy.addEventListener('mouseover',e=>{e.target.src = '/img/happy1.jpeg';})
card_img_happy.addEventListener('mouseout',e=>{e.target.src = '/img/happy79.jpeg';})

const card_img_24hours = document.querySelector('.card__img--24hours');
card_img_24hours.addEventListener('mouseover',e=>{e.target.src = '/img/happy_walk1.jpeg';})
card_img_24hours.addEventListener('mouseout',e=>{e.target.src = '/img/happy_smiling.jpeg';})

const card_img_friend = document.querySelector('.card__img--friend');
card_img_friend.addEventListener('mouseover',e=>{e.target.src = '/img/happy_friend2.jpeg';})
card_img_friend.addEventListener('mouseout',e=>{e.target.src = '/img/happy_friend.jpeg';})

const $menu = document.querySelector('.mobile-menu-icon');
const $menuOpen = document.querySelector('.mobile-menu-icon-open');
const $navMobile = document.querySelector('nav-mobile');
$menu.addEventListener('click', ()=>{$navMobile.classList.toggle('display-block')});
$menuOpen.addEventListener('click', ()=>{$navMobile.classList.toggle('display-block')});

const $home = document.querySelector('.menu__home');
$home.classList.add('menu-active');