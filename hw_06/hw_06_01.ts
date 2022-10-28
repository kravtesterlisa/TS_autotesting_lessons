//#### Task 1 💻
//Создать любой обьект с двумя ключами и любыми значениями в них, а затем удалить ключи из обьекта.

interface IMy {
  name: string;
  age: number;
  sex?: boolean;
  additionalType?: string;
}

const obj: IMy = {
  name: "Andrey",
  age: 1,
  sex: true,
  additionalType: "hello_world",
};
delete obj.additionalType;
delete obj.sex;
console.log(obj);
