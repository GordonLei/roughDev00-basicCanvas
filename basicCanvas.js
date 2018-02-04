// Context + Canvas
var c = document.getElementById("canvas");
var context = c.getContext('2d');
c.fillStyle = "#000000";

//Buttons
var clearButton = document.getElementById("clearButton");
var toggleButton = document.getElementById("toggleButton");
var currentShape = "circle";

//Functions
var clearCanvas = function(e) {
    console.log("cleared canvas");
    context.clearRect(0, 0, canvas.width, canvas.height);
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
        context.beginPath();
        context.arc(clickX,clickY,25,0,2*Math.PI);
        context.stroke();
        context.fill();
    }
    else{
        context.fillRect(clickX,clickY,25,25);
    }
    
}

//Add event listeners
c.addEventListener("click", draw);
clearButton.addEventListener("click", clearCanvas);
toggleButton.addEventListener("click", toggleShape);