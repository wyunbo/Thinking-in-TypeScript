interface Bird {
  name1: string;
}
interface Sky {
  sky: string;
}
interface Fish {
  name2: string;
}
interface Swimming {
  swim: string;
}
type MyType<T> = T extends Bird ? Sky : Swimming;
// Distribution of conditions, Sky | Swimming
// type x = MyType<Fish | Bird>;

let obj = { name1: 'xx', name2: 'xx' };
type xx = typeof obj;
type x = MyType<xx>; // type x = MyType<Bird & Fish>;

// Built-in types base on condition
// Exclude
type Exclude<T, U> = T extends U ? never : T;
type MyExclude = Exclude<string | number | boolean, boolean>;

// Extract
type Extract<T, U> = T extends U ? T : never;
type MyExtract = Extract<string | number, boolean>;

// NonNullable
type NonNullable<T> = T extends null | undefined ? never : T;
type MyNonNullable = NonNullable<string | number | null | boolean>;

// infer
// RetrunType
function getUser(x: string, y: string) {
  return { name: 'Lebron', age: 36 };
}
type ReturnType<T extends (...args: any[]) => any> = T extends (
  ...args: any[]
) => infer R
  ? R
  : never;
type MyReturnType = ReturnType<typeof getUser>;

// Parameter type
type Parameters<T extends (...args: any[]) => any> = T extends (
  ...args: infer P
) => any
  ? P
  : never;
type MyParamsType = Parameters<typeof getUser>;

// constructor parameter type
class Animal {
  constructor(name: string, age: number) {}
}
type ConstructorParameters<
  T extends new (...args: any[]) => any
> = T extends new (...args: infer P) => any ? P : never;
type MyConstructor = ConstructorParameters<typeof Animal>;

// InstanceType
type InstanceType<T extends new (...args: any[]) => any> = T extends new (
  ...args: any[]
) => infer R
  ? R
  : never;
type MyInstance = InstanceType<typeof Animal>;
