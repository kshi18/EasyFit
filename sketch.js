var textField;
var mouseStuff;

function setup() {
  
  var canvas=createCanvas(window.innerWidth, window.innerHeight);
  // var canvas=createCanvas(1000, 1000);
  canvas.parent('sketchContainer');
  //textField=select('#textInfo');
}

function draw() {
background(89,214,231);
stroke(244,51,81);
fill(233,51,81);
ellipse(550,80,160,160);
ellipse(550,300,160,160);
ellipse(800,80,160,160);
ellipse(800,300,160,160);
}