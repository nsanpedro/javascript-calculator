//calculadora basica en JS.

//1er intento
function multi(num1, num2){
	var num1 = prompt("Escribí el primer número de la operación");
	var num2 = prompt("Escribí el segundo número de la operación");
	return Number(num1) * Number(num2);
};


function suma(num1, num2) {
	var num1 = prompt("Escribí el primer número de la operación");
	var num2 = prompt("Escribí el segundo número de la operación");
	return Number(num1) + Number(num2);

};

function div(num1, num2) {
	var num1 = prompt("Escribí el primer número de la operación");
	var num2 = prompt("Escribí el segundo número de la operación");
	return Number(num1) / Number(num2);
};

function resta(num1, num2) {
	var num1 = prompt("Escribí el primer número de la operación");
	var num2 = prompt("Escribí el segundo número de la operación");
	return Number(num1) - Number(num2);
};



var simboloOp = prompt("Elige el tipo de operacion");

switch (simboloOp) {
	case "+": 
		return Number(num1) + Number(num2);
		break
	case "-":
		return Number(num1) - Number(num2);
		break
	case "*": 
		return Number(num1) * Number(num2);
		break
	case "/":
		return Number(num1) / Number(num2);
		break
	default: 
		document.write("No ingresaste el tipo de operacion");

};





//2do intento
function calculadora(){

var num1 = prompt("Escribi el primer numero de la operacion");
var simbolo = prompt("Escribí el simbolo de la operacion");
var num2 = prompt("Escribí el segundo numero de la operacion"); 

	if(simbolo === "+") {
	return Number(num1) + Number(num2);
} else if(simbolo === "-") {
	return Number(num1) - Number(num2);
} else if(simbolo === "*") {
	return Number(num1) * Number(num2);
} else if (simbolo === "/"){
	return Number(num1) / Number(num2);
} else {
	alert("Esa operacion no esta disponible");
}
};

