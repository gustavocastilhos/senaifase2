
import exemplosVariaveis from "./scripts/variaveis.js";
import exemplosCondicionais from "./scripts/outros/condicionais.js";
import exemplosArrays from "./scripts/outros/arrays.js"

exemplosVariaveis()




const btnVartiaveis = document.getElementById("btnVariaveis");
btnVartiaveis.addEventListener("click", exemplosVariaveis)


document.getElementById("btnCondicionais").addEventListener("click", exemplosCondicionais);

document.getElementById("btnArrays").addEventListener("click", exemplosArrays)