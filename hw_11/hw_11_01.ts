// #### Task 1 💻
import fetch from "node-fetch";
import { error } from "console";
import { title } from "process";

// У нас есть список постов на сервере. И наша задача отрисовать текст этих постов на странице.

// Но по каким то необъяснимым причинам, нам требуются посты номер 3, 7, 15, 23. Выглядит просто. Но есть нюанс 🐒
// Посты должны загружаться в определенном порядке. Сначала 15, потом 23, потом 7 и только потом 3. А если какой-то из постов не загрузиться,
// нам тогда необходимо  вывести в консоль ошибку.

// Наша задача должна иметь универсальное решение. В любой момент может потребоваться загрузить другие посты, или больше постов или меньше.

// Для получения постов использовать https://jsonplaceholder.typicode.com/posts
// Задача может быть выполнена через https://jsonplaceholder.typicode.com/comments?postId=1 либо через setTimeout.
// ###### Реализуйте задачу двумя способами:
// - Promise chaining
// - Async / await

//https://jsonplaceholder.typicode.com/posts?id=1

type responsBodyT = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

let url = "https://jsonplaceholder.typicode.com/posts";

//1. Promise chaining

function GetPost(IdArray: number[]): void {
  // Collect promises
  let ArrayPromises: Promise<any>[] = [];
  IdArray.forEach((id) => {
    ArrayPromises.push(
      fetch(`https://jsonplaceholder.typicode.com/posts?id=${id}`)
        .then(
          (res) => res.json(),
          (error) => {
            console.log(`error in response: ${error}`);
          }
        )
        .then((res) => res[0] as responsBodyT)
      // .then((res) => console.log(`Post #${id}: ${res[0].body}`)) . // for responses tested
    );
  });
  // Promise.all();
  Promise.all(ArrayPromises).then((results: any[]) => {
    results.forEach((res) => {
      console.log(`Post: ${res.id}: ${res.body}`);
    });
  });
}
GetPost([15, 23, 7, 3]);

// - Async / await
async function AsyncGetPost(IdArray: number[]): Promise<void> {
  // Collect promises
  let ArrayPromises: Promise<any>[] = [];
  IdArray.forEach((id) => {
    ArrayPromises.push(
      fetch(`https://jsonplaceholder.typicode.com/posts?id=${id}`)
        .then(
          (res) => res.json(),
          (error) => {
            console.log(`error in response: ${error}`);
          }
        )
        .then((res) => res[0] as responsBodyT)
      // .then((res) => console.log(`Post #${id}: ${res[0].body}`))
    );
  });
  // Promise.all();
  Promise.all(ArrayPromises).then((results: any[]) => {
    results.forEach((res) => {
      console.log(`Post: ${res.id}: ${res.body}`);
    });
  });
}
AsyncGetPost([1, 5, 7]);
