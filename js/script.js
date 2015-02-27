//creating sticky nav bar
var mn = $(".main-nav");
var logo= $(".logo");
$(window).scroll(function(){
	if( $(this).scrollTop() > 300){
		mn.addClass("main-nav-scrolled");
    logo.addClass("logo-scrolled")
	}
	else{
		mn.removeClass("main-nav-scrolled");
    logo.removeClass("logo-scrolled");
	}
});

//Carousel
//source http://agelber.com/blog/looping-carousel/
$(function() {
  var currentIndex = 0,
      itemCount    = $('.carousel > li').length;
  $('.carousel > li:eq(' + currentIndex + ')').addClass('active');
  $('.carousel-nav').on('click', function() {
    var $active  = $('.carousel > li.active'),
        isNext   = $(this).hasClass('next');
    currentIndex = (currentIndex + (isNext ? 1 : -1)) % itemCount;

    //at negative 1 loop back
    if (currentIndex === -1) {
      currentIndex = itemCount - 1;
    }
    //setting up auto timer
    var $next = $('.carousel > li:eq(' + currentIndex + ')');
    $active.addClass(isNext ? 'next-out' : 'prev-out');
    $next.addClass('active').addClass(isNext ? 'next-in' : 'prev-in');
    setTimeout(function() { 
      $active.removeClass('active next-out prev-out');
      $next.removeClass('next-in prev-in');
    }, 500);
    return false;
  });
});

//smooth scrolling
//source http://css-tricks.com/snippets/jquery/smooth-scrolling/
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var link = $(this.hash);
      link = link.length ? link : $('[name=' + this.hash.slice(1) +']');
      if (link.length) {
        $('html,body').animate({
          scrollTop: link.offset().top
        }, 750);
        return false;
      }
    }
  });
});