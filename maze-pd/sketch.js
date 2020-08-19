var rows, cols;
const w = 20;
var grid = [];
var current;

var stack = [];

function setup() {
  // put setup code here

  canvasSize = 500;
  createCanvas(canvasSize,canvasSize);
  //frameRate(5);
  cols = floor(width/w);
  rows = floor(height/w);


  // cell objects.
  for (let j = 0; j< rows; j++) {
    for (let i = 0; i < cols; i++) {
      let cell = new Cell(i,j);
      grid.push(cell);
    }
  }

  current = grid[0];
}

/// END OF SETUP 


function draw() {
  // put drawing code here
  background(0);

  for (let i = 0; i < grid.length; i++) {
    grid[i].show();
  }

  //Step 1
  //console.log(current);
  current.visited = true;
  current.highlight();
  //current.hightlight();
  let next = current.checkNeighbors();
  if (next) {
    next.visited = true;


    // step 2

    stack.push(current);



    //step 3
    removeWalls(current,next);
    //console.log(removeWalls(current,next));
    current = next;
    //console.log(current);
    //console.log(next);
  } else if (stack.length > 0) {
    // these are the case for the stack is not empty.
    current = stack.pop();
  }

}


//// END OF DRAW


function index(i,j){

  if ( i < 0 || j < 0 || i > cols -1 || j > rows -1){
    return -1;
  }

  return i + j * cols;

}

// Constructor function
function Cell(i,j) {
  this.i = i;
  this.j = j;

  // top right bottom left.
  this.walls = [true, true, true, true];

  this.visited = false;


  //checkneighbors
  this.checkNeighbors = function() {

    let neighbors = [];

    let top = grid[index(i,j-1)];
    let right = grid[index(i+1,j)];
    let bottom = grid[index(i, j+1)];
    let left = grid[index(i-1,j)];

    if (top && !top.visited) {
      neighbors.push(top);
    }

    if (right && !right.visited) {
      neighbors.push(right);
    }

    if (bottom && !bottom.visited) {
      neighbors.push(bottom);
    }

    if (left && !left.visited) {
      neighbors.push(left);
    }

    if (neighbors.length > 0) {

      let r = floor(random(0,neighbors.length));

      return neighbors[r];

    }else {
      return undefined;
    }

  }

this.highlight = function() {
  let x = this.i * w;
  let y = this.j * w;
  noStroke();
  fill(255,10,40);
  rect(x,y,w,w);
}
//show function : renders the block.
  this.show = function () {
    let x = this.i * w;
    let y = this.j * w;

    //setting up the size and color of stroke

    // noFill();
    // rect(x,y,w,w);

    stroke(255);

    if ( this.walls[0] ) {
      line(x , y,x + w,  y);
    }

    if ( this.walls[1]) {

      line(x +  w, y, x + w , y + w  );

    }

    if (this.walls[2]) {
      line(x + w, y + w , x , y + w );
    }
    
    if (this.walls[3]) {
      line(x , y + w,x,y);

    }
    
    if (this.visited) {
      noStroke();
      fill(0);
      rect(x, y, w, w);    
    }
    
  }

}

//remove walls function

function removeWalls(a, b) {

  let x = a.i - b.i;

  if (x == 1) {
    a.walls[3] = false;
    b.walls[1] = false;

    

  } else if ( x == -1) {
    a.walls[1] = false;
    b.walls[3] = false;
  }

  let y = a.j - b.j;

  if (y == 1) {
    a.walls[0] = false;
    b.walls[2] = false;

  } else if ( y == -1) {
    a.walls[2] = false;
    b.walls[0] = false;
  }
}




//blank space for rough and notes...

// 