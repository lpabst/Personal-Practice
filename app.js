//JQuery boilerplate 
$(document).ready(function(){

var player = $('#player');
var game_box = $('.game_box');
var health = 200;
var rain = $('<div class="rain"></div>');

game_box.append(rain);

game_box.hover(
    function(){
        player.css('background', 'cyan');
    },
    function(){
        player.css('background', '#ccc');
    }
);

$( document ).on( "mousemove", function( event ) {
    var x = event.pageX - 445;
    var y = event.pageY - 135;
    if (x > 10 && x < 370){
        player.css('left', x);
    }
    if (y > 10 && y < 368){
        player.css('top', y);
    }
    if (x > 400){
        health -= 1;
        $('.health').css('width', health);
    }
  
});





























});//End Jquery document.ready function