const fs = require("fs");
const file = process.argv[2] || "russianUTF-8.txt";
let words = fs.readFileSync("./Library/"+file).toString()
words = words.split("\n");
if(words.length && words[0].at(-1)=="\r") 
  words = words.map(word=>word.slice(0,-1))
console.log(words.length)

// Доступные буквы: ABЕКМНОРСТУХ
// Доступные цифры: 03469 (озчбд)
const ans1 = words.filter(word=>/^[авекмнорстух]?[озчбд]{3}[авекмнорстух]{0,2}$/i.test(word))
const ans2 = words.filter(word=>/^[авекмнорстух]?[озчбд]{0,2}$/i.test(word))
const ans3 = words.filter(word=>/^[озчбд]{0,2}[авекмнорстух]{0,2}$/i.test(word))

console.log(...ans1,...ans2,...ans3)
