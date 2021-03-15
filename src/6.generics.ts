// in function
function createArray<T>(times: number, val: T) {
  let result = [];
  for (let i = 0; i < times; i++) {
    result.push(val);
  }
  return result;
}
let r = createArray<string>(3, 'ABC');

function swap<A, B>(tuple: [A, B]): [B, A] {
  return [tuple[1], tuple[0]];
}
console.log(
  swap<string, number>(['1', 1])
);

interface MySwap<A, B> {
  (tuple: [A, B]): [B, A];
}
interface IArr<B> {
  [key: number]: B;
}

const swap2 = <B>(tuple: IArr<B>): IArr<B> => {
  return [tuple[0], tuple[1]];
};

let r1 = swap2(['2', 3, '']); // ["2", 3]
console.log(r1);

const sum = <T extends number>(a: T, b: T): T => {
  return (a + b) as T;
};

let r2 = sum<number>(1, 2); // Generics constraints
console.log(r2);

// as long as it has a length attribute.
interface WithLen {
  length: number;
}
function getType<T extends WithLen>(obj: T) {
  return obj.length;
}
let r3 = getType([]);

interface DStr<T = string> {
  name: T; // maybe array, number, boolean, etc
}
type T1 = DStr;
type T2 = DStr<number>;
type T3 = DStr<boolean>;
let str: T3 = { name: true };

const getVal = <T extends Object, K extends keyof T>(obj: T, key: K) => {};
getVal({ a: 1, b: 2 }, 'b');
type t1 = keyof any;
let tt1: t1 = ''; // string | number | symbol
type t2 = keyof string;
let tt2: t2 = 'toString';

class MyArray<T> {
  public arr: T[] = [];
  add(v: T) {
    this.arr.push(v);
  }
  getMaxNum(): T {
    let arr = this.arr;
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
      let current = arr[i];
      current > max ? (max = current) : void 0;
    }
    return max;
  }
}
let arr = new MyArray<number>();
arr.add(1);
arr.add(2);
arr.add(5);
arr.add(2);
console.log(arr.getMaxNum());
let arr2 = new MyArray<string>();
arr2.add('1');
arr2.add('2');
arr2.add('6');
arr2.add('2');
console.log(arr2.getMaxNum());

export {};
