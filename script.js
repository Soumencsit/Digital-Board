
let clear=document.querySelector('.clear')
clear.addEventListener('click',()=>{location.reload(true)})

let color=document.querySelectorAll('.color')
color.forEach((e)=>{
    e.addEventListener('click',(k)=>{
        ctx.strokeStyle=e.id
        console.log(e.id);
    })

})

let bg=document.querySelector('canvas ')
let bgcolor=document.querySelectorAll('.b-color')
bgcolor.forEach((e)=>{
    e.addEventListener('click',(x)=>{
        bg.style.backgroundColor=e.id;

       
    })
})




let canvas=document.querySelector('#myCanvas')

let ctx=canvas.getContext('2d')
// canvas.width=window.innerWidth
// canvas.height=window.innerHeight
// let ctx = canvas.getContext('2d');
let container = document.getElementById('myCanvas');
canvas.width = container.clientWidth;
canvas.height = container.clientHeight;

ctx.lineJoin='round'
ctx.lineCap='round'
ctx.lineWidth=5
ctx.strokeStyle = '#bad';

// it is for only drawing
let isDrawing = false;
let lastX = 0;
let lastY = 0;

function draw(e) {
if (!isDrawing) return;

ctx.beginPath();
ctx.moveTo(lastX, lastY);
ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop); // Use clientX and clientY
ctx.stroke();
// Update lastX and lastY only with the current cursor position
[lastX, lastY] = [e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop];
}

canvas.addEventListener('mousedown', (e) => {
isDrawing = true;
[lastX, lastY] = [e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop]; // Store initial position
});

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);

// it is for eraser

// Add event listener to toggle eraser mode
const eraserButton = document.querySelector('.eraserButton');
eraserButton.addEventListener('click', toggleEraser);

// Function to toggle eraser mode
function toggleEraser() {

if (ctx.globalCompositeOperation === 'source-over') {
    ctx.lineWidth=30
    ctx.globalCompositeOperation = 'destination-out'; // Activate eraser mode
} else {
    ctx.lineWidth=5
    ctx.globalCompositeOperation = 'source-over'; // Deactivate eraser mode
}
}