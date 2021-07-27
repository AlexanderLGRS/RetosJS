function discount(value, discountPercent, cupon) {
    if (discountPercent > 0) {
        discountP = discountPercent
    }
    else {
        discountP = 0
    }
    let totalDiscount = parseInt(discountP) + parseInt(cupon)
    let realValue = (value * (100 - totalDiscount)) / 100
    textArea.innerHTML = "El valor original de tu producto son $" + value
        + "\nTu descuento es de " + discountP + "%"
        + "\nTu cupon de descuento es de " + cupon + "%"
        + "\nTu descuento total es de " + totalDiscount + "%"
        + "\nEl valor a pagar con descuento son $" + realValue
}

function discountCall() {
    discount(value.value, discountPercentage.value, cupons.value)
}

const value = document.getElementById("value")
const discountPercentage = document.getElementById("discount")
const cupons = document.getElementById("cupons")

const textArea = document.getElementById("textArea")