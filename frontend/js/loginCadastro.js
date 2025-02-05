// Recupera usuários do localStorage ou inicializa um array vazio
const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

// Função para cadastrar um usuário
function cadastrarUsuario(nome, email, cpf, dataNascimento, senha) {
    const usuario = { nome, email, cpf, dataNascimento, senha };

    // Adiciona o novo usuário ao array e salva no localStorage
    usuarios.push(usuario);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
}

// Função para verificar o login
function verificarLogin(email, senha) {
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    return usuarios.some(usuario => usuario.email === email && usuario.senha === senha);
}

// Aguarda o carregamento da página antes de associar eventos
document.addEventListener("DOMContentLoaded", function () {
    const cadastroForm = document.getElementById("clienteForm");

    if (cadastroForm) {
        cadastroForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const nome = document.getElementById("inputUsuario").value;
            const email = document.getElementById("inputEmail").value;
            const cpf = document.getElementById("inputCPF").value;
            const dataNascimento = `${document.getElementById("dia").value}/${document.getElementById("mes").value}/${document.getElementById("ano").value}`;
            const senha = document.getElementById("inputSenha").value;

            if (senha.length < 6) {
                alert("A senha deve ter pelo menos 6 caracteres.");
                return;
            }

            cadastrarUsuario(nome, email, cpf, dataNascimento, senha);
            alert("Cadastro realizado com sucesso!");
            window.location.href = "login.html"; // Redireciona para a tela de login
        });
    }

    // Evento do formulário de login
    const loginForm = document.getElementById("loginForm");

    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const email = document.getElementById("usuario").value;
            const senha = document.getElementById("senha").value;
            const mensagem = document.getElementById("mensagem");

            if (verificarLogin(email, senha)) {
                alert("Login realizado com sucesso!");
                window.location.href = "index.html"; // Redireciona para a página inicial
            } else {
                mensagem.innerText = "Usuário ou senha incorretos";
                mensagem.style.color = "red";
            }
        });
    }
});
