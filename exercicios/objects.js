let amigo = {
nome:"josé",
sexo:"M",
peso:85.5,
engordar(kg=0){
	console.log("engordou")
	this.peso += kg // this referencia a key peso do proprio objeto
}}

amigo.engordar(2) // chama a função interna
console.log(amigo.peso) // retorna o valor de peso