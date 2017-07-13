/**  each */
// $('div').each(function(index){
//     //$(this).text('这是第'+index+'个');
//     this.append(index + '个') ;
// });
/** 按住DIV区域1秒后激活事件 */
// var timeout = undefined;
// $('#firstmap').bind("mousedown", function() {
//     timeout = setTimeout(function() {
//         alert(1);
//     }, 1000);
// });
// $('#firstmap').bind("mouseup", function() {
//     clearTimeout(timeout);
// });
// var game = {
//     mapCell:{
//         width:650,
//         height:500,
//         point:[0,0],
//         linkPoint:[[0,0],[1,1]]
//     }
// };
//
// /** 初始化区域  START*/
// var cssObj = {
//     'width': game.mapCell.width+'px',
//     'height': game.mapCell.height+'px',
//     'background-color': 'red',
//     'position':'absolute',
//
// };
// var divMap = '<div class="map" id="temp"></div>';
//
// function createDiv(divMap, id, cssObj, x, y){
//     $('body').append($(divMap));
//     var divTemp = $('#temp');
//     divTemp.attr('id',id);
//     divTemp.css(cssObj);
//     divTemp.css({
//         'margin-left':x+'px',
//         'margin-top':y+'px'
//     });
//     return divTemp;
// }
/** 测试createDiv() */
//createDiv(divMap, 'map1', css, 100, 100);

//
// $('#gamewindow').append($('<div id="firstmap"></div>'));
// var __this = $('#firstmap');
// __this.css(cssObj);
// var currentPosition = {x:__this.width(),y:__this.height()};
// var windowPosition = {x:$(window).width(),y:$(window).height()};
// __this.css({
//     /** 可见DIV居中 */
//     'margin-left':windowPosition.x/2-currentPosition.x/2,
//     'margin-top':windowPosition.y/2-currentPosition.y/2
// });
// /** 初始化区域  END */
//
// var amazing = {
//     position:{x:__this.offset().left,y:__this.offset().top}
// };
// __this.bind('mousedown', function(){
//     //alert('x:'+amazing.position.x+'y:'+amazing.position.y);
//     var ddd = createDiv(divMap, 'map1', cssObj, amazing.position.x-game.mapCell.width, amazing.position.y-game.mapCell.height).css('background-color','red').css('display','none').fadeIn();
//     createDiv(divMap, 'map2', cssObj, amazing.position.x, amazing.position.y-game.mapCell.height).css('background-color','blue').css('display','none').fadeIn();
//     createDiv(divMap, 'map3', cssObj, amazing.position.x+game.mapCell.width, amazing.position.y-game.mapCell.height).css('background-color','red').css('display','none').fadeIn();
//     createDiv(divMap, 'map4', cssObj, amazing.position.x-game.mapCell.width, amazing.position.y).css('background-color','blue').css('display','none').fadeIn();
//     createDiv(divMap, 'map5', cssObj, amazing.position.x+game.mapCell.width, amazing.position.y).css('background-color','blue').css('display','none').fadeIn();
//     createDiv(divMap, 'map6', cssObj, amazing.position.x-game.mapCell.width, amazing.position.y+game.mapCell.height).css('background-color','red').css('display','none').fadeIn();
//     createDiv(divMap, 'map7', cssObj, amazing.position.x, amazing.position.y+game.mapCell.height).css('background-color','blue').css('display','none').fadeIn();
//     createDiv(divMap, 'map8', cssObj, amazing.position.x+game.mapCell.width, amazing.position.y+game.mapCell.height).css('background-color','red').css('display','none').fadeIn();
// });
// __this.bind('mouseup', function(){
//     //alert('x:'+amazing.position.x+'y:'+amazing.position.y);
//     for(var i=1;i<=8;i++){
//         $('#map'+i).remove();
//     }
// });

$(function(){
    $("#chatData").focus();//输入框获得焦点
    $('<audio id="chatAudio">' +
        '<source src="audio/Hit.mp3" type="audio/mpeg">' +
        '</audio>').appendTo('body');//载入声音文件
    $("#trig").click(function(){
        var a = $("#chatData").val().trim();//获取输入的内容
        if(a.length > 0){
            $("#chatData").val(''); //清空输入框
            $("#chatData").focus(); //获得焦点
            $("<li></li>").html('<img src="img/qq.gif"/><span>'+a+'</span>')
                .appendTo("#chatMessages");//将输入的内容追加的聊天区
            $("#chat").animate({"scrollTop": $('#chat')[0].scrollHeight}, "slow");//调整滚动条
            $('#chatAudio')[0].play(); //播放声音
        }
    });
});
