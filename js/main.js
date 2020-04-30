
// Need to create the rendered, stage and append it to our html
// Create a Pixi renderer and define size and a background colour
var renderer = PIXI.autoDetectRenderer(400, 400,{
   // create transparent canvas
   transparent: true,
   antialias: true
   //change background color to blue
   // backgroundColor: '0x86D0F2'
});

// Appends canvas element to the body
document.body.appendChild(renderer.view);
// Create a container that will hold your scene
var stage = new PIXI.Container();

// draw shapes here ========>

// Create a line =====>
   var line = new PIXI.Graphics();
      //Define line style (think stroke)
      // width, color, alpha
      line.lineStyle(10, 0xD5402B, 1);
      // Define line position - this aligns the top left corner of our canvas
      line.position.x = renderer.width / 2;
      line.position.y = renderer.height /2;
      // Define pivot to the center of the element (think transformOrigin)
      line.pivot.set(0, 140);
      line.rotation = 0.785398 // Use google to convert degrees into radiants
      // Draw line
      line.moveTo(5, 0);
      line.lineTo(5, 280);
      // This puts the pixigraphic to the stage which is then rendered and appended to the body
      stage.addChild(line);


// Create a circle =====>
   var circle = new PIXI.Graphics();
      // define outline = stroke
      circle.lineStyle(20, 0x91CF46, 1);
      circle.beginFill(0x709FE9, .5)
      // draw circle (x, y,  radius)
      circle.drawCircle(renderer.width / 2, renderer.height / 2, 50);
      stage.addChild(circle)


// Create a rectangle =====>
   var rect = new PIXI.Graphics();
     // define fill and rectangle size
      rect.beginFill(0x800000, .5)
      // x, y, width, height
      rect.pivot.set(40, 40)
      rect.drawRect(renderer.width / 2, renderer.height / 2, 80, 80);
      rect.endFill();

      stage.addChild(rect)

   var rect2 = new PIXI.Graphics();
      rect2.lineStyle(5, 0x30303030, 1);
      rect2.pivot.set(30, 30)
      rect2.drawRect((renderer.width / 2), (renderer.height / 2), 60, 60)
      stage.addChild(rect2)


// Create a triangle =====>
   var triangle = new PIXI.Graphics()
      triangle.lineStyle(5, 0x494949, 1)
      triangle.beginFill(0x383838, .8)
      triangle.moveTo(105,  300)
      triangle.lineTo(100, 380);
      triangle.lineTo( 29, 380);
      triangle.lineTo(105, 300);

   stage.addChild(triangle)



// add stage to the canvas
render();

function render(){
   renderer.render(stage);
}