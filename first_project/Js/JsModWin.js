$(".modalWin").each( function(){
	$(this).wrap('<div class="overlay2"></div>')
});

$(".open2-modalWin").on('click', function(e){
	e.preventDefault();
	e.stopImmediatePropagation;
	
	var $this = $(this),
			modal = $($this).data("modalWin");
	
	$(modalWin).parents(".overlay2").addClass("open2");
	setTimeout( function(){
		$(modalWin).addClass("open2");
	}, 350);
	
	$(document).on('click', function(e){
		var target = $(e.target);
		
		if ($(target).hasClass("overlay2")){
			$(target).find(".modalWin").each( function(){
				$(this).removeClass("open2");
			});
			setTimeout( function(){
				$(target).removeClass("open2");
			}, 350);
		}
		
	});
	
});

$(".close2-modalWin").on('click', function(e){
	e.preventDefault();
	e.stopImmediatePropagation;
	
	var $this = $(this),
			modalWin = $($this).data("modalWin");
	
	$(modalWin).removeClass("open2");
	setTimeout( function(){	
		$(modalWin).parents(".overlay2").removeClass("open2");
	}, 350);
	
});



