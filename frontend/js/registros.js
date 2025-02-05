// Array para armazenar os registros de estacionamento
const registros = [];

// Função para adicionar um registro
function adicionarRegistro(placa, modelo, dataEntrada, dataSaida, valor, pagamento, vaga) {
    const duracao = (new Date(dataSaida) - new Date(dataEntrada)) / (1000 * 60 * 60); // em horas
    const registro = {
        placa,
        modelo,
        dataEntrada,
        dataSaida,
        duracao,
        valor,
        pagamento,
        vaga
    };
    registros.push(registro);
}

// Exemplo de como adicionar um registro
adicionarRegistro('ABC1234', 'Fusca', '2025-02-01 08:00', '2025-02-01 10:00', 26, 'À Vista', 1);

// Função para exibir os registros filtrados por mês
function exibirRelatorio(mes) {
    const tbody = document.querySelector('table tbody');
    tbody.innerHTML = ''; // Limpa a tabela antes de adicionar os dados

    const registrosFiltrados = registros.filter(registro => registro.dataEntrada.includes(mes));

    registrosFiltrados.forEach(registro => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${registro.placa}</td>
            <td>${registro.modelo}</td>
            <td>${registro.dataEntrada}</td>
            <td>${registro.dataSaida}</td>
            <td>${registro.duracao}</td>
            <td>R$ ${registro.valor}</td>
            <td>${registro.pagamento}</td>
            <td>${registro.vaga}</td>
        `;
        tbody.appendChild(tr);
    });
}

// Evento de filtro de mês
document.getElementById('filtroRelatorio').addEventListener('submit', function (e) {
    e.preventDefault();
    const mes = document.getElementById('mes').value;
    exibirRelatorio(mes);
});
