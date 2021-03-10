// 1) object
interface IFullName {
  firstName: 'Lebron' | 'Jordan';
  lastName: string;
}

const fullName = (obj: IFullName): IFullName => {
  return obj;
};
fullName({ firstName: 'Lebron', lastName: 'James' });

// 2) function
interface IFullName2 {
  (firstName: string, lastName: string): string;
}
const fullName2: IFullName2 = (firstName: string, lastName: string): string => {
  return firstName + lastName;
};

interface ICount {
  count: number;
  (): number;
}
const fn: ICount = () => {
  return ++fn.count;
};
fn.count = 0;
console.log(fn());
console.log(fn());

interface IVegetables {
  taste: string;
  color: string;
}
const tomato: IVegetables = {
  size: 10,
  taste: 'sour',
  color: 'red',
};
// Merge multiple interfaces automatically
interface IVegetables {
  size: number;
}
// or type assert
const tomato2: IVegetables = {
  size: 10,
  taste: 'sour',
  color: 'red',
} as IVegetables;
// or extend interface
interface ITomato extends IVegetables {
  size: number;
}
const tomato3: ITomato = {
  size: 10,
  taste: 'sour',
  color: 'red',
};

interface IVegetables2 {
  taste: string;
  color: string | number;
  readonly [xxx: string]: any;
  readonly size?: number;
  type?: string;
}
const tomato4: IVegetables2 = {
  type: 'fruit',
  taste: 'sour',
  color: 'red',
  [Symbol(1)]: 1,
};

interface IArr {
  [key: number]: any;
}
let arr: IArr = [1, {}, 'a', 'v'];

interface Speakable {
  name: string;
  speak(): number;
}
interface ChineseSpeakable {
  speak(): number;
}
class Speak implements Speakable, ChineseSpeakable {
  speakChinese(): void {
    throw new Error('Method not implemented');
  }
  name!: string;
  speak(): number {
    return 1;
  }
}

abstract class Animal {
  abstract name: string;
  eat() {
    console.log('eat');
  }
}
class Tom extends Animal {
  name!: string;
}

class Person {
  constructor(public name: string) {
    this.name = name;
  }
}

interface IClass<T> {
  new (name: string): T;
}
function createInstance<T>(clazz: IClass<T>, name: string) {
  return new clazz(name);
}
let r = createInstance<Person>(Person, 'Lebron');

export {};
