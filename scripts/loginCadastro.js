let userList = [
    { user: 'vitor', password: 'abc' }
  ];
  
  function login(event){
    event.preventDefault();
    const userInput = document.getElementById('user').value;
    const passwordInput = document.getElementById('senha').value;
  
    const userFound = userList.find(u => u.user == userInput && u.password == passwordInput);
  
    if (userFound) {
      alert('Login realizado com sucesso!');
    } else {
      alert('Usuário ou senha incorretos.');
    }
  };
  
  function cadastro(event) {
    event.preventDefault();
    const novoUser = document.getElementById('nome-cadastro').value;
    const novaSenha = document.getElementById('senha-cadastro').value;
    const confirmaSenha = document.getElementById('confirma-senha-cadastro').value;
  
    if (novaSenha != confirmaSenha) {
      alert('As senhas não coincidem!');
      return;
    }
  
    // Verifica se usuário já existe
    const existe = userList.some(u => u.user == novoUser);
    if (existe) {
      alert('Usuário já existe!');
      return;
    }
  
    userList.push({user: novoUser, password: novaSenha});
    alert('Cadastro realizado com sucesso!');
  
    mostrarLogin();
  };
  
  function mostrarCadastro() {
    document.getElementById('form-login').style.display = 'none';
    document.getElementById('form-cadastro').style.display = 'block';
    document.getElementById('titulo').textContent = 'Cadastro';
  }
  
  function mostrarLogin() {
    document.getElementById('form-login').style.display = 'block';
    document.getElementById('form-cadastro').style.display = 'none';
    document.getElementById('titulo').textContent = 'Login';
  }
  
