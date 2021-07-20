// const myObject = {
//     name: "Alex",
//     lastName: "Lansdorp",
//     age: 23,
//     country: "Colombia"
// }

// function myfunction(object){
//     console.log(object.name);
//     console.log(object.lastName);
//     console.log(object.age);
//     console.log(object.country);
// }

// myfunction(myObject)


// let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// function myfunction(list) {
//     console.log(list[2]);
// }

// function mySecondFunction(list) {
//     list.forEach(i => {
//         console.log(i);
//     });
// }

// myfunction(numbers)
// mySecondFunction(numbers)


// let answer = prompt("¿Cuanto es 2+2?")
// while (answer != 4) {
//     alert("Ups!, intentalo de nuevo")
//     answer = prompt("¿Cuanto es 2+2?")
// }
// alert("Correcto, eres el mejor")




// for (let i = 0; i < 5; i++) {
//     console.log("I= " + i);
// }

// for (let a = 10; a >= 2; a--) {
//     console.log("A= " + a);
// }

// let i = 0
// let a = 10

// while (i < 5) {
//     console.log("I==" + i);
//     i++
// }
// while (a >= 2){
//     console.log("A==" + a);
//     a--
// }




// let nombre = "Alexander"
// let lastName = "Lansdorp Girón"
// let nickName = "AlexLG"
// let age = 23
// let email = "alexlansdorprs@gmail.com"
// let adult = true
// let money = 1500000
// let debts = 250000

// let fullName = nombre + " " + lastName
// let realMoney = money - debts

// console.log(fullName);
// console.log(realMoney);

// function myfunction(completeName, nickname) {
//     console.log("My name is " + completeName + ", but i like you call me " + nickName);
// }
// myfunction(fullName, nickName)



// const tipoDeSuscripcion = "Expert Plus";
// let plans = ["Free", "Basic", "Expert", "Expert Plus"]
// let details = ["Solo puedes tomar los cursos gratis", "Puedes tomar casi todos los cursos de Platzi durante un mes", "Puedes tomar casi todos los cursos de Platzi durante un año", "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"]
// let plan
// for (let i = 0; i <= 3; i++) {
//     if (plans[i] == tipoDeSuscripcion) {
//         plan = details[i]
//     }
// }
// console.log(plan);
// if (tipoDeSuscripcion === "Free") {
//     console.log("Solo puedes tomar los cursos gratis");
// }
// else if (tipoDeSuscripcion === "Basic") {
//     console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
// }
// else if (tipoDeSuscripcion === "Expert") {
//     console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
// }
// else {
//     console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
// }

//     switch (tipoDeSuscripcion) {
//         case "Free":
//             console.log("Solo puedes tomar los cursos gratis");
//             break;
//         case "Basic":
//             console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
//             break;
//         case "Expert":
//             console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
//             break;
//         case "ExpertPlus":
//             console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
//             break;
//     }
