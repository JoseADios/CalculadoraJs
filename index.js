
// Funcion para mandar numero a pantalla
document.onclick = event => {
    let pantalla = document.getElementById('pantalla');

    if (event.target.matches('.btn-num')) {

        // Limita la cantidad de datos que se pueden ingresar
        if (pantalla.value.length > 13 || pantalla.value == 'ERROR') {
            return;
        }
        else if (event.target.matches('#btn-raiz, #btn-del, #btn-resid, #btn-exp, #btn-igual, #btn-borrar')) {
            return;
        }

        if (pantalla.value == '0') {
            pantalla.value = event.target.textContent;
        } else {
            pantalla.value += event.target.textContent
        }

    }

};

// Para borrar el contenido de la pantalla
function borraCont() {
    let pantalla = document.getElementById('pantalla');
    pantalla.value = '0';
}

// Enter
function resultado() {
    let pantalla = document.getElementById('pantalla');
    
    try {
        let res = eval(pantalla.value)

        if (String(res).length > 14) {

            // Evitar que se salgan los numeros de la pantalla
            let restar = String(res).length - 14
            let cantDecimales = String(res).length - String(Math.trunc(res)).length -1
            pantalla.value = res.toFixed(cantDecimales-restar);
        } else {
            pantalla.value = res;
        }

    } catch (e) {
        pantalla.value = 'ERROR';
    }
}

// Raiz cuadrada
function raizCuadrada() {
    let pantalla = document.getElementById('pantalla');

    if (pantalla.value == 'ERROR') {
        return;
    }
    let res = Math.sqrt(eval(pantalla.value))

    if (String(res).length > 14) {
        pantalla.value = res.toFixed(10);
    } else {
        pantalla.value = res;
    }
}

// Módulo
function modulo() {
    let pantalla = document.getElementById('pantalla');

    if (pantalla.value == 'ERROR' || pantalla.value == '0' || pantalla.value.length > 13) {
        return;
    }
    pantalla.value += '%'
}

// Eponente
function exponente() {
    let pantalla = document.getElementById('pantalla');

    if (pantalla.value == 'ERROR' || pantalla.value == '0' || pantalla.value.length > 13) {
        return;
    }

    pantalla.value += '**';

}

function borraUltimo() {
    let pantalla = document.getElementById('pantalla');
    if (pantalla.value == 'ERROR' || pantalla.value == '0') {
        return;
    }
    if (pantalla.value.length == 1) {
        pantalla.value = 0
    }else{
        pantalla.value = pantalla.value.slice(0, -1);
    }
}

// Cuando se presione enter
document.addEventListener('keyup', function(event) {
    if (event.key == 'Enter'){
        resultado()
    }
})