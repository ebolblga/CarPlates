const fs = require("fs");
let words = fs.readFileSync("./Library/russianUTF-8.txt").toString()
words = words.split("\r\n");

const includedSymbols = /[озчбд]/;  //03469

const ans1 = words.filter(word=>/^[^-./бгдёжзийлпфцчшщъыьэюяБГДЁЖЗИЙЛПФЦЧШЩЪЫЬЭЮЯ][озчбд]{3}[^-./бгдёжзийлпфцчшщъыьэюяБГДЁЖЗИЙЛПФЦЧШЩЪЫЬЭЮЯ]{2}$/.test(word))

console.log(ans1)

const Map = {
  о:0,
  з:3,
  ч:4,
  б:6,
  д:9
}

const carPlates = ans1.map(word=>word.replace(/[озчбд]/g,e=>Map[e]))
console.log(carPlates)