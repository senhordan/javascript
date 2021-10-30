function gerar() {
	let numero = document.querySelector("#numero")
	let select = document.querySelector("#select")
	numero = Number(numero.value)


	if (numero != 0) {
		// limpa select
		select.innerHTML = ""
		// adiciona atributo
		select.size = 10

		for (let contador = 1; contador <= 10; contador ++) {
			// Criando um elemento
			let item = document.createElement("option")
			item.text = `${numero} x ${contador} = ${numero*contador}`
			select.appendChild(item)
		}

	} else {
		alert("[ERRO] Por favor, insira um numero!")
	}
}