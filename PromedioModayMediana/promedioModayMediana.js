const userList = document.getElementById("userList")
const textArea = document.getElementById("textArea")

const numbersArray = []
let promedioResult = 0
let modaResult = 0
let modaCount = 0
let medianaResult

function addNumbers(list) {
    const userArray = list.split(",")
    for (let i = 0; i < userArray.length; i++) {
        let currentNumber = parseInt(userArray[i])
        numbersArray.push(currentNumber)
    }
    return numbersArray
}

function addNumbersCall() {
    addNumbers(userList.value)
}

function promedio(list) {
    const sum = list.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento
        }
    )
    promedioResult = sum / list.length;
    return promedioResult;
}

function moda(list) {
    const elements = {}
    list.map(
        function (element) {
            if (elements[element]) {
                elements[element] += 1
            } else {
                elements[element] = 1
            }
        }
    )
    const finalArray = Object.entries(elements).sort(
        function (elementoA, elementoB) {
            return elementoA[1] - elementoB[1]
        }
    )
    const modaElement = finalArray[finalArray.length - 1]
    modaResult = modaElement[0]
    modaCount = modaElement[1]
    return modaResult, modaCount
}

function mediana(list) {
    const newlist = list.sort(function (a, b) { return a - b; });
    medianaResult = 0
    let index = newlist.length - 1
    if (newlist.length % 2 == 0) {
        medianaResult = (newlist[(index / 2) - 0.5] + newlist[(index / 2) + 0.5]) / 2
    } else {
        medianaResult = newlist[(index / 2)]
    }
    return medianaResult
}

function processCall() {
    promedio(numbersArray)
    moda(numbersArray)
    mediana(numbersArray)
    textArea.innerHTML = "Los numeros agregados son: \n" + userList.value + "// \n"
        + "Tu lista ordenada se ve asi: \n" + numbersArray + "// \n"
        + "El promedio es: " + promedioResult + "// \n"
        + "La moda es: " + modaResult + " ya que se repite " + modaCount + " veces " + "// \n"
        + "La mediana es: " + medianaResult + "// \n"
}