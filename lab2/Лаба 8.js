$(document).ready(function(){
	$("#task1").mouseover(function(){
		$("#task1").css("color","blue")
		});
	$("#task2").click(function(){
		$("#task2").css("font-size","30px")
		});
	$("#task3").click(function(){
		$("#task3").attr("src", "4.jpg")
	});
	$("#task4").click(function(){
		$("#task4").html('<img src="1.jpg" width="200px">')
		});
	$("#task5").mouseover(function(){
		$("#task5").css("width","300px")}).mouseout(function(){
			$("#task5").css("width","200px")
			});
	$("#task6").dblclick(function(){
		$("#task6").css("border","dotted 5px pink")
		});
});