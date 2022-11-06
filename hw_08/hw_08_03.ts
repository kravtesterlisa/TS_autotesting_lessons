// #### Task 3 🖥

// С помощью метода **`filter`** создайте новый массив в котором не будет отрицательных чисел.
//     const numbers = [7, -4, 32, -90, 54, 32, -21]

// > Реализуйте решение двумя способами, используя `function declaration` & `arrow function`

const numbers = [7, -4, 32, -90, 54, 32, -21];
// const newNumbers = numbers.filter(
//   (value: number, index: number, numbers: number[]) => {
//     return value > 0;
//   }
// );
// console.log(newNumbers);

//`function declaration`;
// function listPlus(value: number, index: number, numbers: number[]) {
//   return value > 0;
// }
// console.log(numbers.filter(listPlus));

//arrow function
let aa = numbers.filter((value: number, index: number, numbers: number[]) => {
  return value > 0;
});
