// const message = "word";
// console.log(message[0])

// for(let i = 0;i < message.length; i++){
//     console.log(message[i]);
// }

// for(let i = 0;i < message.length -1; i--){
//     console.log(message[i]);
// }
// let 
// for(let i = 0;i < message.length; i++){
//     console.log(message[i]);
// }
//function declaration

function power(base,p){
    const result = base ** p;
    return result;
}

console.log(power(12,2));
console.log(power(12,3));
console.log(power(2,10));

//function expression

const sum = function(value1, value2){
    return value1 + value2;
}

console.log(sum(12,43));

//arrow function
const length = message => message.length

console.log(length("hello world"));


function Max(a, b) {
    return a > b ? a : b;
}


let num1 = 5;
let num2 = 8;
let result = Max(num1, num2);
console.log(Max(12,22));
console.log("Максимальное число между " + num1 + " и " + num2 + " = " + result);


// создать функцию mult которая получает в качестве аргумента 3 числа и возвращает произведение



function mult(... args){
let result = 1;
for(elem of args){
    result *= elem;
}
return result;
}
console.log(mult(2,2,2,2));
console.log(mult(3,3,3));

function avg(... args){
 let sum =0;
    for(elem of args){
        sum+=elem;
    }
    return sum/args.length;
}
console.log(avg(12,5,3,7,5));



function max(... args) {
    
    let maxNumber = args[0];
    for (let i = 1; i < arguments.length; i++) {
        if (args[i] > maxNumber) {
            maxNumber = args[i];
        }
    }

    return maxNumber;
}


console.log(max(5,8,4));
console.log(max(565,23,5666,6,8));


function show(arr){
    for(elem of arr){
        console.log(elem)
    }
    
}

show([1,5,7,98,9]);


function show1(arr){
    for( let i = 0;i < arr.length; i++){
        console.log(arr[i])
    }
}

show1([1123,141,51,515,15,16,]);



function handler(arr){
    for(let i = 0 ; i<arr.length;i++){
        arr[i]=arr[i]>=0 ? arr[i]: -arr[i];
    }
    return arr;
}

const sourceArr = [1,5,-3,7,9,-8]
console.log(handler(sourceArr));

function handler1(arr){
    for(let i = 0 ; i<arr.length;i++){
        arr[i]=arr[i]<=0 ? -arr[i]: arr[i];
    }
    return arr;
}

const sourceArr1 = [1,5,-3,7,9,-8]
console.log(handler1(sourceArr));