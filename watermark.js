$(document).ready(function() {
 
	var watermark1 = 'Ваше имя';
	var watermark2 = 'Ваш номер телефона';
 
	//init, set watermark text and class
	$('.nameS').val(watermark1).addClass('watermark');
 
	//if blur and no value inside, set watermark text and class again.
 	$('.nameS').blur(function(){
  		if ($(this).val().length == 0){
    		$(this).val(watermark1).addClass('watermark');
		}
 	});
 
	//if focus and text is watermrk, set it to empty and remove the watermark class
	$('.nameS').focus(function(){
  		if ($(this).val() == watermark1){
    		$(this).val('').removeClass('watermark');
		}
 	});
	
	//init, set watermark text and class
	$('.cellphoneS').val(watermark2).addClass('watermark');
 
	//if blur and no value inside, set watermark text and class again.
 	$('.cellphoneS').blur(function(){
  		if ($(this).val().length == 0){
    		$(this).val(watermark2).addClass('watermark');
		}
 	});
 
	//if focus and text is watermrk, set it to empty and remove the watermark class
	$('.cellphoneS').focus(function(){
  		if ($(this).val() == watermark2){
    		$(this).val('').removeClass('watermark');
		}
 	});
});