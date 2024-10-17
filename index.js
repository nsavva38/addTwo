const addTwo = (array) => {

  let newArray = [];

  for (let i = 0; i < array.length; i++) {

    newArray[i] = array[i] + 2;

  }

  return newArray;
}

const array = [2, 4, 6, 8, 10];

const newArray = addTwo(array);

console.log(newArray);