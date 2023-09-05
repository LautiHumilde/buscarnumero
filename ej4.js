const string = "lauti";

function invertir(cadena) {
    if (cadena === "") {
      return "";
    } else {
      return cadena[cadena.length - 1] + invertir(cadena.slice(0, -1));
    }
  }
console.log(invertir(string));