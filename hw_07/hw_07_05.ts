// #### Task 5 🖥

// Дан массив:
// const cats = ['Gachito', 'Tom', 'Batman']

// Выведите в консоль все элементы массива. Сначала через цикл **`for`**, затем **`for of`**.

const cats = ["Gachito", "Tom", "Batman"];
//for
for (let index = 0; index < cats.length; index++) {
  console.log(cats[index]);
}

// for of:
for (const value of cats) {
  console.log(value);
}
