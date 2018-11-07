
(function($) {
	"use strict"

	///////////////////////////
	// Preloader
	$(window).on('load', function() {
		$(".home-wrapper").css('margin-top', '-' + $(".home-wrapper").height() / 2 + 'px');
		$("#preloader").delay(600).fadeOut();
	});

	///////////////////////////
	// Scrollspy
	$('body').scrollspy({
		target: '#nav',
		offset: $(window).height() / 2
	});

	$("a[href='#startnow']").on('click', function(e) {
		e.preventDefault();
	});

	///////////////////////////
	// Smooth scroll
	$("a[href^='#']").not("a[href='#startnow']").on('click', function(e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: $(this.hash).offset().top
		}, 600);
	});

	$('#back-to-top').on('click', function(){
		$('body,html').animate({
			scrollTop: 0
		}, 600);
	});

	///////////////////////////
	// Btn nav collapse
	$('#nav .nav-collapse').on('click', function() {
		$('#nav').toggleClass('open');
	});

	///////////////////////////
	// Mobile dropdown
	$('.has-dropdown a').on('click', function() {
		$(this).parent().toggleClass('open-drop');
	});

	///////////////////////////
	// On Scroll
	$(window).on('scroll', function() {
		var wScroll = $(this).scrollTop();

		// Fixed nav
		wScroll > 1 && (window.screen.width < window.outerWidth ? window.screen.width : window.outerWidth) > 767 ? $('#nav').addClass('fixed-nav') : $('#nav').removeClass('fixed-nav');

		// Back To Top Appear
		wScroll > 700 ? $('#back-to-top').fadeIn() : $('#back-to-top').fadeOut();
	});

	///////////////////////////
	// magnificPopup
	$('.work').magnificPopup({
		delegate: '.lightbox',
		type: 'image'
	});

	///////////////////////////
	// Owl Carousel
	$('#about-slider').owlCarousel({
		items:1,
		loop:true,
		margin:15,
		nav: true,
		navText : ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
		dots : true,
		autoplay : true,
		animateOut: 'fadeOut'
	});

	$('#testimonial-slider').owlCarousel({
		loop:true,
		margin:15,
		dots : true,
		nav: false,
		autoplay : true,
		responsive:{
			0: {
				items:1
			},
			992:{
				items:2
			}
		}
	});

  

	$('#submit').on('click', function(e) {
		let cancel = false;

		$(e.target.parentElement).children().each(function() {
			if(this.getAttribute('required') !== null && this.value == '') {
				$(e.target).attr('disabled', true);
				$(e.target).before('<div class="alert alert-danger" role="alert">Please fill out all fields!</div>');
				setTimeout(function() { $('.alert-danger').slideUp(500, function() { $('.alert').remove(); }); $(e.target).attr('disabled', null); }, 1500);
				cancel = true;
				return false;
			}
		});
		
		if(!cancel) { 
    		$.post("contact.php", $(e.target.parentElement).serialize()).done(function() {
				$(e.target.parentElement).trigger("reset");
				$(e.target).attr('disabled', true);
				$(e.target).before('<div class="alert alert-success" role="alert">Success! We\'ll get back within 1 working day! </div>');
				setTimeout(function() { $('.alert-success').slideUp(500, function() { $('.alert').remove(); }); $(e.target).attr('disabled', null); }, 1500);
			});
    	}
		return false;
	});

	
	

})(jQuery);
