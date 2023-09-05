const p1 = "programacion"
const p2 = "macion"

function finalizacion(c1, c2) {
    if (c2 === "") {
      return true;
    }
    if (c1 === "") {
      return false;
    }
    if (c1[c1.length - 1] !== c2[c2.length - 1]) {
      return false;
    }
    return finalizacion(c1.slice(0, -1), c2.slice(0, -1));
  }
  console.log(finalizacion(p1 , p2));