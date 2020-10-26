function handleSubmit(event) {
event.preventDefault(); // Ya no se recarga la página!! 🎉
}

//elementos del formulario
const formElements = document.querySelector('#formulario-cine')
//formElements = onclick.formElements.elements;
console.log(formElements)

//Primera función
//seleccionamos el boton y lo metemos como constante
const buttonFq = document.querySelector("#button-fq")

//elementos por separado
const firstqq = document.querySelector('#first-qq')
// const secondqq = formElements['second-qq'].value;
// const thirdqq = formElements['third-qq'].value;
// const fourthqq = formElements['fourth-qq'].value;
// const fifthqq = formElements['fifth-qq'].value;

//Añadimos event listener al boton submit
buttonFq.addEventListener('click',handleFirst)


//Declaramos resuesta incorrecta a preguntas
const RespuestaIncorrecta = 'Tu respuesta es incorrecta'

const curiosityFirstQcontent = document.querySelector("#curiosity-first-q");

const answerFirstQ = document.querySelector("#button-fq");

//Declaramos la funcion
function handleFirst(click) {
    console.log(firstqq)
    if(firstqq === "Stallone"){
        return answerFirstQ.innerText= 'Tu respuesta es correcta ¿Sabías que Sylvester Stallone a principios de los 70 Stallone se traslada a Nueva York, persiguiendo el sueño de triunfar en Hollywood, pero la falta de papeles acaba obligándolo a vivir en una estación de autobús durante 3 meses? Durante estos tres meses su necesidad fue tal que tuvo que vender a su perro por 25$, al que recuperaría meses después por 3000$ tras escribir el guión de Rocky'
        
        console.log('correcto')
        alert('Vs bien')

        function handleSolutionFirst(){
            return curiosityFirstQcontent.innerText = 'Tu respuesta es correcta ¿Sabías que Sylvester Stallone a principios de los 70 Stallone se traslada a Nueva York, persiguiendo el sueño de triunfar en Hollywood, pero la falta de papeles acaba obligándolo a vivir en una estación de autobús durante 3 meses? Durante estos tres meses su necesidad fue tal que tuvo que vender a su perro por 25$, al que recuperaría meses después por 3000$ tras escribir el guión de Rocky'
        }
    }
    else{
        return 'hOLA'
    }
}


