// Array donde se almacenarán los nombres de los amigos
let amigo = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    let inputAmigo= document.getElementById("amigo");
    let nombreAmigo =  inputAmigo.value;

    if(!nombreAmigo) {
        alert("Debes ingresar un nombre");
        return;
    }

    amigo.push(nombreAmigo);
    inputAmigo.value="";
    inputAmigo.focus();
    renderizarAmigos();
}

function renderizarAmigos(){
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML= "";

    for(let i = 0; i < amigo.length; i ++) {
        let item = document.createElement("li");
        item.textContent= amigo[i];
        listaAmigos.appendChild(item)

    } 
}
 
function sortearAmigo(){
    if (amigo.length === 0){
        alert("No hay amigo para sortear");
        return;
    }
    let amigoSorteado = amigo[Math.floor(Math.random()*amigo.length)];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `el amigo sorteado es ${amigoSorteado}`; 

    let limpiarlista = document.getElementById("listaAmigos");
    limpiarlista.innerHTML = "";


}
