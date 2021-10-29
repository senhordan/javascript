function contar() {
	var inicio = Number(document.querySelector("input#inicio").value)
	var fim = Number(document.querySelector("input#fim").value)
	var passo = Number(document.querySelector("input#passo").value)
	var resultado = document.querySelector("div#resultado")

	resultado.innerText = ""


	if (passo > 0) {
		if (fim > inicio) {
			// contagem decrescente
			for (inicio;inicio < fim;inicio = inicio + passo) {
				resultado.innerHTML = resultado.innerHTML + inicio + "&nbsp; &#128095; &nbsp;"
			}

		} else {
			// contagem crescente
			for (inicio;inicio > fim;inicio = inicio - passo) {
				resultado.innerHTML = resultado.innerHTML + inicio + "&nbsp; &#128095; &nbsp;"
			}
		}

		resultado.innerHTML += "&#9873;"
	}

}