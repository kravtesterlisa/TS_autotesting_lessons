//#### Task 4 🖥

//Дан массив:

//     const students = ['Polina', 'Dasha', 'Masha']

// + Удалите последний элемент массива, затем вместо него добавьте в массив студента `Borya`.
// + Удалите первый элемент массива, затем вместо него добавьте в массив студента `Andrey`.
// + Полученный результат не забудьте вывести в консоль.

const students = ["Polina", "Dasha", "Masha"];
// + Удалите последний элемент массива, затем вместо него добавьте в массив студента `Borya`.
students.pop();
students.push("Borya");
//+ Удалите первый элемент массива, затем вместо него добавьте в массив студента `Andrey`.
students.shift();
students.unshift("Andrey");
// + Полученный результат не забудьте вывести в консоль.
console.log(students);