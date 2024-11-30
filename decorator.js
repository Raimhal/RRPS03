// дозволяє динамічно добавляти нову поведімку не міняючи структури
class Pizza {
  constructor() {
    this.price = 10;
  }

  getPrice() {
    return this.price;
  }
}

class TomatoSauce {
  constructor(pizza) {
    this.pizza = pizza;
  }

  getPrice() {
    return this.pizza.getPrice() + 2;
  }
}

const myPizza = new Pizza();
const pizzaWithTomatoSauce = new TomatoSauce(myPizza);

console.log(myPizza.getPrice()); // 10
console.log(pizzaWithTomatoSauce.getPrice()); // 12
