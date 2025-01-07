let numerosSorteados = []
let limite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

/*
let titulo = document.querySelector('h1'); // Estou selecionando o que eu quero alterar no html
titulo.innerHTML = 'Jogo do número secreto'; // Com o innerHTML eu consigo alterar aquela tag, classe ou ID que eu escolhi a cima

let texto = document.querySelector('.texto__paragrafo'); // Para alterar uma classe lembra de colocar o . na frente
texto.innerHTML = "Escolha um número entre 1 e 10";
*/

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto,'Brazilian Portuguese Female',{rate:1.2})// texto, voz e velocidade da voz
}
function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do número secreto') 
    exibirTextoNaTela('.texto__paragrafo','Escolha um número entre 1 e 10') 
}
exibirMensagemInicial()

function verificarChute(){
    let chute = document.querySelector('.container__input').value;
    
    if(chute == numeroSecreto){
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        exibirTextoNaTela('h1', 'Você acertou!');
        exibirTextoNaTela('.texto__paragrafo', `Você descobriu o número correto com ${tentativas} ${palavraTentativa} !`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else if(chute < numeroSecreto) {
                exibirTextoNaTela('.texto__paragrafo','O número secreto é maior');
        tentativas++
        limparCampo()
    } else if(chute > numeroSecreto){
                exibirTextoNaTela('.texto__paragrafo', 'O número secreto é menor');
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * limite + 1); 
    let quantidadeElementosNaLista = numerosSorteados.length;

    if(quantidadeElementosNaLista == limite){
        numerosSorteados = []
        console.log('lista resetada')
    }
    if(numerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else{
        numerosSorteados.push(numeroEscolhido);
        console.log(numerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector('.container__input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true); }


// teste do git