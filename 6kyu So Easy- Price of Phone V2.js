function salePrice(input) {
  const lines = input.trim().split("\n");

  const output = lines.map((line) => {
    const match = line.match(/^(.*) cost price: \$([0-9]+)/);
    if (match) {
      const name = match[1];
      const price = parseInt(match[2], 10);
      const sale = Math.trunc(price + (price * 15) / 100);

      let lastDigit = sale % 10;
      let finalPrice;

      if (lastDigit === 0 || lastDigit === 5) {
        finalPrice = sale;
      } else if (lastDigit < 5) {
        finalPrice = sale - lastDigit;
      } else {
        finalPrice = sale + (10 - lastDigit);
      }

      return `${name} sale price: $${finalPrice}`;
    }
    return line;
  });

  return output.join("\n");
}
const input = `\
iPhone 7 cost price: $800
Samsung note 7 cost price: $600
iPad pro cost price: $700`;

console.log(salePrice(input));
