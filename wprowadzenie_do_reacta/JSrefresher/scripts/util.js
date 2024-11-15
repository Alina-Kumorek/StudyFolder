// export let apiKey = "abcde";
// export let secondKey = "xyz";
// export default "asdgh";

// console.log(apiKey);

let userMessage = "Hello World";
console.log(userMessage);
console.log("Hello " + "World!");
console.log(5 === 10);

function greet() {
    console.log("Helllo World");
}
greet();

function greetName(userName, message="Well done!") {
    console.log("Hello " + userName + "! " + message);
}
greetName("Alina", "Keep going!");
greetName("Alina");

function together(x, y, z) {
    return x + y + z;
}
console.log(together(1, 1, 1));

// export default function() {
//     console.log("Hello!");
// }
// <= to jest to samo
export default () => {console.log("Hello!")};

// te funkcje strzałkowe są przydatne w React, żeby się funkcje nie odpalały od razu, tylko jak je wywołamy kliknięciem

// jak mamy jeden argument:
// export default userName => {console.log(userName)};

// export default number => {return number * 3};
// export default number => number * 3;

// jak tworzymy we funkcji objekt:
// export default number => ({age:number});

const userName = "Alina";
const userAge = 28;
const user = {
    name: "Alina",
    age: 28,
    greet(){
        console.log("Hello!");
        console.log(user.name);
    }
}
console.log(user.name);

class User{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log("Hi!");
    }
}
const user1 = new User("Alina", 28);
console.log(user1);

const hobbies = ["cooking", "painting", "sleeping"];
console.log(hobbies[0]);
hobbies.push("hiking");
const index1 = hobbies.findIndex((item) => {return item="cooking"});
const index2 = hobbies.findIndex((item) => item === "cooking");
console.log(index1);
console.log(index2);

const myArr = hobbies.map((item) => item + "!");
console.log(myArr);

const myArr2 = hobbies.map((item) => ({text: item}));
console.log(myArr2);

function transformToObject(numberArray) {
    // lista liczb => lista objektów
    return numberArray.map((item) => ({val: item}));
}
const numArr = [1, 2, 3];
console.log(transformToObject(numArr));

//destrukturyzacja
const [name, secondName, thirdName] = ["Max", "Daniel", "John"];
console.log(name, secondName, thirdName);

const {name2, age2} = {
    name2: "Alina",
    age2: 28
}
console.log(name2, age2);

function storeOrder({id, currency}) {
    localStorage.setItem("id", id),
    localStorage.setItem("currency", currency)
}
