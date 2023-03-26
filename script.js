'use strict';


class Product {
  constructor(price) {
    this.price = price;
  }

  static shopDiscount = 20;

  getPriceWithDiscount() {
    this.price = (this.price / 100) * (100 - Product.shopDiscount);
  } 
}

const prodOne = new Product(100);
prodOne.getPriceWithDiscount();
console.log(prodOne);
