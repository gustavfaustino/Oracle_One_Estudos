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

// -------------- ATIVIDADES 1 -------------------------

// Mostre um alerta com a mensagem "Boas vindas ao nosso site!".
alert("Boas vindas ao nosso site!");

// Declare uma variável chamada nome e atribua a ela o valor "Lua".
let nome = "Lua"

// Crie uma variável chamada idade e atribua a ela o valor 25.
let idade = 25

// Defina uma variável numeroDeVendas e atribua a ela o valor 50.
let numeroDeVendas = 50;

// Defina uma variável saldoDisponivel e atribua a ela o valor 1000.
let saldoDisponivel = 1000;

// Exiba um alerta com o texto "Erro! Preencha todos os campos"
alert("Erro! Preencha todos os campos");

// Declare uma variável chamada mensagemDeErro e atribua a ela o valor "Erro! Preencha todos os campos" Agora exiba um alerta com o valor da variável mensagemDeErro.
let mensagemDeErro = "Erro! Preencha todos os campos";
alert(mensagemDeErro);

// Para o próximo código, use um novo prompt para perguntar o nome do usuário e armazená - lo em uma variável, pode chamá - la de nome ou adicionar o que desejar.
let nome_usuario = prompt("Qual é o seu nome?");
alert("Olá, " + nome_usuario + "! Bem-vindo(a) ao nosso site!");

// Peça ao usuário para digitar sua idade usando um prompt e armazene - a na variável idade.
let idade_usuario = prompt("Qual é a sua idade?");
alert("Você tem " + idade_usuario + " anos.");

// Agora, para validar a idade que capturamos no desafio 09, caso a idade seja maior ou igual que 18, exiba um alerta com a mensagem "Pode tirar a habilitação!".
if (idade_usuario >= 18) {
    alert("Pode tirar a habilitação!");
} else {
    alert("Não pode tirar a habilitação ainda.");
}

// -------------- ATIVIDADES 2 -------------------------

// Pergunte ao usuário qual é o dia da semana.Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!".Caso contrário, mostre "Boa semana!".

// Verifique se um número digitado pelo usuário é positivo ou negativo.Mostre um alerta informando.

// Crie um sistema de pontuação para um jogo.Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!".Caso contrário, mostre "Tente novamente para ganhar.".

// Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.

// Peça ao usuário para inserir seu nome usando prompt.Em seguida, mostre um alerta de boas - vindas usando esse nome.
