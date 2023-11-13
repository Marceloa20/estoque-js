let produtos = [
    'Budweiser',
    'Stella Artois',
    'Heineken',
    'Corona Extra',
    'Chivas',
    'Old Par',
    'Jack Daniels',
    'Merlot',
    'Smirnoff',
    'Bacardi',
    'Malibu',
    'Johnnie Walker',
    'Absolut'
]

for (let n = 1; n <= 12; n++) {
    let quantidade = Math.floor(Math.random() * 100) + 1; // retorna um número inteiro de 0 a 99.
    tabela.innerHTML +=
    `<tr>
        <td>${n}</td>
        <td>${produtos[n]}</td>
        <td>${produtos[n]}</td>
        <td>${quantidade}</td>
        <td>
            <button class="btn btn-warning">Editar</button>
            <button class="btn btn-danger" onclick="deleteRow(this)">Excluir</button>
        </td>
    </tr>`;
}

// function deleteRow(button) {
//     let row = button.parentNode.parentNode;
//     row.parentNode.removeChild(row);
// }

// for (let n = 0; n <= 10; n++) {
//     console.log('teste')
//     tabela.innerHTML +=
//     `<tr>
//         <td>${n}</td>
//         <td>Jack Daniels</td>
//         <td>Whisky Jack Daniels Tennesee n7° 1L</td>
//         <td>1</td>
//         <td>
//             <button>Editar</button>
//             <button>Excluir</button>
//         </td>
//     </tr>`;
// }