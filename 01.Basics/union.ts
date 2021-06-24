// with union type we can make something to be allowed to have more than one type
function groupThem(a: number | string, b: number | string) {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  } else if (typeof a === 'string' && typeof b === 'string') {
    return a + ' ' + b;
  }
  return 'Both parameters should be of the same type';
}

console.log(groupThem('2', 2));
