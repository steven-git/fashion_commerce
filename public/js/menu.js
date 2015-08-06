

	$('nav > div > i.fa-search, nav > div > i.fa-remove').on('click', function(){
		 /* Slide toggles header text for search menu*/
		$('nav > div#header-text, nav > div#search-form').slideToggle(200);
		$('nav > div > i#search-button').toggleClass('fa-search fa-remove'); /* toggles search button and close button*/
		$('nav > div#logo').toggleClass('hidden-xs'); /* Hides Logo in xs search click scenerio*/
		$('nav > div#search-form > form > input').focus(); /* Sets Focus on Search bar when revealed*/

		var width = $(window).width();
		if (width <= 550) {
			$('nav > div > form > input').attr('placeholder', 'Type to search');
		} else {
			$('nav > div > form > input').attr('placeholder', 'Just start typing to search');
		};

		if(!$('div#slide-nav').hasClass('slide-nav-hide')) {
			$('div#slide-nav').addClass('slide-nav-hide');
			$('div > nav#reg-nav').toggleClass('main-content-shift');
		}

	});

	$('nav > div > i#burger-button').on('click', function(){
		$('div#slide-nav').toggleClass('slide-nav-hide');
		$('div > nav#reg-nav').toggleClass('main-content-shift');

		if ($('nav > div#search-form').css('display') === "block") {
			$('nav > div#header-text, nav > div#search-form').slideToggle(200);	
			$('nav > div > i#search-button').toggleClass('fa-search fa-remove'); /* toggles search button and close button*/
			$('nav > div#logo').toggleClass('hidden-xs'); /* Hides Logo in xs search click scenerio*/
		};

	});




