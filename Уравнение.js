<script>
		x+y==c
		y+x==c
        var x = document.getElementById(x)
        var y = document.getElementById(y)
		alert(x==c-y||y==c-x&&y*(c-x)+x=c||x*(c-y)+y))
</script>  
var canvas = document.getElementById('canvas');
var step = 10
var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(x,y);
    tx.stroke();
    ctx.beginPath();
for(var y = 0; y <=canvas.height; y+=10)
{
	ctx.moveTo(0, y);
	ctx.lineTo(canvas.width, y);
}
ctx.stroke();
ctx.beginPath
for(var x = 0;x<=canvas.width;x += 10)
{
	
	ctx.moveTo(x,0)
	ctx.lineTo(x,canvas.height)
}
ctx.stroke();
 
var centrX = Math.floor(Math.floor(canvas.width/10)/2)*step;
var centrY = Math.ceil(Math.floor(canvas.height/10)/2)*step;
ctx.beginPath();
ctx.strokeStyle = "red";
ctx.moveTo(centrX,0);
ctx.lineTo(centrX,canvas.height)
ctx.moveTo(0,centrY);
ctx.lineTo(canvas.width,centrY)
ctx.stroke();