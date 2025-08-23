// countDown = (n) => [n + 2, n + 1, n].join("!");
countDown = (n) => n + 2 + "!" + (n + 1) + "!" + n;
console.log(countDown(5));

console.log("countDown=n=>n+2+'!'+n+1+'!'+n'".length); // 36
