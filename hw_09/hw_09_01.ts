// #### Task 1 💻
// Написать класс, принимающий строку (`str`), число (`symNum`) и символ (`sym`) +
// создать
//     геттер, который возвращает есть ли в строке "str" символ `sym` :bool
//     геттер, который возвращает символ `symNum` в строке `str`.     :string
//         Если `symNum` больше, чем количество символов в `str`, то геттер возвращает случайный символ
//     метод, который принимает коллекцию Map со строками,
//         и возвращает строку `str`, где замененена каждая 0 подстрока из Map на 1
//         пример: `str = '123qweasd12', Map([['12', '-'], ['ea', '*']]), result = '-3qw*sd-'`
//     вывести все созданные геттеры и поле `str`

import { stringify } from "querystring";

class Something {
  str: string;
  symNum: number;
  sym: string;

  constructor(str: string, symNum: number, sym: string) {
    this.str = str;
    this.symNum = symNum;
    this.sym = sym;
  }
  //создать геттер, который возвращает есть ли в строке `sym`
  get findSym() {
    return this.str.includes(this.sym);
  }
  //геттер, который возвращает символ `symNum` в строке `str`.     :string
  //Если `symNum` больше, количество чем символов в `str`, возвращает случайный символ
  get returnValue() {
    if (this.symNum > this.str.length) {
      return Math.random();
    } else return this.str.charAt(this.symNum);
  }
  //метод, который принимает коллекцию Map со строками,
  //         и возвращает строку `str`, где замененена каждая 0 подстрока из Map на 1
  //         пример: `str = '123qweasd12', Map([['12', '-'], ['ea', '*']]), result = '-3qw*sd-'`

  newMap(input: Map<string, string>): string {
    //1.  получить на вход Map

    //2. Для каждой звписи в Map...
    let resultingStr: string = this.str;
    input.forEach((val: string, key: string, data: Map<string, string>) => {
      // 3. Изменить значение свойства "str"
      resultingStr = resultingStr.replace(key, val);
    });
    // 4. Вернуть новое значение "str"
    console.log(resultingStr);
    return resultingStr;
  }
}

const obj = new Something("my_string", 5, "mk");
// console.log(obj.findSym);
// console.log(obj.returnValue);

const inputMap = new Map([
  ["hellow", "world"],
  ["my", "value"],
]);
const dgg = obj.newMap(inputMap);
