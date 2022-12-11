// #### Task 1 💻
// - Реализовать класс калькулятор, который принимает имеет несколько методов (сложение, вычитание, умножение, деление, и еще любой/любые на выбор)
// и принимает 2 параметра: 2 цифры и операция
// - Написать 10 положительных и отрицательных тестов (методов) по вызову данных функции,
// которые в зависимости от переданных аргументов и ожидаемого результата выводит либо: что "тест" прошел, либо что "тест" свалился

class Calculator {
  val1: number;
  val2: number;

  sum(val1: number, val2: number) {
    return val1 + val2;
  }

  sub(val1: number, val2: number) {
    return val1 - val2;
  }

  mult(val1: number, val2: number) {
    return val1 * val2;
  }

  div(val1: number, val2: number) {
    return val1 / val2;
  }
}

//Test 1:: function sumUnit
function sumUnit(arg1: any, arg2: any, expectedResult: any) {
  const resultSum = new Calculator().sum(arg1, arg2);
  if (resultSum === expectedResult) {
    console.log(
      `Test sum with values ${arg1}, ${arg2} and ${expectedResult} passed`
    );
  } else
    console.log(
      `Test sum with values ${arg1}, ${arg2} and ${expectedResult} failed`
    );
}
//Test-cases:
// 1. positive test
sumUnit(1, 2, 3);
// 2. negative test
sumUnit(3, "65", 68);
// 3. negative test
sumUnit(-2, 1, 0);

//Test 2:: function subUnit
function subUnit(arg1: any, arg2: any, expectedResult: any) {
  const resultSub = new Calculator().sub(arg1, arg2);
  if (resultSub === expectedResult) {
    console.log(
      `Test sub with values ${arg1}, ${arg2} and ${expectedResult} passed`
    );
  } else
    console.log(
      `Test sub with values ${arg1}, ${arg2} and ${expectedResult} failed`
    );
}
//Test-cases:
// 1. positive test
subUnit(0.5, 0.5, 0);
// 2.positive test
subUnit(2, 3, -1);
// 3. negative test
subUnit(false, 8, 88);

//Test 3:: function multUnit
function multUnit(arg1: any, arg2: any, expectedResult: any) {
  const resultMult = new Calculator().mult(arg1, arg2);
  if (resultMult === expectedResult) {
    console.log(
      `Test mult with values ${arg1}, ${arg2} and ${expectedResult} passed`
    );
  } else
    console.log(
      `Test mult with values ${arg1}, ${arg2} and ${expectedResult} failed`
    );
}
//Test-cases:
// 1. positive test
multUnit(1, 8, 8);
// 2. positive test
multUnit(-5, 3, -15);
// 3. negative test
multUnit(false, 8, 15);

//Test 4:: function divUnit
function divUnit(arg1: any, arg2: any, expectedResult: any) {
  const resultDiv = new Calculator().div(arg1, arg2);
  if (resultDiv === expectedResult) {
    console.log(
      `Test div with values ${arg1}, ${arg2} and ${expectedResult} passed`
    );
  }
  //throw new Error(
  else
    console.log(
      `Test div with values ${arg1}, ${arg2} and ${expectedResult} failed`
    );
}

// Test cases:
// 1. positive test:
divUnit(12, 3, 4);
// 2. positive test:
divUnit(10, 0, Infinity);
// 3. negative test:
divUnit("14", 6, 4);
