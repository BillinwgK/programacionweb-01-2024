//función declarativa
/*  function contraValida(input){
     return input == "2F" || input == '3F' ? true: false  
 }

 console.log(contraValida("3F")) */

//Funcion anonima
/* let contraValida2 = function (input) {
    return input == "2F" || input == '3F'
}
console.log("contraValida2",contraValida2("2F")); */


//Funcion de flecha
/* let contra = (input)=>{
    return input == "2F" || input == '3F'
}

console.log("contra", contra("FF")) */;



/* function calcularImpuestos(edad, ingresos){
    if (edad >= 18 && ingresos >= 1000)
    {
        return ingresos * 0.4;
    } else {
        return 0;
    }
}

console.log(calcularImpuestos(18,1000)) */

/* let validarMujeres = (mujer)=>{
    const mujeres = ['Danna', 'Darly', 'Salome'];
    return mujeres.find(muj => muj.toLocaleLowerCase() == mujer.toLocaleLowerCase());
}
 */
/* console.log(validarMujeres("danna")) */

/* let splitFun = (nombres)=>{
    const nombre = nombres.split("-")[0];
    const apellidos = nombres.split("-")[1];
    const edad = nombres.split("-")[2];
    console.log(
        `Mi nombre es: ${nombre} ${apellidos} y tengo ${edad}`
    )
} */

// splitFun("billinwg-paternina-23")

function calcularImpuestos(edad, ingresos) {
    if (edad >= 18 && ingresos >= 1000) {
        return ingresos * 0.4; // 40% de los ingresos
    } else {
        return 0;
    }
}
console.log(calcularImpuestos(18, 1000));


const array = [{
    name: 'Juan',
    lastname: 'Perez',
    age: 25
},
{
    name: 'María',
    lastname: 'Rodriguez',
    age: 32
}
];
let funcionObjeto = (arrayObjetos)=>{
    
    arrayObjetos.map((obj)=>{
        obj.name == 'Juan' ? obj.name = 'Farid' : null; //If terniario, lo estoy utilizando para cambiar el nombre de Juan por farid
        console.log(`Nombres: ${obj.name}`)})
}
funcionObjeto(array)
//fin