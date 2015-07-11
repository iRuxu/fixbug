$(function(){
	var
	$step = $("#step li"),
	$next = $("#next"),
	$box = $('.step'),
	step = 0

	$step.on('click',function(){
		step = $(this).index()
		tgStep()
	})

	$next.on('click',function(){
		if(step==7){
			return;
		}else{
			step += 1
		}
		tgStep()
	})

	function tgStep(){
		$box.hide().eq(step).show()
		$step.removeClass('on')
		$step.eq(step).addClass('on')
	}

});