//#### Task 5 💻

//Написать функцию **`getSum`** которая принимает два целых числа a и b, которые могут быть положительными или отрицательными, найти сумму всех чисел между ними,
// включая их, и вернуть ее. Если два числа равны, верните a или b.

// getSum(1, 0) == 1   // 1 + 0 = 1
// getSum(1, 2) == 3   // 1 + 2 = 3
// getSum(0, 1) == 1   // 0 + 1 = 1
// getSum(1, 1) == 1   // 1 Since both are same
// getSum(-1, 0) == -1 // -1 + 0 = -1
// getSum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2

function getSum1(a: number, b: number) {
  let sum = 0;

  //   if (a != b) {
  for (let index = a; index <= b; index++) {
    sum += index;
    // }
  }
  return sum;
}
console.log(getSum1(2, 2));
