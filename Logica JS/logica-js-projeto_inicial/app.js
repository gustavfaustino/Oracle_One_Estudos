alert("Bem-vindo(a) ao jogo de adivinhação!");
const numero_secreto = 29;
let chute = prompt("Chute um número entre 1 e 100");

while (chute != numero_secreto) {
    if (chute < numero_secreto) {
        alert(`O número secreto é maior que ${chute}`);
    } else if (chute > numero_secreto) {
        alert(`O número secreto é menor que ${chute}`);
    }
    chute = prompt("Tente novamente! Chute um número entre 1 e 100");
}

alert(`Parabéns! Você acertou o número secreto: ${numero_secreto}`);
console.log(`O número secreto era: ${numero_secreto}`);

// -------------- ATIVIDADES 2 -------------------------

// Pergunte ao usuário qual é o dia da semana.Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!".Caso contrário, mostre "Boa semana!".

// Verifique se um número digitado pelo usuário é positivo ou negativo.Mostre um alerta informando.

// Crie um sistema de pontuação para um jogo.Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!".Caso contrário, mostre "Tente novamente para ganhar.".

// Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.

// Peça ao usuário para inserir seu nome usando prompt.Em seguida, mostre um alerta de boas - vindas usando esse nome.
