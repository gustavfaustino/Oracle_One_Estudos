document.addEventListener('DOMContentLoaded', () => {
    // ================================================================
    // ============ LÓGICA PARA OS MÓDULOS DE AULAS (NOVO) ============
    // ================================================================
    // Esta parte cuida de abrir e fechar as seções principais (Aula 1, Aula 2, etc.)

    // Pega todos os botões de título dos módulos
    const moduleTitles = document.querySelectorAll('.module-title');

    moduleTitles.forEach(title => {
        title.addEventListener('click', () => {
            // Adiciona ou remove a classe 'open' do botão para o ícone girar
            title.classList.toggle('open');

            // Pega o contêiner de desafios que vem logo depois do botão
            const moduleContent = title.nextElementSibling;
            // Adiciona ou remove a classe 'open' para mostrar ou esconder o conteúdo
            moduleContent.classList.toggle('open');
        });
    });

    // --- LÓGICA DO ACORDEÃO (ABRIR/FECHAR DESAFIOS) ---
    const challengeTitles = document.querySelectorAll('.challenge-title');

    challengeTitles.forEach((title) => {
        title.addEventListener("click", () => {
            // Fecha outros desafios abertos para manter a interface limpa
            challengeTitles.forEach(otherTitle => {
                if (otherTitle !== title) {
                    otherTitle.nextElementSibling.classList.remove("open");
                }
            });
            // Abre ou fecha o desafio clicado
            const content = title.nextElementSibling;
            content.classList.toggle("open");
        });
    });


    // --- LÓGICA ESPECÍFICA DE CADA DESAFIO INTERATIVO ---


    // Desafio 1: Boas-vindas
    document.getElementById("runWelcome").addEventListener("click", () => {
        alert("Boas vindas ao nosso site!");
    });

    // Desafio 2: Variável Nome
    document.getElementById("runNameVariable").addEventListener("click", () => {
        const nome = "Lua";
        alert(`A variável 'nome' foi definida como: ${nome} 🌙`);
    });

    // Desafio 3: Variável Idade
    document.getElementById("runAgeVariable").addEventListener("click", () => {
        const idade = 25;
        alert(`A variável 'idade' foi definida como: ${idade}`);
    });

    // Desafio 4: Variável Vendas
    document.getElementById("runSalesVariable").addEventListener("click", () => {
        const numeroDeVendas = 50;
        alert(`A variável 'numeroDeVendas' foi definida como: ${numeroDeVendas}`);
    });

    // Desafio 5: Variável Saldo
    document.getElementById("runBalanceVariable").addEventListener("click", () => {
        const saldoDisponivel = 1000;
        alert(`A variável 'saldoDisponivel' foi definida como: ${saldoDisponivel}`);
    });

    // Desafio 6/7: Mensagem de Erro
    document.getElementById("runErrorMessage").addEventListener("click", () => {
        const mensagemDeErro = "Erro! Preencha todos os campos";
        alert(mensagemDeErro);
    });

    // Desafio 8: Prompt de Nome
    document.getElementById("runNamePrompt").addEventListener("click", () => {
        let nameInput = document.getElementById("nameInput");
        let userName = nameInput.value;

        if (userName.trim() === "") {
            alert("Por favor, digite um nome.");
        } else {
            alert(`Olá, ${userName}! Bem-vindo(a) ao nosso site!`);
            nameInput.value = ""; // Limpa o campo
        }
    });

    // Desafio 9/10: Validação de Idade
    document.getElementById("runAgeCheck").addEventListener("click", () => {
        let ageInput = document.getElementById("ageInput");
        let userAge = parseInt(ageInput.value);

        if (isNaN(userAge) || ageInput.value.trim() === "") {
            alert("Por favor, digite uma idade válida.");
        } else if (userAge >= 18) {
            alert("Pode tirar a habilitação!");
        } else {
            alert("Não pode tirar a habilitação ainda.");
        }
        ageInput.value = ""; // Limpa o campo
    });

    // PARTE 2
    // Desafio 1: boa semana!
    // Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".
    document.getElementById("runWeekdayCheck").addEventListener("click", () => {
        let dia_da_semana = document.getElementById("getDiaSemana").value

        if (dia_da_semana.toLowerCase() === "sábado" || dia_da_semana.toLowerCase() === "domingo") {
            alert("Bom fim de semana!");
        } else if (dia_da_semana.trim() === "" || dia_da_semana.match(/\d+/)) {
            alert("Digite um texto na caixa!");
        } else {
            alert("Boa semana!");
        }
        dia_da_semana.value == "";
    });

    // Desafio 2: Mais ou menos
    // Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.
    document.getElementById("runVerificaNumero").addEventListener("click", () => {
        let numero_digitado = document.getElementById("getVerificaNumero").value;

        if (numero_digitado.trim() === "" || isNaN(Number(numero_digitado))) {
            alert("O valor digitado é inválido, tente de novo!");
        } else if (Number(numero_digitado) >= 0) {
            alert(`O valor ${numero_digitado} é positivo!`);
        } else {
            alert(`O valor ${numero_digitado} é negativo!`);
        }

        numero_digitado.value == ""
    });

    // Desafio 3:
    // Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".
    document.getElementById("runNumeroPontos").addEventListener("click", () => {
        let pontuacao = document.getElementById("getNumeroPontos").value

        if(pontuacao.trim() === "" || isNaN(Number(pontuacao))) {
            alert("O valor digitado é inválido, tente de novo!");
        } else if (Number(pontuacao) >= 100){
            alert("Ganhou!!!! Parabéns!!")
        } else {
            alert("Perdeu!! Não foi dessa vez :(")
        }
    })

    // PARTE 3
    // Desafio 1: contagem regressiva
    // Crie um programa que conte de 10 até 0, mostrando cada número por segundo.
    document.getElementById("runCountdown").addEventListener("click", () => {
        let countdown = 10;
        const countdownDisplay = document.getElementById("countdownDisplay");
        countdownDisplay.innerHTML = countdown;

        const interval = setInterval(() => {
            countdown--;
            countdownDisplay.innerHTML = countdown;

            if (countdown <= 0) {
                clearInterval(interval);
                alert("Contagem regressiva finalizada!");
            }
        }, 1000);
    });
})();
