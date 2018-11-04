// Задание 1

/*Напишите функцию, которая принимает 2 параметра - 2 числа и возвращает true,
 если первое число больше второго, и false, если это не так. */

function s(x, y) {
    if (x > y) {
        return true;
    } else {
        return false;
    }
} s(3, 1);

// Задание 2

/*Напишите функцию, которая принимает 1 параметр - строку и возвращает новую 
строку вида, “Вы ввели * полученная строка *”.*/

function s(x) {
    var y = '�� ����� ' + x;
    return y;
} s('Hello World!');

// Задание 3

/*Напишите функцию, которая принимает 1 параметр любого типа и проверяет,
 является ли полученное значение null или undefined. */

function s(x) {

    if (x === undefined) {
        console.log("Undefined");
    } else if (x === null) {
        console.log("null");
    } else
        console.log("Not Undefined and null")
}
}
s(null);
s();
s('');

// Задание 4

/*Напишите функцию, которая принимает 1 параметр - объект и добавляет этому
 объекту поле checked со значением true. */

function f4(newObj = {}) {
    var myObj = { "checked": "true" };
    newObj.element = "HELLO";

    console.log(newObj);

}

f4(myObj);

// Задание 5

/*Напишите функцию, которая принимает 1 параметр - число и выводит в консоль
 все числа от нуля до введенного числа (в обе стороны). */

function s(x) {
    if (x < 0) {
        for (x; x < 0; x++) {
            console.log(x);
        }
    } else {
        for (x; x > 0; x--) {
            console.log(x);
        }
    }
} s(-10);