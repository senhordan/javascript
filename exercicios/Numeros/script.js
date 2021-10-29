let entrada = document.querySelector("input#numero")
entrada.focus()
let lista = []

let resultado = document.querySelector("div#resultado")

function adicionar() {

	let numero = Number(document.querySelector("input#numero").value)

	if (numero == '') {
		// mensagem de erro caso a entrada esteja vazia
		alert("[ERRO] Digite um numero para adicionar")

	} else {

		if (numero < 1 || numero > 100) {
			alert("[ERRO] Numero invalido!!")
		} else {

		// cria novo elemento option
		let option = document.createElement("option")
		option.text = `valor ${numero} adicionado`
		let select = document.querySelector("select")
		// adiciona option ao select e ao array se não houver ainda
		if (lista.indexOf(numero) == -1) {

			select.appendChild(option)
			lista.push(numero)
			document.querySelector("input#numero").value = ""
			// focus na entrada
			let entrada = document.querySelector("input#numero")
			entrada.focus()	
			// apaga o resultado
			resultado.innerHTML = ""

			return lista

		} else {

			alert("[ERRO] Esse numero já foi adicionado")
			
		}
			
		}


	}



}

function finalizar() {

	if (lista == "") {
		alert("[ERRO] Adicione valores à lista")

	} else {
		// coleta a div onde ficarão os resultados

		// tamanho
		resultado.innerHTML = `<p>Ao todo, temos ${lista.length} numeros cadastrados</p>`

		// maior numero e menor numero
		let maior = lista[0]
		let menor = lista[0]
		let soma = 0 

			for (let x in lista) {
				if (lista[x] > maior) {
					maior = lista[x]
				}
				if (lista[x] < menor) {
					menor = lista[x]
				}

				soma += lista[x]
			}

		resultado.innerHTML += `<p>O maior numero é ${maior}</p>`
		resultado.innerHTML += `<p>O menor numero é ${menor}</p>`

		// soma
		resultado.innerHTML += `<p>A soma entre todos os valores é ${soma}</p>`

		// media
		resultado.innerHTML += `<p>A média dos valores é ${soma/lista.length.toFixed(3)}</p>`
	}
}