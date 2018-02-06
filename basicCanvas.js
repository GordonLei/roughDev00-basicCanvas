// Context + Canvas
var c = document.getElementById("canvas");
var context = c.getContext('2d');
c.fillStyle = "#000000";

//Buttons
var clearButton = document.getElementById("clearButton");
var toggleButton = document.getElementById("toggleButton");
var currentShape = "circle";
//temp values have null because they dont exist. If you use 0,0 you could connect to the upper left corner
var tempX = null;
var tempY = null;

//Functions
var clearCanvas = function(e) {
    console.log("cleared canvas");
    context.clearRect(0, 0, canvas.width, canvas.height);
    tempX = null;
    tempY = null;
};

var toggleShape = function(e) {
    if (currentShape == "circle"){
        currentShape = "square";
        console.log("shape is now: " + currentShape);
    }
    else{
        currentShape = "circle";
        console.log("shape is now: " + currentShape);
    }
};

var draw = function(e){
    var clickX = e.offsetX;
    var clickY = e.offsetY;
    console.log("clickX: " + clickX + "    clickY: " + clickY);
    if (currentShape == "circle"){
        //draw the new point
        context.beginPath();
        context.arc(clickX,clickY,10,0,2*Math.PI);
        //see if this is the beginning of a point
        if (tempX == null || tempY == null){
            tempX = clickX;
            tempY = clickY;
        }
        else{
            //if not first point, go to the previous point then draw a line to the clicked point
            context.moveTo(tempX,tempY);
            context.lineTo(clickX, clickY);
            tempX = clickX;
            tempY = clickY;
        }
        //end
        context.stroke();
        context.fill();
    }
    else{
        //draw point
        //context.beginPath();
        /*

        RECTANGLE CANNOT CONNECT TO EACH OTHER (YET) BECAUSE RECTANGLES ARE NOT PATH SO 
        THE FUNCTIONS FOR PATHS DONT DO ANYTHING HERE

        */
        context.fillRect(clickX,clickY,10,10);
        //check if beginning of path
        if (tempX == null || tempY == null){
            console.log("new rectangle point");
            tempX = clickX;
            tempY = clickY;
        }
        //if not draw lines connecting previous point to new point
        else{
            console.log("drawing line between points");
            //if not first point, go to the previous point then draw a line to the clicked point
            context.moveTo(tempX,tempY);
            context.lineTo(clickX, clickY);
            tempX = clickX;
            tempY = clickY;
        }
    }
}


//Add event listeners
c.addEventListener("click", draw);
clearButton.addEventListener("click", clearCanvas);
toggleButton.addEventListener("click", toggleShape);