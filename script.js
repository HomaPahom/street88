var btn = document.querySelector('.burger__menu'),
 list = document.querySelector('.nav__link');


btn.addEventListener ('click', () =>{
    list.classList.toggle('active')
    list.style.transition = '0.4s';
})