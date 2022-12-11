/*Scrivi un applicazione che sia in grado di generare una serie di numeri randomici.
L'utente, tramite 3 input, deve avere la possibilità di definire:
- Quanti box generare
- il numero minimo di generazione dei numeri random
- il numero massimo di generazione dei numeri random
Cliccando sul tasto "genera", vengono generati i box con i parametri specificati dall'utente 
e andremo a colorare di VERDE i numeri pari e di ROSSO i numeri dispari.
Es nello screen: genera 10 numeri random nel range 4-15*/

const container = document.getElementById("container");
const genera = document.getElementById("genera");
const resetta = document.getElementById("resetta")
const risultati = document.getElementById("risultati")
const numberDiv = document.getElementById("numberDiv")
const minNumber = document.getElementById("minNumber")
const maxNumber = document.getElementById("maxNumber")

genera.addEventListener("click", function () {
    const resultDiv = numberDiv.value;
    risultati.innerHTML = " ";
    for (let i = 1; i <= resultDiv; i++) {
        const random = Math.random();
        const min = parseInt(minNumber.value);
        const max = parseInt(maxNumber.value);
        const result = Math.floor(random * (max + 1 - min)) + min;
        const divResult = document.createElement("div")
        divResult.innerText = result
        risultati.appendChild(divResult)
        divResult.classList.add("color")
        if (result % 2 === 0) {
            divResult.classList.add("red")
        }
        else if (!result % 2 === 0) {
            divResult.classList.remove("red")
            divResult.classList.add("yellow")
        }
    }
}
)
resetta.addEventListener("click", function () {
    risultati.innerHTML = " ";
}
)
