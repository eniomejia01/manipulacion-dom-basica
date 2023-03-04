//Array - es una lista de elementos

const array = [1, 'xd', true, false, {nombre: 'Lala', yearsOld: 3} ];

// Objeto - es una lista de elementos pero, cada elemento tiene un nombre clave.
const objeto = {
    
    name: 'Karen',
    oldYears: 3,
    comidaFavoritas: ['Pollo frito', 'Vegetales'], // <- Array
};


// Cuándo es mejor usar objetos o rrays?
// arrays cuando lo que haremos en un elemento es lo mismo que en todos los demás (la regla se puede incumplir)
// Mientras que un objeto cuando los nombres de cada elemento son importantes para  nuestro algoritmo


// Puedo mezclar arrays con objetos o incluso objetos con arrays?
// Sí. Los arryas pueden guardar objetos. Y los objetos pueden guardar arrays entre sus propiedades.

// function imprimirPrimerElementoArray(arr) {
//     console.log(arr[2]);
// }

// imprimirPrimerElementoArray(['Enio', 'Ellie', 'Pascal']);


// function imprimirElementoPorElemento(arr) {
//     for(let i = 0; i < arr.length; i++){
//         console.log(arr[i]);
//     }
// }

// imprimirElementoPorElemento(['Enio', 'Ellie', 'Pascal']);

const objeto1 = {
    
    name: 'Karen',
    oldYears: 3,
    comidaFavoritas: ['Pollo frito', 'Vegetales'], // <- Array
};

const arr = Object.values(objeto1);


function imprimirElementoPorElementoObjeto(objeto1) {

    const arr = Object.values(objeto1);
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
}

imprimirElementoPorElementoObjeto(objeto1);


