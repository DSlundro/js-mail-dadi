// impostare una Array (lista delle email consentite per il login)
let myList = ['one@gmail.com', 'two@gmail.com', 'three@gmail.com', 'four@gmail.com', 'five@gmail.com'];

// chiedere l'imput dall'utente
let userMail = prompt('Inserisci la tua email');
console.log(myList);

// autentificazione
let auth = false && true

// inizializzazione del ciclo
for (let i = 0; i < myList.length; i++){
        // se l'utente è nella lista
        if (myList[i] == userMail){
            auth = true
        }
    }

if (auth == true){
    console.log('Accesso acconsentito')
}   else if(auth == false){
    console.log('Accesso negato')
}



