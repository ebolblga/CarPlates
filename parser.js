const axios = require("axios");
const  { parse } = require('node-html-parser');
const fs = require("fs/promises")

async function getWords(letter, page){
  const html = (await axios.get(`https://2yxa.ru/mat/bukva/${letter}/?kolvo=${page*15}&mst=${page*15}`)).data
  const document = parse(html)
  const As = document.querySelectorAll(".nl a").map(e=>e.innerText)
  return As
}
const words = []
async function f(){
  
  const ans = ["a", "b", "v", "g", "d", "e", "jo", "zh", "z", "i", "j", "k", "l", "m", "n", "o", "p", "r", "s", "t", "u", "f", "h", "c", "ch", "sh", "shh", "je", "ju", "ja" ].forEach(
    letter=>[0,1,2,3,4,5,6].forEach(
      page=>
        getWords(letter, page).then(data=>{
          words.push(...data)
          //console.log(...data)
        })
    ))
}
f()
setTimeout(async ()=>{
  await fs.writeFile("./Library/swears.txt", words.map(word=>word.replace(/[\s(),!?-]/g,"")).join("\n"))
},3000)