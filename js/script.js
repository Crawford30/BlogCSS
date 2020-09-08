$(document).ready(function() {

	$('.menu-toggle').on('click', function() {

		$('.nav').toggleClass('showing');

		$('.nav ul').toggleClass('showing'); /*make every drop down inside the nav element shows also*/


	});


/*autoplay is the class of the container that holds all the element but we use post wrapper*/
$('.post-wrapper').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,

  nextArrow: $('.next'), /*using the next btton class from the font awesome lib*/
  prevArrow: $('.prev'),


   responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]



});
	


});