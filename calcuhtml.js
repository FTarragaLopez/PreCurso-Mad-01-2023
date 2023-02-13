var primero = 0;
var operation = '';

function numero(number){
    let resultado = document.getElementById('resultado');
    resultado.textContent = resultado.textContent + number;
}

function reset(){
    document.getElementById('resultado').textContent = 0;
}   

function operacion(tipo){

            primero = document.getElementById('resultado').textContent;
            reset();
            operation = tipo;

}


function respuesta(){
    let resultado = 0;
    let segundo = document.getElementById('resultado').textContent;

    console.log(primero, segundo)
    console.log(operation)
    switch(operation){
        case '+':
            resultado = parseFloat(primero) + parseFloat(segundo);
            console.log(parseFloat(primero) + parseFloat(segundo))
            console.log(parseFloat(primero))
            break;
        case '-':
            resultado = parseFloat(primero) - parseFloat(segundo);
            break;
        case '*':
            resultado = parseFloat(primero) * parseFloat(segundo);
            break;
        case '/':
            resultado = parseFloat(primero) / parseFloat(segundo);
            break;
    }
    console.log(resultado)
    document.getElementById('resultado').textContent = resultado;

}