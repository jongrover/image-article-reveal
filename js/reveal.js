$(function(){

  //listen for hover on .reveal articles
  $('.reveal').hover(function () {
    //fade out the img on mouse enter
    $(this).find('img').fadeOut(1000);
  }, function () {
    //fade in the img on mouse out
    $(this).find('img').fadeIn(1000);
  });

});