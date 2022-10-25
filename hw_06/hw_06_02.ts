//#### Task 2 🖥
//Создать любой обьект с двумя ключами и любыми значениями в них, а затем проверить есть ли в обьекте определенный ключ и если есть вывести в консоль **true**

const newObj = {
  name: "Andry",
  address: "Privite",
  registration: false,
  registrarion_time: 1,
};
function checkRegistrationTime(newObj: any) {
  if ("registrarion_time" in newObj) {
    console.log("true");
  } else {
    console.log("the checking is failed");
  }
}
checkRegistrationTime(newObj);
