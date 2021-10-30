/*var idade = 66
if (idade < 16) {
	console.log("Não vota")
} else {
	if (idade < 18 || idade >= 65) {
	console.log("Voto opcional")
	} else {
		console.log("voto obrigatorio")
	}
}*/

var agora = new Date().getHours()

var hora = agora

if (hora >=0 && hora <= 24) {
	if (hora < 12) {
		console.log("Bom dia")

	} else if (hora <= 18) {
		console.log("Boa Tarde")		

	} else {
		console.log("Boa Noite")		

		
	}

	// console.log(hora)





}







