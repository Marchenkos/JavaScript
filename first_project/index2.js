$(".close-modal2").on('click', function(e){
	e.preventDefault();
	e.stopImmediatePropagation;
	
	var $this = $(this),
			modal = $($this).data("modal2");
	
	$(modal).removeClass("open");
	setTimeout( function(){	
		$(modal).parents(".overlay").removeClass("open");
	}, 350);
	
});



<div class='modal2' id='modal12'>
	<div class='content2'>
        <h1 class='title2'>Ваш заказ принят!</h1>
		<p>
				Оформление заказа может занять несколько часов
		</p>
		<a class='btn close-modal2' style="width: 250px" data-modal="#modal12" href="#">Вернуться</a>
	</div>	
</div>