// our function will return result of type number
function sum(a: number, b: number): number {
  return a + b;
}

// here we don't need to specify, that the result variable is of type number because ts knows that from the return type of the function
const result = sum(3, 5);
console.log(result);
