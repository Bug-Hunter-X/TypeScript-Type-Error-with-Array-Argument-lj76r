function greeter(person: string) {
    return "Hello, " + person;
}

function greeterArray(persons: string[]) {
    return "Hello, " + persons.join(" ");
}

let user = ["Jane", "Doe"];
let userSingle = "Jane Doe";

console.log(greeter(userSingle)); //Correct
console.log(greeterArray(user)); //Correct