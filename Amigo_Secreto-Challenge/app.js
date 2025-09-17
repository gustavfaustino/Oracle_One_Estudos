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