console.log(fibLoop(7));
console.log(fibAr(7));
console.log(fibArrRec(7).reverse());
console.log("")

// FIBONACCI ARRAY LOOP
function fibLoop(value) {
  const fibArray = [0, 1];
  for (i = 1; i < value; i++) {
    let sum = fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2];
    fibArray.push(sum);
  }

  return fibArray;
}

// FIBONACCI ARRAY TWO RECURSIONS

function fibAr(n) {
  return n === 0 ? [n] : [fibRec(n)].concat(fibAr(n - 1).reverse()).reverse();
  function fibRec(n) {
    return n < 2 ? n : fibRec(n - 2) + fibRec(n - 1);
  }
}

// FIBONACCI ARRAY ONE RECURSION -> need reverse()
function fibArrRec(n) {
  return n <= 0
    ? parseInt(n * -1)
    : [parseInt(fibArrRec(n - 2)) + parseInt(fibArrRec(n - 1))].concat(
        fibArrRec(n - 1)
      );
}
