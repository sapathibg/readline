
const readline = require('readline');
const fs = require('fs');
//fs.appendFileSync('greetings.txt')  //Create a file using file module.

const rl = readline.createInterface({
  input: fs.createReadStream('greetings.txt'),    //it takes greetings.txt file as input.
  crlfDelay: Infinity
});
var lineno=0;
rl.on('line', (line) => {     // and display the content of greetings.txt file as a output.
	lineno++;
  console.log(`Line ${lineno} from file: ${line}`);
});



