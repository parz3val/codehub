let angle = 0;
let gap = 24;
let gap2= 22;       

// this function is always needned 
function setup() {
  //creating canvas.
  let canvasMultiplier = 1000;
  createCanvas(canvasMultiplier, canvasMultiplier, WEBGL);
}



function draw() {
  //setting up a black background
  //background(0,random(255),random(255));
  
  //zooming out in 3d
  translate(0,25,-50);

  //trasnalte to the center.
  //translate(width / 2, height / 2);
  
  //getting 3D perspective.
  rotateX(-PI/8);


  rectMode(CENTER);
  
  //fun rotation
  //rotateY(angle*25);
  rotateZ(angle*0.25);

  //drawing a simple rectangle height.
  //let h = 100;


  //drawing multiple rectangles with the loop.

  let offset = 0;
  
  
  
  for (let x = 0; x < width; x += gap) {
    
    push();

    
    // now making them move at different offset.
    let a = angle;
    //variable height with sine wave over time.
    let h = map(sin(angle+offset), -1, 1, 0, 100);
    
    let h1 = map(sin(angle+offset), -2, 2, 0, 100);
    let w = gap-1;

    fill(random(255),random(255),random(255));
    
    //moving to 3d with webgl
    //can't use rect, its slow.
    // using translate
    translate(x - width /2, 0,30);
    box(w,h,w);
    
    translate(x - width /2, 40,0);
    box(w,h,w);
    
    translate(x - width /2, 40,5);
    box(w,h1,w);
    
    translate(x-width/2,0,0)
    box(w,h1,w)
    
    
    //draw rectangle with height and width 
    //rect(x- width / 2, 0, w, h);
    
    offset += 0.1;

    pop();

  }

  for (let x = 0; x < width; x += gap2) {
    
    push();

    
    // now making them move at different offset.
    let a = angle;
    //variable height with sine wave over time.
    let h = map(sin((angle*5)+offset), -1, 1, 0, 100);
    let entangler = random(0,offset);
    let h1 = map(sin(angle+offset+entangler), -2, 50, 20, 0);
    let w1 = map(sin(angle+entangler),-1,1,0,100);
    let w = gap-2;

    fill(random(255),random(255),random(255));
    
    //moving to 3d with webgl
    //can't use rect, its slow.
    // using translate
    translate(x - width /2, 0,30);
    box(w1,h,w1);
    
    translate(x - width /2, 40,0);
    box(w,h,w);
    
    translate(x - width /2, 40,5);
    box(w,h1,w+10);
    
    fill(random(200),0,0);
    
    translate(x-width/2,0,0)
    rotateX(angle*0.25);
    box(w,h1,w)
    
    
    //draw rectangle with height and width 
    //rect(x- width / 2, 0, w, h);
    
    offset += 0.1;

    pop();

  }



  angle += 0.1;

  // sine function will make the angle 





}