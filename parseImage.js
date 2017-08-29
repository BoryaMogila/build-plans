var Jimp = require("jimp");
let preX = false;

Jimp.read("./public/secondPaint.png").then(function (image) {
  image.scan(0, 0, image.bitmap.width, image.bitmap.height, function (x, y, idx) {
    console.log(image.getPixelColor(x, y))
    if(image.getPixelColor(x, y)) {
      if(preX){
        return
      }
      preX = true;
      console.log(image.getPixelColor(x, y));
      image.setPixelColor(0, x, y);
      console.log(image.getPixelColor(x, y));
    } else {
      //console.log('dfsdf')
      preX = false;

    }
    // var red   = this.bitmap.data[ idx + 0 ];
    // var green = this.bitmap.data[ idx + 1 ];
    // var blue  = this.bitmap.data[ idx + 2 ];
    // var alpha = this.bitmap.data[ idx + 3 ];
    // if(red || green || blue || alpha) console.log(x, y,red, green,blue,alpha);
    image.setPixelColor(0, x, y);

  })
  .write("./public/secondPaint.png");
}).catch(function (err) {
  console.error(err);
});
// var fs = require("fs")
// var parsePNG = require("pngparse-sync")
// const data = parsePNG(fs.readFileSync("./public/firstPaint.png"));
// console.log(data.height, data.width);
// const points = {};
// let x = 0;
// let y = 0;
// data.data.forEach((i, index) => {
//   if(i !== 0) {

  // }
//   if(x === data.width){
//     x = 0;
//     y++
//   } else {
//     x++
//   }
// });
// console.log(y)

//console.log(JSON.stringify(parsePNG(fs.readFileSync("./public/firstPaint.png")).data))