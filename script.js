const array = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvimPzwOXCXDCFyo4gygMnyo_C3kJ6XoGCDQ&s",
  "https://static.vecteezy.com/system/resources/thumbnails/006/240/296/small/idyllic-mountain-landscape-with-fresh-green-meadows-and-blooming-wildflowers-idyllic-nature-countryside-view-rural-outdoor-natural-view-idyllic-banner-nature-panoramic-spring-summer-scenery-photo.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBdzVS7jYCNzbYxaoXX-CjQEnNaf7ZKezsZA&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeDdSE3L_R19t-nSQfjTcCSdaeuXg9gvSvHA&s",
];

let img = document.getElementById("jbl");

let imgPosition = 0;
function updateImg() {
  imgPosition++;
  img.src = array[imgPosition];
  if (imgPosition == array.length - 1) {
    imgPosition = 0;
  }
}

img.src = array[0];
setInterval(() => {
  updateImg();
}, 1500);
