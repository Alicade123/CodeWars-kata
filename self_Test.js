const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const twoMethods = (getarr) => {
  return getarr
    .filter((elements) => elements % 2 === 0)
    .map((evens) => evens ** 2);
};
console.log(twoMethods(arr));

const words = ["apple", "banana", "cherry"];
const theMapApplication = (getWords) => {
  const indexed = getWords.map((word, index) => ({
    id: index,
    name: word,
  }));
  return indexed;
};
console.log(theMapApplication(words));
