//Código del cuadrado
console.group("Cuadrados");

function perimetroCuadrado(lado){
    return lado * 4;
} 

function areaCuadrado(lado){
   return lado * lado;
} 
areaCuadrado();

console.groupEnd();

//-------------------------------------------------

//Código del triangulo
console.group("Triángulos");

function perimetroTriangulo(lado1, lado2, base){
   return lado1 + lado2 + base;
} 

function areaTriangulo (base, altura){
    return (base * altura) / 2;
} 

console.groupEnd();

//------------------------------------------------------

// Código del circulo
console.group("Circulos");

//Diametro
function diametroCirculo (radio){
    return radio * 2;
} 


//Circuferencia
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * Math.PI;
} 

//Area
function areaCirculo(radio){
    return (radio * radio) * Math.PI;
} 
areaCirculo();
console.groupEnd();


// Aqui interactuamos con el HTML
//Cuadrado
function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const measureCuadrado = document.getElementById("measure-cuadrado");
    const valueMeasure = measureCuadrado.value;

    const perimetro = perimetroCuadrado(value);
    document.getElementById("result-square").innerHTML = "El perimetro de tu cuadrado es: " + perimetro+" "+valueMeasure;
}

function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const measureCuadrado = document.getElementById("measure-cuadrado");
    const valueMeasure = measureCuadrado.value;

    const area = areaCuadrado(value);
    document.getElementById("result-square").innerHTML = "El área de tu cuadrado es: " + area +" "+valueMeasure;
}
//Triangulo
function calcularPerimetroTriangulo(){
    const inputLado1 = document.getElementById("inputTriangleSide1");
    const valueLado1 = inputLado1.value;

    const inputLado2 = document.getElementById("inputTriangleSide2");
    const valueLado2 = inputLado2.value;

    const inputBase = document.getElementById("inputTriangleBase");
    const valueBase = inputBase.value;

    const measureTriangle = document.getElementById("measureTriangleBase");
    const valueMeasure = measureTriangle.value;

    const perimetro = perimetroTriangulo(Number(valueLado1), Number(valueLado2), Number(valueBase));
    document.getElementById("result-triangle").innerHTML = "El perimetro de tu triangulo es: " + perimetro +" "+valueMeasure;
    
}

function calcularAreaTriangulo(){
    const inputBase = document.getElementById("inputTriangleBase");
    const valueBase = inputBase.value;

    const inputAltura = document.getElementById("inputTriangleAltura");
    const valueAltura = inputAltura.value;

    const measureTriangle = document.getElementById("measureTriangleBase");
    const valueMeasure = measureTriangle.value;

    const area = areaTriangulo(valueBase, valueAltura);

    document.getElementById("result-triangle").innerHTML = "El área de tu triangulo es: " + area +" "+valueMeasure;
    
}

// circulo
function calcularDiametroCirculo(){
    const inputRadio = document.getElementById("inputCircle");
    const valueRadio = inputRadio.value;

    const measureCircle = document.getElementById("measure-circle");
    const valueMeasure = measureCircle.value;

    const diametro = diametroCirculo(valueRadio);
    document.getElementById("result-circle").innerHTML = "El diametro de tu circulo es: " + diametro +" "+valueMeasure;
}

function calcularPerimetroCirculo(){
    const inputRadio = document.getElementById("inputCircle");
    const valueRadio = inputRadio.value;

    const measureCircle = document.getElementById("measure-circle");
    const valueMeasure = measureCircle.value;

    const perimetro = perimetroCirculo(valueRadio);
    document.getElementById("result-circle").innerHTML = "La circuferencia de tu circulo es: " + perimetro +" "+valueMeasure;
}

function calcularAreaCirculo(){
    const inputRadio = document.getElementById("inputCircle");
    const valueRadio = inputRadio.value;

    const measureCircle = document.getElementById("measure-circle");
    const valueMeasure = measureCircle.value;

    const area = areaCirculo(valueRadio);
    document.getElementById("result-circle").innerHTML = "La área de tu circulo es: " + area +" "+valueMeasure;
}



//-------------------------------------------------------------
// //Código del cuadrado

// console.group("Cuadrados");

// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden " + ladoCuadrado + "cm");

// const perimetroCuadrado = ladoCuadrado * 4;
// console.log("El perimetro cuadrado es: " + perimetroCuadrado + "cm");

// const areaCuadrado = ladoCuadrado * ladoCuadrado;
// console.log("el area del cuadrado es: " + areaCuadrado + "cm^2");

// console.groupEnd();

// //Código del triangulo

// console.group("Triángulos");

// const trianguloLado1 = 6;
// const trianguloLado2 = 6;
// const trianguloBase = 4;

// console.log("Los lados del triangulo miden "
//     + trianguloLado1
//     + "cm, "
//     + trianguloLado2
//     + "cm, "
//     + trianguloBase
//     + "cm"
// );

// const trianguloAltura = 5.5;
// console.log("La altura del triangulo es: " + trianguloAltura + "cm");

// const perimetroTriangulo = trianguloLado1 + trianguloLado2 + trianguloBase;
// console.log("El perimetro del triangulo es: " + perimetroTriangulo + "cm");

// const areaTriangulo = (trianguloBase * trianguloAltura) / 2;
// console.log("El area del triangulo es: " + areaTriangulo + "cm^2");

// console.groupEnd();

// // Código del circulo

// console.group("Circulos");

// //Radio
// const radioCirculo = 4;
// console.log("El radio del circulo es: " + radioCirculo + "cm");

// //Diametro
// const diametroCirculo = radioCirculo * 2;
// console.log("El diametro del circulo es: " + diametroCirculo + "cm");

// //PI
// const PI = Math.PI;
// console.log("El valor de PI es: " + PI );

// //Circuferencia
// const perimetroCirculo = diametroCirculo * PI;
// console.log("El perimetro del circulo es: " + perimetroCirculo + "cm");
// //Area
// const areaCirculo = (radioCirculo * radioCirculo) * PI;
// console.log("El area del circulo es: " + areaCirculo + "cm^2");

// console.groupEnd();
//------------------------------------------------------------------------------------------------------------