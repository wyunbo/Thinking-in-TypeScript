// Built-in types

// Partial
interface Company {
  name: string;
  age: number;
  address: string;
}
interface Person {
  name?: string;
  age: number;
  company: Company;
}
type Partial<T> = { [P in keyof T]?: T[P] | undefined };
type MyPerson = Partial<Person>;

// DeepPartial
type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P] | undefined;
};
let person: DeepPartial<Person> = { company: {} };

// Required
type Required<T> = { [P in keyof T]-?: T[P] };
type MyRequired = Required<Person>;

// Readonly
type Readonly<T> = { readonly [P in keyof T]: T[P] };
type MyReadonly = Readonly<Person>;

// Pick
type Pick<T, K extends keyof T> = { [P in K]: T[P] };
type PickPerson = Pick<Person, 'name' | 'age'>;

// Record
// key musb be string | number | symbol
type Record<K extends keyof any, T> = { [P in K]: T };
let obj2: Record<string | number, any> = { name: 'LeBron', age: 36 };

// map
type Fn<T, K, U> = (item: T, key: K) => U;

function map<T, K extends keyof any, U>(
  obj: Record<K, T>,
  cb: Fn<T, K, U>
): Record<K, U> {
  let result = {} as Record<K, U>;
  for (let key in obj) {
    result[key] = cb(obj[key], key);
  }
  return result;
}

let r = map({ name: 'LeBron', age: 36 }, (item, index) => {
  return 123;
});

// Omit
interface IPerson {
  name: string;
  age: number;
  company: Company;
}
type Omit2<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
type Omit3<T, K extends keyof T> = { [P in Exclude<keyof T, K>]: T[P] };
type MyOmitPerson = Omit<IPerson, 'company'>;
