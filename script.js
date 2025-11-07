document.addEventListener('DOMContentLoaded',function(){
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
navToggle.addEventListener('click', ()=>{
const shown = navLinks.style.display === 'flex' || navLinks.style.display === 'block';
navLinks.style.display = shown ? 'none' : 'block';
});


document.querySelectorAll('a[href^="#"]').forEach(a=>{
a.addEventListener('click', e=>{
const hash = a.getAttribute('href');
if(hash.length>1){
e.preventDefault();
const el = document.querySelector(hash);
if(el) el.scrollIntoView({behavior:'smooth',block:'start'});
if(window.innerWidth <= 600) navLinks.style.display = 'none';
}
})
})
});