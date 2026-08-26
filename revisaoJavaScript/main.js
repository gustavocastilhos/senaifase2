
import exemplosVariaveis from "./scripts/variaveis.js";
import exemplosCondicionais from "./scripts/outros/condicionais.js";

exemplosVariaveis()




const btnVartiaveis = document.getElementById("btnVariaveis");
btnVartiaveis.addEventListener("click", exemplosVariaveis)


document.getElementById("btnCondicionais").addEventListener("click", exemplosCondicionais);