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
  }
});

const textarea = document.querySelector('#textarea');
const counter = document.querySelector('#counter');
const inicio = 500;
textarea.addEventListener('keyup', () => {
  counter.innerHTML = inicio - textarea.value.length;
});

const btnSubmit = document.querySelector('#submit-btn');
const form = document.querySelector('#evaluation-form');

function criaDivs(val) {
  val.forEach( (el) => {
    const div = document.createElement('div');
  });
}

function getMaterias(val) {
  let materias = '';
  val.forEach((el) => {
    materias += `${el.value}, `;
  });
  return materias;
};

btnSubmit.addEventListener('click', (e) => {
  e.preventDefault();
  let info = [];
  info.push(`Nome: ${document.querySelector('#input-name').value} ${document.querySelector('#input-lastname').value}`);
  info.push(`Email: ${document.querySelector('#input-email').value}`);
  info.push(`Casa: ${document.querySelector('#house').value}`);
  info.push(`Familia: ${document.querySelectorAll('#family input[type=radio]:checked')[0].value}`);
  //info.push(document.querySelectorAll('#rate input[type=radio]:checked')[0].value);
  info.push(getMaterias(document.querySelectorAll('#materias input[type=checkbox]:checked')));
  //criaDivs(info);
  //form.style.display = 'none';

  console.log(info);
});