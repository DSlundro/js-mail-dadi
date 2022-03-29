// impostare una Array (lista delle email consentite per il login)
let myList = ['one@gmail.com', 'two@gmail.com', 'three@gmail.com', 'four@gmail.com', 'five@gmail.com'];

// chiedere l'imput dall'utente
let userMail = prompt('Inserisci la tua email')
console.log(myList)


for (let i = 0; i < myList.length; i++){
    
        if (myList == userMail){
            console.log('registrato');
        }   else if (myList != userMail) {
            console.log('non registrato');
        }   else{
            alert('Devi inserire la tua email')
        }
    
    }






