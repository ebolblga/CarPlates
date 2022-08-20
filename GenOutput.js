const fs = require("fs");
const file = process.argv[2] || "russianUTF-8.txt";
let words = fs.readFileSync("./Library/"+file).toString()
words = words.split("\n");
if(words.length || words[0].at(-1)=="\r") 
  words = words.map(word=>word.slice(0,-1))
console.log(words.length)

// Доступные буквы: ABЕКМНОРСТУХ
// Доступные цифры: 03469 (озчбд)
const ans1 = words.filter(word=>/^[авекмнорстух][озчбд]{3}[авекмнорстух]{2}$/.test(word))

console.log(ans1)

const Map = {
  о:0,
  з:3,
  ч:4,
  б:6,
  д:9
}

//const carPlates = ans1.map(word=>word.replace(/[озчбд]/g,e=>Map[e]))
//console.log(carPlates)