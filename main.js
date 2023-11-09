function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const numeriCasuali = []
for (let i = 0; i < 5; i++) {
    
    const contenitoreLista = document.createElement("div")
    const listaNumeri = document.getElementById("ListaNumeri")
    const generatoreNcasuali = getRndInteger(1, 100)
    numeriCasuali[i] = getRndInteger(1, 100)
    listaNumeri.appendChild(contenitoreLista)
    console.log(numeriCasuali)
    contenitoreLista.innerHTML = numeriCasuali
    
    
}

setTimeout (funzioneTempo, 2*1000);


function funzioneTempo(){

    const numeriDellUtente = parseInt(prompt("Inserisci numeri"))
   
    console.log(numeriDellUtente)


    if (numeriCasuali.includes(numeriDellUtente)) {
    
        console.log("yes")
        
    }
    
}
