const entrar = document.querySelector('.entrar');
const email = document.querySelector('.email');
const password = document.querySelector('.password');
const enviar = document.querySelector('#submit-btn');
const checkbox = document.getElementById('agreement');

// Parte do header:
function login() {
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
entrar.addEventListener('click', login);

// Desabilitar botão no início e habilitar qdo tiver o requisito 16 preenchido:
// Link de referência para ideia: https://cursos.alura.com.br/forum/topico-habitar-desabilitar-botao-65202

function habilitar() {
  if (checkbox.checked === true) {
    enviar.disabled = false;
  } else {
    enviar.disabled = true;
  }
}
habilitar();
