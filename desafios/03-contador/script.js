





function contar() {

	var resultado = document.querySelector("#resultado")
	resultado.innerHTML = ""

	var inicio = Number(document.querySelector("#inicio").value)
	var fim = Number(document.querySelector("#fim").value)
	var passo = Number(document.querySelector("#passo").value)
	
	if (passo >= 1) {
		if (inicio != "" || fim != "") {
			if (inicio < fim) {
				// crescente

				for (var contador = inicio; contador <= fim ; contador += passo ){

					resultado.innerHTML = resultado.innerHTML + contador + ` \u{1F463} `
				}

			} else {
				// decrescente
				for (var contador = inicio; contador >= fim ; contador -= passo ){

					resultado.innerHTML = resultado.innerHTML + contador + ` \u{1F463} `
				}

			}

		} else {
			alert("[ERRO] Por favor, insira todos os valores")
		}
	} else {
		alert("[ERRO] Por favor, insira um passo de 1 ou mais")
	}
}
	// resultado.innerHTML = `${inicio}, ${fim}, ${passo}, ${resultado_texto}`


