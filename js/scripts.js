$(document).ready(function(){

// hasAttr
///////////////////////////////////////

	$.fn.hasAttr = function(name) {
   		return this.attr(name) !== undefined;
	};

// END hasAttr
///////////////////////////////////////


// SWIPER
///////////////////////////////////////

	$('.swiper-container').each(function(){
		thisSwiper = $(this);


		if(thisSwiper.hasClass('swiper-container-main')){

		    
			 var mySwiper = thisSwiper.swiper({
			    pagination: '.swiper-pagination',
				loop:true,
				grabCursor: true,
				slidesPerView: 1,
				spaceBetween: 24, 
				paginationClickable: true
			});
			$('.swiper-button-prev').on('click', function(e){
				e.preventDefault();
				var swiper = $(this).siblings('.swiper-container').data('swiper');
				swiper.swipePrev();
			});
			$('.swiper-button-next').on('click', function(e){
				e.preventDefault();
				var swiper = $(this).siblings('.swiper-container').data('swiper');
				swiper.swipeNext();
			});

		}
	

	});
	
// SWIPER
///////////////////////////////////////



// HEADER BUTTON MENU
///////////////////////////////////////

	function resiseFunBody(){

		$(window).resize(function(){

			if($('[data-body-content="' + dataBodyAttr + '"]').hasClass('open-menu')){

				var bodyWidth = $('body').outerWidth();
				var widthButton = thisButton.outerWidth();
				var paddingLeftBody = bodyWidth - widthButton + 'px';
				bodyHeight = $('body').outerHeight();


				$('body > .wrapper').width(bodyWidth);

				$('.open-menu').height(bodyHeight);

				


				if(thisButton.hasAttr('data-body-right')){

					paddingDirection = '0 ' + paddingLeftBody + ' 0 0';

					$('body').stop().css({
						'padding': paddingDirection
					});

					console.log(paddingDirection);


				}else{

					paddingDirection = '0px 0px 0px ' + paddingLeftBody;

					$('body').stop().css({
						'padding': paddingDirection
					});

					console.log(paddingDirection);


				}

			}

		});

	}



	function bodyMovement(){

		if($('[data-body-content="' + dataBodyAttr + '"]').hasClass('open-menu')){

			$('body').stop().animate({

				'padding': 0

			}, function(){

				$('body').removeClass('overflow-hidden').removeClass('body-right');;
				$('body > .wrapper').width('auto');
				$('[data-body-content="' + dataBodyAttr + '"]').removeClass('open-menu');

			});

			if ($('[data-body-content="btn-2"]').hasClass('open-menu')){
				$('.nav-btn').removeClass('hide-btn');
			}

		}else{
			

			$('body').addClass('overflow-hidden');
			$('body > .wrapper').width(bodyWidth);
			$('[data-body-content="' + dataBodyAttr + '"]').addClass('open-menu');
			$('.open-menu').height(bodyHeight);
			


			$('body').stop().animate({
				'padding': paddingDirection
			});

			if ($('[data-body-content="btn-2"]').hasClass('open-menu')){
				$('.nav-btn').addClass('hide-btn');
			}



			resiseFunBody();

		}

	}



	$('[data-body-btn]').click(function(){

		dataBodyAttr = $(this).attr('data-body-btn');
		thisButton = $(this);
		bodyWidth = $('body').outerWidth();
		bodyHeight = $('body').outerHeight();
		widthButton = thisButton.outerWidth();
		paddingLeftBody = bodyWidth - widthButton + 'px';


		if(thisButton.hasAttr('data-body-right')){

			paddingDirection = '0 ' + paddingLeftBody + ' 0 0';
			$('body').addClass('body-right');
			bodyMovement();

		}else{

			paddingDirection = '0 0 0 ' + paddingLeftBody;
			bodyMovement();

		}
		

	});


// END HEADER BUTTON MENU
///////////////////////////////////////



// HEADER SUBMENU
///////////////////////////////////////
	
	
	$('.main-menu .sub-menu-wrap').prev().click(function(){

		var thisSubMenu = $(this);

		if(thisSubMenu.parent().hasClass('open-submenu')){


			thisSubMenu.parent().removeClass('open-submenu');
			thisSubMenu.next().stop().animate({

				height: '4px'

			}, 400, function() {

				thisSubMenu.next().css({

					height: '0px'

				});

	  		});

		}else {	

			thisSubMenu.parent().addClass('open-submenu');
			var heightSubMenu = thisSubMenu.next().children().outerHeight();
			thisSubMenu.next().stop().css({
				height: '4px'
			}).animate({
				height: heightSubMenu
			}, 400);

		}

		return false

	});
	


// END HEADER SUBMENU
///////////////////////////////////////


// DROPDOWN DESCTOP BASKET
///////////////////////////////////////

	$('.basket-btn-desktop').click(function(){
		$('.few-basket').fadeToggle(200);
	});

// END DROPDOWN DESCTOP BASKET
///////////////////////////////////////




// IK SElECT
///////////////////////////////////////

	$('select').each(function(){

		if( $(this).parent().hasClass('desctop-language') ){

			$(this).ikSelect({

				autoWidth: true,
				ddFullWidth: true,
				equalWidths: true,
				dynamicWidth: true,

			});

		}else{

			$(this).ikSelect({

				autoWidth: false,
				ddFullWidth: false,
				equalWidths: false,
				dynamicWidth: false,

			});

		}

	});





// END IK SElECT
///////////////////////////////////////




});

