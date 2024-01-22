// const user = {
// name: "Anatolii",
// lastName: "Ushanov",
// age: 31
// };

// console.log(user["name"]);
// console.log(user.name);

// user.salary = 3200;
// console.log(user);

const users = [
    {
id : 1,
name: "Anatolii",
age : 31
},
{
    id : 2,
name: "Olga",
age : 34
},
{
    id : 3,
name: "Stepan",
age : 42
}
];
// console.log(users);

for(user of users){
    if(user.age >33){

        console.log(user.name);
    }
}

users.forEach(elem => {
    if(elem.age>33){
        console.log(elem.name)
    }
})

users
.filter(({age}) => age > 33)
.forEach(({name,age}) => console.log(name,age));

users
.filter(({id})=> id %2===0)
.map(({name})=> console.log(name));
// const obj = {
//     a: 12,
//     b: 15,
//     c: 21
// };


// // const {a, b, c} = obj;
// // console.log(a);
// // console.log(b);

// function handler(obj){
//     // const{a,b} = obj;
//     console.log(a,b);
// }
// handler(obj);

const products = [
    {
        name: "Ноутбук",
        price: 1200,
        brand: "Acer",
        inStock: true
    },
    {
        name: "Смартфон",
        price: 500,
        brand: "Samsung",
        inStock: false
    },
    {
        name: "Планшет",
        price: 300,
        brand: "Apple",
        inStock: true
    },
    {
        name: "Клавиатура",
        price: 50,
        brand: "Samsung",
        inStock: true
    }
];

products
.filter(({inStock}) => inStock === true)
.map(({name})=> console.log(name));

const result = products.filter(({inStock})=> inStock);
console.log(result);

const result1 = products
.filter(({brand})=> brand === "Samsung")
.map(({name})=>name);
console.log(result1);


const numbers = [12, 5, 3, 6, 4, 8];

const sum = numbers.reduce((acc,elem)=> acc + elem);
console.log(sum);

const max = numbers.reduce((acc, curr) => acc > curr ? acc : curr);
console.log(max);

const mult = numbers.reduce((acc, curr) => acc * curr );
console.log(mult);

const res = products.reduce((acc,item) => acc + item.price,0);
console.log(res);

const min = products.reduce((acc, {price}) => acc > price ? price : acc,products[0].price);
console.log(min);