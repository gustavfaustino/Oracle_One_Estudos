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

    // PARTE 4
    // Desafio 1: Qual seu IMC?
    document.getElementById("runIMCCalculator").addEventListener("click", () => {
        let peso = parseFloat(document.getElementById("getPeso").value);
        let altura = parseFloat(document.getElementById("getAltura").value);

        if (isNaN(peso) || isNaN(altura) || altura === 0) {
            alert("Por favor, insira valores válidos para peso e altura.");
        } else {
            let imc = peso / (altura * altura);
            alert(`Seu IMC é: ${imc.toFixed(2)}`);
        }
    });

    // Desafio 2: Fatorial
    // Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
    document.getElementById("runFatorialCalculator").addEventListener("click", () => {
        let numero = parseInt(document.getElementById("getFatorial").value);

        const calcularFatorial = (n) => {
            if (n === 0) return 1;
            return n * calcularFatorial(n - 1);
        };

        alert(`O fatorial de ${numero} é: ${calcularFatorial(numero)}`);
    });

    // Desafio 3: Real ou Dolar?
    // Crie uma função que converta um valor em reais para dólares, considerando uma taxa de câmbio fixa de 4.80.
    document.getElementById("runCurrencyConverter").addEventListener("click", () => {
        let valorEmReais = parseFloat(document.getElementById("getValorReais").value);
        const taxaDeCambio = 4.80;

        const converterParaDolares = (valor) => {
            return valor / taxaDeCambio;
        };

        alert(`O valor em dólares é: ${converterParaDolares(valorEmReais).toFixed(2)}`);
    });

    // Desafio 4: Sala grande o.O
    // Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.
    document.getElementById("runRoomCalculator").addEventListener("click", () => {
        let largura = parseFloat(document.getElementById("getLargura").value);
        let comprimento = parseFloat(document.getElementById("getComprimento").value);

        const calcularArea = (largura, comprimento) => {
            return largura * comprimento;
        };

        const calcularPerimetro = (largura, comprimento) => {
            return 2 * (largura + comprimento);
        };

        alert(`A área da sala é: ${calcularArea(largura, comprimento)} m²`);
        alert(`O perímetro da sala é: ${calcularPerimetro(largura, comprimento)} m`);
    });

    // Desafio 5: Sala grande (circular agora) o.O
    // Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.
    document.getElementById("runCircularRoomCalculator").addEventListener("click", () => {
        let raio = parseFloat(document.getElementById("getRaio").value);
        const pi = 3.14;

        const calcularArea = (raio) => {
            return pi * raio * raio;
        };

        const calcularPerimetro = (raio) => {
            return 2 * pi * raio;
        };

        alert(`A área da sala circular é: ${calcularArea(raio)} m²`);
        alert(`O perímetro da sala circular é: ${calcularPerimetro(raio)} m`);
    });

    // Desafio 6: Tabuada
    // Crie uma função que mostre na tela a tabuada de um número dado como parâmetro
    document.getElementById("runMultiplicationTable").addEventListener("click", () => {
        let numero = parseInt(document.getElementById("getTabuada").value);
        let resultado = `Tabuada de ${numero}:\n`;

        for (let i = 1; i <= 10; i++) {
            resultado += `${numero} x ${i} = ${numero * i}\n`;
        }

        alert(resultado);
    });

});