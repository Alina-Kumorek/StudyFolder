export let apiKey = "abcde";
// export default "abcde";

function greet() {
    console.log("Hello!");
}

function together(a, b, c) {
    return a + b + c;
}

console.log(together(1, 2, 3));

// export default function() {
//     console.log("Hello!");
// }

// export default () => {
//     console.log("Hello!");
// }

// export default userName => {
//     console.log("Hello " + userName);
// }

export default x => 3*x;

// number => ({age: number});

const user = {
    name: "Alina",
    age: 28,
    greet() {
        console.log("Hello " + this.name);
    }
}

const {name, age: userAge} = user;

class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

const user1 = User("Monika", 30);

const hobbies = ["hiking", "sewing", "cooking"];
hobbies.push("gardening");
const [var0, var1, var2, var3] = hobbies;

// używanie funkcji na tablicach jest bardziej eleganckie i szybsze niż używanie pętli

const index1 = hobbies.findIndex((item) => {return item === "sewing";});
const index2 = hobbies.findIndex((item) => item === "sewing");

const myArr = hobbies.map((item) => item + "!");

function transformToObjects(arr) {
    return arr.map((item) => ({val: item})); 
}

console.log(transformToObjects([1, 2, 3]));

function storeOrder({id, amount}) {
    return [id, amount];
}

const newHobbies = ["drawing", "birdwatching"];
const mergedHobbies = [...hobbies, ...newHobbies];

const extendedUser = {
    isAdmin: true,
    ...user
}

const password = prompt("Your password");
if (password === "abcd") {
    // something
} else {
    // something else
}

const myTimeout = setTimeout(myGreeting, 6000);
function myGreeting() {
    // jakaś funckja
}

setTimeout(() => {console.log("More time out", 5000)});