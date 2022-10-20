import "./styles.css";

const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
let btn = document.getElementById("btn");
let resultado = document.getElementById("resultado");

//ESCUCHO EL BOTON Y ALMACENO LOS DATS CAPTURADOS DEL INPUT PARA SER USADOS
btn.addEventListener("click", () => {
  let num1Ingresado: number = Number(num1.value);
  let num2Ingresado: number = Number(num2.value);

  //console.log(num1Ingresado + " " + num2Ingresado);
  let suma: number = num1Ingresado + num2Ingresado;
  console.log(suma);
  resultado.innerText = "El Resultado de la Suma es" + " " + suma;
});
