async function buscarConselho(){

const texto = document.getElementById("advice");

try{

const response = await fetch("https://api.adviceslip.com/advice");

const data = await response.json();

texto.textContent = data.slip.advice;

}catch(error){

console.error(error);
texto.textContent = "Erro ao buscar conselho";

}

}