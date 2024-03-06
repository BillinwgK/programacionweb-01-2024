//Ej#1
function calcularImpuestos(edad, ingresos) {
    if (edad >= 18 && ingresos >= 1000) {
        return ingresos * 0.4; 
    } else {
        return 0;
    }
}
console.log(calcularImpuestos(18, 1000));



//Ej#2

function bmi(peso, altura) {
    const bmiValue = peso / (altura * altura);
    
    if (bmiValue < 18.5) {
        return "Bajo de peso";
    } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
        return "Normal";
    } else if (bmiValue >= 25 && bmiValue <= 29.9) {
        return "Sobrepeso";
    } else {
        return "Obeso";
    }
}

console.log(bmi(65, 1.8));



//Ej#3
function imprimirArreglo(...elementos) {
    elementos.forEach(elemento => {
        console.log(elemento);
    });
}

console.log(imprimirArreglo(1, "Hola", 2, "Mundo"));



//Ej#4
function max(arr) {
    if (arr.length === 0) {
        return null;
    }

    let maxNum = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxNum) {
            maxNum = arr[i];
        }
    }

    return maxNum;
}

console.log(max([3, 9, 6]));
console.log(max([67, 35, 54, 26])); 
console.log(max([5, 9, 2, 4, 5, 7]));



//Ej#5
function min(arr) {
    if (arr.length === 0) {
        return null; 
    }

    let minNum = arr[0]; 

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < minNum) {
            minNum = arr[i]; 
        }
    }

    return minNum;
}

console.log(min([3, 9, 6]));
console.log(min([67, 35, 54, 26]));
console.log(min([5, 9, 2, 4, 5, 7]));



//Ej#6
function password(str) {

    let newStr = str.toLowerCase().replace(/\s/g, "");
    

    newStr = newStr.replace(/a/g, "4");
    newStr = newStr.replace(/e/g, "3");  //Reemplazar carcteres
    newStr = newStr.replace(/i/g, "1");
    newStr = newStr.replace(/o/g, "0");
    
    return newStr;
}

console.log(password("hola"));
console.log(password("esta es una prueba"));


//Ej#7
function numAsteriscos(arreglo) {
    
    const arregloComoString = arreglo.join("");
    const numAsteriscos = arregloComoString.split("*").length - 1;

    return numAsteriscos;
}

console.log(numAsteriscos(['', '*', '', '*']));
console.log(numAsteriscos([]));
console.log(numAsteriscos(['*', '*', '*']));

//Ej#8
function likes(numero) {
    if (numero < 1000) {
        return numero;
    } else if (numero < 1000000) {
        return (numero / 1000).toFixed(0) + "K";
    } else {
        return (numero / 1000000).toFixed(0) + "M";
    }
}


console.log(likes(983)); 
console.log(likes(1900)); 
console.log(likes(54000)); 
console.log(likes(120800)); 
console.log(likes(25222444));

//Ej#9
let numeroA = (palabra) => {
    let cont = 0;
    for (const i of palabra){
        if(i == "a"){
            cont += 1;

        }
    }
    console.log(cont);
}
numeroA("asdafcaefc")
//Fin
