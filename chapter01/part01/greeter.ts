// function greeter(person: string) {
//     return "Hello, " + person;
// }

// let user = "Jane User";
// // let user = [0,1,2];


// document.body.innerHTML = greeter(user);

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user = { firstName: "Jane", lastName: "User" };

document.body.innerHTML = greeter(user);