//#### Task 3 🖥
//Дан обьект:

// ```javascript
//     const student = {
//         name: 'John',
//         age: 19,
//         isHappy: true
//     }
// ```

//C помощью цикла **for in** вывести в консоль сначала все ключи, потом значения ключей обьекта.

type TStudent = {
  [propertyKey: string]: string | number | boolean;
  age: number;
  name: string;
  isHappy: boolean;
};

const student: TStudent = {
  name: "John",
  age: 15,
  isHappy: true,
};

type s = { a: "andrey" };

for (const personKey in student) {
  console.log(personKey);
  let value = student[personKey];
  console.log(value);
}
