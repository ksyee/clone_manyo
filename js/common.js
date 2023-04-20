$(function () {
  // index.html
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

  // login.html
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
  });

  // customer service
  var questionTab = $('.board-table tr.question');
  var answerTab = $('.board-table tr.answer');

  questionTab.click(function () {
    console.log($(questionTab).index(this));
    for (let i = 0; i < questionTab.length; i++) {
      if ($(questionTab).index(this) === i) {
        answerTab.eq(i).toggleClass('answer-on');
      }
    }
  });
});
