const password = document.querySelector('.input-password');
const form = document.querySelector('.login');
const button = document.querySelector('.button');



form.addEventListener('click', event => {
    event.preventDefault();
});

password.addEventListener('keyup', event => {
    
    if(event.target.value !== "" && event.target.value.length >= 5){
        button.classList.add('button-login')
        button.style = 'cursor: pointer'
    } else (
        button.classList.remove('button-login')
    )
});