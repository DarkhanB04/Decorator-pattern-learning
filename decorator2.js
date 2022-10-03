class DentalBraces {
  constructor(price, place) {
    this.price = price;
    this.place = "";
  }
  getPrice() {
    return this.price;
  }
  getDesc() {
    return `This braces in ${this.place}`;
  }
}

class TopBraces extends DentalBraces {
  constructor() {
    super();
    this.price = 130000;
    this.place = "top";
  }
}
class UnderPlace extends DentalBraces {
  constructor() {
    super();
    this.price = 250000;
    this.place = "under";
  }
}
//decorator
class Material {
  constructor(braces, material) {
    this.braces = braces;
    this.material = material;
  }
  getPrice() {
    switch (this.material) {
      case "metal":
        return this.braces.getPrice() + 30000;
        break;
      case "ceramics":
        return this.braces.getPrice() + 50000;
        break;
      case "diamond":
        return this.braces.getPrice() + 800000;
        break;
    }
  }
  getDesc() {
    return `${this.braces.getDesc()} and have material ${this.material}`;
  }
}
class Color {
  constructor(braces, color) {
    this.braces = braces;
    this.color = color;
  }
  getPrice() {
    switch (this.color) {
      case "blue":
        return this.braces.getPrice() + 2000;
        break;
      case "white":
        return this.braces.getPrice() + 30000;
        break;
      case "no":
        return this.braces.getPrice();
        break;
    }
  }
  getDesc() {
    return `${this.braces.getDesc()} with color ${this.color}`;
  }
}

var topBraces = new TopBraces();
const metal = "metal";
topBraces = new Material(topBraces, metal);
const white = "white";
topBraces = new Color(topBraces, white);
console.log(topBraces.getPrice(), topBraces.getDesc());

var underBraces = new UnderPlace();
const ceramics = "ceramics";
underBraces = new Material(underBraces, ceramics);
const noColor = "no";
underBraces = new Color(underBraces, noColor);
console.log(underBraces.getPrice(), underBraces.getDesc());
