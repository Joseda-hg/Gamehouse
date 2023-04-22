var ContadorTurnos = 0

const isEven = num => num % 2 === 0;

function clickTurn(e) {
    const cell = e.target
    if (isEven(ContadorTurnos)) {
        cell.innerHTML="X"
        document.getElementById("turno").innerHTML = "Turno de las 0"
    }
    if (!isEven(ContadorTurnos)) {
        cell.innerHTML="O"
        document.getElementById("turno").innerHTML = "Turno de las X"
    }
    ContadorTurnos = ContadorTurnos + 1
}

var cuadros = document.getElementsByClassName("grid-item")
console.log(cuadros)
for (var i = 0; i < cuadros.length; i++) {
    cuadros[i].addEventListener('click', clickTurn, false)
}





