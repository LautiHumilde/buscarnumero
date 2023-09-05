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

function buscar(arr, num, i, j) {
	if (i <= j) {
		const medio = Math.floor((i + j) / 2);

		if (arr[medio] === num) {
			return medio;
		} else if (arr[medio] < num) {
			return buscar(arr, num, medio + 1, j);
		} else {
			return buscar(arr, num, i, medio - 1);
		}
	} else {
		return -1;
	}
}

const numero = 4;
const resultado = buscar(
	arreglo,
	numero,
	0,
	arreglo.length - 1
);

if (resultado !== -1) {
	console.log("tu numero esta");
} else {
	console.log("tu numero no esta");
}