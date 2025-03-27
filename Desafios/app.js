let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do desafio'

function exibirMensagem(){
    console.log('O botão foi clicado')
};

function mensagemDeAlerta(){
    alert('Eu amo JS')
};


function exibirPrompt() {
    let nomeDaCidade = prompt('Digite o nome de uma cidade do Brasil que você gosta muito:')
    alert(`Estive em ${nomeDaCidade} e lembrei de você`)
}


function somatoria(){
    let primeiroNumero = parseInt(prompt('Digite o primeiro numero'));
    let segundoNumero=parseInt(prompt('Digite o segundo número'));
    let resultado = primeiroNumero + segundoNumero;
    alert(`${primeiroNumero} + ${segundoNumero} = ${resultado}`);
}