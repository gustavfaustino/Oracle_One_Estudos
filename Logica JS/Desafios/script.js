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
        const nameInput = document.getElementById("nameInput");
        const userName = nameInput.value;

        if (userName.trim() === "") {
            alert("Por favor, digite um nome.");
        } else {
            alert(`Olá, ${userName}! Bem-vindo(a) ao nosso site!`);
            nameInput.value = ""; // Limpa o campo
        }
    });

    // Desafio 9/10: Validação de Idade
    document.getElementById("runAgeCheck").addEventListener("click", () => {
        const ageInput = document.getElementById("ageInput");
        const userAge = parseInt(ageInput.value);

        if (isNaN(userAge) || ageInput.value.trim() === "") {
            alert("Por favor, digite uma idade válida.");
        } else if (userAge >= 18) {
            alert("Pode tirar a habilitação!");
        } else {
            alert("Não pode tirar a habilitação ainda.");
        }
        ageInput.value = ""; // Limpa o campo
    });

})();
