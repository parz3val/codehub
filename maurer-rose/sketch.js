
//global variables
let zoomrange = 350;
//sliders
let dSlider;
let nSlider;

//color pickers
let bColorPicker;
let drawColorPicker;
let outLineColorPicker;
let inLineColorPicker;

function setup(){

    canvansMultiplier = 700;
    createCanvas(canvansMultiplier,canvansMultiplier);
    angleMode(DEGREES);

    //setting up slider
    dSlider = createSlider(1,180,71);
    nSlider = createSlider(1,180,6);

    //setting up color pickers.
    bColorPicker = createColorPicker('#ed225d');
    drawColorPicker = createColorPicker(color('yellow'));
    outLineColorPicker = createColorPicker(color('orange'));
    inLineColorPicker = createColorPicker(color('magenta'))


}

function draw(){

    
    translate(width/2,height/2);
    

    //getting the value from the slider
     d = dSlider.value();
     n = nSlider.value();
     

    //color values from the color pickers.

    let bcolor = bColorPicker.value();
    let drawColor = drawColorPicker.value();
    let outlineColor = outLineColorPicker.value();
    let inlineColor = outLineColorPicker.value();

    background(bcolor);
    stroke(drawColor)

    noFill();
    strokeWeight(1);
    beginShape();
    for (let i = 0; i < 361; i++){
        let k = i * d;
        let r = zoomrange * sin(n * k);
        let x = r * cos(k);
        let y = r * sin(k);
        vertex(x,y);
    }
    endShape(CLOSE);


    //tracing over with the second pass

    stroke(outlineColor);
    strokeWeight(2);
    beginShape();
    for (let i = 0; i < 361; i++){
        let k = i;
        let r = 250 * sin(n * k);
        let x = r * cos(k);
        let y = r * sin(k);
        vertex(x,y);
    }
    endShape(CLOSE);

    //third pass for the inline
   

    stroke(inlineColor);
    strokeWeight(2);
    beginShape();
        for (let i = 0; i < 361; i++){
            let k = d;
            let r = 250 * sin(n * k);
            let x = r * cos(k);
            let y = r * sin(k);
            vertex(x,y);
        }
    endShape(CLOSE);



}