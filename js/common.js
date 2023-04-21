$(function () {
  //header scroll event
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 100) {
      $('#header-flex').addClass('on');
    } else {
      $('#header-flex').removeClass('on');
    }
  }); // $(window).scroll

  /* index.html */
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
  }); // tabs.click

  var swiper = new Swiper('.slide-wrap', {
    slidesPerView: 1,
    loop: true,
  });

  /* login.html */
  var memberTab = $('.content .member-tab div');
  var loginForm = $('.content .login-box > div');

  memberTab.click(function () {
    for (let i = 0; i < 2; i++) {
      if ($(this).index() === i) {
        memberTab.removeClass('pick');
        $(this).addClass('pick');
        loginForm.removeClass('login-box-on');
        loginForm.eq(i).addClass('login-box-on');
      }
    }
  }); // memberTab.click

  /* customer_service.html */
  var questionTab = $('.board-table div.question div p');
  var answerTab = $('.board-table div.answer');
  var answerHeight = $('.board-table div.answer div').outerHeight();

  questionTab.click(function () {
    console.log($(questionTab).index(this));
    for (let i = 0; i < questionTab.length; i++) {
      if ($(questionTab).index(this) === i) {
        answerTab.eq(i).toggleClass('answer-on');
        if (answerTab.eq(i).hasClass('answer-on')) {
          answerTab.eq(i).css('height', answerHeight);
        } else {
          answerTab.eq(i).css('height', 0);
        }
      }
    }
  }); // questionTab.click
});
