$(document).ready(function(){

//calculadora
var numero1 = "";
var numero2 = "";
var resultado = "";
var segundonum = false;
var suma = false;
var resta = false;
var multiplicar = false;
var dividir = false;


//seleccion de numeros
$('.numero').click(function() {
	if (segundonum) {
		numero2 += $(this).text(); 
		$("input:text").val(numero2);
	} else {
		numero1 += $(this).text();
		$("#input").val(numero1);
		console.log("este es el num" + numero1);

	}
});

//seleccion de operaciones 

$(".sumar").click(function() {
	segundonum = true;
	suma = true;
});

$(".restar").click(function() {
	segundonum = true;
	resta = true;
});

$(".multiplicar").click(function() {
	segundonum = true;
	multiplicar = true;
});

$(".dividir").click(function() {
	segundonum = true;
	dividir= true;
});

$(".borrar").click(function() {
	numero1 = "";
	numero2 = "";
	resultado = "";
	segundonum = false;
	suma = false;
	resta = false;
	multiplicar = false;
	dividir = false;
	$("#input").val("0");
});


//calculo

$(".igual").click(function() {
	var num1 = Number(numero1);
	console.log(num1);
	var num2 = Number(numero2);
	console.log(num2);
	if(suma) {
		resultado = num1+num2;		
	} else if (resta) {
		resultado = num1-num2;
	} else if (multiplicar) {
		resultado = num1 * num2;
	} else {
		resultado = num1 / num2;
	};



//impresion en display

$('#input').val(resultado);
		numero1 = "";
	 numero2 = "";
	 resultado = "";
	 segundonum = false;
	 suma = false;
	 resta = false;
	 multiplicar = false;
	 dividir = false;

	});
});













