const operadores = document.querySelectorAll(".operador");
const numeros = document.querySelectorAll(".numero");

const pantalla = document.querySelector(".Pantalla");
const borrar = document.querySelector(".borrar");
const igual = document.querySelector(".igual");
const punto = document.querySelector(".punto");
const cero = document.querySelector(".cero");
const c = document.querySelector(".c");

var signo = "";
var numero1 = "";
var numero2 = "";
var resultado = 0;

function resetvariables(){
    signo = "";
    numero1 = "";
    numero2 = "";
    resultado = 0;
}


function operacion(num1,num2,ope){
    switch (ope) {
        case "+":
            return parseFloat(num1) + parseFloat(num2);
        case "-":
            return parseFloat(num1) - parseFloat(num2);
        case "*":
            return parseFloat(num1) * parseFloat(num2);
        case "/":
            return parseFloat(num1) / parseFloat(num2);
        default:
            resetvariables();
            return "Error!!!";

    }
}


numeros.forEach((numero) => {
    numero.addEventListener("click", () => {
        if ( pantalla.innerHTML === "0" ) {
            pantalla.innerHTML = numero.innerHTML;    
        } else {
            pantalla.innerHTML += numero.innerHTML;
        }
    })
});

operadores.forEach((operador) => {
    operador.addEventListener( "click", () => {
        signo = operador.innerHTML;
        if (numero1 === "") {
            numero1 = pantalla.innerHTML;
            pantalla.innerHTML = "0";
        } else {
            numero2 = pantalla.innerHTML;
        }
    })
})



borrar.addEventListener( "click", () => {
    if (pantalla.innerHTML.length > 1) {
        pantalla.innerHTML = pantalla.innerHTML.slice(0, -1);
    } else {
        pantalla.innerHTML = "0";
    }

})

c.addEventListener( "click", () => {
    pantalla.innerHTML = "0";
    resetvariables();
})

cero.addEventListener( "click", () => {
    if (pantalla.innerHTML === "0") {
        pantalla.innerHTML = cero.innerHTML;
    } else {
        pantalla.innerHTML += cero.innerHTML;
    }
})

punto.addEventListener( "click", () => {
    if  (! pantalla.innerHTML.includes(".")) {
        pantalla.innerHTML += punto.innerHTML;
    }
    
})

igual.addEventListener("click", () => {
    if (numero1 !== "" && numero2 === "") {
        numero2 = pantalla.innerHTML;
    }
    resultado = operacion(numero1,numero2,signo);
    pantalla.innerHTML = resultado;
    resetvariables();
})



