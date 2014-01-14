/* jshint undef: false, unused: false */
/* global console */

$(document).on('ready', function(){
	var $containers = $('.triple-item-container');

	$.each($containers, function(i, container){
		var $current = $(container).find('.triple-item.active'),
			$first = $(container).find('.triple-item').first();

		setTimeout(function(){
			setInterval(function() {
				$current.removeClass('active');
				$current = $current.next();
				
				if (!$current.length) $current = $first;
				$current.addClass('active');

				var hasNext = $current.next().length !== 0 ? true : false;

				if(!hasNext) $first.css('left', '312px').find('.content > *').css('left', '312px');
				else $first.removeAttr('style').find('.content > *').removeAttr('style');

			}, 3000);
		}, 150*i);
	});

	$containers.hover(function(){
	})
});