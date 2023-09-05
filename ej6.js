let binario = "100101"

function binary(num) {
    if (num === "") {
      return 0;
    }
    const Decimal = parseInt(num[num.length - 1]);
    return Decimal + 2 * binary(num.slice(0, -1));
  }
  console.log(binary(binario));
  