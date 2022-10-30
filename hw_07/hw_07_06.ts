//#### Task 6 🖥

//     const evenNumbers = [2, 4, 6, 8, 10]
//     const oddNumbers = [1, 3, 5, 7, 9]

// + Соедините два массива чисел в один.
// + В полученном массиве попробуйте найти индекс числа **`8`**

const evenNumbers = [2, 4, 6, 8, 10];
const oddNumbers = [1, 3, 5, 7, 9];
//+ Соедините два массива чисел в один.
const concatArrays = evenNumbers.concat(oddNumbers);
console.log(concatArrays);
// + В полученном массиве попробуйте найти индекс числа **`8`**
let findValue = concatArrays.findIndex(
  (value: number, index: number, obj: number[]) => value == 8
);
console.log(findValue);
