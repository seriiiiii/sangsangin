$('.nav li').mouseover(function(){
	$(this).children('.submenu').stop().slideDown();
});
$('.nav li').mouseleave(function(){
	$(this).children('.submenu').stop().slideUp();
});

$('.tit').click(function(){
	$('#pop_body').show();
});
$('.ko, .en').click(function(){
	$('#pop_body').hide();
});

$('.menu').click(function(){
	$('#nav4').show();
});
$('.x').click(function(){
	$('#nav4').hide();
});

$('.a').click(function(){
	$(this).addClass('on');
	$('.b').removeClass('on');
	$('.c').removeClass('on');
	$('.d').removeClass('on');
	$('.ab').show();
	$('.cd').hide();
});
$('.b').click(function(){
	$(this).addClass('on');
	$('.a').removeClass('on');
	$('.c').removeClass('on');
	$('.d').removeClass('on');
	$('.ab').show();
	$('.cd').hide();
});
$('.c').click(function(){
	$(this).addClass('on');
	$('.b').removeClass('on');
	$('.a').removeClass('on');
	$('.d').removeClass('on');
	$('.ab').show();
	$('.cd').hide();
});
$('.d').click(function(){
	$(this).addClass('on');
	$('.a').removeClass('on');
	$('.c').removeClass('on');
	$('.b').removeClass('on');
	$('.ab').show();
	$('.cd').hide();
});



$('.btn').click(function(){
	$(this).addClass('on');
	$('.btn1').removeClass('on');
	$('.btn2').removeClass('on');
	$('.btn3').removeClass('on');
	$('.img').show();
	$('.img2').hide();
	$('.img3').hide();
	$('.img1').hide();
});
$('.btn1').click(function(){
	$(this).addClass('on');
	$('.btn2').removeClass('on');
	$('.btn').removeClass('on');
	$('.btn3').removeClass('on');
	$('.img1').show();
	$('.img2').hide();
	$('.img3').hide();
	$('.img').hide();
});
$('.btn2').click(function(){
	$(this).addClass('on');
	$('.btn1').removeClass('on');
	$('.btn').removeClass('on');
	$('.btn3').removeClass('on');
	$('.img2').show();
	$('.img1').hide();
	$('.img3').hide();
	$('.img').hide();
});
$('.btn3').click(function(){
	$(this).addClass('on');
	$('.btn1').removeClass('on');
	$('.btn2').removeClass('on');
	$('.btn').removeClass('on');
	$('.img3').show();
	$('.img2').hide();
	$('.img1').hide();
	$('.img').hide();
});

$('.btn4').click(function(){
	$(this).addClass('on');
	$('.btn5').removeClass('on');
	$('.img4').show();
	$('.img5').hide();
});
$('.btn5').click(function(){
	$(this).addClass('on');
	$('.btn4').removeClass('on');
	$('.img5').show();
	$('.img4').hide();
});

jQuery(document).ready(function($) {

$(".scroll").click(function(event){            

event.preventDefault();

$('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);

});

});

