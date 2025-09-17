//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
    let nome_amigo = document.getElementById("amigo").value;

    if (nome_amigo === "") {
        alert("Por favor, insira um nome.");
        return;
    } else {
        amigos.push(nome_amigo);
        document.getElementById("amigo").value = "";
    }
    // Verificação de amigos adicionados
    console.log("Amigos:", amigos);

    atualizarLista();
}

function atualizarLista() {
    let lista_amigos = document.getElementById("listaAmigos");

    // Limpar a lista atual
    lista_amigos.innerHTML = "";

    // Adicionar cada amigo à lista
    amigos.forEach(function(amigo) {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista_amigos.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos dois amigos para sortear.");
        return;
    }

    let indice_sorteado = Math.floor(Math.random() * amigos.length);
    let amigo_sorteado = amigos[indice_sorteado];

    document.getElementById("resultado").textContent = "Amigo sorteado: " + amigo_sorteado + "! Parabéns!";
    document.getElementById("resultado").style.color = "green";

    // Efeito confete no botão
    document.getElementsByClassName("button-draw")[0].classList.add("confetti");
    setTimeout(() => { document.getElementsByClassName("button-draw")[0].classList.remove("confetti") }, 2000);

    // Limpar a lista de amigos após o sorteio
    amigos = [];
    atualizarLista();
}