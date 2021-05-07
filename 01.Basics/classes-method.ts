class Seller {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  sayHello() {
    return `${this.name} says hi!`;
  }
}

const user = new Seller('Pesho');
console.log(user.sayHello());
