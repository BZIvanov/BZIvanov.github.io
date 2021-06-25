// this is how we specify, that our promise will return string and later in the code we have autocomplete for string methods
const myProm = new Promise<string>((resolve, reject) => {
  setTimeout(() => {
    resolve('Works');
  }, 500);
});

myProm.then((result) => {
  console.log(result.endsWith('s'));
});
