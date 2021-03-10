class Pointer {
  public x!: number; // means instance has this attribute
  public y!: number;
  constructor(x: number, y?: number, ...args: number[]) {
    this.x = x;
    this.y = y as number;
  }
  static a = 1;
}
let pointer = new Pointer(1, 2, 3, 4, 5, 6);

class Animal {
  private name!: string;
  public readonly age!: number;
  // private | protected: can not be new; private: cannot be inherited
  protected constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  static type = 'animal';
  static getName() {
    return 'animal class';
  }
  say() {
    console.log('say');
  }
}

class Cat extends Animal {
  readonly address: any = { a: 1 };
  constructor(name: string, age: number, address: any) {
    super(name, age); // Animal.call
  }
  static getName() {
    console.log(super.getName());
    return 'Cat';
  }
  say() {
    super.say(); // Animal.prototype
    console.log('cat say');
  }
  private _eat: string = ''; // Vue defineProperty
  get eat() {
    return this._eat;
  }
  set eat(newVal) {
    console.log(newVal, '-----');
    this._eat = newVal;
  }
}

let tom1 = new Cat('Tom1', 10, 'USA');
let tom2 = new Cat('Tom2', 10, 'USA');
console.log(Cat.getName());

tom2.eat = 'hello';
console.log(tom2.eat);

export {};
