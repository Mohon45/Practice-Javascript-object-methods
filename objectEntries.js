const drinks = {
  pranUp: "Out of stock",
  sevenUp: 5,
  cok: "Out of stock",
};

for (const [name, quantity] of Object.entries(drinks)) {
  console.log(`${name} : ${quantity}`);
}
