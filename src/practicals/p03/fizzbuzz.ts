// Write your code below
const i: number =+ process.argv[2];

if(Number.isNaN(i)){
    console.log("Invalid input");
}else if (i <= 0){
    console.log("Invalid input");
for(let i = 1;i <= i ;i++){
    if(i % 15 == 0 ){
        console.log("FizzBuzz");
    }else if(i % 3 == 0){
        console.log("Fizz");
    }else if(i % 5 == 0){
        console.log("Buzz");
    }else{
        console.log(i);
    }
}
    
}