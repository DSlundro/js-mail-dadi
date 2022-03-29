// generare dadi da 1 a 6 sia per il giocatore che per il PC
// utente
let playerUser = [1, 2, 3, 4, 5, 6]
console.log(playerUser)
// PC
let playerPC = [1, 2, 3, 4, 5, 6]
console.log(playerPC)


// creazione numeri random
// utente
let randomUser = Math.floor(Math.random() * playerUser.length) + 1
console.log(randomUser)
// PC
let randomPC = Math.floor(Math.random() * playerPC.length) + 1
console.log(randomPC)

// posibilità degli eventi
if (randomUser > randomPC){
    console.log('Sei tu il vincitore!')
} else if (randomUser < randomPC){
    console.log('Mi spiace, hai perso!')
} else if (randomUser == randomPC){
    console.log('Pareggio!')
}

