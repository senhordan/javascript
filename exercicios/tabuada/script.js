let numero = document.querySelector("input#numero")
numero.focus()

let botão = document.querySelector("input#botão")
botão.addEventListener("click", tabuada)


function tabuada() {
	let tabuada = document.querySelector("select#tabuada")
	let numero = Number(document.querySelector("input#numero").value)
	tabuada.innerHTML = ""
	if (numero == "") {
		alert("[ERRO] Digite um numero")
	} else {
		
		for (let contador = 1;contador <= 10;contador++) {
			let elemento = document.createElement("option")
			elemento.text = `${numero} X ${contador} = ${numero*contador}`
			elemento.value = `tabuada${contador}`
			tabuada.appendChild(elemento)


		}
	}
	
}