// Here we explicitly specify, that this is html input, because typescript can see we get html element, but doesn't know if it is input.
// We need to specify, that the html element is input, because later we will access the 'value' and not any html element has value property
const firstInput = document.getElementById('first') as HTMLInputElement;
// specifying like this, that our element is input is alternative syntax on the above line
const secondInput = <HTMLInputElement>document.getElementById('second');
const button = document.getElementsByTagName('button')[0];

button.addEventListener('click', () => {
  const firstVal = firstInput.value;
  const secondVal = secondInput.value;
  console.log(firstVal, secondVal);
});
