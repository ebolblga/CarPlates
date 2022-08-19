let fs = require("fs");
let words = fs.readFileSync("./Library/FittingWords6.txt").toString();
words = words.split("\n");

const includedSymbols = /[озчбд]/;  //03469