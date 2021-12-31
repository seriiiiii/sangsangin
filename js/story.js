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
 
 $(function() {
  var count0 = count1 = count2 = 0;

  timeCounter();

  function timeCounter() {

    id0 = setInterval(count0Fn, 0.738853);

    function count0Fn() {
      count0++;
      if (count0 > 2600) {
        clearInterval(id0);
      } else {
        $(".number").eq(0).text(count0);
      }

    }

    id1 = setInterval(count1Fn, 0.13171226);

    function count1Fn() {
      count1++;
      if (count1 > 2000) {
        clearInterval(id1);
      } else {
        $(".number").eq(1).text(count1);
      }
    }

    id2 = setInterval(count2Fn, 0.57142857);

    function count2Fn() {
      count2++;
      if (count2 > 700) {
        clearInterval(id2);
      } else {
        $(".number").eq(2).text(count2);
      }
    }
  }
});



start();

function start(){
	var num=0;
	$('.imgs li').eq(num).fadeIn('200');

	setInterval(function(){
		$('.imgs li').eq(num).fadeOut('200');

		if(num==1){
			num=0;
			$('.imgs li').eq(num).fadeIn('200');
		}else{
			num++;
			$('.imgs li').eq(num).fadeIn('200');
		};
	},4000);
};