// ARRAY/VETOR


// vaga a = [car, car, car]

// a <--- ARRAY                   
// ____ ____ ____                 
//|    |    |    | <--- ELEMENTO    
//|car |car |car |       
//|____|____|____<----- CONTEUDO/VALOR                
//   1    2    3 <----- ÍNDICE/CHAVE        
//                   

let lista = [5, 8, 4]

lista[3] = 6
// adiciona o VALOR 6 no ÌNDICE 3
// [5, 8, 4, 6]

lista.push(1)
lista.push(10)

string = lista.join(' ')
// cria um novo ÍNDICE e adiciona o VALOR 7
// [5, 8, 4, 6, 7]
lista.length
// retorna a quantidades de ELEMENTOS
lista.sort()
// coloca os ELEMENTOS em ordem crescente 
// ***NÃO PRECISA FAZER "lista = lista.sort()"
lista.indexOf(8)
// retorna a posição(ÌNDICE) do VALOR 8
// retorna -1 caso não encontre

console.log(lista)

console.log(lista.slice(-1))

/*for (let contador = 0; contador < lista.length; contador ++) {
	console.log(lista[contador])
}*/


/*for (let posição in lista) {
	console.log(lista[posição])
}*/

let atributos_nomes = ["força", "destreza", "constituição", "inteligência", "sabedoria", "carisma"]

let atributos_elementos = {
	"força": 1,
	"destreza": 2,
	"constituição": 3,
	"inteligência": 4,
	"sabedoria": 5,
	"carisma": 6
}

for (let atributo in atributos_elementos) {
	console.log(atributo+": "+atributos_elementos[atributo])
}



