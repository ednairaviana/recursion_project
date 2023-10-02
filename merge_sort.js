const array = [3, 1, 6, 4, 8, 10, 7, 2, 9, 5, 0, 11, -1, -12];

function sortArray(arr) {
  if (arr.length < 2) {
    return arr;
  } else {
    const a = sortArray(arr.slice(0, Math.round(arr.length / 2)));
    const b = sortArray(arr.slice(Math.round(arr.length / 2)));
    const c = [];

    let i = 0;
    let j = 0;

    while (c.length < a.length + b.length) {
      if (a[i] < b[j] || j === b.length) {
        c.push(a[i++]);
      } else {
        c.push(b[j++]);
      }
    }

    return c;
  }
}

console.log(sortArray(array));
