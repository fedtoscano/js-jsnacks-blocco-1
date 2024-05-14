//Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari

const nums=[1,2,3,4,5,6,7,8,9];
let somma =0;

for(let i=0; i<=nums.length-1;i++){
    if(i%2===1){
        somma+=nums[i];
    }
}

console.log(somma)