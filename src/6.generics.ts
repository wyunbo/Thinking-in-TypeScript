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

let r1 = swap(['2', 3]);
console.log(r);
