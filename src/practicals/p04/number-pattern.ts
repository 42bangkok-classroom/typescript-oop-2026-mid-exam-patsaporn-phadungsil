// Write your code below

const py = +process.argv[2];

if(Number.isNaN(py) || py <= 0){
  process.exit()
}
function printPattern(rows: number): void {
for(let i = 1 ; i <= py; i++){
    let result = "";
    for(let j = 1;j <= i - 1; j++){
      result +="";

    }
    for (let j = i; j >= 1; j--){
    
    result+= j;
    }
    console.log(result);
   
  }

}printPattern(5);  