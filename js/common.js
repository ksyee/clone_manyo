$(function () {
  var tabs = $('.tab-best-sellers ul li');
  var slide = $('.tab-slide-wrap .slide');

  tabs.click(function () {
    for (let i = 0; i < 3; i++) {
      if ($(this).index() === i) {
        tabs.removeClass('on');
        $(this).addClass('on');
        slide.removeClass('display-on');
        slide.eq(i).addClass('display-on');
      }
    }
  });
});
