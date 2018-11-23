var c = document.getElementById("main-canvas");
var ctx = c.getContext("2d");
var grd;

//green grass
grd = ctx.createLinearGradient(0, 200, 0, 300);
grd.addColorStop(0, "#78cf2f");
grd.addColorStop(1, "white");

ctx.fillStyle = grd;
ctx.fillRect(0, 200, 300, 100);

//blue sky
grd = ctx.createLinearGradient(0, 0, 0, 200);
grd.addColorStop(0, "#1faee9");
grd.addColorStop(1, "white");

ctx.fillStyle = grd;
ctx.fillRect(0, 0, 300, 200);

//grey house basement
ctx.fillStyle = "#787878";
ctx.fillRect(100, 100, 100, 100);
ctx.strokeRect(110, 110, 45, 50);
ctx.clearRect(115, 115, 35, 40);

//roof
ctx.fillStyle = "#555555";
ctx.beginPath();
ctx.moveTo(90, 100);
ctx.lineTo(210, 100);
ctx.lineTo(150, 50);
ctx.lineTo(90, 100);
ctx.fill();
ctx.closePath();

//heart
ctx.fillStyle = "#FF0000";
ctx.beginPath();
ctx.moveTo(40, 20);
ctx.lineTo(20, 40);
ctx.lineTo(40, 60);
ctx.lineTo(60, 40);
ctx.lineTo(40, 20);
ctx.arc(32, 32, 14, 90, -180, true);
ctx.arc(48, 32, 14, 90, 180, true);
ctx.fill();
ctx.closePath();

//packman
ctx.fillStyle = "yellow";
ctx.beginPath();
ctx.arc(250, 32, 20, (Math.PI / 180) * 35, (Math.PI / 180) * 210, false);
ctx.fill();
ctx.closePath();
ctx.beginPath();
ctx.arc(250, 32, 20, (Math.PI / 180) * 140, (Math.PI / 180) * 320, false);
ctx.closePath();
ctx.fill();