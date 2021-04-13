var mouseevent="empty";
var last_position_x,last_position_y;
color="black";
width=1;
canvas=document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    mouseevent="mouseDown";
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouseevent="mouseUp";
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouseevent="mouseLeave";
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    current_position_x=e.clientX-canvas.offsetLeft;
    current_position_y=e.clientY-canvas.offsetTop;
    if(mouseevent=="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width;
        console.log("Last Position of X and Y");
        console.log("x="+last_position_x+"y="+last_position_y);
        console.log("current Position of X and Y");
        console.log("x="+current_position_x+"y="+current_position_y);
        ctx.arc(current_position_x,current_position_y,40,0,2*Math.PI);
        ctx.stroke();
    }
    last_position_x=current_position_x;
    last_position_y=current_position_y;
}
