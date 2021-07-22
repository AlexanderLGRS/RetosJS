const list1 = [200, 100, 400, 300, 10, 25, 75, 90]
const list2 = [200, 100, 400, 300, 10, 25, 75, 90, 12, 44, 35, 4, 70, 12, 32, 50, 12]
const list3 = [1, 2, 3, 1, 2, 3, 4, 2, 2, 2, 1]
function promedio(list) {
    // let sum = 0
    // for (let i = 0; i < list.length; i++) {
    //     sum += list[i]
    // }
    const sum = list.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento
        }
    )

    const result = sum / list.length;

    return result;
}

function mediana(list) {
    const newlist = list.sort(function (a, b) { return a - b; });
    let mediana = 0
    let index = newlist.length - 1
    if (newlist.length % 2 == 0) {
        mediana = (newlist[(index / 2) - 0.5] + newlist[(index / 2) + 0.5]) / 2
    } else {
        mediana = newlist[(index / 2)]
    }
    console.log(newlist);
    return mediana
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
    // const newArray = Object.entries(elements).sort(
    //     function (valorAcumulado, nuevoValor) {
    //         valorAcumulado - nuevoValor
    //     }
    // )
    const finalArray = Object.entries(elements).sort(
        function (elementoA, elementoB) {
            return elementoA[1] - elementoB[1]
        }
    )
    const result = finalArray[finalArray.length - 1]
    console.table(list);
    console.table(finalArray);
    return result
}