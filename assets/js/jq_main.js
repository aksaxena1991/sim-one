/*
	
*/
(function($) {
	$(".up_arrow").not('.number').click(function(){
		var inputElem = $(this).parents('label').find("input");
		var upValue = Math.abs(inputElem.attr("value"));
		upValue += 1;
		inputElem.slider('setValue',upValue);
	});
	$(".down_arrow").not('.number').click(function(){
		var inputElem = $(this).parents('label').find("input");
		var upValue = Math.abs(inputElem.attr("value"));
		upValue -= 1;
		inputElem.slider('setValue',upValue);
	});

	$(".up_arrow.number").click(function(){
		var inputElem = $(this).parents('label').find("input");
		inputElem.val( function(i, oldval) {
		    return ++oldval;
		});
		// inputElem.attr("value",upValue);
	});
	$(".down_arrow.number").click(function(){
		var inputElem = $(this).parents('label').find("input");
		inputElem.val( function(i, oldval) {
		    return --oldval;
		});
	});

    $('input[type=number]').on('wheel', function(e) {
        e.preventDefault();
    });

    $(".closeParent").on("click touch", function(){
    	$(this).parent().fadeOut()
    });
})(jQuery);


$(".sliderH").slider({
	// tooltip:'hide'
	// range: "false"
});
$(".sliderV").slider({
	natural_arrow_keys: true,
	reversed : true,
	scale: 'linear'
	// tooltip:'hide'
});
// var mySlider = new Slider("input.sliderH", {});
// var slider = new Slider("input.sliderV", { reversed : true });