//Snack7 Fai inserire un numero, che chiameremo N, all'utente. Genera N array, ognuno formato da 10 numeri casuali da 1 a 100. Ogni volta che ne crei uno, stampalo.

const userNumber = Number.parseInt(prompt("Enter a number"),10)

for(i=0; i<=userNumber; i++){
    const randomArr=[];
    for(k=0; k<10; k++){
        const randomNum = Math.floor(Math.random()*100) + 1;
        randomArr.push(randomNum);
    }
    console.log(randomArr);
}
