alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 9;
console.log(numeroSecreto)
let chute = prompt('Escolha um número entre 1 e 10');

while (chute != numeroSecreto) {
    if (chute < 1 || chute > 10) {
        alert('Número inválido! Escolha um número entre 1 e 10.');
    } else {
        alert('Você errou! Tente novamente.');
    }
    chute = prompt('Escolha um número entre 1 e 10');
}