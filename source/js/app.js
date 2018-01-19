
// @codekit-prepend 'lib/jquery.1.12.4.js'
// @codekit-prepend 'lib/jquery.mobile.1.4.5.js'
// @codekit-prepend 'lib/bootstrap.bundle.js'
// @codekit-prepend 'lib/jquery.color.js'
// @codekit-prepend 'lib/jquery.waypoints.js'
// @codekit-prepend 'lib/velocity.js'
// @codekit-prepend 'lib/velocity.ui.js'


// @codekit-prepend 'functions/templateNavbar.js'
// @codekit-prepend 'functions/templateAccordion.js'
// @codekit-prepend 'functions/templateCarousel.js'
// @codekit-prepend 'functions/templateSearchBar.js'
// @codekit-prepend 'functions/templateScrollReveal.js'
// @codekit-prepend 'functions/templateFilter.js'



$(document).ready(function(){
	$(".navbar-toggler").click(function(){
		$(this).toggleClass("open");
		$(".nav-content").toggleClass("open");
	});
});








