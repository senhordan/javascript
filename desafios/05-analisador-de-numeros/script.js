let lista = []

function adicionar() {

	let resultado = document.querySelector("#resultado")
	resultado.innerHTML = ""
	let numero = document.querySelector("#numero")
	let select = document.querySelector("#select")

	let valor = Number(numero.value)

	if (valor >= 1 && valor <= 100) {

		if (lista.indexOf(valor) == -1) {
			// criando option
			let option = document.createElement("option")
			option.text = `Valor ${valor} adicionado.`
			select.appendChild(option)

			lista.push(valor)
			numero.value = ""

			resultado.innerHTML = ""

			return lista

		} else {
			alert(`[ERROR] Valor ${valor} já existe`)

		}

	} else {
		alert("[ERROR]")
	}

}

function finalizar() {


	let resultado = document.querySelector("#resultado")


	// total
	resultado.innerHTML = `<p>Ao todo, temos ${lista.length} numeros cadastrados</p>`

	// maior
	let maior = lista[0]
	let menor = lista[0]
	let soma = 0

	for (let pos in lista){
		if (lista[pos] > maior) {
			maior = lista[pos]
		} 
		if (lista[pos] < menor) {
			menor = lista[pos]
		}
		soma += lista[pos]

	}

	let media = soma/lista.length

	resultado.innerHTML += `<p>O maior numero é ${maior}</p>`

	// menor
	resultado.innerHTML += `<p>O menor numero é ${menor}</p>`
	resultado.innerHTML += `<p>A soma dos numeros é ${soma}</p>`
	resultado.innerHTML += `<p>A media dos numeros é ${media.toFixed(2)}</p>`




}