$(function()
{
    $("#MoveMe1").draggable();
    $("#MoveMe2").draggable();
    $("#MoveMe3").draggable();
    $("#MoveMe4").draggable();
    $("#MoveMe5").draggable();

    $("#mountain").click(function(){
        $("body").css('background-image', 'url("media/mountainsMap.png")');
    })
    $("#basic").click(function(){
        $("body").css('background-image', 'url("media/basicMap.jpg")');
    })
});