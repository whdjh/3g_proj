var myCanvas = document.getElementById('myCanvas');
resize();
var graphics = myCanvas.getContext('2d');
var mouse = {};
window.addEventListener("mousemove", function(event){
    mouse.x = event.clientX+c.width;
    mouse.y = event.clientY;
});
window.addEventListener("mousedown", function(){
    mouse.down = true;
    mouse.up = false;
});
window.addEventListener("mouseup", function(){
    mouse.down = false;
    mouse.up = true;
});

graphics.clear = function(){
    this.clearRect(0,0,myCanvas.width,myCanvas.height);
}

function input(m){
    return prompt(m);
}
//2023.10.11 (김호탁) PUT -> print
function print(m){
    console.log(m);
}
