menu = document.getElementById('menu');
menu.addEventListener('click',()=>{
    menu.classList.toggle('active');
    document.getElementById('navegacao').classList.toggle('active');
})