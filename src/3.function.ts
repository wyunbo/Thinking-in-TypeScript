function sum1(a: string, b: string): string {
  return a + b;
}

type Sum = (a1: string, b1: string) => string;
let sum = (a: string, b: string): string => {
  return a + b;
};
sum('1', '2');

let sum2 = (...args: any[]) => {};
sum2(1, 2, 3, 4, 5);

function toArray(value: number): number[];
function toArray(value: string): string[];
function toArray(value: number | string): number[] | string[] {
  if (typeof value === 'string') {
    return value.split('');
  } else {
    return value
      .toString()
      .split('')
      .map((item) => parseInt(item));
  }
}
toArray(123);

export {};
