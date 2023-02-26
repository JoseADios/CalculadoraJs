
// Funcion para mandar numero a pantalla
document.onclick = event => {
    let pantalla = document.getElementById('pantalla');

    if (event.target.matches('.btn-num')) {

        // Limita la cantidad de datos que se pueden ingresar
        if (pantalla.textContent.length >= 13 || pantalla.textContent == 'ERROR') {
            return;
        }

        else if (event.target.matches('#btn-raiz, #btn-del, #btn-resid, #btn-exp, #btn-igual')) {
            return;
        }

        if (pantalla.textContent == '0') {
            pantalla.textContent = event.target.textContent;
        } else {
            let val = document.createTextNode(event.target.textContent);
            pantalla.appendChild(val);
        }

    }

};

// Para borrar el contenido de la pantalla
function borraCont() {
    let pantalla = document.getElementById('pantalla');
    pantalla.textContent = '0';
}

// Enter
function resultado() {
    let pantalla = document.getElementById('pantalla');
    
    try {
        let res = eval(pantalla.textContent)

        if (String(res).length >= 14) {
            pantalla.textContent = res.toFixed(10);
        } else {
            pantalla.textContent = res;
        }

    } catch (e) {
        pantalla.textContent = 'ERROR';
    }
}

// Raiz cuadrada
function raizCuadrada() {
    let pantalla = document.getElementById('pantalla');

    if (pantalla.textContent == 'ERROR') {
        return;
    }
    let res = Math.sqrt(eval(pantalla.textContent))

    if (String(res).length > 14) {
        pantalla.textContent = res.toFixed(10);
    } else {
        pantalla.textContent = res;
    }
}

// Módulo
function modulo() {
    let pantalla = document.getElementById('pantalla');

    if (pantalla.textContent == 'ERROR' || pantalla.textContent == '0') {
        return;
    }
    pantalla.appendChild(document.createTextNode('%'));
}

// Eponente
function exponente() {
    let pantalla = document.getElementById('pantalla');

    if (pantalla.textContent == 'ERROR' || pantalla.textContent == '0') {
        return;
    }

    pantalla.appendChild(document.createTextNode('**'));

}