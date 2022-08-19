//This decodes win1251 file with list of russian words from https://github.com/danakt/russian-words to UTF-8
const iconv = require("iconv-lite");
const fs = require("fs");

fs.readFile("./Library/russian.txt", null, (err, data) => {
  if (err) {
    console.log(err);
    return;
  }

  const encodedData = iconv.encode(iconv.decode(data, "win1251"), "utf8");
  fs.writeFile("./Library/russianUTF-8.txt", encodedData, () => {});
});
