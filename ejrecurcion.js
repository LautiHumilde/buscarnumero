var arreglo = [2, 5, 3, 1, 7, 6, 0, 9, 4];

for (var i = 0; i < arreglo.length - 1; i++) {
	for (var j = 0; j < arreglo.length - i - 1; j++) {
		if (arreglo[j] > arreglo[j + 1]) {
			var aux = arreglo[j];
			arreglo[j] = arreglo[j + 1];
			arreglo[j + 1] = aux;
		}
	}
}

console.log(arreglo);

let medio = arreglo.length / 2;

if (medio.toString().includes(".")) {
	medio += 0.5;
}

function buscar(arr, numero, i, j) {
	if (i <= j) {
		if (arr[medio] === numero) {
			return true;
		}
		if (numero > arr[medio]) {
			return buscar(arr, numero, medio + 1, j);
		} else {
			return buscar(arr, numero, i, medio - 1);
		}
	} else {
		return -1;
	}
}

let numeroBuscado = 8;

const resultado = buscar(arreglo, numeroBuscado, 0, arreglo.length - 1);

if (resultado !== -1) {
	console.log(
		`El número ${numeroBuscado} se encuentra en el índice ${resultado}.`
	);
} else {
	console.log(`El número ${numeroBuscado} no se encuentra en el arreglo.`);
}
