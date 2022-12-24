(function ($) {

    'use strict';

    /*------------------------------------
        preloader activation
    --------------------------------------*/

    let win =  $(window);
    win.on('load', function () {
        $('#preloader').delay(350).fadeOut('slow');
        $('body').delay(350).css({
            'overflow': 'visible'
        });
    })

	/*-------------------------------------------
        mobile menu
    --------------------------------------------- */
	$('#mobile-menu').meanmenu({
		meanMenuContainer: '.mobile-menu',
		meanScreenWidth: "1199"
	});

	$('.side-toggle').on('click', function () {
		$('.side-info').addClass('info-open');
		$('.offcanvas-overlay').addClass('overlay-open');
	})

	$('.side-info-close,.offcanvas-overlay').on('click', function () {
		$('.side-info').removeClass('info-open');
		$('.offcanvas-overlay').removeClass('overlay-open');
	})


    /*-------------------------------------------
        Sticky Header
    --------------------------------------------- */

    let sticky_id = $(".transparent-header");
    win.on('scroll', function () {
        let scroll = win.scrollTop();
        if (scroll < 245) {
            sticky_id.removeClass("sticky-header");
        } else {
            sticky_id.addClass("sticky-header");
        }
    });

	/*------------------------------------
        wow active
    --------------------------------------*/
	var wow = new WOW(
		{
			mobile: false,       // trigger animations on mobile devices (default is true)
		}
	);
	wow.init();


    /*------------------------------------
        Data-Background
    --------------------------------------*/
    $("[data-background]").each(function () {
        $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
    });

    $("[data-bg-color]").each(function () {
        $(this).css("background", $(this).attr("data-bg-color"))
    });

    /*------------------------------------
        Scroll To Top Js
    --------------------------------------*/

    function smoothSctollTop() {
        $('.smooth-scroll a').on('click', function (event) {
            var target = $(this.getAttribute('href'));
            if (target.length) {
                event.preventDefault();
                $('html, body').stop().animate({
                    scrollTop: target.offset().top - 0
                }, 1500);
            }
        });
    }
    smoothSctollTop();

    // Show or hide the sticky footer button
    win.on('scroll', function(event) {
        if($(this).scrollTop() > 600){
            $('#scroll').fadeIn(200)
        } else{
            $('#scroll').fadeOut(200)
        }
    });

    //Animate the scroll to yop
    $('#scroll').on('click', function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
    });

    /*------------------------------------
        isotop activation
    --------------------------------------*/

    $('.project-2').imagesLoaded( function() {
        // init Isotope
        var $grid = $('.aportfolio-active').isotope({
          itemSelector: '.grid-item',
          percentPosition: true,
          masonry: {
            // use outer width of grid-sizer for columnWidth
            columnWidth: 1,
          }
        });
        
        // filter items on button click
        $('.aportfolio-menu').on( 'click', 'button', function() {
          var filterValue = $(this).attr('data-filter');
          $grid.isotope({ filter: filterValue });
        });
    
    });
    
    //for menu active class
    $('.aportfolio-menu button').on('click', function(event) {
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        event.preventDefault();
    });

    /*------------------------------------
        venobox activation
    --------------------------------------*/

    $('.venobox').venobox(); 

    /*------------------------------------
        swiper slider activation
    --------------------------------------*/

    if (jQuery(".slider-active").length > 0) {
		let sliderActive1 = '.slider-active';
		let sliderInit1 = new Swiper(sliderActive1, {
			// Optional parameters
			slidesPerView: 1,
			slidesPerColumn: 1,
			paginationClickable: true,
			loop: false,
			effect: 'fade',

			autoplay: {
				delay: 5000,
			},

			// If we need pagination
			pagination: {
				el: '.slider-paginations',
				// dynamicBullets: true,
				clickable: true,
			},

			// Navigation arrows
			navigation: {
				nextEl: '.slider-button-next',
				prevEl: '.slider-button-prev',
			},

			a11y: false
		});

		function animated_swiper(selector, init) {
			let animated = function animated() {
				$(selector + ' [data-animation]').each(function () {
					let anim = $(this).data('animation');
					let delay = $(this).data('delay');
					let duration = $(this).data('duration');

					$(this).removeClass('anim' + anim)
						.addClass(anim + ' animated')
						.css({
							webkitAnimationDelay: delay,
							animationDelay: delay,
							webkitAnimationDuration: duration,
							animationDuration: duration
						})
						.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
							$(this).removeClass(anim + ' animated');
						});
				});
			};
			animated();
			// Make animated when slide change
			init.on('slideChange', function () {
				$(sliderActive1 + ' [data-animation]').removeClass('animated');
			});
			init.on('slideChange', animated);
		}

		animated_swiper(sliderActive1, sliderInit1);
	}
    
    
    /*------------------------------------
        brand activation
    --------------------------------------*/

	if (jQuery(".brand-active").length > 0) {
	let brand = new Swiper('.brand-active', {
		slidesPerView: 2,
		spaceBetween: 30,
		// direction: 'vertical',
		loop: true,
        autoplay: {
				delay: 5000,
			},
	  
		// If we need pagination
		pagination: {
		  el: '.swiper-pagination',
		  clickable: true,
		},
	  
		// Navigation arrows
		navigation: {
		  nextEl: '.swiper-button-next',
		  prevEl: '.swiper-button-prev',
		},
	  
		// And if we need scrollbar
		scrollbar: {
		  el: '.swiper-scrollbar',
		},
		breakpoints: {
			550: {
			  slidesPerView: 3,
			},
			768: {
			  slidesPerView: 4,
			},
			1200: {
			  slidesPerView: 5,
			},
		  }

	  });
	}
    
	/*------------------------------------
        testimonial activation
    --------------------------------------*/
    
	if (jQuery(".testimonial-active").length > 0) {
		let swipertestimonial = new Swiper('.testimonial-active', {
			slidesPerView: 1,
			spaceBetween: 30,
			// direction: 'vertical',
			loop: true,
			infinite: false,
			centeredSlides: true,
            autoplay: {
				delay: 5000,
			},
		
			// If we need pagination
			pagination: {
			el: '.swiper-pagination',
			clickable: true,
			},
		
			// Navigation arrows
			navigation: {
			nextEl: '.test-button-next',
			prevEl: '.test-button-prev',
			},
		
			// And if we need scrollbar
			scrollbar: {
			el: '.swiper-scrollbar',
			dynamicBullets: true,
			},
			breakpoints: {
				480: {
				slidesPerView: 1,
				},
				768: {
				slidesPerView: 2,
				},
				1200: {
				slidesPerView: 3,
				},
				1400: {
				slidesPerView: 3,
				},
			}

		});
	}
    

	/*------------------------------------
        testimonial activation
    --------------------------------------*/
    
	if (jQuery(".project-active").length > 0) {
		let swiperproject = new Swiper('.project-active', {
			slidesPerView: 1,
			spaceBetween: 30,
			// direction: 'vertical',
			loop: true,
			infinite: false,
			centeredSlides: true,
            autoplay: {
				delay: 5000000,
			},
		
			// If we need pagination
			pagination: {
			el: '.swiper-pagination',
			clickable: true,
			},
		
			// Navigation arrows
			navigation: {
			nextEl: '.project-button-next',
			prevEl: '.project-button-prev',
			},
		
			// And if we need scrollbar
			scrollbar: {
			el: '.swiper-scrollbar',
			dynamicBullets: true,
			},
			breakpoints: {
				480: {
				slidesPerView: 1,
				},
				768: {
				slidesPerView: 2,
				},
				1200: {
				slidesPerView: 3,
				},
				1400: {
				slidesPerView: 4,
				},
			}

		});
	}


    /*------------------------------------
        blog activation
    --------------------------------------*/
    
	if (jQuery(".blog-active").length > 0) {
		let swiperblog = new Swiper('.blog-active', {
			slidesPerView: 1,
			spaceBetween: 30,
			// direction: 'vertical',
			loop: false,
			infinite: false,
            autoplay: {
				delay: 5000,
			},
		
			// If we need pagination
			pagination: {
			el: '.swiper-pagination',
			clickable: true,
			},
		
			// Navigation arrows
			navigation: {
			nextEl: '.blog-button-next',
			prevEl: '.blog-button-prev',
			},
		
			// And if we need scrollbar
			scrollbar: {
			el: '.swiper-scrollbar',
			dynamicBullets: true,
			},
			breakpoints: {
				480: {
				slidesPerView: 1,
				},
				576: {
					slidesPerView: 2,
				},
				768: {
				slidesPerView: 2,
				},
				1200: {
				slidesPerView: 2,
				},
				1400: {
				slidesPerView: 3,
				},
			}

		});
	}

	/*------------------------------------
        team activation
    --------------------------------------*/
    
	if (jQuery(".team-active").length > 0) {
		let swiperteam = new Swiper('.team-active', {
			slidesPerView: 1,
			spaceBetween: 30,
			// direction: 'vertical',
			loop: false,
			infinite: false,
            autoplay: {
				delay: 5000,
			},
		
			// If we need pagination
			pagination: {
			el: '.swiper-pagination',
			clickable: true,
			},
		
			// Navigation arrows
			navigation: {
			nextEl: '.blog-button-next',
			prevEl: '.blog-button-prev',
			},
		
			// And if we need scrollbar
			scrollbar: {
			el: '.swiper-scrollbar',
			dynamicBullets: true,
			},
			breakpoints: {
				480: {
				slidesPerView: 1,
				},
				576: {
				slidesPerView: 2,
				},
				768: {
				slidesPerView: 2,
				},
				1200: {
				slidesPerView: 3,
				},
				1400: {
				slidesPerView: 4,
				},
			}

		});
	}

	/*------------------------------------
        team activation 02
    --------------------------------------*/
    
	if (jQuery(".team-active2").length > 0) {
		let swiperteam2 = new Swiper('.team-active2', {
			slidesPerView: 1,
			spaceBetween: 30,
			// direction: 'vertical',
			loop: false,
			infinite: false,
            autoplay: {
				delay: 5000,
			},
		
			// If we need pagination
			pagination: {
			el: '.swiper-pagination',
			clickable: true,
			},
		
			// Navigation arrows
			navigation: {
			nextEl: '.blog-button-next',
			prevEl: '.blog-button-prev',
			},
		
			// And if we need scrollbar
			scrollbar: {
			el: '.swiper-scrollbar',
			dynamicBullets: true,
			},
			breakpoints: {
				480: {
				slidesPerView: 1,
				},
				576: {
				slidesPerView: 2,
				},
				768: {
				slidesPerView: 2,
				},
				1200: {
				slidesPerView: 3,
				},
				1400: {
				slidesPerView: 3,
				},
			}

		});
	}
	
	/*------------------------------------
        serach activation
    --------------------------------------*/

	var $searchWrap = $('.search-wrap');
	var $navSearch = $('.nav-search');
	var $searchClose = $('#search-close');

	$('.search-trigger').on('click', function (e) {
		e.preventDefault();
		$searchWrap.animate({ opacity: 'toggle' }, 500);
		$navSearch.add($searchClose).addClass("open");
	});

	$('.search-close').on('click', function (e) {
		e.preventDefault();
		$searchWrap.animate({ opacity: 'toggle' }, 500);
		$navSearch.add($searchClose).removeClass("open");
	});

	function closeSearch() {
		$searchWrap.fadeOut(200);
		$navSearch.add($searchClose).removeClass("open");
	}

	$(document.body).on('click', function (e) {
		closeSearch();
	});

	$(".search-trigger, .main-search-input").on('click', function (e) {
		e.stopPropagation();
	});


	/*------------------------------------
        AOS activation
    --------------------------------------*/
	AOS.init();

	

})(jQuery);

