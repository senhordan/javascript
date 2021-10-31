// Função com retorno
function par_ou_impar(numero) {
	if (numero % 2 == 0) {
		return "par"
	} else {
		return "impar"
	}
}

/*let resultado = par_ou_impar(11)
console.log(resultado)*/


// Função com parametro opcional
function somar(numero1=0, numero2=0) {
	// 		  parametro opcional
	return numero1 + numero2
}

let soma = somar(15)

/*console.log(soma)*/


// Função dentro de variavel
let multiplicar = function(x, y) {
	return x*y
}

// console.log(multiplicar(5, 3))








