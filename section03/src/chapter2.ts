let a: unknown = 1; // number -> unknown
let b: unknown = "hello"; // string -> unknown
let c: unknown = true; // boolean -> unknown
let d: unknown = null; // null -> unknown
let e: unknown = undefined; // undefined -> unknown
let f: unknown = []; // Array -> unknown
let g: unknown = {}; // Object -> unknown
let h: unknown = () => {}; // Function -> unknown

let unknownValue: unknown;

//let a: number = unknownVar;
//let str; string = unknownVar;
//let bool; boolean = unknownVar;

/* Never 타입 */

function neverExan() {
  function neverFunc(): never {
    while (true) {}
  }

  let num: number = neverFunc();
  let str: string = neverFunc();
  let bool: boolean = neverFunc();

  //   let neverNum: never = 10;
  //   let neverStr: never = "string";
  //   let neverBool: never = true;
}

/* void 타입 */

function voidExam() {
  function voidFunc(): void {
    console.log("hi");
    return undefined;
  }

  let voidVar: void = undefined;
}

/*any*/

function anyExam() {
  let unknowVar: unknown;
  let anyVar: any;
  let undefinedVar = undefined;
  let neverVar: never;

  anyVar = unknowVar;
  undefinedVar = anyVar;
  //neverVar = anyVar;
}
