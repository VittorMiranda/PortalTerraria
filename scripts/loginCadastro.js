// Recupera usuários salvos ou usa um usuário padrão
let userList = JSON.parse(localStorage.getItem('usuarios')) || [
  { user: 'vitor', password: 'abc' }
];

// Login
function login(event) {
  event.preventDefault();

  const userInput = document.getElementById('user').value;
  const passwordInput = document.getElementById('senha').value;

  const userFound = userList.find(u => u.user === userInput && u.password === passwordInput);

  if (userFound) {
    alert('Login realizado com sucesso!');
    // Aqui você pode redirecionar ou mostrar conteúdo protegido
  } else {
    alert('Usuário ou senha incorretos.');
  }
}

// Cadastro
function cadastro(event) {
  event.preventDefault();

  const novoUser = document.getElementById('nome-cadastro').value;
  const novaSenha = document.getElementById('senha-cadastro').value;
  const confirmaSenha = document.getElementById('confirma-senha-cadastro').value;

  if (novaSenha !== confirmaSenha) {
    alert('As senhas não coincidem!');
    return;
  }

  const existe = userList.some(u => u.user === novoUser);
  if (existe) {
    alert('Usuário já existe!');
    return;
  }

  // Adiciona e salva no localStorage
  userList.push({ user: novoUser, password: novaSenha });
  localStorage.setItem('usuarios', JSON.stringify(userList));

  alert('Cadastro realizado com sucesso!');
  mostrarLogin(); // Volta para tela de login
}

// Alterna entre login/cadastro
function mostrarCadastro() {
  document.getElementById('form-login').classList.remove('active');
  document.getElementById('form-cadastro').classList.add('active');
  document.getElementById('titulo').textContent = 'Cadastro';
}

function mostrarLogin() {
  document.getElementById('form-cadastro').classList.remove('active');
  document.getElementById('form-login').classList.add('active');
  document.getElementById('titulo').textContent = 'Login';
}
