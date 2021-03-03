(function () {
  'use strict';

  // Types in ts
  console.log(0 /* USER */);
  // void 空类型 只能接受 null 和undefined 。 一般用于函数的返回值
  // 函数默认的返回值是undefined, 默认在严格模式下不能将null 赋给void
  // let v:void;
  // v = null;
  // string number boolean tuple array enum any null undefined
  // never类型 永远不 是任何类型的子类型 可以把never赋予给任何类型
  // 永远达不到的情况有三种 1） 错误  2） 死循环  3） 类型判断时会出现never 4) 完整性保护
  function MyError() {
      throw new Error('');
  }
  MyError();
  // Symbol BigInt   symbol 表示独一无二 元编程会用到 stringToFlag iterator ....
  var s1 = Symbol('123');
  var s2 = Symbol('123');
  console.log(s1 == s2); // false
  //BitInt
  BigInt(Number.MAX_SAFE_INTEGER) + BigInt(1);
  BigInt(Number.MAX_SAFE_INTEGER) + BigInt(2);
  console.log(Number);

}());
//# sourceMappingURL=bundle.js.map
