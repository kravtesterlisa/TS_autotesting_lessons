//#### Task 5 🖥
//Дан обьект:
//     let salaries = {
//         andrey: 500,
//         sveta: 413,
//         anton: 987,
//         andrey: 664,
//         alexandra: 199}

//Вычислите среднюю зарплату сотрудников и результат поместите в соответствующую переменную

type TypeSalaries = {
  [index: string]: number;
};

const salaries: TypeSalaries = {
  andrey: 500,
  sveta: 413,
  anton: 987,
  mickle: 664,
  alexandra: 199,
};

function sumSalary(salaries: TypeSalaries): number {
  let sum = 0;
  for (const salaryKey in salaries) {
    sum += salaries[salaryKey];
  }
  return sum;
}

console.log(sumSalary(salaries));
