$('.ict-tabs .ict-p').click(function(){
	var href = $(this).attr('href');
	var id = href.substring(1);
	var target = $('#' + id);
	$('.ict-tabs .ict-p').removeClass('active');
	$(this).addClass('active');
	$('.tab_ict').removeClass('active');
	target.addClass('active');
});