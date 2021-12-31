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
