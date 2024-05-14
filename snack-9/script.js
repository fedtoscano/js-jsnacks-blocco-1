//Snack8 Crea due tag div con due id diversi. Un div avrà il testo colorato di rosso mentre l'altro di verde. 
//Partendo da un array di numeri, stampiamo nell'id rosso i numeri dispari e in verde i numeri pari.

const nums=[1,2,3,4,5,6,7,8,9]
const divEven = document.createElement("div");
divEven.classList.add("colored-green");

const divOdd = document.createElement("div");
divOdd.classList.add("colored-red");

document.body.appendChild(divEven)
document.body.appendChild(divOdd)

for(i=0; i<nums.length;i++){
    if(nums[i]%2===1){
        const newP = document.createElement("p");
        newP.innerHTML = nums[i];
        divOdd.appendChild(newP);
    } else{
        const newP = document.createElement("p");
        newP.innerHTML = nums[i];
        divEven.appendChild(newP);
    }
}
