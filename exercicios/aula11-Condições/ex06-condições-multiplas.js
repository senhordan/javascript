var agora = new Date().getDay()

console.log(agora)
switch (agora) {

	case 0:
		var dia = "Domingo"
		break;
	case 1:
		var dia = "Segunda"
		break;
	case 2:
		var dia = "Terça"
		break;
	case 3:
		var dia = "Quarta"
		break;
	case 4:
		var dia = "Quinta"
		break;
	case 5:
		var dia = "Sexta"
		break;
	case 6:
		var dia = "Sábado"
		break;
	default:
		// statements_def
		break;
}

console.log(`Hoje é ${dia}`)

