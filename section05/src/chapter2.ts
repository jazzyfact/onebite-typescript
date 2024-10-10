/* 선언 합침 */

interface Person {
  name: string;
}

interface Person {
  age: number;
}

interface Developer extends Person {
  name: "hello";
}

const person: Person = {
  name: "",
  age: 18,
};

/* 모듈 보강 */

interface lib {
  a: number;
  b: number;
}

interface lib {
  c: string;
}

const lib = {
  a: 1,
  b: 2,
  c: "hello",
};
