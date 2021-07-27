// Setting some variables
var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
var windowHeight = jQuery(window).height();	
var windowWidth = jQuery(window).width();
var navHeight = jQuery('header.navbar').height();

//jQuery(document).ready()
jQuery(document).ready(function() {
	"use strict";
	//Banner typer 
	$('[data-typer-targets]').typer();
	
	//Facts Round 
	 if (isMobile == false) {
		$('.col').hover(function(){
		var tgt = $(this).find('.getNum'),
		num = tgt.attr('data-num'),
		cm = tgt.attr('data-bar'); 
		if($.isNumeric(num)){
			$(this).find('span').not(':animated').animate({ width: num },{duration: 500,easing: "easeOutCirc", step: function(step) {
			tgt.text(parseInt(step) + cm); }}); 
			} 
		},function(){$('.grNum').find('span').css({'width':0});});
	}
	//  ANIMATE CONTENT                                                                   
    if (isMobile == false) {
        $('*[data-animated]').addClass('animated');
    }
	function animated_contents() {
		$(".animated:appeared").each(function (i) {
			var $this    = $(this),
				animated = $(this).data('animated');

			setTimeout(function () {
				$this.addClass(animated);
			},180);
			
		});
	}
	animated_contents();
	$(window).scroll(function () {
		animated_contents();
	});

	//set home section and footer height
	jQuery('#home').css('height', windowHeight);
	//jQuery('body').css('margin-bottom', jQuery('#footer').height());
	
	//on service icon hover remove navigation background effect
	jQuery('.service').hover(function(){
		jQuery('.navbar').addClass('removeeffect');
	},function(){
		jQuery('.navbar').removeClass('removeeffect');
	});
	
	//on portfolio thumbnail hover remove navigation background effect
	jQuery('#portfolio-list li').hover(function(){
		jQuery('.navbar').addClass('removeeffect');
	},function(){
		jQuery('.navbar').removeClass('removeeffect');
	});
	
	//pricing table 2 column
	$("#show-pricingtable1").click(function(){
		
		$("#pricingtable1").slideDown(600);
		$('html, body').delay(600).animate({ scrollTop: $("#pricingtable1").offset().top}, 800);
	});	
	$("#close-pricing").click(function(){
		$("#pricingtable1").slideUp(800);
		$('html, body').delay(600).animate({ scrollTop: $("#services").offset().top}, 800);
	});
	//pricing table 3 column
	$("#show-pricingtable2").click(function(){
		
		$("#pricingtable2").slideDown(600);
		$('html, body').delay(600).animate({ scrollTop: $("#pricingtable2").offset().top}, 800);
	});
	$("#close-pricing2").click(function(){
		$("#pricingtable2").slideUp(800);
		$('html, body').delay(600).animate({ scrollTop: $("#services").offset().top}, 800);
	});
	//pricing table 4 column
	$("#show-pricingtable3").click(function(){
		
		$("#pricingtable3").slideDown(600);
		$('html, body').delay(600).animate({ scrollTop: $("#pricingtable3").offset().top}, 800);
	});
	$("#close-pricing3").click(function(){
		$("#pricingtable3").slideUp(800);
		$('html, body').delay(600).animate({ scrollTop: $("#services").offset().top}, 800);
	});
	
	
	/* Loading Spinner
	http://fgnass.github.io/spin.js/
	-------------------------*/	
	// Settings for Page Loading Overlay
	var spinnerHomeOptions = {
	  lines: 11, // The number of lines to draw
	  length: 10, // The length of each line
	  width: 2, // The line thickness
	  radius: 10, // The radius of the inner circle
	  corners: 0, // Corner roundness (0..1)
	  rotate: 0, // The rotation offset
	  direction: 1, // 1: clockwise, -1: counterclockwise
	  color: '#000', // #rgb or #rrggbb or array of colors
	  speed: 1.5, // Rounds per second
	  trail: 60, // Afterglow percentage
	  shadow: false, // Whether to render a shadow
	  hwaccel: false, // Whether to use hardware acceleration
	  className: 'spinnerhome', // The CSS class to assign to the spinner
	  zIndex: 2e9, // The z-index (defaults to 2000000000)
	  top: 'auto', // Top position relative to parent in px
	  left: 'auto' // Left position relative to parent in px
	};
	
	// Settings for Project Loading Overlay
	var spinnerOptions = {
	  lines: 11, // The number of lines to draw
	  length: 20, // The length of each line
	  width: 2, // The line thickness
	  radius: 30, // The radius of the inner circle
	  corners: 0, // Corner roundness (0..1)
	  rotate: 0, // The rotation offset
	  direction: 1, // 1: clockwise, -1: counterclockwise
	  color: '#000', // #rgb or #rrggbb or array of colors
	  speed: 1.5, // Rounds per second
	  trail: 60, // Afterglow percentage
	  shadow: false, // Whether to render a shadow
	  hwaccel: false, // Whether to use hardware acceleration
	  className: 'spinner', // The CSS class to assign to the spinner
	  zIndex: 2e9, // The z-index (defaults to 2000000000)
	  top: 'auto', // Top position relative to parent in px
	  left: 'auto' // Left position relative to parent in px
	};
	
	//var target = document.getElementById('site-title');
	var spinner = new Spinner(spinnerOptions).spin();	
	var spinnerhome = new Spinner(spinnerHomeOptions).spin();	
	// Loading spinner for Homepage
	jQuery('#loadbox .inner').append(spinnerhome.el);
	// Loading Spinner for Projects
	jQuery('.project-content').after(spinner.el);
	
	/*	Navigation
	-------------------------*/	
	var windowOffsetHeight = windowHeight - 1;
	if (!jQuery('header.navbar').hasClass('show')) {
		jQuery(window).scroll(function() {
			if ( jQuery(this).scrollTop() > windowOffsetHeight ) {
				jQuery('header.navbar').addClass('show');
			}
			else {
				jQuery('header.navbar').removeClass('show');
			}
		});
	};
	
	
	/* Portfolio: Isotope Layout Plugin
	-------------------------*/
	var container = jQuery('#portfolio-list');
	// Portfolio: Number of columns
	// 2 columns grid for mobile
	// 3 columns grid for tablet & desktop
	function portfolioColumnNumber() {
			if (windowWidth < 768) {
			var portfolioColumns = 2;
		}
		else if (windowWidth >= 768) {
			var portfolioColumns = 3;
		}
		return portfolioColumns;
	}
	
	// Initialize Isotope & Masonry Layout
	container.imagesLoaded( function() {
		container.isotope({
		  itemSelector: 'li',
		  resizable: false,  // disable normal resizing
		  masonry: { columnWidth: container.width() / portfolioColumnNumber }
		 });
	 });
	
	// Update portfolio layout when resizing the browser window
	jQuery(window).smartresize(function() {
		container.isotope({
	    masonry: { columnWidth: container.width() / portfolioColumnNumber }
	  });
	});
    jQuery(window).smartresize();

	// Initialize Portfolio Filter (on click)
	jQuery('#portfolio-filter a').click(function(e) {		
			e.preventDefault();		
	  var selector = jQuery(this).attr('data-filter');
	  container.isotope({ filter: selector });		
		// Active Filter Class
		jQuery('#portfolio-filter').find('.active').removeClass('active');
		jQuery(this).parent().addClass('active');		
		return false;		
	});
	
	// Portfolio 
	var portfolio = jQuery('#portfolio-list');
	var portfolioItem = portfolio.find('li');
	var projectLength = portfolioItem.length;
	var prevButton = jQuery('#project-container .prev');
	var nextButton = jQuery('#project-container .next');
	
	// Direction Aware Hover Effect
	portfolio.find('li').each(function() { 
		jQuery(this).hoverdir({
			speed : 			200,
			hoverDelay : 	100
		});
	});
	function projectFunctions() {
		jQuery('#project-container [class^="slideshow"]').bxSlider({
			mode:'fade',
			controls:true,
			pager: false,
			prevText:'<i class="fa fa-angle-left"></i>',
		  nextText: '<i class="fa fa-angle-right"></i>'
	});
		
	/* FitVids v1.0 - Fluid Width Video Embeds
	-------------------------*/
	jQuery('.video-full-width').fitVids();
	jQuery('.fluid-width-video-wrapper').css('padding-top','56.25%'); // Always display videos 16:9 (100/16*9=56.25)
	jQuery('#project-container .spinner').fadeOut(1000);
			
	};
	
	// Opening a Project
	portfolioItem.find('a').click(function(e) {
		e.preventDefault();
		// Show Loading Spinner
		jQuery('#project-container .spinner').show(0);
		// Disable browser scrollbar
		jQuery('body').addClass('overflow-hidden');
		var projectLink = jQuery(this).attr('href');
		var projectOpen = portfolio.find(this).attr('href',projectLink).closest('li');
		// Add class "open" to opened project
		projectOpen.addClass('open');
		// Disable prev link, when first project is open
		if (projectOpen.index() == 0) {	prevButton.addClass('disabled'); }
		else { prevButton.attr('href', projectOpen.prev('li').find('.project-link').attr('href')); }
		// Disable next link, when last project is open
		if (projectOpen.index()+1 == projectLength) { nextButton.addClass('disabled'); }
		else { nextButton.attr('href', projectOpen.next('li').find('.project-link').attr('href')); }
		// Show project popup and load project content
		jQuery('#project-container').addClass('show');
		jQuery('.project-content').load(window.location.pathname+' '+projectLink, function() {				
			projectFunctions();
		});
	});
	
	// Button: Previous Project
	jQuery('.prev').click(function() {
		jQuery('#project-container .spinner').show(200);
		var currentProject = portfolio.find('.open');
		var currentIndex = currentProject.index()+1;
		// Enable next button when going to the previous project
		jQuery('.next').removeClass('disabled');
		// Disable prev button when reaching first project
		if (currentIndex <= 2) { jQuery('.prev').addClass('disabled'); }		
		var prevProjectLink = currentProject.prev('li').find('a').attr('href');
		currentProject.removeClass('open').prev('li').addClass('open');
		jQuery('.project-content').load(window.location.pathname+' '+prevProjectLink, function() {			
			projectFunctions();		
		});
	});
	
	// Button: Next Project
	jQuery('.next').click(function() {
		jQuery('#project-container .spinner').show(200);
		var currentProject = portfolio.find('.open');
		var currentIndex = currentProject.index()+1;
		// Enable prev button when going to the next project
		jQuery('.prev').removeClass('disabled'); 
		// Disable next button when reaching the last project
		if ( currentIndex+1 >= projectLength ) { jQuery('.next').addClass('disabled'); }		
		var nextProjectLink = currentProject.next('li').find('a').attr('href');		
		currentProject.removeClass('open').next('li').addClass('open');
		jQuery('.project-content').load(window.location.pathname+' '+nextProjectLink, function() {		
			projectFunctions();
		});
	});
	
	// Close button
	jQuery('.close').click(function() {
		// Enable browser scrollbar
		jQuery('body').removeClass('overflow-hidden');
		jQuery('#project-container').removeClass('show');
		portfolio.find('.open').removeClass('open');
		jQuery('.project-content').html('');
	});
	
	// Close using "ESC" key
	jQuery(document).keyup(function(e) {
		if (e.keyCode == 27) {
			// Enable browser scrollbar
				jQuery('body').removeClass('overflow-hidden');
		  jQuery('#project-container').removeClass('show');
		  portfolio.find('.open').removeClass('open');
		  jQuery('.project-content').html('');
		}
	});
		
	
	/* Full-Width
	-------------------------*/
	var fullWidthSpace = ( windowWidth - jQuery('.full-width').width() ) / 2;
	jQuery('.full-width').css({'width': windowWidth+'px', 'margin-left' : -fullWidthSpace+'px'});
	
	/* Bootstrap Plugins
	-------------------------*/
	// Navigation - Collapse (for mobile)
	jQuery('.navbar .collapse').collapse();
	jQuery(".navbar-nav li a").click(function() {
		jQuery(".collapse").toggleClass("in");
	});
	
	// Tooltip
	jQuery('[data-toggle="tooltip"]').tooltip();
	
	// Google Maps
	// Creating a LatLng object containing the coordinate for the center of the map
	var posLatitude = $('#map').data('position-latitude'),
		posLongitude = $('#map').data('position-longitude'),
		latlng = new google.maps.LatLng(posLatitude,posLongitude);
	var mapstyles = [ { "stylers": [ { "invert_lightness": true }, { "weight": 0.1 }, { "hue": "#73E0B8" }, { "visibility": "on" }, { "saturation": -70 }, { "lightness": 20 }, { "gamma": 1.2 } ] } ];

	// Creating an object literal containing the properties we want to pass to the map
	var options = {
		zoom: 11, // This number can be set to define the initial zoom level of the map
		center: latlng,
		mapTypeControlOptions: {  
        	mapTypeIds: ['Styled']  
		},
		mapTypeId: 'Styled',
		mapTypeControl: false,
	  	scaleControl: false,
	  	streetViewControl: false,
		panControl: true,
	  	disableDefaultUI: true,
	};
	var map = new google.maps.Map(document.getElementById('map'), options),
		styledMapType = new google.maps.StyledMapType(mapstyles, { name: 'Styled' }),
		markerImage = $('#map').data('marker-img'),
		markerWidth = $('#map').data('marker-width'),
		markerHeight = $('#map').data('marker-height');
	map.mapTypes.set('Styled', styledMapType); 
	// Define Marker properties
	var image = new google.maps.MarkerImage(markerImage,
		// This marker is 64 pixels wide by 58 pixels tall.
		new google.maps.Size(markerWidth, markerHeight),
		new google.maps.Point(0,0),
		new google.maps.Point(18, 18)
	);
	// Add Marker
	var marker1 = new google.maps.Marker({
		position: latlng,
		map: map,
		icon: image
	});
	
	//Contact form
	contentEditable();contactForm();
	
	$('#team-members').flexslider({
      animation: 'slide',
      controlNav: false,
      directionNav: false,
      keyboard: false,
      slideshow: false,
      start: function (slider) {
        $('#team-members .flex-next').click(function() {
          $('.team-nav li').removeClass('active');
          $('#team-members').flexslider('next');
          $('.team-nav li').eq(slider.animatingTo).addClass('active');
          return false;
        });
        $('#team-members .flex-prev').click(function() {
          $('.team-nav li').removeClass('active');
          $('#team-members').flexslider('prev');
          $('.team-nav li').eq(slider.animatingTo).addClass('active');
          return false;
        });
        $('.team-nav li').eq(slider.currentSlide).addClass('active');
      },
      touch: false
    });
	$('.member-node').click(function() {
      var self = $(this);
      var index = self.parent().index();
      $('.member-node').parent().removeClass('active');
      $('#team-members').flexslider(index);
      self.parent().addClass('active');
      return false;
    });
}); 
// END jQuery(document).ready()
//jQuery(document).ready()
jQuery(document).ready(function() {
	//Timeline
	$("#timeline").timelinr({
		orientation: 	'vertical',
		issuesSpeed: 	300,
		datesSpeed: 	100,
		arrowKeys: 		'false',
		startAt:		3
	})
	
	/* Slideshow: Clients
	-------------------------*/
	clientsContainer = jQuery('.slideshow-clients').closest('.container').width();
	// Number of clients to show at once (according to device width)
	if (windowWidth < 768) {
		var slidesAtOnce = 2; // Mobile devices
	}
	else if (windowWidth >= 768 && windowWidth < 1200) {
		var slidesAtOnce = 3; // Tablet and desktos with a screen smaller than 1200px
	}
	else if (windowWidth >= 1200) {
		var slidesAtOnce = 5; // Desktops with a width of 1200px and above
	}
	slideWidthCustom = Math.round(clientsContainer / slidesAtOnce);
	var clientSlider = jQuery('.slideshow-clients').bxSlider({
		infiniteLoop: false,
		hideControlOnEnd: true,
	  minSlides: slidesAtOnce,
	  maxSlides: slidesAtOnce,
	  slideWidth:slideWidthCustom,
	  slideMargin:10,
	  prevText: '<i class="fa fa-angle-left"></i>',
	  nextText: '<i class="fa fa-angle-right"></i>',
	  pager: false,
	  oneToOneTouch: false
	});

});

jQuery(window).load(function() {

	/* Activate animate.css effects once page is loaded
	http://css-tricks.com/transitions-only-after-page-load/
  -------------------------*/
  jQuery("body").removeClass("loading");
  
  // Hide Site Load Overlay
	jQuery('#loadbox .spinnerhome').fadeOut(400);
	jQuery('#loadbox .wrapper').delay(600).addClass('animated bounceOut');
	jQuery('#loadbox').delay(800).fadeOut(400);
	
	/* Slideshow: BxSlider
	List with all slideshow options can be found here: http://bxslider.com/options
	-------------------------*/

	function overlayHeight() {
		jQuery('.parallax').each(function() {
			var parallaxHeight = jQuery(this).height();
			jQuery(this).find('.background-overlay').css('height', parallaxHeight);
		});
	};
	jQuery('.home-banner').each(function() {
			parallax();
	});

	// Slideshow "horizontal"
	jQuery('.slideshow').bxSlider({
		mode: 'horizontal',
		adaptiveHeight: true,
		controls: false,
		oneToOneTouch: false,
		onSlideAfter: function() {
			overlayHeight();
		}
	});

	// Slideshow "vertical"
	jQuery('.slideshow-vertical').bxSlider({
		mode: 'fade',
		adaptiveHeight: true,
		controls: false,
		oneToOneTouch: false,
		onSlideAfter: function() {
			overlayHeight();
		}
	});
	
	// Slideshow "fade"
	jQuery('.slideshow-fade').bxSlider({ 
		mode: 		'fade',
		adaptiveHeight: true,
		controls: false,
		oneToOneTouch: false,
		onSlideAfter: function() {
			overlayHeight();
		}
	});

	overlayHeight();
		
	jQuery(window).smartresize(function() { overlayHeight(); });	
	
	
	// Smooth scroll for menu links
	jQuery('header.navbar a[href^="#"], #home a[href^="#"], .modal a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    jQuery('html,body').animate({scrollTop:jQuery(this.hash).offset().top}, 1200);
	});
	
	// Smooth scroll for menu links
	jQuery('.go a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    jQuery('html,body').animate({scrollTop:jQuery(this.hash).offset().top}, 800);
	});
	
	/*	Bootstrap Specific
	-------------------------*/	
	
	// Accordion & Toggle
	jQuery('.accordion').each(function() {
		var accordionId = jQuery(this).attr('id');
		jQuery(this).find('.accordion-toggle').attr('data-parent', "#"+accordionId);
	});
	
	jQuery('.accordion-toggle').click(function() {
		jQuery(this).closest('.accordion').find('i').removeClass('fa-minus-square').addClass('fa-plus-square');
		jQuery(this).find('i').toggleClass('fa-plus-square fa-minus-square');
	});
	
});

/*parallax scrolling effects to any scrolling element*/
function parallax() {
	// Check for mobile
	if( !isMobile ) {
		jQuery(window).stellar({
			horizontalScrolling: false
		});
	}
}

function contentEditable(){
	function e(t){
		var n=jQuery.Event("keypress",{which:t});
		t.keyCode!==9?$(this).text("").addClass("js-populated").removeClass("js-error").trigger(n):$(this).one("keypress",e)
	}
	$("[contenteditable=true]").each(function(){
		var t=$(this).data("placeholder");
		$(this).one("keypress",e);
		$(this).keyup(function(){
			if($(this).text().length===0){
				$(this).text(t).removeClass("js-populated");
				$(this).one("keypress",e)
			}
		})
	});
	$("[contenteditable=true]").focus(function(){
		$(this).removeClass("js-error")
	})
}
function contactForm(){
	
	function e(e){
		var t=/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		return t.test(e)
	}
	$(".js-contact-form").submit(function(){
		var i=$(".js-contact-email"),
			s=$(".js-contact-name"),
			o=$(".js-contact-subject"),
			u=$(".js-contact-brief"),
			a=1;
			
			i.removeClass("js-error");s.removeClass("js-error");o.removeClass("js-error");u.removeClass("js-error");
			if(i.text()===i.data("placeholder")){i.addClass("js-error");a=0}else if(!e(i.text())){i.addClass("js-error");a=0}if(s.text()===s.data("placeholder")){s.addClass("js-error");a=0}if(o.text()===o.data("placeholder")){o.addClass("js-error");a=0}if(u.text()===u.data("placeholder")){u.addClass("js-error");a=0}if(!a)return!1
			
			//send the ajax request
			$.post('email.php',{name:$(".js-contact-name").text(),
							  email:$(".js-contact-email").text().replace(/(\r\n|\n|\r)/gm,"").replace(/\s+/g," "),
							  subject:$(".js-contact-subject").text(),
							  message:$(".js-contact-brief").text().replace(/(\r\n|\n|\r)/gm,"").replace(/\s+/g," ")},
		
			//return the data
			function(data){
			  $(".js-mail-message").addClass("js-hidden");
				$(".js-contact-submit").addClass("js-hidden");
				$(".js-mail-success").removeClass("js-hidden")
			});
			//stay on the page
			return false;
	})
}

