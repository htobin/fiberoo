function fibHelper(num1, num2) {
  return num1 + num2;
}

function fiberoo() {
  const array = [0, 1];
  for (let i = 1; i < 49; i++) {
    const newNum = fibHelper(array[i], array[i - 1]);
    array.push(newNum);
  }
  return array;
}

console.log(fiberoo());

function numToString(numArray) {
  return _.map(numArray, item => `${item}`);
}

console.log(numToString([1, 2, 3]));

function evenNums(numArray) {
  const evenNumArr = _.filter(numArray, num => num % 2 === 0);
  return evenNumArr.length;
}

const arr = fiberoo();

console.log(evenNums(arr));
