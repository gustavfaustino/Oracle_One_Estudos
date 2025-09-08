// let titulo = document.getElementById('titulo');
// titulo.innerHTML = 'Jogão do número secreto';
trocarTextoCampo('Jogão do número secreto', 'titulo');

// let paragrafo = document.getElementById('descricao');
// paragrafo.innerHTML = 'Adivinhe o número entre 1 e 10';
trocarTextoCampo('Adivinhe o número entre 1 e 10', 'descricao');

let numero_secreto = parseInt(Math.random() * 10) + 1;

function verificarChute() {
    let chute = parseInt(document.querySelector('.container__input').value);

    if (chute == numero_secreto) {
        titulo.innerHTML = 'Você acertou!';
        titulo.style.color = 'green';
    } else {
        titulo.innerHTML = 'Você errou! Tente novamente.';
    }
}

function trocarTextoCampo(novoTexto, tag){
    let campo = document.getElementById(tag);
    campo.innerHTML = novoTexto;
}