
// functions

let pi = Math.PI
function square(side) {
    let squarePerimeter = side * 4
    let squareArea = side * side
    console.group("Square")
    console.log("Los lados del cuadrado miden " + side + " cm");
    console.log("El perimetro del cuadrado mide " + squarePerimeter + " cm");
    console.log("El area del cuadrado mide " + squareArea + " cm2");
    console.groupEnd()
}
function triangle(sideA, base, sideC, h) {
    let trianglePerimeter = parseInt(sideA) + parseInt(base) + parseInt(sideC)
    let triangleArea = (base * h) / 2
    console.group("Triangle")
    console.log("Los lados del triangulo miden " + sideA + ", " + base + ", " + sideC + " cm");
    console.log("El perimetro del triangulo mide " + trianglePerimeter + " cm");
    console.log("El area del triangulo mide " + triangleArea + " cm2");
    console.groupEnd()
}
function triangleIsosceles(x, y, b) {
    console.group("TriangleIsosceles")
    if (x === y) {
        let cateto1 = b / 2
        let hipotenusa = y
        let h = Math.sqrt((hipotenusa * hipotenusa) - (cateto1 * cateto1))
        console.log("La altura del triangulo es de" + h + " cm");
        let triangleIsoscelesPerimeter = parseInt(x) + parseInt(y) + parseInt(b)
        let triangleIsoscelesArea = ((b / 2) * h) / 2
        console.log("El perimetro del triangulo mide " + triangleIsoscelesPerimeter + " cm");
        console.log("El area del triangulo mide " + triangleIsoscelesArea + " cm2");
        console.groupEnd()
    }
    else {
        console.log("El triangulo no es isosceles");
    }

}
function circle(radius) {
    let circleDiameter = radius * 2
    let circlePerimeter = radius * 2 * pi
    let circleArea = radius * radius * pi
    console.group("Circulo")
    console.log("El radio del circulo mide " + radius + " cm");
    console.log("El diametro del circulo mide " + circleDiameter + " cm");
    console.log("El perimetro del circulo mide " + circlePerimeter + " cm");
    console.log("El area del circulo mide " + circleArea + " cm2");
    console.groupEnd()
}
function squareCall() {
    square(squareSide.value)
}
function triangleCall() {
    triangle(triangleSideA.value, triangleBase.value, triangleSideB.value, triangleHeight.value)
}
function triangleIsoscelesCall() {
    triangleIsosceles(triangleIsoscelesSideA.value, triangleIsoscelesSideB.value, triangleIsoscelesBase.value)
}
function circleCall() {
    circle(circleRadius.value)
}

//


const squareSide = document.getElementById("squareSide")

const triangleSideA = document.getElementById("triangleSideA")
const triangleSideB = document.getElementById("triangleSideB")
const triangleBase = document.getElementById("triangleBase")
const triangleHeight = document.getElementById("triangleHeight")

const triangleIsoscelesSideA = document.getElementById("triangleIsoscelesSideA")
const triangleIsoscelesSideB = document.getElementById("triangleIsoscelesSideB")
const triangleIsoscelesBase = document.getElementById("triangleIsoscelesBase")

const circleRadius = document.getElementById("circleRadius")




//Triangulo Isosceles

// function triangleIsosceles(x, y, b) {
//     if (x == y) {
//         let cateto1 = b / 2
//         let hipotenusa = y
//         let cateto2 = Math.sqrt((hipotenusa * hipotenusa) - (cateto1 * cateto1))
//         console.log(cateto2);
//     }
//     else {
//         console.log("El triangulo no es isosceles");
//     }

// }