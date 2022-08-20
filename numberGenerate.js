const Jimp = require('jimp');

async function drawCarPlate(number,country=64,path='./empty.jpg'){
  const image = await Jimp.read('./empty.jpg')
  const font = await Jimp.loadFont("./fonts/font40.fnt")
  image.print(font, 10, 10, number); // print a message on an image. message can be a any type
  image.write("./carPlate.png")
}
drawCarPlate("X012EH")

module.exports=drawCarPlate