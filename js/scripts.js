
// Language
$('.language .language_current').on('click', function(e){
    if ( $(e.target).closest('.language').hasClass('open') ){
      $(e.target).closest('.language').removeClass('open');
      $(e.target).closest('.language').removeClass('open');
      $('.fa-angle-down').attr('aria-hidden', 'true').show();
      $('.fa-angle-up').attr('aria-hidden', 'false').hide();
      $('.dropdown').hide();
      $('.triangle').hide();
    } else {
      $(e.target).closest('.language').addClass('open');
      $('.fa-angle-down').attr('aria-hidden', 'true').hide();
      $('.fa-angle-up').attr('aria-hidden', 'false').show();
      $('.dropdown').css('display', 'inline-flex');;
      $('.triangle').show();
    }
  })

  // Slider
  var $slider = $('.slider');

  if ($slider.length) {
    var currentSlide;
    var slidesCount;
    var currentPage =  $('.current-page')
    var allPages =  $('.all-pages')
    
    var updateSliderCounter = function(slick, currentIndex) {
      currentSlide = slick.slickCurrentSlide() + 1;
      slidesCount = slick.slideCount;
      if (currentSlide < 10) currentSlide = '0' + currentSlide
      if (slidesCount < 10) slidesCount = '0' + slidesCount
      $('.current-page').text(currentSlide)
      $('.all-pages').text(slidesCount)
    };
  
    $slider.on('init', function(event, slick) {
      updateSliderCounter(slick);
    });
  
    $slider.on('afterChange', function(event, slick, currentSlide) {
      updateSliderCounter(slick, currentSlide);
    });
  
    $slider.slick();
  }
