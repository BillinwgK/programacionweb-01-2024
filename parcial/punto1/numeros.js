const arrayNumeros = [1, 23, 453, 3267, 12354, 123456];

function sumarCuadros(arrayNumeros) {
    let total = 0;
    let grafico = "";
    for (let i = 0; i < arrayNumeros.length; i++) {
        let num = arrayNumeros[i];
        total += num;
        let cuadrado = num * num;
        let numStr = num.toString();
        let cuadradoStr = cuadrado.toString();
        let numGuiones = i + 1;
        
        if (i > 0) {
            grafico += "\n";
        }
        grafico += "+-" + "-".repeat(numGuiones > 1 ? numGuiones - 1 : 0) + "+ \n";
        grafico += "| " + numStr + " | \n";
        grafico += "+-" + "-".repeat(numGuiones > 1 ? numGuiones - 1 : 0) + "+";
    }

    grafico += "\n\n";
    grafico += "+======+\n";
    grafico += "| " + total + " |\n";
    grafico += "+======+";

    console.log(grafico);
}

sumarCuadros(arrayNumeros);
