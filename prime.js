let num = 17;
let count = 1;
for(let i=2; i < num/2; i++){
  if(num % i == 0)
     count++;

}
    if(count==1){
  console.log("prime number")
}
else{
   console.log("not a prime number")
}