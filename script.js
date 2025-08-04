let burger = document.getElementById('burger');
let burgerClose = document.getElementById('burgerclose');
let items = document.querySelector('.items');
const form = document.querySelector('form');
const nameRef = document.getElementById('name');
const emailRef = document.getElementById('email');
const messageRef = document.getElementById('message');
const btnSubmit = document.getElementById('button-submit');
const formError = document.getElementById('form-error');
const messageSuccess = document.getElementById('message-success');


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


form.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = nameRef.value.trim();
    const email = emailRef.value.trim();
    const message = messageRef.value.trim();
    if(!renderError()) {
        renderError();
        showErrorMessage();
    }else{
        const data = {
            name: name,
            email: email,
            message: message
            }
        console.log(data);
        showSucessMessage();
        removeValue();
    }
});

function renderError() {
    let hasError = false;
    if (!nameRef.value.trim()) {
        nameRef.classList.add('error');
        hasError = true;
    }

    if (!emailRef.value.trim()) {
        emailRef.classList.add('error');
        hasError = true;
    }

    if (!messageRef.value.trim()) {
        messageRef.classList.add('error');
        hasError = true;
    }
    removeError();
    return !hasError;
}


function  removeError(){
    setTimeout(()=>{
       nameRef.classList.remove('error');
        emailRef.classList.remove('error');
        messageRef.classList.remove('error'); 
    }, 2000);
}


function showErrorMessage(){
    formError.classList.toggle('hide');
        setTimeout(()=>{
            formError.classList.toggle('hide');
    }, 2000);
}


function showSucessMessage(){
    messageSuccess.classList.toggle('d-flex');
        messageSuccess.classList.toggle('hide')
        setTimeout(()=>{
            messageSuccess.classList.toggle('d-flex');
            messageSuccess.classList.toggle('hide')
    }, 4000);
}


function removeValue(){
    nameRef.value='';
    emailRef.value ='';
    messageRef.value = '';
}



