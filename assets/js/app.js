$(document).ready(function(){
  // Slick carousel
  $('.carouselHolder').slick({
    dots: true,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: true,
    infinite: true,
    responsive: [
      {
        breakpoint: 1173,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 949,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 725,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          infinite: false
        }
      }
    ]
  });
});
