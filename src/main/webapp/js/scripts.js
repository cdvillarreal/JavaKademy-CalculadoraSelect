const calculate = () => {
	n1 = parseFloat(document.getElementById("firstNumber").value);
	n2 = parseFloat(document.getElementById("secondNumber").value);
	operation = document.getElementById("select").value
	
	if (isNaN(n1) || isNaN(n2)) {
		document.getElementById("result").innerHTML = `Error. Se necesitan dos números para calcular.`;
	} else {
	switch (operation) {
		case "add":
			document.getElementById("result").innerHTML = `Resultado: ${n1 + n2}`;
			break;
		case "subtract":
			document.getElementById("result").innerHTML = `Resultado: ${n1 - n2}`;
			break;
		case "multiply":
			document.getElementById("result").innerHTML = `Resultado: ${n1 * n2}`;
			break;
		case "divide":
			if (n2 != 0) {
    			document.getElementById("result").innerHTML = `Resultado: ${n1 / n2}`;
			} else {
				document.getElementById("result").innerHTML = `Para algunos el resultado es "infinito", para otros "indeterminado", el que te guste más.`;
			}
			break;
		default:
			document.getElementById("result").innerHTML = `Error. Se realizó una operación no válida.`;
			break;
	}	
	}
}