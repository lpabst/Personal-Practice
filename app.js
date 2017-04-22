//JQuery boilerplate 
$(document).ready(function(){

var player = $('#player');

$(window).keypressed(function(e){
    if(e.which === 13){
        player.css('bottom', '40px');
    }
});



























});//End Jquery document.ready function