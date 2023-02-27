"use strict";

let text = document.querySelector('.text-center');
let navUl = document.querySelector('.nav__ul');
let navMenu = document.querySelector('.menu');





navMenu.addEventListener('click', () => {
    console.log(navUl.getAttribute("id"));
    if (navUl.classList.contains('show')){
            navUl.classList.remove('show');
    } else {
           navUl.classList.add("show");
    }
    
})


console.log(text.classList.contains('text-center'))

// classList ->
// classList.add('show','bg-danger');
// classList.remove('show');
// classList.contains('text-center'); 