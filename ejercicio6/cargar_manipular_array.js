"use strict";
/*
    Partir de cero:
        Definir funciones (con todos los tipos necesarios) para hacer lo siguiente:
        •Cargar un listado de palabras (por esta vez, usar el arreglo como variable global)
        •Insertar/eliminar/buscar/actualizar una palabra del listado
        Agregar que la lista de palabras esté ordenada permanentemente (ayudarse con filminas de ordenamiento)
*/
exports.__esModule = true;
var rl = require("readline-sync");
var arrayNombres = [];
//cargar array de strings
function cargarNombres(arr) {
    var name;
    var i = 0;
    while (true) {
        name = rl.question("Introducir nombre (valor vacio para terminar la carga): ");
        if (!name == "") {
            arr[i] = name.trim().toUpperCase();
            i++;
        }
        else {
            return arr;
        }
    }
}
function mostrarArreglo(arr) {
    arr.sort();
    console.log("\n");
    for (var i = 0; i < arr.length; i++) {
        console.log((i + 1) + " - " + arr[i]);
    }
    console.log("\n");
}
//menu
function menu() {
    console.log("OPCIONES:\n1 - Agregar a la lista.\n2 - Eliminar un valor.\n3 - Buscar un valor\n4 - Actualizar un valor.\n0 - Finalizar programa\n");
    var opcion = rl.questionInt("Introduzca el numero de opcion: ");
    //agregar a la lista
    if (opcion == 1) {
        var addArr = [];
        cargarNombres(addArr);
        agregar(arrayNombres, addArr);
        mostrarArreglo(arrayNombres);
        menu();
        //eliminar de la lista
    }
    else if (opcion == 2) {
        eliminar(arrayNombres);
        mostrarArreglo(arrayNombres);
        menu();
        //buscar
    }
    else if (opcion == 3) {
        mostrarArreglo(arrayNombres);
        console.log(buscar(arrayNombres));
        menu();
        //actualizar
    }
    else if (opcion == 4) {
        actualizar(arrayNombres);
        mostrarArreglo(arrayNombres);
        menu();
        //salir
    }
    else if (opcion == 0) {
        return false;
        //opcion invalida
    }
    else {
        console.log("\nOpcion invalida.\n");
        menu();
    }
}
//agregar datos al arreglo global
function agregar(arr1, arr2) {
    for (var i = 0; i < arr2.length; i++) {
        arr1.push(arr2[i]);
    }
    return arr1;
}
// eliminar un item del array
function eliminar(arr) {
    var indice = rl.questionInt("Introduzca el numero del indice a eliminar: ");
    if (indice < 1 || indice > arr.length) {
        console.log("\nIndice invalido.");
    }
    else {
        arr.splice(indice - 1, 1);
    }
    return arr;
}
// buscar en el array
function buscar(arr) {
    var name = rl.question("Introduzca el nombre que desea buscar: ");
    for (var i = 0; i < arr.length; i++) {
        if (name.trim().toUpperCase() == arr[i]) {
            return "\nEl nombre buscado se encuentra en el indice " + (i + 1) + ".";
        }
    }
    return "\nEl nombre buscado no fue encontrado.\n";
}
//actualizar un indice
function actualizar(arr) {
    var indice = rl.questionInt("Introduzca el numero del indice a modificar: ");
    if (!(indice < 1 || indice > arr.length)) {
        var name_1 = rl.question("Introduzca el nuevo nombre: ");
        arr[indice - 1] = name_1.toUpperCase();
        console.log("\nIndice modificado con exito.");
    }
    else {
        console.log("\nIndice invalido.");
    }
    return arr;
}
cargarNombres(arrayNombres);
mostrarArreglo(arrayNombres);
menu();
