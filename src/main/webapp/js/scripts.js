const calculate = () => {
	let n1 = parseFloat(document.getElementById("firstNumber").value);
	let n2 = parseFloat(document.getElementById("secondNumber").value);
	let operation = document.getElementById("select").value;
	let result = document.getElementById("result").innerHTML;
	
	if (isNaN(n1) || isNaN(n2)) {
		result = `Error. Se necesitan dos números para calcular.`;
	} else {
		switch (operation) {
			case "add":
				result = `Resultado: ${n1 + n2}`;
				break;
			case "subtract":
				result = `Resultado: ${n1 - n2}`;
				break;
			case "multiply":
				result = `Resultado: ${n1 * n2}`;
				break;
			case "divide":
				if (n2 != 0) {
    				result = `Resultado: ${n1 / n2}`;
				} else {
					result = `Para algunos el resultado es "infinito", para otros "indeterminado", el que te guste más.`;
				}
				break;
			default:
				result = `Error. Se realizó una operación no válida.`;
				break;
		}	
	}
}