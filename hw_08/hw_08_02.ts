// #### Task 2 🖥

// Используя метод **`map`** создайте новый массив, на основе массива **`users`**, в котором каждый элемент массива будет содержать строку вида:

// > ['member 1: Darya', 'member 2: Masha', ... etc]

//     const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton']

// > Реализуйте решение двумя способами, используя `function declaration` & `arrow function`.

const users: string[] = [
  "Darya",
  "Masha",
  "Denis",
  "Vitaliy",
  "Polina",
  "Anton",
];

const newArray = users.map((value, index) => "Member ${index}: ${element}");
console.log(newArray);
