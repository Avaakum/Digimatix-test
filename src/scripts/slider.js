const slider = () => {

  const $ = require('jquery');
  window.$ = window.jQuery = $;
  require('slick-carousel')

  const startSlider = () => {
    $('.features__slider').slick({
      dots: true,
      arrows: true,
      slidesToShow: 4,
      slidesToScroll: 3,
      infinite: true,
    });
  };

  startSlider();

  var filtered = false;

  $('.features__filter_type_hot').on('click', function () {
    if (!filtered) {
      $('.features__slider').slick('slickFilter', function () {
        return $('.features__hot', this).length === 1;
      });
      $('.features__filter').each(function () {
        $(this).removeClass('features__filter_active');
      });
      $('.features__filter_type_hot').addClass('features__filter_active');
      filtered = true;
    }
  });

  $('.features__filter_type_all').on('click', function () {
    if (filtered === true) {
      $('.features__slider').slick('slickUnfilter');
      $('.features__slider').slick('slickUnfilter');
      $('.features__filter').each(function () {
        $(this).removeClass('features__filter_active');
      });
      $('.features__filter_type_all').addClass('features__filter_active');
      filtered = false;
    }
  });

};



module.exports = slider;
