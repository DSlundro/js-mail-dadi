// impostare una Array (lista delle email consentite per il login)
let myList = ['one@gmail.com', 'two@gmail.com', 'three@gmail.com', 'four@gmail.com', 'five@gmail.com'];

// chiedere l'imput dall'utente
let userMail = prompt('Inserisci la tua email');
console.log(myList);

// inizializzazione del ciclo
for (let i = 0; i < myList.length; i++){
        // se l'utente è nella lista
        if (myList[i] == userMail){
            console.log('registrato');
        // se l'utente non è nelal lista
        }   else if (myList[i] != userMail) {
            console.log('non registrato');
        // se manca l'email
        }   else{
            alert('Devi inserire la tua email');
        }
    }






