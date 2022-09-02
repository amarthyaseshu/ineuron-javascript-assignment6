//Find nth largest number

//Input
const n=3;
let arr= [3,45,6,7,23,5,7,8];

//Output
console.log(find_largest(n,arr));

//Function to get the nth largest element
function find_largest(n,arr){
   let sortedArr=arr.sort((a, b)=> b - a);
   let uniqueArr = [];
   sortedArr.forEach(c => {
    if (!uniqueArr.includes(c)) {
        uniqueArr.push(c);
    }
});
if(uniqueArr.length>=n){
return uniqueArr[n-1];
}else{
    return "Invalid input, pls check array index size & nth element";
}

}