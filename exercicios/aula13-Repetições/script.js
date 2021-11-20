// WHILE

	// Teste Logico No Inicio

	/*var a = 0
	while (a < 500) {
		
		a ++
		console.log(`passo ${a}`)
	}*/


	// Teste Logico No Final

	/*var a = 0
	do{
		a ++
		console.log(`passo ${a}`)

	} while (a < 500)*/

// FOR

	// for (var a = 1; a < 500; a ++) {
	// 	console.log(a)
	// }

// FOREACH

frutas = ['banana', 'maça', 'uva', 'melancia', 'abacaxi']

// frutas.forEach((fruta, indice)=>{
// 	console.log(`Fruta ${indice+1}: ${fruta}`)
// })

// MAP
// Consegue alterar cada item do array
var retorno_map = frutas.map((fruta, indice)=>{
	// console.log(`Fruta ${indice+1}: ${fruta}`)
	return fruta
})

console.log(retorno_map)




