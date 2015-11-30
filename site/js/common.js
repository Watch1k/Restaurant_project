head.ready(function(){
	$('.head-slider .item-slider').each(function(){
		$(this).css({
			'background-image': 'url("'+$(this).children('img').attr('src')+'")'
		})
		.children('img').remove();
	});

	$('.head-slider').slick({
		dots: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 7000
	});

	function headerHeight(){
		$('header').css('height', $(window).innerHeight());
	};
	headerHeight();
	$(window).resize(function(){
		headerHeight();
	});

	$('.next-page').on('click', function(){
		$(window).scrollTo($('section.restaurant'), 800);
	});

// // Clear placeholder
// 	(function() {
// 		$('input,textarea').focus(function(){
// 				$(this).data('placeholder',$(this).attr('placeholder'))
// 				$(this).attr('placeholder','');
// 		});
// 		$('input,textarea').blur(function(){
// 			$(this).attr('placeholder',$(this).data('placeholder'));
// 		});
// 	}());

// // ScrollTo
// 	$(function(){
// 	    $('.main-nav').onePageNav({
// 			filter: ':not(.external)',
// 			scrollThreshold: 0.25,
// 			scrollSpeed: 1200,
// 			easing: 'swing',
// 			scrollOffset: 38
// 		});
// 	});

// // js-inview
// 	$('.js-inview').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
// 		if (isInView) {
// 				if (visiblePartY == 'top') {
// 				// top part of element is visible
// 			} else if (visiblePartY == 'bottom') {
// 				// bottom part of element is visible
// 			} else {
// 				// whole part of element is visible
// 			}
// 		} else {
// 			// element has gone out of viewport
// 		}
// 	});

// // WOW animation
// 	new WOW().init();



// // 60fps scrolling
// 	var body = document.body,
// 	timer;
// 	window.addEventListener('scroll', function() {
// 		clearTimeout(timer);
// 		if(!body.classList.contains('disable-hover')) {
// 			body.classList.add('disable-hover')
// 		}
// 		timer = setTimeout(function(){
// 			body.classList.remove('disable-hover')
// 		}, 250);
// 	}, false);
	
	
});