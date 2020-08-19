
let n = 0;
let c = 5;
let circleSize = 4;
function setup() {

    createCanvas(500,500);
    angleMode(DEGREES);
    colorMode(HSB);
    background(0);


}

function draw() {

    let angle = n  * 137.5;
    let radius = c * sqrt(n);

    // width/ 2 is to take everything to the center.
    let x = radius * cos(angle) + width / 2;
    let y = radius * sin (angle) + width / 2

    fill(angle % 256,angle,angle*angle);
    noStroke()
    ellipse(x,y,circleSize,circleSize);

    n++



}