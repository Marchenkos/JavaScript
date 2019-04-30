$(document).ready(function(){
	$("#t1").draggable();
	$("#right").click(function(){
		$("#t2").animate({"left": "+=200px"},"slow");});
	$("#left").click(function(){
		$("#t2").animate({"left": "-=200px"},"slow");});	
});
