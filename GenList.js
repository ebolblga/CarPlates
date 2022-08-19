let fs = require("fs");
let words = fs.readFileSync("./Library/russianUTF-8.txt").toString();
words = words.split("\n");
//console.log(words.length);

//ABЕКМНОРСТУХ в000ор
const excludedSymbols = /[-./бгдёжзийлпфцчшщъыьэюяБГДЁЖЗИЙЛПФЦЧШЩЪЫЬЭЮЯ]/; //АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ
let acceptedWords3 = "";
let acceptedWords6 = "";

for (let testWord of words) {
  if (testWord.length == 3)
    if (!testWord.match(excludedSymbols)) acceptedWords3 += testWord + "\n";

  if (testWord.length == 6)
    if (!testWord.match(excludedSymbols)) acceptedWords6 += testWord + "\n";
}

fs.writeFile("./Library/FittingWords3.txt", acceptedWords3, (err) => {
  if (err) {
    console.error(err);
    return;
  }
});

fs.writeFile("./Library/FittingWords6.txt", acceptedWords6, (err) => {
  if (err) {
    console.error(err);
    return;
  }
});

console.log("Amount of 3 symbol words: " + acceptedWords3.length);
console.log("Amount of 6 symbol words: " + acceptedWords6.length);
