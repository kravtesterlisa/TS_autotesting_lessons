//#### Task 6 💻
//Напишите функцию **fooboo** которая принимает в качестве аргумента три параметра:

//+ булевое значение
//+ функцию **foo** которая выводит в консоль свое имя
//+ функцию **boo** которая выводит в консоль свое имя
//> Если переданное булевое значение **true** запускаем функцию **foo** иначе **boo**

const foo = function () {
  console.log(foo.name);
};

const boo = function () {
  console.log(boo.name);
};

function fooboo(value: boolean, foo: any, boo: any) {
  if (value === true) {
    foo();
  } else {
    boo();
  }
}
fooboo(false, foo, boo);
//fooboo(true, foo, boo); test call function for review with boolean value == true
