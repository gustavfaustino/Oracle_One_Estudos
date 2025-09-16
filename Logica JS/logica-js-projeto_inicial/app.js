function trocarTextoCampo(novoTexto, tag) {
    let campo = document.getElementById(tag);
    campo.innerHTML = novoTexto;
}

function exibirMensagemInicial() {
    trocarTextoCampo('Jogão do número secreto', 'titulo');
    trocarTextoCampo('Adivinhe o número entre 1 e 10', 'descricao');
}

let numeros_sorteados = [];
let limite_numeros_secretos = 10;
let numero_secreto = gerarNumeroSecreto();
let tentativas = 1;

function gerarNumeroSecreto() {
    let numero_escolhido = parseInt(Math.random() * limite_numeros_secretos) + 1;
    let quantidade_elementos = numeros_sorteados.length;

    if (quantidade_elementos == limite_numeros_secretos) {
        numeros_sorteados = [];
    }
    if (numeros_sorteados.includes(numero_escolhido)) {
        return gerarNumeroSecreto();
    } else {
        numeros_sorteados.push(numero_escolhido);
        console.log('Números sorteados: ' + numeros_sorteados);
        return numero_escolhido;
    }
}

exibirMensagemInicial();

function verificarChute() {
    let chute = parseInt(document.querySelector('.container__input').value);
   
    if (chute == numero_secreto) {
        let mensagem_tentativas = `Você acertou em ${tentativas} ${tentativas > 1 ? 'tentativas' : 'tentativa'}!`;

        trocarTextoCampo('Você acertou!', 'titulo');
        trocarTextoCampo(mensagem_tentativas, 'descricao');
        titulo.style.color = 'green';

        document.getElementById('reiniciar').removeAttribute('disabled');
        document.querySelector('.container__input').setAttribute('disabled', 'true');
    } else {
        if (chute > numero_secreto) {
            trocarTextoCampo('O número secreto é menor!', 'descricao');
        } else {
            trocarTextoCampo('O número secreto é maior!', 'descricao');
        }
        tentativas++;
    }
}

function reiniciarJogo(){
    numero_secreto = gerarNumeroSecreto();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
    document.querySelector('.container__input').removeAttribute('disabled');
    document.querySelector('.container__input').value = '';
    titulo.style.color = 'white';
}