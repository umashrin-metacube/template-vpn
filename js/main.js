$(function(){
  $(".testimonial-carousel").owlCarousel({
    items: 2,
    autoplay:1000,
    loop:true,
    dots:true,
    responsive:true,
    responsive: {
      0:{
        items:1
      },
      600:{
        item:1
      },
      1000:{
        item:2
      }
    }
  });
});

$(function(){
  $(".industry-carousel").owlCarousel({
    items: 4,
    autoplay:false,
    loop:true,
    dots:true,
    responsive:true,
    responsive: {
      0:{
        items:1
      },
      600:{
        item:1
      },
      1000:{
        item:4
      }
    }
  });
});

$(window).scroll(function(){
$('nav').toggleClass('scrolled',$(this).scrollTop()>630);
});

  