
function foco() {
		// body...
	var data = document.querySelector("#nascimento")

	data.focus()

}

function verificar() {
	nascimento = Number(document.querySelector("#nascimento").value)
	resultado = document.querySelector("#resultado")

	var ano = new Date().getFullYear()
	idade = ano - nascimento

	sexo = document.getElementsByName("sexo")

	if (sexo[0].checked) {
		var genero = "um Homem"
	} else {
		var genero = "uma Mulher"
	}

	if (idade > 0 || idade < 12) {
		// Criança
		resultado.innerHTML = `Detectamos ${genero} com ${idade} anos`
	} else if (idade < 18) {
		// Adolescente
		resultado.innerHTML = `Detectamos ${genero} com ${idade} anos`
	} else if (idade < 25) {
		// Jovem adulto
		resultado.innerHTML = `Detectamos ${genero} com ${idade} anos`
		
	} else if (idade < 45) {
		// Adulto
		resultado.innerHTML = `Detectamos ${genero} com ${idade} anos`
		
	} else {
		// Idoso
		resultado.innerHTML = `Detectamos ${genero} com ${idade} anos`
	}

	resultado.style.textAlign = 'center'



}
