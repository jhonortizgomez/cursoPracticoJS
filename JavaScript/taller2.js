
function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioDescuento = (precio * porcentajePrecioConDescuento) / 100;  
    return precioDescuento;
}


function onCliclButtonPriceDiscount(){
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("inputDescount");
    const discountValue = inputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

    const resultP = document.getElementById("result");
    resultP.innerText = "El precio con descuento es: $" + precioConDescuento;
}