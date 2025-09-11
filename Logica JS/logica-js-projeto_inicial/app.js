function trocarTextoCampo(novoTexto, tag) {
    let campo = document.getElementById(tag);
    campo.innerHTML = novoTexto;
}

// let titulo = document.getElementById('titulo');
// titulo.innerHTML = 'Jogão do número secreto';
trocarTextoCampo('Jogão do número secreto', 'titulo');

// let paragrafo = document.getElementById('descricao');
// paragrafo.innerHTML = 'Adivinhe o número entre 1 e 10';
trocarTextoCampo('Adivinhe o número entre 1 e 10', 'descricao');

let numero_secreto = parseInt(Math.random() * 10) + 1;
let tentativas = 1;

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

}