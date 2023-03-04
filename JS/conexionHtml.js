// const p = document.querySelector('p');

// const parrafito = document.getElementsByClassName('parrafito');

// const pid = document.getElementById('pid');

const h1 = document.querySelector('h1');
const form = document.querySelector('#formulario');

const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');


form.addEventListener('submit', suamrInput);

function suamrInput(event){

    event.preventDefault();
    const suma = Number(input1.value) + Number(input2.value);
    pResult.innerText = "RESULTADO: " + suma;
}





// console.log(input.value)

// console.log({
//     h1,
//     p,
//     parrafito,
//     pid,
//     input,

// });

//h1.innerHTML = 'Chiken'; // El innerr modifica elementos dentro del html
// h1.innerText = 'Chiken <br> duck'; // El innerrText modifica elementos de Texto del Html

// console.log(h1.getAttribute('class'));

// h1.setAttribute('class', 'verde');

// h1.classList.add('rojo'); // add agrega una clase al h1 llamado 'rojo'

// h1.classList.remove('verde') // el remove elimina la clase 'verde'

// h1.classList.toggle('verde');
// h1.classList.contains('verde');

// input.value = '456123';

// const img = document.createElement('img'); // se crea un nuevo elemento HTMl
// img.setAttribute('src', 'https://images.unsplash.com/photo-1677926405168-fa86268b7295?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'); // se le asigna los atributos al elemento creado
// console.log(img);


// pid.appendChild(img);