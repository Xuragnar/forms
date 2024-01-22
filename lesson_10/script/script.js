function sum(a,b){
    return a + b;
}

function sub(a,b){
    return a - b;
}

function mult(a,b){
    return a * b;
}
function handler(callback){
    console.log(callback(12,5));
    
}

// handler(sub);
// handler(mult);

function forEach(array, callback){
    for(let i = 0; i < array.length; i++){
        callback(array[i], i, array);
    }
}

function handler(value, index ,array){
    const result = value ** 2;
    console.log(index, result);
}

const array = [1,2,3,4,5,6,7];
// forEach(array,handler);
array.forEach((value,index,array)=> console.log(index,value ** 2,array));

const string = ["тролль", "магазин", "шампань", "анатолий"];
// string.forEach(string => console.log(string));
string.forEach(console.log);

const array1  = [1,2,-3,4,-5,6,-7];
array1.forEach(number => console.log(number < 0 ? -number : number));

const string1 = ["тролль", "магазин", "шампань", "анатолий"];
string1.forEach(word => {
    if(word.length>6){
        console.log(word);
    }
});

 const result = array.map(number => number ** 2);
 console.log(result);

 function map(array, callback){
    const newArray = [];
    for(let i = 0; i < array.length; i++){
        newArray.push(callback(array[i], i, array));
    }
    return newArray
}

const result1 = map(array,number => number ** 2);
console.log(result);

const result2 = array.filter(number => number % 2 ===0);

console.log(result2);

const positiveNumbersArray = array1.filter(number => number > 0);

console.log(positiveNumbersArray);


console.log(array1.map(x => x >= 0? x: -x));


// const result_01 = array1.filter(x => x > 0);
// const result3 = result_01.map(x => x ** 2);
// console.log(result3);

const result3 = array1
.filter(x => x > 0)
.map(x => x ** 2);
console.log(result3);

const result4 = string1 
    .filter(x => x.length > 6)
    .map(x => x + '!') 
    
    console.log(result4);

