let age: number = 20
if (age<50)
    age += 10;
console.log(age)

function identity<T>(arg: T): T {
    return arg;
}

let result = identity<number>(5);
let result1 = identity<string>("prarth")

console.log(result)
console.log(result1)