//FUNCTIONS HELPERS

function esPar(numero) {
    return (numero % 2 === 0)
}
function promedio(lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoValor) {
            return valorAcumulado + nuevoValor
        }
    )
    const promedioLista = sumaLista / lista.length
    return promedioLista
}

//CALCULADORA DE MEDIANA

function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2)
    if (esPar(lista.length)) {
        const personaMitad1 = lista[mitad - 1]
        const personaMitad2 = lista[mitad]
        const mediana = promedio([personaMitad1, personaMitad2])
        return mediana
    } else {
        const personaMitad = lista[mitad]
        return personaMitad
    }
}

//MEDIANA GENERAL

const salariosCol = colombia.map(
    function (persona) {
        return persona.salary
    }
)
const salariosColSorted = salariosCol.sort(
    function (salaryA, salaryB) {
        return salaryA - salaryB
    }
)

const medianaGeneralCol = medianaSalarios(salariosColSorted)


//MEDIANA TOP 10%

const spliceStart = (salariosColSorted.length * 90) / 100
const spliceCount = salariosColSorted.length - spliceStart

const salariosColTop10 = salariosColSorted.splice(
    spliceStart,
    spliceCount)

const medianaTop10Col = medianaSalarios(salariosColTop10)

console.log(
    medianaGeneralCol,
    medianaTop10Col
);