

// Variable de los botones
let btns = document.getElementsByClassName('btn-num')

// Funcion para mandar numero a pantalla

btns.onclick = function(){
    let pantalla = document.getElementById('pantalla')
    pantalla.innerHTML(btns[2].textContent)
}
