const bar =document.getElementById('bar');
const close =document.getElementById('close');
const nav =document.getElementById('navbar');

if(bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active');
    })
}


if(close){
    close.addEventListener('click',()=>{
        nav.classList.remove('active');
    })
}

const navLink =document.querySelectorAll('.nav__link')


  const linkAction = () =>{
    const navMenu =document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
  }
  navLink.forEach(n => n.addEventListener('click',linkAction))
