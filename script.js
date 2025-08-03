let burger = document.getElementById('burger');
let burgerClose = document.getElementById('burgerclose');
let items = document.querySelector('.items');

burger.addEventListener('click', function(){
    const items = document.querySelector('.items');
    if(items.classList.contains('menu')){
        burger.innerHTML =`<img src="./img/close.png" alt="">`
        items.classList.remove('menu');
    }else{
        burger.innerHTML =`<img src="./img/open.png" alt="">`
        items.classList.add('menu');
    }
    
})
