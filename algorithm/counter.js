function counter(first, second) {
  let x = 0;
  if (first >= second) {
    for (let i = first; i >= second; i--) {
      x += i;
    }
  } else {
    for (let i = second; i >= first; i--) {
      x += i;
    }
  }
  return x;
}

console.log(counter(15, 10));
console.log(counter(10, 15));
