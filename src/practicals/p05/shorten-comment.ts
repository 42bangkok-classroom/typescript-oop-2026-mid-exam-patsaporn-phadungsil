const comment = "TypeScript is a strongly typed programming language"

function shortenComment(comment: string): string {
  // Write your code below
const word = comment.split("");
const filterWord = word.filter(word => word.length >= 5 && word.length <= 10);
if(filterWord.length === 0){
  return ""; }
  return filterWord.join("");
}
console.log(shortenComment(comment));
