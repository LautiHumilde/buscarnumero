const string = "saippuakivikauppias"

function palindromo(palabra) {
    if (palabra.length <= 1) {
      return true;
    }
    if (palabra[0] !== palabra[palabra.length - 1]) {
      return false;
    }
    return palindromo(palabra.slice(1, palabra.length - 1));
  }
  console.log(palindromo(string));