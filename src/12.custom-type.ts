// Diff
let person1 = {
  name: 'LeBron',
  age: 36,
  address: 'LA',
};
let person2 = {
  address: 'Cleveland',
};
type Diff<T extends object, K extends object> = Omit<T, keyof K>;
type MyDiff = Diff<typeof person1, typeof person2>;

// InterSection
type InterSection<T extends object, K extends object> = Pick<
  T,
  Extract<keyof T, keyof K>
>;
type myInter = InterSection<typeof person1, typeof person2>;

// Overwrite
interface Person11 {
  a: number;
  name: string;
  age: number;
}
interface Person22 {
  age: string;
  address: string;
}
type Overwrite<T extends object, K extends object> = Omit<T, keyof Diff<T, K>> &
  Pick<K, keyof Diff<K, T>>;
type myWrite = Overwrite<Person22, Person11>;

// Merge
let t1 = { name: 'LeBron', a: 1 };
let t2 = { age: 36, a: 'string' };
type t1 = typeof t1;
type t2 = typeof t2;
type Compute<T> = { [K in keyof T]: T[K] }; // 循环里面的属性 重新赋值
type Merge<T, K> = Omit<T, keyof K> & K;
type t3 = Compute<Merge<t1, t2>>;

export default {};
