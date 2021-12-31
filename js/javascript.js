$(function(){
		$('#select_1').fullpage({
			anchors: ['firstPage', 'secondPage', '3rdPage'],
			navigation: true,
			navigationPosition: 'right',
			navigationTooltips: ['First page', 'Second page', 'Third and last page'],
			responsiveWidth: 900,
			afterResponsive: function(isResponsive){
					
			}

		});
	});