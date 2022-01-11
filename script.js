const entrar = document.querySelector('button');
const email = document.querySelector('.email');
const password = document.querySelector('.password');

function login() {
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
entrar.addEventListener('click', login);
