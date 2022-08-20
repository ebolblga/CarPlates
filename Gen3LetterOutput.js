const fs = require("fs");
const file = process.argv[2] || "russianUTF-8.txt";
let words = fs.readFileSync("./Library/"+file).toString()
words = words.split("\n");
if(words.length && words[0].at(-1)=="\r") 
  words = words.map(word=>word.slice(0,-1))
console.log(words.length)

const ans1 = words.filter((word) =>
  /^[авекмнорстух]{3}$/i.test(word)
);

console.log(ans1);
