var sum = function (a, b) {
    return a + b;
}

var add = sum;

console.log(typeof add);

console.log(add(2, 5));

// ______________________________

function addOne(num) {
    return num + 1;
}

var result = addOne(4);
console.log(result);

//_______________________________

var global = 123;

var resetGlobal = function () {
    global = -1;
};

resetGlobal;

console.log(global);

//_______________________________

'use strict'

var global = 123;

var resetGlobal = function () {
    global = arguments[0]
};

resetGlobal(0);
console.log(global);

//_______________________________

var result;

function square(num) {
    num = num * num;
    return num;
}

result = square(10);
console.log(result);

//_______________________________

function toString(num) {
    result = num + ' -.- ' + num;
    return result;
}

toString(5);
console.log(result);

//______________________________

var output;
var toString;

toString = function (num) {
    var result = num + '  ' + num;
    return result;
}

output = toString(0.15);
console.log(output);

//______________________________

var toString = function (num) {
    num = num || '';
    var result = num + '';
    return result;
}

var output = toString(25);
console.log(output);

//_____________________________

var global = parseInt("1e2");

incrementGlobal = function () {
    global++;
    global++;
};

incrementGlobal();

console.log(global);
console.log(typeof global);

//____________________________

function sum(num1, num2) {
    // num1 <- undefined
    // num2 <- undefined
    num1 = 0;
    num2 = num2 || 0;

    if (!num1 && !num2) {
        return -1;
    }

    return num1 + num2;
}

var sumNumbers = sum;
var result = sumNumbers();

console.log(result);

//_____________________________

var x;
x = 21;
var girl;

girl = function () {
    console.log(x);
    x = 20;
};


girl();
console.log(x);

//______________________________

function test() {
    var a;
    function foo() {
        return 2;
    }
    console.log(a); //undefined
    console.log(foo()); //2

    a = 1;

}

test();

//______________________________

(
    function () {
        console.log('boo');
    }
);

//______________________________

(
    function () {
        console.log("Bebebebe");
    }
)();

//___Immediate functions _______


(
    function (mood) {
        console.log('I am feeling ' + mood + '!');
    }

)('crazy');

//______________________________

var result = (function (a, b) {
    return a + b;
})(324, 545);

console.log(result);

//____Inner(Private)_Functions__

function outer(param) {
    function inner(theinput) {
        return theinput * 2;
    }
    return 'The result is ' + inner(param);
}

var resOuter = outer(25);
console.log(resOuter);

//______________________________

function a() {
    console.log('A!');
    return function () {
        console.log('B!');
    };
}

var b = a()();

//_________Recap________________

(function () {
    return console.log;

})()('Boo!');

//______________________________

function multiply(a, b) {
    var mResult = a * b;
    return function (a, b) {
        return mResult + a + b;
    }
}

var output = multiply(3, 4)(3, 4);
console.log(output);

//______________________________

var print = (function (a) {
    console.log(a);
    return console.log;

})('String');

print("This might work or not?");

//______________________________

var input = [1, undefined, 2, NaN, 3, 4, 5, "six"]

var output = transformArray(input, function (param) {
    return param + "";
});

console.log(output);

function transformArray(array, action) {
    var result = [];
    for (var index = 0; index < array.length; index++) {
        var element = array[index];
        result[index] = action(element);
    }
    return result;
}

//______________________________

var PI = 3.1;

function circleSurface(radius) {
    var result = radius * radius * PI;
    var PI = 3.14159;

    return result;
}

var output = circleSurface(5);
console.log(output);


//______________________________

function circleCalc(radius, calculation) {
    var result = calculation(radius);
    return result;
}

var output = circleCalc(7, function (r) {
    var PI = 3.14159;
    return 2 * r * PI;
});

console.log(output);

//______________________________

function cubeCalculation(a, calc) {
    return calc(a);
}
var output = cubeCalculation(7, function (a) {
    return 6 * a * a;
})

console.log(output);

//______________________________

function saySomething(msg1) {
    function message(msg2) {
        var output = msg1 + " " + msg2;
        var result = function () {
            output += "!"
            console.log(output);
        }
        return result;
    }
    return message;
}

saySomething("Hi")("there")();

//_____Callback_Functions_______

var f = function (a) {
    return a;
};

var b = f(10);
console.log(b);
