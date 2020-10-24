var hour;
var minute;
var second;
var scAngle;
var hrAngle;
var mnAngle;

  function setup() {
    createCanvas(800, 400);
    noStroke();
    angleMode(DEGREES)
    
  }
  
  function draw() {
    background(255,255,255);
    translate(200,200);
    rotate(-90)
    
    //let c = map(mouseX, 0, width, 0, 175);
    //let d = map(mouseX, 0, width, 40, 300);

    //ellipse(width/2, height/2, d, d);
    hr = hour();  
    mn = minute();     
    sc = second();
    scAngle = map(sc,0,60,0,360);
    mnAngle = map(mn,0,60,0,360);
    hrAngle = map(hr%12,0,12,0,360);

    push();
    rotate(scAngle)
    stroke(255,0,0)
    strokeWeight(7)
    line(0,0,100,0)
    pop();

    push();
    rotate(mnAngle)
    stroke(0,255,0)
    strokeWeight(7)
    line(0,0,75,0)
    pop();

    push();
    rotate(hrAngle)
    stroke(0,0,255)
    strokeWeight(7)
    line(0,0,50,0)
    pop();
  
    point(0,0)
    noFill();
    stroke(255,0,0);
    strokeWeight(10)
    arc(0, 0, 300, 300, 0, scAngle);

    point(0,0)
    noFill();
    stroke(0,255,0);
    strokeWeight(10)
    arc(0, 0, 280, 280, 0, mnAngle);

    point(0,0)
    noFill();
    stroke(0,0,255);
    strokeWeight(10)
    arc(0, 0, 260, 260, 0, hrAngle);
  
  }


