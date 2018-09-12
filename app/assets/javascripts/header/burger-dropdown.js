function burgerAction(){
	$('.burger-hidable').map((index, element) => {
		var style = $(element).css('display') == 'none' ? 'block' : 'none'
		$(element).css('display', style)
	})
}
