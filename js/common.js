$(function () {
  // common function
  var sideMenu = $('#container .side-menu');
  var hbgBtn = $('.btn-all-menu');
  var closeBtn = $('#container .side-menu .btn-close');

  hbgBtn.click(function () {
    sideMenu.addClass('on');
    $('.bg-dark').addClass('on');
  }); // 햄버거 버튼 클릭 시 사이드 메뉴 on

  $('.bg-dark').click(function () {
    sideMenu.removeClass('on');
    $('.bg-dark').removeClass('on');
  }); // 배경 클릭 시 사이드 메뉴 off

  closeBtn.click(function () {
    sideMenu.removeClass('on');
    $('.bg-dark').removeClass('on');
  }); // 닫기 버튼 클릭 시 사이드 메뉴 off

  var categoryAll = $('#container .side-menu .category-all');
  var subCategory = $('#container .side-menu .sub-category');
  var subCategoryH = $('#container .side-menu .sub-category').outerHeight();
  subCategory.css('height', subCategoryH);

  console.log(subCategoryH);
  categoryAll.click(function () {
    categoryAll.toggleClass('on');
    if (categoryAll.hasClass('on')) {
      subCategory.css('height', subCategoryH);
    } else {
      subCategory.css('height', 0);
    }
  }); // side menu category accordion btn

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
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
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
