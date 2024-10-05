/* 기본 타입의 호환성*/

let num1: number = 10;
let num2: 10 = 10;

num1 = num2;

/* 객체 타입간의 호환성
-> 어떤 객체타입을 다른 객체타입으로 취급해도 괜찮은가?*/

type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  bread: string;
};

let animal: Animal = {
  name: "기린",
  color: "yellow",
};

let dog: Dog = {
  name: "돌돌이",
  color: "brown",
  bread: "진도",
};

animal = dog;

//dog = animal;

type ProgramingBook = {
  name: string;
  price: number;
  skill: string;
};

let book: Book;
let programingBook: ProgramingBook = {
  name: "타입스크립트",
  price: 33000,
  skill: "reactjs",
};

book = programingBook;
//programingBook = book;

/* 초과 프로퍼티 검사 */

type Book = {
  name: string;
  price: number;
};

let book2: Book = {
  name: "타입스크립트",
  price: 33000,
  //   skill: "reactjs",
};

let book3: Book = programingBook;

function func(book: Book) {}
func({
  name: "타입스크립트",
  price: 33000,
  //   skill: "reactjs",
});
func(programingBook);
