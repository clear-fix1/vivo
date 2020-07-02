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
$('.content').mousemove(function () {
  $('.hover-show').slideUp();
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
});