// Declaring mouseEvent variables and canvas, ctx values
var mouseEvent = " ";


canvas = document.getElementById("pc_canvas");
ctx = canvas.getContext("2d");

// Adding Event Listener for when Mouse is dragged "down"

canvas.addEventListener("mousedown", my_mousedown);

// Function for the Event Listener

function my_mousedown(e) {

    // Setting color, width & radius values

    color = document.getElementById("color").value;
    width = document.getElementById("width").value;
    radius = document.getElementById("radius").value;
    mouseEvent = "mouseDown";
}

// Repeating steps (adding EventListener, creating function)

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e) {

    /* Setting the current X and Y coordinates to clientX 
      and clientY values, minus the left and top offsets for 
      the canvas. 
    */
    currentX = e.clientX - canvas.offsetLeft;
    currentY = e.clientY - canvas.offsetTop;

    /* If statement for if mouseEvent equals to mouseDown
       (aka. the mouse being dragged down), then the circle   
       creation from the mouseDown should begin.
    */
    if (mouseEvent == "mouseDown") {
        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + currentX + "y = " + currentY);
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.arc(currentX, currentY, radius, 0, 2 * Math.PI);
        ctx.stroke();
    }

}

// Repeating EventListener and function steps

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e) {
    mouseEvent = "mouseup";
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e) {
    mouseEvent = "mouseleave";
}

// Clear Area (had to look at W3schools for reference)

function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}