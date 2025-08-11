alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = Math.floor(Math.random() * 10) + 1;
console.log(numeroSecreto)
let tentativas = 1

while (chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 e 10');
    if (chute == numeroSecreto) {
        alert('Parabéns! Você acertou o número secreto em ' + tentativas + ' tentativas!');
    } else {
       if (chute < numeroSecreto) {
         alert('Você errou! O número secreto é maior que ' + chute);
       } else {
         alert('Você errou! O número secreto é menor que ' + chute);
       }
       tentativas++
    }
}