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
    const numeriDellUtente1 = parseInt(prompt("Inserisci numeri"))   
    const numeriDellUtente2 = parseInt(prompt("Inserisci numeri"))
    const numeriDellUtente3 = parseInt(prompt("Inserisci numeri"))
    const numeriDellUtente4 = parseInt(prompt("Inserisci numeri"))

    console.log(numeriDellUtente)
    console.log(numeriDellUtente1)
    console.log(numeriDellUtente2)
    console.log(numeriDellUtente3)
    console.log(numeriDellUtente4)

    if (numeriCasuali.includes(numeriDellUtente)) {
    
        console.log("yes")
        
    }else {
        console.log("no")
    }
    if (numeriCasuali.includes(numeriDellUtente1)) {
    
        console.log("yes")
        
    }else {
        console.log("no")
    }
    if (numeriCasuali.includes(numeriDellUtente2)) {
    
        console.log("yes")
        
    }else {
        console.log("no")
    }
    if (numeriCasuali.includes(numeriDellUtente3)) {
    
        console.log("yes")
        
    }else {
        console.log("no")
    }
    if (numeriCasuali.includes(numeriDellUtente4)) {
    
        console.log("yes")
        
    }else {
        console.log("no")
    }
    
}
