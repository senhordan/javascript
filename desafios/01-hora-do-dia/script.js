function carregar() {
	var hora_do_dia = new Date().getHours()
	var texto = document.querySelector("#hora")
	var imagem = document.querySelector("#img")
	// var body = document.querySelector("body")

	if (hora_do_dia == 1) {
		texto.innerHTML = `Agora é ${hora_do_dia} hora`
	} else {
		texto.innerHTML = `Agora são ${hora_do_dia} horas`
	}


	if (hora_do_dia < 12) {
		// Manhã
		imagem.src = "imagens/dia.png"
		document.body.style.background = '#f9e289'
		document.body.style.color = '#333'

	} else if (hora_do_dia < 18) {
		// Tarde
		imagem.src = "imagens/tarde.png"
		document.body.style.background = '#fdbda1'
		document.body.style.color = '#444'
	} else {
		// Noite
		imagem.src = "imagens/noite.png"
		document.body.style.background = '#344'
		document.body.style.color = 'ddd'
	}
}




