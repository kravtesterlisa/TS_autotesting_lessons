//#### Task 2 💻
//Дана строка 'я учу typescript!'. Проверить, есть ли данное слово в строке: если есть - вывести позицию подстроки 'учу', если нет - вывести строку `Данной подстроки нет`

let newStr: string = 'я учу typescript!';

if (newStr.includes('учу')){
    console.log(newStr.indexOf('учу'))
}else {
    console.log('Данной подстроки нет')
}
