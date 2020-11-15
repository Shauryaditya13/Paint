var mouseEvent="";
canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d");
radius=5;
width=3;
color="yellow";
var last_X;
var last_Y;
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
    radius=document.getElementById("radiusinput");
    width=document.getElementById("widthinput");
    color=document.getElementById("colorinput");
    mouseEvent="mousedown";
}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
    mouseEvent="mouseup";
}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e){
    mouseEvent="mouseleave";
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
    current_X=e.clientX-canvas.offsetLeft;
    current_Y=e.clientY-canvas.offsetTop;
    if (mouseEvent == "mousedown") {
        console.log("current x position = " + current_X);
        console.log("current y position = " + current_Y);
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width;
        ctx.arc(current_X, current_Y, radius, 0, 2*Math.PI);
        ctx.stroke();
    }
}
