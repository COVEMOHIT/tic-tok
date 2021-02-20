var hr
var min
var sec
var hrang
var minang
var secang








function setup() {
createCanvas(800,400);

angleMode(DEGREES);




}






function draw() {
  background("yellow");  
  hr = hour();
  min= minute();
  sec= second();
  


  translate (200,200)
 rotate (-90)
 secang=map(sec,0,60,0,360)
 minang=map(min,0,60,0,360)
 hrang=map(hr%12,0,12,0,360)
 strokeWeight(7);
 stroke("red")

 rotate(secang);
line(0,0,100,0)
}