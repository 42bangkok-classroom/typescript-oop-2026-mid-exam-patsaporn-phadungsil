// Write your code below

const py = +process.argv[2]
if (Number.isNaN(py) || py <= 0) {
  
} else {
  for (let i = 1; i<= py; i++) {
    let line = '';
    for (let j = py; j > 0; j--) {
      if (j > i) {
        line += ' ';
      } else {
        line += j;
      }
    }
    console.log(line)
  }
}