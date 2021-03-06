// navigation
$(function() {
  $('.nav-sp__toggle').click(function() {
    $(this).toggleClass("active");
    if($(this).hasClass('active')) {
      $('.nav-sp__menu').addClass('active');
    } else {
      $('.nav-sp__menu').removeClass('active');
    }
  });
});

// scroll
$(function(){
  $('a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});

// page top button
var winH = $(window).height();
var topBtn = $('.page-top');

topBtn.hide();
$(window).on('load scroll', function(){
  if ( $(this).scrollTop() > winH ) {
    topBtn.fadeIn();
  } else {
    topBtn.fadeOut();
  }
});

// header scroll
var headerH = $('.header').height();
//var scrollH = $(window).scrollTop();

$(window).on('load scroll', function(){
  if ( $(this).scrollTop() > headerH ) {
    $('.header').addClass('js-fixed');
  } else {
    $('.header').removeClass('js-fixed');
  }
});