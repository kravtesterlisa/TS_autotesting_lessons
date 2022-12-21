// - Написать по 10 положительных и отрицательных тестов для каждого варианта:
// 	- Mocha + chai
// 	- Jest

import assert from "assert";
("chai");

class Calculator {
  val1: number;
  val2: number;
  constructor(val1: number, val2: number) {
    this.val1 = val1;
    this.val2 = val2;
  }

  sum(val1: number, val2: number): number {
    return val1 + val2;
  }

  sub(val1: number, val2: number): number {
    return val1 - val2;
  }

  mult(val1: number, val2: number): number {
    return val1 * val2;
  }

  div(val1: any, val2: number): number {
    return val1 / val2;
  }
}

// //Test 1:: function sumUnit
function sumUnitPositive(arg1: any, arg2: any, expectedResult: any): void {
  const actualResult = new Calculator(arg1, arg2).sum(arg1, arg2);
  assert.equal(
    actualResult,
    expectedResult,
    `Test sum with values ${arg1}, ${arg2} and ${expectedResult} failed`
  );
}

function sumUnitNegative(arg1: any, arg2: any, expectedResult: any) {
  const actualResult = new Calculator(arg1, arg2).sum(arg1, arg2);
  assert.notEqual(
    actualResult,
    expectedResult,
    `Test sum with values ${arg1}, ${arg2} and ${expectedResult} failed`
  );
}

// - Mocha + chai
describe("Sum function", function () {
  it("Sum basic test", function () {
    sumUnitPositive(1, 1, 2);
  });
  it("Sum with negative numbers", function () {
    sumUnitPositive(-2, 1, -1);
  });
  it("Sum with number==0 check", function () {
    sumUnitPositive(0, 0, 0);
  });
  it("Sum with fructional value", function () {
    sumUnitPositive(1.3, 2, 3.3);
  });
  it("Sum negative test", function () {
    sumUnitNegative(-2, 1, 1);
  });
});

//Test 2:: function subUnit
function subUnitPositive(arg1: any, arg2: any, expectedResult: any) {
  const actualResult = new Calculator(arg1, arg2).sub(arg1, arg2);
  assert.equal(
    actualResult,
    expectedResult,
    `Test sub with values ${arg1}, ${arg2} and ${expectedResult} failed`
  );
}
function subUnitNegative(arg1: any, arg2: any, expectedResult: any) {
  const actualResult = new Calculator(arg1, arg2).sub(arg1, arg2);
  assert.notEqual(
    actualResult,
    expectedResult,
    `Test sub with values ${arg1}, ${arg2} and ${expectedResult} failed`
  );
}

describe("Sub function", function () {
  it("Sub basic test", function () {
    subUnitPositive(1, 1, 0);
  });
  it("Sub with negative numbers", function () {
    subUnitPositive(-2, 1, -3);
  });
  it("Sub with number==0 check", function () {
    subUnitPositive(0, 0, 0);
  });
  it("Sub with fructional value", function () {
    subUnitPositive(4.3, 2, 2.3);
  });
  it("Sub negative test", function () {
    subUnitNegative(-2, -1, 3);
  });
});

//Test 3:: function multUnit
function multUnitPositive(arg1: any, arg2: any, expectedResult: any) {
  const actualResult = new Calculator(arg1, arg2).mult(arg1, arg2);
  assert.equal(
    actualResult,
    expectedResult,
    `Test mult with values ${arg1}, ${arg2} and ${expectedResult} passed`
  );
}
function multUnitNegative(arg1, arg2, expectedResult: any) {
  const actualResult = new Calculator(arg1, arg2).mult(arg1, arg2);
  assert.notEqual(
    actualResult,
    expectedResult,
    `Test sum with values ${arg1}, ${arg2} and ${expectedResult} failed`
  );
}
describe("Mult function", function () {
  it("Mult basic test", function () {
    multUnitPositive(1, 8, 8);
  });
  it("Mult with negative numbers", function () {
    multUnitPositive(-1, 8, -8);
  });
  it("Mult negative test", function () {
    multUnitNegative(1, 0, 15);
  });
});

//Test 4:: function divUnit
function divUnitPositive(arg1: any, arg2: any, expectedResult: any) {
  const actualResult = new Calculator(arg1, arg2).div(arg1, arg2);
  assert.equal(
    actualResult,
    expectedResult,
    `Test div with values ${arg1}, ${arg2} and ${expectedResult} passed`
  );
}
function divUnitNegative(arg1: any, arg2: any, expectedResult: any) {
  const actualResult = new Calculator(arg1, arg2).div(arg1, arg2);
  assert.notEqual(
    actualResult,
    expectedResult,
    `Test div with values ${arg1}, ${arg2} and ${expectedResult} failed`
  );
}
describe("Div function", function () {
  it("Div basic test", function () {
    divUnitPositive(6, 3, 2);
  });
  it("Div with negative numbers", function () {
    divUnitPositive(-8, 4, -2);
  });
  it("Div with zero value test", function () {
    divUnitPositive(8, 0, Infinity);
  });
  it("Div negative test", function () {
    divUnitNegative(0, 7, 2);
  });
});
