// js typeof
function getVal(val: string | number) {
  if (typeof val === 'string') {
    val.toString;
  } else {
    val.toFixed;
  }
}
// js instance of
class Dog {}
class Cat {}
type Clazz = new () => Dog | Cat;
let getInstance = (clazz: Clazz) => {
  return new clazz();
};
let instance = getInstance(Dog);
if (instance instanceof Dog) {
  instance;
}

// in operator
interface Fish {
  swim: string;
}
interface Bird {
  fly: string;
}
function getType(animal: Fish | Bird) {
  if ('swim' in animal) {
    animal.swim;
  } else {
    animal.fly;
  }
}

// Literal type
interface IButton1 {
  class: 'warning';
  click: string;
}
interface IButton2 {
  class: 'success';
  mouseover: string;
}
function getButton(val: IButton1 | IButton2) {
  if (val.class === 'warning') {
    val.click;
  } else {
    val.mouseover;
  }
}

//
function isFish(animal: Fish | Bird): animal is Fish {
  return 'swim' in animal;
}
function getType2(animal: Fish | Bird) {
  if (isFish(animal)) {
    animal.swim;
  } else {
    animal.fly;
  }
}

function getNum(val?: number | null) {
  val = val || 10.1; // Narrow the scope
  function a() {
    // The internal function variable cannot be detected in ts, and it needs to be judged again
    val?.toFixed();
  }
  a();
}
getNum();

// Protect the integrity of the code, never
interface ICircle {
  kind: 'circle';
  radius: number;
}
interface IRect {
  kind: 'rect';
  width: number;
  height: number;
}
interface ISquare {
  kind: 'square';
  width: number;
}

const assert = (obj: never) => {
  throw new Error('Error');
};
const getArea = (obj: ICircle | IRect | ISquare) => {
  switch (obj.kind) {
    case 'rect':
      return obj.width * obj.height;
    case 'square':
      return Math.pow(obj.width, 2);
    case 'circle':
      return Math.PI * Math.pow(obj.radius, 2);
    default:
      return assert(obj);
  }
};
console.log(getArea({ kind: 'rect', width: 100, height: 200 }));
console.log(getArea({ kind: 'square', width: 100 }));
console.log(getArea({ kind: 'circle', radius: 100 }));

export {};
