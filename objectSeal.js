const car = {
  price: 15000,
};

Object.seal(car);
car.price = 18000;

console.log(car.price);

delete car.price;
console.log(car.price);
// cannot delete this
