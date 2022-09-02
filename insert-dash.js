//Insert dash between even numbers

//Input
const number=205468;

//Output
console.log(computeDash(number));

// Function to insert  dash between even numbers
function computeDash(number){
let numberStr=number.toString();
let numberStrArr=numberStr.split('');
for(let i=0;i<numberStrArr.length-1;i++){
if(parseInt(numberStrArr[i])%2===0 && parseInt(numberStrArr[i+1])%2===0 ){
    numberStrArr.splice(i+1, 0, "-");
}
}
return numberStrArr.join("");

}



