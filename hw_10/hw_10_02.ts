// #### Task 4 💻

// 1. Опишите интерфейс IElectronics.
// 1.1. У интерфейса есть свойства price - число, electrType - строка, manufacturer - строка и метод turnOn.
// 2. Сделать 2-3 класса, например, телефон, электропила и тп, реализующие интрефейс.
// 3. Создать функцию, которая принимает параметром любой класс, реализующий IElectronics
//  3.1. и выводит 3 свойства и вызывает метод turnOn.

// 1. Опишите интерфейс IElectronics.
interface IElectronics {
  price: number;
  electroType: string;
  manufacturer: string;
  turnOn(): void;
}
//  2. Сделать 2-3 класса, например, телефон, электропила и тп, реализующие интрефейс.
class Iron implements IElectronics {
  price: number;
  electroType: string;
  manufacturer: string;

  constructor(price: number, electroType: string, manufacturer: string) {
    this.price = price;
    this.electroType = electroType;
    this.manufacturer = manufacturer;
  }
  turnOn() {
    console.log("from class Iron: turned on");
  }
}
class Clock implements IElectronics {
  price: number;
  electroType: string;
  manufacturer: string;

  constructor(price: number, electroType: string, manufacturer: string) {
    this.price = price;
    this.electroType = electroType;
    this.manufacturer = manufacturer;
  }
  turnOn() {
    console.log("from class Clock: turned on");
  }
}

//  3. Создать функцию, которая принимает параметром любой класс, реализующий IElectronics
function forInterface(input: IElectronics) {
  input.turnOn();
  console.log(input.price);
}
const obj1 = new Iron(120, "dom", "GG");
const obj2 = new Clock(300, "hh", "Mull");

forInterface(obj1);
forInterface(obj2);
