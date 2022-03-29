// impostare una Array (lista delle email consentite per il login)
let myList = ['one@gmail.com', 'two@gmail.com', 'three@gmail.com', 'four@gmail.com', 'five@gmail.com'];
console.log(myList)
// chiedere l'imput dall'utente
let email = document.getElementById('email')

// autentificazione
let auth = false


btn.addEventListener('click', function(){
    auth = false
    let email = document.getElementById('email').value
        // inizializzazione del ciclo
    for (let i = 0; i < myList.length; i++){
        // se l'utente è nella lista
        if (myList[i] == email){
            auth = true
        }
    }
    
    if (auth == true){
        console.log('Accesso acconsentito')
        document.getElementById('result').innerHTML = 'Accesso acconsentito'
    }   
    else if(auth == false){
        console.log('Accesso negato')
        document.getElementById('result').innerHTML = 'Accesso negato'
    } 
})




