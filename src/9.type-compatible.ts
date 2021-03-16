// 1.Compatibility of basic data type
let str1!: string;
let temp!: string | number;
temp = str1;
// str1 = temp;

interface MyNum {
  toString(): string;
}
let str2: MyNum = 'xxx';

let myNum!: MyNum;
// let str3: string = myNum;

// 2.Compatibility of interface type
interface Animal {
  name: string;
  age: number;
}
interface Person {
  name: string;
  age: number;
  address: string;
}

let animal!: Animal;
let person!: Person;
animal = person;
// person = animal;

let sum1 = (a: string, b: string) => {};
let sum2 = (a: string) => {};
sum1 = sum2;
// sum2 = sum1;

type ForEachFn<T> = (item: T, index: number) => void;
function forEach<T>(arr: T[], cb: ForEachFn<T>) {
  for (let i = 0; i < arr.length; i++) {
    cb(arr[i], i);
  }
}

forEach<number>([1, 2, 3, 4, 5], function () {});

type sum1 = () => { name: string };
type sum2 = () => { name: string; age: number };
let s1!: sum1;
let s2!: sum2;
s1 = s2;
// s2 = s1;

// 1.The basic type can be assigned to a large range in a small range
// 2.Interface type can give more to less
// 3.Function parameters: functions with fewer parameters can be assigned to functions with more parameters
// 4.The return value of the function follows (1,2,3)

// Inversion (the parameters of the function can be inverted, and the parent class and itself can be passed)
// Covariance (the return value of the function can be passed the subclass and itself
class Parent {
  address: string = 'Beijing';
}
class Child extends Parent {
  money: number = 100;
}
class Grandson extends Child {
  name: string = 'Tom';
}

// Pass parent, return child
function getFn(cb: (person: Child) => Child) {}
getFn((person: Parent) => new Grandson());

// class type compatibility => interface type compatibility
class Person1 {
  name: string = 'Bison';
}
class Person2 {
  name: string = 'Bison';
  address: string = 'Dalian';
}
let p1!: Person1;
let p2!: Person2;
p1 = p2;
// p2 = p1;

// If private or protected appear in the class, it will never be compatible
class Person3 {
  private name: string = 'Bison';
}
class Person4 {
  private name: string = 'Bison';
}
let p3!: Person3;
let p4!: Person4;
// p3 = p4;

// Enumerated types are never compatible
enum E1 {}
enum E2 {}
let e1!: E1;
let e2!: E2;
// e1 = e2;

// Generics
interface A<T> {
  [key: number]: T;
}
interface B<T> {
  [key: number]: T;
}
type A1 = A<string>;
type B1 = B<string | number>;
let a1!: A1;
let b1!: B1;
// a1 = b1;
b1 = a1;

export {};
