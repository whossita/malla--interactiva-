const canvas = document.getElementById('malla');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let mouse = { x: null, y: null };
document.addEventListener('mousemove', function(e) {
mouse.x = e.x;
mouse.y = e.y;
});

function drawGrid() {
const spacing = 40;
ctx.clearRect(0, 0, canvas.width, canvas.height);
ctx.fillStyle = '#0ff';

for (let x = 0; x < canvas.width; x += spacing) {
for (let y = 0; y < canvas.height; y += spacing) {
const dx = mouse.x - x;
const dy = mouse.y - y;
const dist = Math.sqrt(dx * dx + dy * dy);
const maxDist = 200;
const size = Math.max(2, 6 - dist / maxDist * 6);

ctx.beginPath();
ctx.arc(x, y, size, 0, Math.PI * 2);
ctx.fill();
}
}

requestAnimationFrame(drawGrid);
}

drawGrid();
window.addEventListener('resize', () => {
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
});
