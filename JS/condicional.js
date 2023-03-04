

// function conseguirTipoSuscripcion (suscripcion){
//     if(suscripcion == 'Free'){
//         console.log("Solo puedes tomar los cursos gratis");
//         return;
//     }
//     if(suscripcion == 'Basic'){
//         console.log("Puedes tomar casi todos los cursos de Platzi");
//         return;
//     }
//     if(suscripcion == 'Expert'){
//         console.log("Pudes tomar casi todos los cursos de Platzi durante un año");
//         return;
//     }
//     if(suscripcion == 'ExpertDuo'){
//         console.log("Tú y alguien más pueden tomar TODOS los cursos de Plazti durante un año");
//         return;
//     }

//     console.warn('El tipo de suscripcion no existe');
// }


// conseguirTipoSuscripcion('Expert');


const tiposDeSuscripciones = {
    free: 'Solo puedes tomar los cursos gratis',
    basic: 'Puedes tomar casi todos los cursos de Platzi',
    expert: 'Pudes tomar casi todos los cursos de Platzi durante un año',
    expertduo: 'Tú y alguien más pueden tomar TODOS los cursos de Plazti durante un año',
};


function conseguirTipoSuscripcion(suscripcion){
    if(tiposDeSuscripciones[suscripcion]){
        console.log(tiposDeSuscripciones[suscripcion])
        return;
    }

    console.warn('Este tipode suscripcion no existe');
}

conseguirTipoSuscripcion('expertdufo');