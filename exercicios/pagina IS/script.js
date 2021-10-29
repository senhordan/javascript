var nascimento_input = document.querySelector("input#nascimento")
var ano = new Date().getFullYear()

nascimento_input.max = ano
	
var botão = document.querySelector("input#botão")
botão.addEventListener("click", verificar)

function verificar() {
	
	var resultado = document.querySelector("div#resultado") 
	var idade = ano - nascimento_input.value
	var sexo = document.getElementsByName("genero")
	var imagem = document.querySelector("img#imagem")

	var texto = "Detectamos"

	if (sexo[0].checked) {

			if (idade < 2) {
				texto += " um bebê"
				imagem.src = "file-0.png"

			} else if (idade < 10) {
				imagem.src = "file-3.png"
				texto += " um menino"

			} else if (idade < 18) {
				texto += " um jovem adolescente"
				imagem.src = "file-4.png"
				
			} else if (idade < 50) {
				texto += " um homem"
				imagem.src = "file-6.png"
				
			} else {
				texto += " um idoso"
				imagem.src = "file-8.png"
			}
				
	} else {

			if (idade < 2) {
				texto += " um bebê"
				imagem.src = "file-1.png"

			} else if (idade < 10) {
				texto += " uma menina"
				imagem.src = "file-2.png"

			} else if (idade < 18) {
				texto += " uma jovem adolescente"
				imagem.src = "file-5.png"
				
			} else if (idade < 50) {
				texto += " uma mulher"
				imagem.src = "file-7.png"
				
			} else {
				texto += " uma idosa"
				imagem.src = "file-9.png"
				
			}

	}
	resultado.innerText = `${texto} com ${idade} anos de idade`
}

