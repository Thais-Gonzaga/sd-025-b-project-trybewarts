const btnLogin = document.querySelector('#btn-login');
const email = document.querySelector('#email');
const senha = document.querySelector('#senha');
const nameInput = document.querySelector('#input-name');
const agreement = document.querySelector('#agreement');
const btnSubmit = document.querySelector('#submit-btn');
const textarea = document.querySelector('#textarea');
const counter = document.querySelector('#counter');
const inicio = 500;
const form = document.querySelector('#evaluation-form');
const aside = document.querySelector('#form-data');

btnLogin.addEventListener('click', (event) => {
  event.preventDefault();
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

agreement.addEventListener('click', (e) => {
  const click = e.target;
  if (click.checked) btnSubmit.removeAttribute('disabled');
  if (!click.checked) btnSubmit.setAttribute('disabled', '');
});

textarea.addEventListener('keyup', () => {
  counter.innerHTML = inicio - textarea.value.length;
});

function criaDivs(val) {
  val.forEach((el) => {
    const div = document.createElement('div');
    div.innerText = el;
    aside.appendChild(div);
  });
}

function getMaterias(val) {
  let materias = '';
  for (let i = 0; i < val.length; i += 1) {
    if (i === val.length - 1) {
      materias += `${val[i].value}`;
    } else {
      materias += `${val[i].value}, `;
    }
  }

  return materias;
}

btnSubmit.addEventListener('click', (e) => {
  e.preventDefault();
  form.style.display = 'none';
  const info = [];
  const materias = document.querySelectorAll('#materias input[type=checkbox]:checked');
  info.push(`Nome: ${nameInput.value} ${document.querySelector('#input-lastname').value}`);
  info.push(`Email: ${document.querySelector('#input-email').value}`);
  info.push(`Casa: ${document.querySelector('#house').value}`);
  info.push(`Família: ${document.querySelectorAll('#family input[type=radio]:checked')[0].value}`);
  info.push(`Avaliação: ${document.querySelectorAll('#rate input[type=radio]:checked')[0].value}`);
  info.push(`Matérias: ${getMaterias(materias)}`);
  info.push(`Observações: ${document.querySelector('#textarea').value}`);
  criaDivs(info);
});
