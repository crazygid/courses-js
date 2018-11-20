//--1--Написать функцию debounce, которая 
//возвращает функцию обертку, передающую оригинальной функции 
//только последний вызов функции обертки за переданный интервал

function debounce(func, ms) {

    let timerId = null;

    return function (...args) {
        const onComplete = () => {
            func.apply(this, args);
            timerId = null;
        }

        if (timerId) {
            clearTimeout(timerId);
        }

        timerId = setTimeout(onComplete, ms);
    };
}


//--2--Промисифицировать setTimeout

function delay(ms) {
    return new Promise((res, rej) => {
        setTimeout(res, ms);
    });
}

//--3--Промисифицировать XMLHttpRequest

function XHR_Promise(method, url, body) {
    return new Promise(function (res, rej) {
        var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
        var xhr = new XMLHttpRequest();

        xhr.open(method, url, true);
        xhr.onload = function () {
            if (this.status >= 200 && this.status < 300) {
                res(xhr.response);
            } else {
                rej({
                    status: this.status,
                    statusText: xhr.statusText
                });
            }
        };
        xhr.send(body);
    });
}

//--4--Написать функцию, принимающую список url путей и возвращающую промис,
//который резолвит результаты всех запросов по указанным url 
//(важно: резолвит массив значений, резолвит не раньше последнего из запросов, 
//функцию запроса взять из ссылки на gist, не использовать Promise.all)


function request(url) {
    return new Promise((res) => {
        const delayTime = Math.floor(Math.random() * 10000) + 1;
        setTimeout(() => res(url), delayTime);
    });
}
function result(arr) {
    return new Promise(function (resolve, reject) {
        var promisesArr = arr.map(request);
        var resultArr = [];

        for (var i = 0; i < promisesArr.length; i++) {
            promisesArr[i]
                .then(function (res) {
                    resultArr.push(" " + res);
                    if (resultArr.length === promisesArr.length) {
                        resolve(resultArr);
                    }
                })
                .catch(function (error) {
                    reject(error);
                });
        }
    })
}



























