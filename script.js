const btnLogin = document.querySelector('#btn-login');
const email = document.querySelector('#email');
const senha = document.querySelector('#senha');

btnLogin.addEventListener('click', (event) => {
  event.preventDefault();
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});


const agreement = document.querySelector('#agreement');
agreement.addEventListener('click', (e) => {
  if (e.target.checked) {
    document.querySelector('#submit-btn').removeAttribute('disabled');
  } else {
    document.querySelector('#submit-btn').setAttribute('disabled', '');
  };
})

const textarea = document.querySelector('#textarea');
const counter = document.querySelector('#counter');
const inicio = 500;
textarea.addEventListener('keyup', (e) => {
  counter.innerHTML = 500 - textarea.value.length;
});