var hora_do_dia = new Date().getHours()
var texto = document.querySelector("#hora")
var imagem = document.querySelector("#img")
var body = document.querySelector("body")
var section = document.querySelector("section")

if (hora_do_dia == 1) {
	texto.innerHTML = `Agora é ${hora_do_dia} hora`
} else {
	texto.innerHTML = `Agora são ${hora_do_dia} horas`
}


if (hora_do_dia < 12) {
	imagem.src = "imagens/dia.png"
	body.style.background = '#f9e289'
	body.style.color = '#333'

} else if (hora_do_dia < 18) {
	imagem.src = "imagens/tarde.png"
	body.style.background = '#fdbda1'
	body.style.color = '#444'
} else {
	imagem.src = "imagens/noite.png"
	// body.style.background = '#273133'
	body.style.background = '#344'
	body.style.color = 'ddd'
}





