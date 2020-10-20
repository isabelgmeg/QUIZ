function handleSubmit(event) {
event.preventDefault(); // Ya no se recarga la página!! 🎉
}
//elementos del formulario
//?? const formElements = document.querySelector('#formulario-cine')
const formElements = onsubmit.target.elements;

//elementos por separado
const firstqq = formElements['first-qq'].value;
const secondqq = formElements['second-qq'].value;
const thirdqq = formElements['third-qq'].value;
const fourthqq = formElements['fourth-qq'].value;
const fifthqq = formElements['fifth-qq'].value;

//Primera función
//seleccionamos el boton y lo metemos como constante
const submitFq = document.querySelector("#submit-fq")

//Añadimos event listener al boton submit
SubmitFq.addEventListener('onsubmit',handleFirstQ)

//Declaramos resuesta incorrecta a preguntas
const RespuestaIncorrecta = 'Tu respuesta es incorrecta'

//Declaramos la funcion
function handleFirstQ (){
    if(firstqq === "Stallone"){
        console.log('Vas bien')
        return curiosityFirstQ.innerText = 'Tu respuesta es correcta ¿Sabías que Sylvester Stallone a principios de los 70 Stallone se traslada a Nueva York, persiguiendo el sueño de triunfar en Hollywood, pero la falta de papeles acaba obligándolo a vivir en una estación de autobús durante 3 meses? Durante estos tres meses su necesidad fue tal que tuvo que vender a su perro por 25$, al que recuperaría meses después por 3000$ tras escribir el guión de Rocky'
    }
    else{
        return RespuestaIncorrecta
    }
}

const curiosityFirstQ = documentQuerySelector("#curiosity-first-q");
