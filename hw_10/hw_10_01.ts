// #### Task 1 💻

// Создайте класс Car. Создайте два дочерних класса SportCar и LuxuryCar. Конструкт родительского класса принимает переменные марку авто и тип двигателя.
//  Дочерние классы должны иметь методы выводящие максиальную скорость и цену на соответсвующие типы авто.
//Выводящий текст должен быть таким: `This is <carName>. It has <engineType> engine and max speed equal to <maxSpeed>. Approximetly cost of the car is <carCost>`.
//(В задании используйте не только public модификатор, где это возможно)

// Создайте класс Car.
class Car {
  protected carName: string;
  protected engineType: string;
  carCost: number;
  maxSpeed: number;

  //Конструкт родительского класса принимает переменные марку авто и тип двигателя.
  constructor(
    carName: string,
    engineType: string,
    carCost: number,
    maxSpeed: number
  ) {
    this.carName = carName;
    this.engineType = engineType;
    this.carCost = carCost;
    this.maxSpeed = maxSpeed;
  }
}

// Создайте два дочерних класса SportCar и LuxuryCar.
//Дочерние классы должны иметь методы выводящие максиальную скорость и цену на соответсвующие типы авто.
class SportCar extends Car {
  //методы выводящие максиальную скорость и цену на соответсвующие типы авто.
  printMaxSpeed(): void {
    console.log(`max speed equal to ${this.maxSpeed}`);
  }
}
class LuxuryCar extends Car {
  printPrice(): void {
    console.log(`Cost of the car is ${this.carCost}`);
  }
}

let obj5 = new SportCar("typeEngine", "carName", 150, 56666);
obj5.printMaxSpeed();
let obj6 = new LuxuryCar("typeEngine", "carName", 150, 56666);
obj6.printPrice();
