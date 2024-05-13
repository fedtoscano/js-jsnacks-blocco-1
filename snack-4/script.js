//In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all'utente il suo nome e comunicagli se può partecipare o no alla festa.

const greatGatsbyParty = ['Michael', 'John', 'Christine', 'Michaela', 'Anthony', 'Lucille']

const guestName = prompt("Type your name here")

if (greatGatsbyParty.includes(guestName)){
    console.log("You are admitted to Gatsby's Party!")
} else{
    console.log("You are rejected!")
}

// greatGatsbyParty.forEach((listName) =>{
//     if(guestName === listName){
//         const admission =  console.log("You are admitted to Gatsby's Party!")
//         return admission
//     } else{
//         const admission =  console.log("You are rejected!")
//         return admission
//     }
// })