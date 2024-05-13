//Crea un array vuoto.
// Chiedi per 6 volte all'utente di inserire un numero,
//se è dispari inseriscilo nell'array.

const nums=[];

for(i=0; i<6;i++){
    const userNum = Number.parseInt(prompt("Please insert a number"),10);
    if(userNum%2===0){
        nums.push(userNum);
    }
}