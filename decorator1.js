class Car {
  constructor(price, model) {
    this.price = price;
    this.model = "";
  }
  getPrice() {
    return this.price;
  }
  getDesc() {
    return this.model;
  }
}

class Tesla extends Car {
  constructor() {
    super(); //super is used for calling all methods from parent class
    this.price = 50000;
    this.model = "Tesla";
  }
}

//decorators
class AutoPilot {
  constructor(car) {
    this.car = car;
  }
  getPrice() {
    return this.car.getPrice() + 5000;
  }
  getDesc() {
    return `${this.car.getDesc()} with autopilot complete set`;
  }
}

class Tablet {
  constructor(car, numOfTablets) {
    this.car = car;
    this.numOfTablets = numOfTablets;
  }
  getPrice() {
    return this.car.getPrice() + this.numOfTablets * 300;
  }
  getDesc() {
    return `${this.car.getDesc()} with ${this.numOfTablets} tablets`;
  }
}
class Parktronic {
  constructor(car) {
    this.car = car;
  }
  getPrice() {
    return this.car.getPrice() + 500;
  }
  getDesc() {
    return `${this.car.getDesc()} with parktronic`;
  }
}

var tesla = new Tesla();
tesla = new AutoPilot(tesla);
tesla = new Tablet(tesla, 3);
tesla = new Parktronic(tesla);

console.log(tesla.getPrice(), tesla.getDesc());
