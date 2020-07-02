"use strict";

$('.head-ser').mousemove(function () {
  $('.hover-show').slideDown();
});
$('.logo-wrap').mousemove(function () {
  $('.hover-show').slideUp();
});
$('.out').mousemove(function () {
  $('.hover-show').slideUp();
});
$('.nav-wrap').mousemove(function () {
  $('.hover-show').slideUp();
});
$('.banner_richText').mousemove(function () {
  $('.hover-show').slideUp();
});
var $divs = $('.hover-show>div');
$divs.each(function (index) {
  $divs.eq(index).children().eq(0).hover(function () {
    $divs.eq(index).children().eq(0).children().eq(0).animate({
      right: '0px'
    });
    $divs.eq(index).children().eq(0).children().eq(1).animate({
      right: '30px'
    });
    $divs.eq(index).children().eq(0).children().eq(3).animate({
      right: '90px'
    });
  }, function () {
    $divs.eq(index).children().eq(0).children().eq(0).animate({
      right: '30px'
    });
    $divs.eq(index).children().eq(0).children().eq(1).animate({
      right: '60px'
    });
    $divs.eq(index).children().eq(0).children().eq(3).animate({
      right: '60px'
    });
  });
}); //吸顶效果

var logoTop = $('.logo').offset().top;
$(document).on('scroll', function () {
  if ($(document).scrollTop() > logoTop) {
    $('.logo').css({
      "position": "fixed",
      "top": "0",
      "left": "50%",
      "marginLeft": "-600px",
      "backgroundColor": "rgba(255,255,255,0.9)"
    });
  } else {
    $('.logo').css({
      "position": "relative",
      "background": "transparent"
    });
  }
}); //点击跳转

$('.banner_richText').click(function () {
  window.location.href = "./details.html";
});