function salvarDadosFuncionarios() {
    const valorNomeFuncionario = document.getElementById('inputNome').value;
    const valorIdFuncionario = document.getElementById('inputId').value;
    const valorCargoFuncionario = document.getElementById('inputCargo').value;
    const listaFunc = document.getElementById('listaFuncionarios');
    const dadosNome = document.createElement('li');
    const dadosId = document.createElement('li');
    const dadosCargo = document.createElement('li');
    dadosNome.id = 'dadosNome';
    dadosId.id = 'dadosId';
    dadosCargo.id = 'dadosCargo'

    localStorage.setItem('NomeFuncionario', valorNomeFuncionario);
    localStorage.setItem('IdFuncionario', valorIdFuncionario);
    localStorage.setItem('CargoFuncionario', valorCargoFuncionario);

    document.getElementById('inputNome').value = "";
    document.getElementById('inputId').value = "";
    document.getElementById('inputCargo').value = "";

    dadosNome.textContent = valorNomeFuncionario;
    dadosId.textContent = valorIdFuncionario;
    dadosCargo.textContent = valorCargoFuncionario;
    listaFunc.appendChild(dadosNome);
    listaFunc.appendChild(dadosId);
    listaFunc.appendChild(dadosCargo);
}

function carregarDadosFuncionarios() {
    localStorage.getItem('NomeFuncionario');
    localStorage.getItem('IdFuncionario');
    localStorage.getItem('CargoFuncionario');
}

function salvarEstoque() {
   
}