// Array para armazenar as vagas
const vagas = [
    { id: 1, tipo: 'Carro', status: 'Livre' },
    { id: 2, tipo: 'Moto', status: 'Ocupada' },
    { id: 3, tipo: 'Carro', status: 'Reservada' }
];

// Função para exibir as vagas na tabela
function exibirVagas(vagas) {
    const tbody = document.querySelector('table tbody');
    tbody.innerHTML = ''; // Limpa a tabela antes de adicionar os dados

    vagas.forEach(vaga => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${vaga.id}</td>
            <td>${vaga.tipo}</td>
            <td><span class="status-${vaga.status.toLowerCase()}">${vaga.status}</span></td>
        `;
        tbody.appendChild(tr);
    });
}

// Evento de filtro
document.getElementById('filtroVagas').addEventListener('submit', function (e) {
    e.preventDefault();
    const tipoVaga = document.getElementById('tipoVaga').value;
    const vagasFiltradas = vagas.filter(vaga => (tipoVaga === '' || vaga.tipo === tipoVaga));
    exibirVagas(vagasFiltradas);
});

// Exibir todas as vagas inicialmente
exibirVagas(vagas);
