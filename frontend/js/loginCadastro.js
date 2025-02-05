// Array para armazenar os usuários
const usuarios = [];

// Função para cadastrar um usuário
function cadastrarUsuario(nome, email, cpf, dataNascimento, senha) {
    const usuario = {
        nome,
        email,
        cpf,
        dataNascimento,
        senha
    };
    usuarios.push(usuario);
}

// Função para verificar o login
function verificarLogin(email, senha) {
    const usuario = usuarios.find(u => u.email === email && u.senha === senha);
    if (usuario) {
        return true;
    } else {
        return false;
    }
}

// Evento do formulário de cadastro
document.getElementById('clienteForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const nome = document.getElementById('inputUsuario').value;
    const email = document.getElementById('inputEmail').value;
    const cpf = document.getElementById('inputCPF').value;
    const dataNascimento = `${document.getElementById('dia').value}/${document.getElementById('mes').value}/${document.getElementById('ano').value}`;
    const senha = "senha_padrao"; // Para fins de exemplo

    cadastrarUsuario(nome, email, cpf, dataNascimento, senha);
    alert('Cadastro realizado com sucesso!');
});

// Evento do formulário de login
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('usuario').value;
    const senha = document.getElementById('senha').value;
    
    const sucesso = verificarLogin(email, senha);
    if (sucesso) {
        alert('Login realizado com sucesso!');
    } else {
        document.getElementById('mensagem').innerText = 'Usuário ou senha incorretos';
    }
});
