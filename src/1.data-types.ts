// Types in ts

// 1. Basic type
// number string boolean

let sum: number = 10;
let str: string = 'str';
let bool: boolean = true;

// Tuple, both length and content type are limited
let tuple: [string, number, boolean] = ['str', 11, true];
// You can add content as the type are declared to a tuple, but not attributes through an index.
tuple.push(true);

// Array
let arr1: number[] = [1, 2, 3];
let arr2: string[] = ['1', '2'];

let arr3: (number | string)[] = [1, 2, 3, '4'];
let arr4: Array<number | string> = [1, 2, 3, '5'];

const enum USER_ROLE {
  USER,
  ADMIN,
}
console.log(USER_ROLE.USER);

// null and undefined
let str2: number | string | undefined;
str2 = undefined;

// void 空类型 只能接受 null 和undefined 。 一般用于函数的返回值
// 函数默认的返回值是undefined, 默认在严格模式下不能将null 赋给void
// let v:void;
// v = null;

// string number boolean tuple array enum any null undefined

// never类型 永远不 是任何类型的子类型 可以把never赋予给任何类型
// 永远达不到的情况有三种 1） 错误  2） 死循环  3） 类型判断时会出现never 4) 完整性保护

function MyError(): never {
  throw new Error('');
}
function whileTrue(): never {
  while (true) {}
}
function byType(val: string | number) {
  if (typeof val == 'string') {
    val;
  } else if (typeof val == 'number') {
    val;
  } else {
    val; // never
  }
}

let n: never = MyError();

// Symbol BigInt   symbol 表示独一无二 元编程会用到 stringToFlag iterator ....
let s1: symbol = Symbol('123');
let s2 = Symbol('123');
console.log(s1 == s2); // false

//BitInt
let num1: bigint = BigInt(Number.MAX_SAFE_INTEGER) + BigInt(1);
let num2: bigint = BigInt(Number.MAX_SAFE_INTEGER) + BigInt(2);

console.log(Number);

// object type

const create = (obj: object) => {};
// create(1); // basic data type
// create(null); // basic
create({});
create([]);
create(function () {});

// string | number | boolean | array | tuple | never | null | undefined | void
// symbol bigint
// object

export {};
