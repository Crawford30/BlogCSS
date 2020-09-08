$(document).ready(function() {

	$('.menu-toggle').on('click', function() {

		$('.nav').toggleClass('showing');

		$('.nav ul').toggleClass('showing'); /*make every drop down inside the nav element shows also*/


	});

});