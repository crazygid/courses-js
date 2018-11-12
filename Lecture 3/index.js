var Module = function () {
    return {

        Null: function (arguments) {

            if (arguments === null) {
                return true;
            } else {
                return false;
            }
        },
        Undefined: function (arguments) {

            if (arguments === undefined) {
                return true;
            } else {
                return false;
            }

        },
        NaN: function (arguments) {
            if (arguments !== arguments) {
                return true;
            } else {
                return false;
            }
        },
        EmptyObject: function (arguments) {
            for (var a in arguments) {
                if (arguments.hasOwnProperty(a)) {
                    return false;
                }
            }
            return true;
        },
        TransformationObject: function (obj, obj2) {
            var newobj = {};
            for (var key in obj) {
                newobj[key] = obj[key];
                newobj[key] = (newobj[key] + obj2);
            }
            return newobj;
        },

        getRandomArbitary: function (min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        },
        deep: function (obj1, obj2) {

            for (var key in obj1) {
                if (obj1[key] === obj2[key]) {

                } else {
                    return false;
                }
            }
            return true;

        },
        remove: function (obj, del) {
            var newobj = {};
            for (var key in obj) {
                if (obj[key] === del) {
                    newobj[key] = obj[key];
                } else {
                    delete obj[key];
                }


            }
            return newobj;
        }









    }
}();
console.log(Module.Undefined(undefined));

console.log(Module.Null(null));

console.log(Module.NaN(0 / 0));

console.log(Module.EmptyObject({}));

console.log(Module.TransformationObject({ name: "Dima", string: "vasya" }, "-Hello World!"));

console.log(Module.getRandomArbitary(1, 90));

var op = { value: 14 };
var myObj1 = { value: 123, op, value3: 321, str: "dmitry" };
var myObj2 = { value: 123, op, value3: 321, str: "dmitry" };
console.log(Module.deep(myObj1, myObj2));

var myobj = { value: 3432, ttt: 'Hello World!', value: 31432, string: 'TRESH' };
console.log(Module.remove(myobj, 'Hello World!'));