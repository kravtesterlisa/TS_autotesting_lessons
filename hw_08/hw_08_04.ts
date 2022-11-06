// #### Task 4 🖥
// Используя метод **`reduce`** получите сумму всех чисел массива.
//     const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]

// > Реализуйте решение двумя способами, используя `function declaration` & `arrow function`.

const fibonacci1: number[] = [
  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987,
];

//const newFib1 = fibonacci1.reduce((sum, element) => sum + element, 0);
// console.log(newFib1);

//function declaration;
function newFib(sum: number, element: number) {
  return sum + element;
}
console.log(fibonacci1.reduce(newFib));

//`arrow function`
console.log(
  fibonacci1.reduce((sum, element) => {
    return sum + element;
  })
);
