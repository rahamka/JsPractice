let anchors = document.getElementsByTagName("a");
let value = [...anchors];
value.forEach((val) => {
  val.style = `color: blue;
  background-color: yellow;
  border: 2px solid green;
  `;
  console.log(val.nodeType);
});

let heading = document.body.childNodes;

heading.forEach((val) => {
  console.log(val, val.nodeType);
});
