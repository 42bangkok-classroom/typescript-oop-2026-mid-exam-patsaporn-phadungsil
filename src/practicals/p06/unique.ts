function getUniqueNumbers(arr1: number[], arr2: number[]): number[] {
  // Write your code below

const combined = [...arr1, ...arr2];
  
  
  return combined.filter((num, index, self) => 
    self.indexOf(num) === self.lastIndexOf(num)
  );


}


const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];

console.log(getUniqueNumbers(arr1, arr2));  










  