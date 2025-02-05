// Array para armazenar os veículos
const veiculos = [];

// Função para cadastrar um veículo
function cadastrarVeiculo(placa, modelo, cor, ano, porte, tipo) {
    const veiculo = {
        placa,
        modelo,
        cor,
        ano,
        porte,
        tipo
    };
    veiculos.push(veiculo);
}

// Evento do formulário de cadastro de veículos
document.getElementById('veiculoForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const placa = document.getElementById('placa').value;
    const modelo = document.getElementById('modelo').value;
    const cor = document.getElementById('cor').value;
    const ano = document.getElementById('ano').value;
    const porte = document.getElementById('porte').value;
    const tipo = document.getElementById('tipo').value;

    cadastrarVeiculo(placa, modelo, cor, ano, porte, tipo);
    alert('Veículo cadastrado com sucesso!');
});
