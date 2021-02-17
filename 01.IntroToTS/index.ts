class User {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  sayHello() {
    return `${this.name} says hi!`;
  }
}

const user = new User('Pesho');
console.log(user.sayHello());

// to create js file from ts file type in terminal 'tsc index.ts' where index is the name of the file you wamt to run
