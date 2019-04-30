function graph() {
	var color=document.forms[0].color.value;
	var canvas = document.getElementById("map");
    var ctx = canvas.getContext("2d");
	ctx.beginPath();
	var y0 = canvas.height/2;
	ctx.strokeStyle=style(color);
    ctx.moveTo(0, y0);
	for (var x=0; x<canvas.width; x+=0.1)
		{var y=f(x);
		ctx.lineTo(5*x, y+y0);}
    ctx.stroke();
	function f(x) {
	if (document.forms[0].k[0].checked) {return -0.05*x*x;}
	else if (document.forms[0].k[1].checked) {return -0.01*x*x*x;}
	else if (document.forms[0].k[2].checked) {return 100*Math.cos(x);}
	else if (document.forms[0].k[3].checked) {return 100*Math.sin(x);}
	}
	function style(color) {
	if (color=="Красный") {return "red";}
	else if (color=="Желтый") {return "yellow";}
	else if (color=="Зеленый") {return "green";}
	else {return "pink";}
	}
}
