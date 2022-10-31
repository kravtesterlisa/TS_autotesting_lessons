//#### Task 3 🖥
// Дан массив:
//     const numbers = [5, 43, 63, 23, 90]

// Удалите все элементы в массиве и выведите в консоль полученный результат.

// > Реализуйте решение двумя способами.

//1:
const numbers: number[] = [5, 43, 63, 23, 90];
let deleteAll = numbers.slice(-1, 0);
console.log(deleteAll);
//2:
let deleteValue = numbers.splice(0, 5);
console.log("deleted values from array: " + deleteValue);
//3:
let clearArr = numbers.slice();
for (let index = 0; index <= numbers.length; index++) {
  clearArr = numbers.slice(index);
  console.log(clearArr);
}
