
function parallax(){
  var wScroll = $(window).scrollTop();
  var val1 = 0.5; // 기본 스크롤(1) 보다 작은 값으로 설정

  var box_top = -80;  // -5em(박스 상단 돌출값)
  var val2 = 0.1;  // 박스 스크롤 값

  // background-position 방식
  $('.parallax--bg')
    .css('background-position', 'center ' + (wScroll*val1)+'px');

  // position 방식
  $('.parallax--box').css('top', box_top + (wScroll*val2)+'px');
}

$(function(){
  // 스크롤 이벤트
  $(window).scroll(function(){
    parallax();
  });
});
