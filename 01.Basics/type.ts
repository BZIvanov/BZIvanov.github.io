// EXAMPLE 1

// this way we can define type, which we can easily reuse, instead of typing the entire type object everywhere
type User = { name: string; city: string; income: number };

const usersList: User[] = [];

const myUser = { name: 'Iva', city: 'Sofia', income: 5700 };

const addUser = (user: User): void => {
  usersList.push(user);
};

addUser(myUser);
console.log(usersList);

// EXAMPLE 2

// basically type keyword is the same as type string for example, but used for more complicated types than just number or string
type funcInput = string | number;

function printIt(value: funcInput) {
  return value;
}

console.log(printIt('Hello'));
