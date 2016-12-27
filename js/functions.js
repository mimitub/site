/* functions.js */

$(function(){
  $('p').click(function () {
    if($(this).hasClass("on")){ //これはif文　ここからonというclassが付いている時の処理
      $(this).removeClass("on");
      $("a",this).text("ココをクリックすると「on」というclassがつきます")
    }
    else{ //ここからonというclassが付いていない時
      $(this).addClass("on"); 
      $("a",this).text("「on」というclassがつきました。もう一度クリックすると元に戻ります")
    }
  });
});
