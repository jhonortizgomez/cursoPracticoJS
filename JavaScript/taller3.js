function comparar(a, b){
    return a - b; 
}

// Media
function formulaMediaAritmetica(lista){
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    )
    const promediolista = sumaLista / lista.length;
    return promediolista
}

function onClickButtonMedia(){
    let inputSelect = document.getElementById("inputPromedio");
    let value = inputSelect.value;
    console.log(value)
    let valueArray = Array.from(value.split(','),Number)
    console.log(valueArray)
    let promedio = formulaMediaAritmetica(valueArray);

    let resultSelect = document.getElementById("result");
    resultSelect.innerText = "La media de los datos ingresados es: " +  promedio;
}

//Mediana
function calcularMediana(lista){
    lista.sort(comparar);
    const mitadLista = parseInt(lista.length / 2);
    function esPar(mitadLista){
        if (mitadLista % 2 === 0){
            return true;
        }else{
            return false;
        }
    }
    let mediana;

    if (esPar (lista.length) ) {
        const elemento1 = lista[mitadLista - 1];
        const elemento2 = lista[mitadLista];
        mediana = formulaMediaAritmetica([elemento1, elemento2]);
        return mediana;
    } else {
        mediana = lista[mitadLista];
    }
    return mediana;
}

function onClickButtonMediana(){
    let inputSelect = document.getElementById("inputPromedio");
    let value = inputSelect.value;
    console.log(value)
    let valueArray = Array.from(value.split(','),Number)
    console.log(valueArray)
    let promedio = calcularMediana(valueArray);

    let resultSelect = document.getElementById("result");
    resultSelect.innerText = "La mediana de los datos ingresados es: " +  promedio;
}


//Moda
function calcularModa(lista){
    const listaCount = {};
    
    lista.map(
        function (elemento){
            if (listaCount[elemento]){
                listaCount[elemento] += 1;
            }else{
                listaCount[elemento] = 1;
            }
        }
    );

    const listaCountArray = Object.entries(listaCount).sort(
        function (valoAcumulado, valorNuevo){
            return valoAcumulado[1] - valorNuevo[1];
        }
    );

    const moda = listaCountArray[listaCountArray.length - 1];
    return parseInt(moda);
}

function onClickButtonModa(){
    let inputSelect = document.getElementById("inputPromedio");
    let valueInput = inputSelect.value;

    let valueArray = Array.from(valueInput.split(','),Number);
    let moda = calcularModa(valueArray);

    let result = document.getElementById("result");
    result.innerHTML = "La moda de los datos ingresados es: " + moda;
}
