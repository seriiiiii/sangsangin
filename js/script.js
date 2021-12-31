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
	$('#nav').show();
});
$('.x').click(function(){
	$('#nav').hide();
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

$(document).ready(function() {
    $(window).scroll( function(){
        $('#select_2').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1','margin-top':'-200px'},1000);
            }
            
        }); 
    });
});
$(document).ready(function() {
    $(window).scroll( function(){
        $('#select_3').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1','margin-top':'-200px'},1000);
            }
            
        }); 
    });
});
$(document).ready(function() {
    $(window).scroll( function(){
        $('#select_4').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1','margin-top':'-200px'},1000);
            }
            
        }); 
    });
});
$(document).ready(function() {
    $(window).scroll( function(){
        $('#story').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1','margin-top':'-200px'},1000);
            }
            
        }); 
    });
});
$(document).ready(function() {
    $(window).scroll( function(){
        $('#select_5').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1','margin-top':'-200px'},1000);
            }
            
        }); 
    });
});