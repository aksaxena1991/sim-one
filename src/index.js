// import "./styles.css";

let canvas = document.createElement("canvas");
canvas.id = "myCanvas";
canvas.width = 500;
canvas.height = 500;
let ctx = canvas.getContext("2d");
// ctx.beginPath();
// ctx.rect(20, 20, 150, 100);

ctx.beginPath();
// ctx.moveTo(200, 50);

ctx.lineTo(200, 50);
ctx.lineTo(230, 40);
ctx.lineTo(230, 150);
ctx.lineTo(200,140);
ctx.lineTo(200,50);
ctx.stroke();
ctx.fillStyle = "red";
ctx.fill();

ctx.beginPath();
ctx.lineTo(150, 80);
ctx.lineTo(200, 80);
ctx.lineTo(200, 100);
ctx.lineTo(150, 100);
ctx.lineTo(150, 80);
ctx.stroke();
ctx.fillStyle = "blue";
ctx.fill();

ctx.beginPath();

// ctx.lineTo(300, 50);
// ctx.lineTo(300, 200);
ctx.rect(250, 40, 150, 150);
ctx.stroke();

document.getElementById("app").appendChild(canvas);
