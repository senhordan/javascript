Javascript comandos basicos 

1-Mensagens

2-Node

3-Comentarios

4-Variaveis Simples

	# Tipos
		# Convertendo para...

	# Variaveis Compostas

	# Funções

	# Objetos

5-Operadores

	# Aritméticos
		+ - * / % **

	# Atribuição

		*Auto-Atribuição
			+= -= *= /= %= **= 

			*Simplificação
				++ --

	# Relacionais
		< > <= >= == != === !==


	# Lógicos
		! || &&

	# Ternários
		test ? true : false 


	# Ordem de Precedência




6-Document Object Model(DOM)

7-Condicionais

8-Laços de Repetição








Mensagens

	janela de alerta
		window.alert('mensagem') 
		alert('mensagem')

	janela de confirmação
		
		window.confirm('mensagem')
		confirm('mensagem')

	janela de entrada

		window.prompt('mensagem') 
		prompt // retorna uma STRING

	Escrever na pagina

		// suporta <tags>

		document.write('mensagem')
		document.writeln('mensagem') // pula linha

Node

	console.log("mensagem") // escreve no terminal do node

	Tempo 

		var agora = new Date()  // recebe tudo atual (ano, dia, mes, hora...)

		var hora = agora.getHours()

		var dia = agora.getDay()

			dias e retornos 

				Domingo	== 0
				Segunda	== 1
				Terça	== 2
				Quarta	== 3
				Quinta	== 4
				Sexta	== 5
				Sábado	== 6

Comentarios


	//

	/* */

Variaveis Simples

	Dicas
	
		/*
		Podem começar com letra, $ ou _

		Não podem começar com numeros

		É possivel usar letras e numeros 

		É possivel usar simbolos e acentos

		Não podem conter espaços 

		Não podem ser palavras reservadas
		*/
	
	var nome_da_variavel = "blau"

	Tipos

		Tipeof // decobre o tipo da variavel

		Number

			5	18	-12	  0.5   -15.5

			infinity

			NaN

			var.toFixed(2) // 2 casas decimais depois do ponto



		String

			"Blau"   'Blau'   `Blau`

			+ para concatenar

			var.length // retorna tamanho da string

			var.toUpperCase() // deixa a string em maiusculo

			var.toLowerCase() // deixa a string em minusculo

			var.replace("blau", "blei") // substitui blau por blei

			var.oLocaleString("pt-BR", {style: "currency", currency: "BRL"}) // formata numeros para moeda brasileira

			var.oLocaleString("pt-BR", {style: "currency", currency: "USD"}) // formata numeros para moeda americana


		Boolean

		Null

		Undefined

		Object

			array

		Convertendo para:

			Number

				Number(var)

			integer

				Number.parseInt(var)
				parseInt(var)

			float

				Number.parseFloat(var)
				parseFloat(var)

			String

				String(var)
				var.toString()

		Variaveis Compostas Array // listas do python 

			// variavel que possui varios elementos, cada elemento é composto por seu valor(conteudo) e por uma chave de identificação(key, index)

			let variavel = [elemento0, elementof1, elemento2]

			variavel[3] = elemento3 // adiciona o novo elemento no 3° espaço

			variavel.push(elementoNovo) // cria mais um espaço no final e adiciona o elemento novo

			variavel.length // retorna a quantidade de elementos que há na variavel

			variavel.sort() // organiza os elementos em ordem crescente

			variavel.indexOf(elemento) // retorna a posição(key) do elemento, retorna -1 se não achar

			variavel = variavel.concat(elemento3, elemento4, elemento5)  // concatena elementos no array

			let string = variavel.join(" - ")  // junta todos elementos em umas string separada por " - "

			let ultimo = variavel.pop() // remove o ultimo elemento e retorna ele

			let primeiro = variavel.shift() // remove o primeiro elemento e retorna ele

			let novo_tamanho = variavel.unshift(elemento_novo1, elemento_novo2) // adiciona novos elementos ao inicio e retorna o novo length   

			para iterar (mostrar o conteudo separadamente):

				let x = 0
				for (x in variavel) {
					console.log(variavel[x])
				}

				// a função em forEach() é executada uma vez para cada elemento na variavel
				variavel.forEach(Function(elemento) { 
					console.log(elemento)
				})


				variavel.forEach(elemento => console.log(elemento)) // arrow function

		Objetos

			suporta funções, possui chave definivel

			let variavel = {key:valor,key1:valor,key2:valor,click(arg){}}

			ex:

			let amigo = {
			nome:"josé",
			sexo:"M",
			peso:85.5,
			engordar(kg=0){
				console.log("engordou")
				this.peso += kg // this referencia a key peso do proprio objeto
			}}

			amigo.engordar(2) // chama a função interna
			amigo.peso // retorna o valor de peso

		Funções


			chamada

			parametro // args, arg="" define o padrão

			ação

			retorno

			function clicar(args=""){
				bloco de comandos que serão realizados quando ocorrer o evento

				return
			}

			clicar(args)

			let variavel = function(args) {
				return args*2
			}

			variavel(5) // retorna como se fosse uma chamada de função



Operadores
	
	Aritméticos

		5 + 2 == 7

 		5 - 2 == 3

 		5 * 2 == 10

 		5 / 2 == 2.5

 		5 % 2 == 1		// resto da divisão INTEIRA

 		5 ** 2 == 25 	// potência

	Atribuição

		Auto-Atribuição

			var numero = 3
			numero += 4
			numero == 7


			numero += 7

	 		numero -= 3

	 		numero *= 10

	 		numero /= 2.5

	 		numero %= 1		// resto da divisão INTEIRA

	 		numero **= 25 	// potência

	 		Simplificação

				numero ++	// incrementa em 1

		 		numero --	// decrementa em 1


	Relacionais

		1 > -1 		true
		2 < 0 		false
		3 <= 1 		false
		4 >= 2 		true
		5 == 3 		false
		6 != 4 		true

		5 == "5"	true

		5 === "5"	false 	// igual restrito / identico

		5 === 5		false 	// igual restrito / identicos

		5 !== "5" 	true 	// desigual restrito

	Lógicos

		!	not

			! true == false

			! false == true

		&&	and

			true && true == true
			true && false == false
			false && true == false
			false && false == true

		||	or

			true || true == true
			true || false == true
			false || true == true
			false || false == false

	Ternários

		test ? true : false 	// ex: 5 == 5 ? "é igual" : "não é igual"

		5 == 5 ? a = 15 : "não é igual" 

		a = 5 == 5 ? "é" : "não é" 		// se 5 for igual a 5, a recebe "é", senão recebe "não é "

	Ordem de Precedência

	 			| Aritméticos
	 			|
	 			| ()
	 			|
	 			| **
	 			|
	 			| * / %
	 			|
	 			| + -
	 			|
	 			| Relacionais
	 			|
	 			| > < >= ...
	 			|
	 			| Lógicos
	 			|
	 			| !
	 			|
	 			| &&
	 			|
	 			| ||
	 			|
	 			|
	 			V
	 			 ------->

Document Object Model(DOM)

	window

		location

			localização do site, URL, pagina atual e anterior

		document

			documento atual

			html

				head

					meta

					title

				body

					h1

					p

						strong

					p

					div


		history

			historico

	Coletando elementos

			ById

			ByName

			ByClass

			ByCSS

			querySelector 	
			querySelectorAll 	//css selector

		window.document.getElementsByTagName('tag')
		document.getElementsByTagName('tag')



		var tag = document.getElementsByTagName('tag')[0] // coleta a primeira tag

		alert(tag.innerText) 	// mostra o texto dentro de tag

		alert(tag.innerHTML) 	// mostra o texto dentro de tag com a formatação

		tag.style.color = "blue" //muda a cor de tag para azul

		tag.style.textAlign = "center" // altera o estilo via js

	Adicionando elementos html usando JS

		let elemento = document.createElement("elemento")

		elemento.text = "isso é um elemento html"

		// adicionar esse elemento como filho de outro elemento

		elementoPai.appendChild(elemento)


	Eventos

		mouseenter

		mouseout

		mousemove

		mousedown

		mouseup

		click

	EventListener

		<tag onevent="função()">


		var area = document.getElementById("area")

		area.addEventListener("evento", nome_da_função)
		// ex: area.addEventListener("click", clicar)

		area.addEventListener("mouseenter",)
		area.addEventListener("mouseout",)
		area.addEventListener("mousedown",)
		area.addEventListener("mouseup",) 

		var area = document.getElementById("area")

		area.addEventListener("click", clicar)


Condicionais

	Simples

		if(condition){

			True

		}

	Composta

		if(condition){

			True

		}else{

			False
		}

	Aninhada

		if(condition){

			True

		}else if(condition){

				True

			}else{

			
			}

	Multiplas

		switch(expressão){

			case valor 1:

				...
				break

			case valor 2:

				...
				break

			case valor 3:

				...
				break

			defalt:

				...
				break
		}
		

Laços de Repetição
	
	Teste logico no inicio

		while (condição) {
			bloco
		}

	Teste logico no final

		do {
			bloco
		} while (condição)

	for (inicio ; while ; incremento) {
		bloco
	}














