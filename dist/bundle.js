(function () {
    'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    var Pointer = /** @class */ (function () {
        function Pointer(x, y) {
            var args = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                args[_i - 2] = arguments[_i];
            }
            this.x = x;
            this.y = y;
        }
        Pointer.a = 1;
        return Pointer;
    }());
    new Pointer(1, 2, 3, 4, 5, 6);
    var Animal$1 = /** @class */ (function () {
        // private | protected: can not be new; private: cannot be inherited
        function Animal(name, age) {
            this.name = name;
            this.age = age;
        }
        Animal.getName = function () {
            return 'animal class';
        };
        Animal.prototype.say = function () {
            console.log('say');
        };
        Animal.type = 'animal';
        return Animal;
    }());
    var Cat = /** @class */ (function (_super) {
        __extends(Cat, _super);
        function Cat(name, age, address) {
            var _this = _super.call(this, name, age) || this;
            _this.address = { a: 1 };
            _this._eat = ''; // Vue defineProperty
            return _this;
        }
        Cat.getName = function () {
            console.log(_super.getName.call(this));
            return 'Cat';
        };
        Cat.prototype.say = function () {
            _super.prototype.say.call(this); // Animal.prototype
            console.log('cat say');
        };
        Object.defineProperty(Cat.prototype, "eat", {
            get: function () {
                return this._eat;
            },
            set: function (newVal) {
                console.log(newVal, '-----');
                this._eat = newVal;
            },
            enumerable: false,
            configurable: true
        });
        return Cat;
    }(Animal$1));
    new Cat('Tom1', 10, 'USA');
    var tom2 = new Cat('Tom2', 10, 'USA');
    console.log(Cat.getName());
    tom2.eat = 'hello';
    console.log(tom2.eat);

    var _a;
    var fn$1 = function () {
        return ++fn$1.count;
    };
    fn$1.count = 0;
    console.log(fn$1());
    console.log(fn$1());
    (_a = {
            type: 'fruit',
            taste: 'sour',
            color: 'red'
        },
        _a[Symbol(1)] = 1,
        _a);
    var Animal = /** @class */ (function () {
        function Animal() {
        }
        Animal.prototype.eat = function () {
            console.log('eat');
        };
        return Animal;
    }());
    /** @class */ ((function (_super) {
        __extends(Tom, _super);
        function Tom() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Tom;
    })(Animal));
    var Person = /** @class */ (function () {
        function Person(name) {
            this.name = name;
            this.name = name;
        }
        return Person;
    }());
    function createInstance(clazz, name) {
        return new clazz(name);
    }
    createInstance(Person, 'Lebron');

    // in function
    function swap(tuple) {
        return [tuple[1], tuple[0]];
    }
    console.log(swap(['1', 1]));
    var swap2 = function (tuple) {
        return [tuple[0], tuple[1]];
    };
    var r1 = swap2(['2', 3, '']); // ["2", 3]
    console.log(r1);
    var sum = function (a, b) {
        return (a + b);
    };
    var r2 = sum(1, 2); // Generics constraints
    console.log(r2);
    function getType(obj) {
        return obj.length;
    }
    getType([]);
    var MyArray = /** @class */ (function () {
        function MyArray() {
            this.arr = [];
        }
        MyArray.prototype.add = function (v) {
            this.arr.push(v);
        };
        MyArray.prototype.getMaxNum = function () {
            var arr = this.arr;
            var max = arr[0];
            for (var i = 1; i < arr.length; i++) {
                var current = arr[i];
                current > max ? (max = current) : void 0;
            }
            return max;
        };
        return MyArray;
    }());
    var arr = new MyArray();
    arr.add(1);
    arr.add(2);
    arr.add(5);
    arr.add(2);
    console.log(arr.getMaxNum());
    var arr2 = new MyArray();
    arr2.add('1');
    arr2.add('2');
    arr2.add('6');
    arr2.add('2');
    console.log(arr2.getMaxNum());

    // js typeof
    // js instance of
    var Dog = /** @class */ (function () {
        function Dog() {
        }
        return Dog;
    }());
    var getInstance = function (clazz) {
        return new clazz();
    };
    getInstance(Dog);
    function getNum(val) {
        val = val || 10.1; // Narrow the scope
        function a() {
            // The internal function variable cannot be detected in ts, and it needs to be judged again
            val === null || val === void 0 ? void 0 : val.toFixed();
        }
        a();
    }
    getNum();
    var assert = function (obj) {
        throw new Error('Error');
    };
    var getArea = function (obj) {
        switch (obj.kind) {
            case 'rect':
                return obj.width * obj.height;
            case 'square':
                return Math.pow(obj.width, 2);
            case 'circle':
                return Math.PI * Math.pow(obj.radius, 2);
            default:
                return assert();
        }
    };
    console.log(getArea({ kind: 'rect', width: 100, height: 200 }));
    console.log(getArea({ kind: 'square', width: 100 }));
    console.log(getArea({ kind: 'circle', radius: 100 }));

    function fn() {
        throw new Error('');
    }
    ({ name: fn() });
    function mixin(obj1, obj2) {
        return __assign(__assign({}, obj1), obj2);
    }
    var r = mixin({ a: 1 }, { b: 2 });
    console.log(r);

}());
//# sourceMappingURL=bundle.js.map
