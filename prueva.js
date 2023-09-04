function busquedaBinariaRecursiva(arr, numero, inicio, fin) {
	if (inicio <= fin) {
		const medio = Math.floor((inicio + fin) / 2);

		if (arr[medio] === numero) {
			return medio;
		} else if (arr[medio] < numero) {
			return busquedaBinariaRecursiva(arr, numero, medio + 1, fin);
		} else {
			return busquedaBinariaRecursiva(arr, numero, inicio, medio - 1);
		}
	} else {
		return -1; // El número no se encuentra en el arreglo
	}
}

// Ejemplo de uso:
const arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numeroBuscado = 7;
const resultado = busquedaBinariaRecursiva(
	arreglo,
	numeroBuscado,
	0,
	arreglo.length - 1
);

if (resultado !== -1) {
	console.log(
		`El número ${numeroBuscado} se encuentra en el índice ${resultado}.`
	);
} else {
	console.log(`El número ${numeroBuscado} no se encuentra en el arreglo.`);
}
