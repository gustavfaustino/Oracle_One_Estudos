alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = Math.floor(Math.random() * 10) + 1;
// console.log("N:"+numeroSecreto)
let tentativas = 1
let chute;

while (chute != numeroSecreto) {
  chute = Number(prompt('Digite um número entre 1 e 10:'));
  if (chute == numeroSecreto) {
    break;
  } else {
    if (chute < numeroSecreto) {
      alert(`Você errou! O número secreto é maior que ${chute}`);
    } else {
      alert(`Você errou! O número secreto é menor que ${chute}`);
    }
    tentativas++
  }
  // console.log("T:"+tentativas)
}
// if (tentativas == 1) {
//   alert('Uau! Você acertou de primeira! O número secreto é ' + numeroSecreto);
// } else {
//   alert('Parabéns! Você acertou o número secreto em ' + tentativas + ' tentativas!');
// }

// Alternativa com ternário:
let palavraTentativa = tentativas === 1 ? 'tentativa' : 'tentativas';
alert(`Parabéns! Você acertou o número secreto em ${tentativas} ${palavraTentativa}!`);