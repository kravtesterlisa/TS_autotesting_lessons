// - Написать по 10 положительных и отрицательных тестов для каждого варианта:

// 	- Jest

import Calculator from "./CalculatorClass";

describe("test Sum function", () => {
  const NewSum = new Calculator().sum;
  it("basic sum test: return (5) for sum(2, 3)", () => {
    expect(NewSum(2, 3)).toBe(5);
  });
  it("Sum with negative numbers: return (-1) for sum(-2, 1)", () => {
    expect(NewSum(-2, 1)).toBe(-1);
  });
  it("Sum with number==0 return (4) for sum(0, 4)", () => {
    expect(NewSum(0, 4)).toBe(4);
  });
  it("Sum negative test with arg1 = 'str' ", () => {
    expect(NewSum("str", 2)).toBe("str2");
  });
});

describe("test Sub function", () => {
  const NewSub = new Calculator().sub;
  it("basic sub test", () => {
    expect(NewSub(8, 3)).toBe(5);
  });
  it("Sub with negative numbers)", () => {
    expect(NewSub(-2, 1)).toBe(-3);
  });
  it("Sub with number==0", () => {
    expect(NewSub(0, 4)).toBe(-4);
  });
  it("Sub Sub with fructional value ", () => {
    expect(NewSub(1.2, 2)).toBe(-0.8);
  });
  it("Sub negative test with arg1 = 'str' ", () => {
    expect(NewSub("str", 2)).toBe(NaN);
  });
});

describe("test Mult function", () => {
  const NewMult = new Calculator().mult;
  it("Mult basic test", () => {
    expect(NewMult(1, 8)).toBe(8);
  });
  it("Mult with negative numbers", () => {
    expect(NewMult(-1, 8)).toBe, -8;
  });
  it("Mult negative test", () => {
    expect(NewMult("str", 0)).toBe(NaN);
  });
});

describe("Div function", () => {
  const NewDiv = new Calculator().div;
  it("Div basic test", () => {
    expect(NewDiv(6, 3)).toBe(2);
  });
  it("Div with negative numbers", () => {
    expect(NewDiv(-8, 4)).toBe(-2);
  });
  it("Div with zero value test", () => {
    expect(NewDiv(8, 0)).toBe(Infinity);
  });
  it("Div negative test", () => {
    expect(NewDiv(0, 7)).toBe(0);
  });
});
