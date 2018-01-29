$(document).ready(function () {
    var contenWidth=$(".conten").width();
    console.log(contenWidth);
    var num=Math.floor($(window).width()/contenWidth);
    var mainboxWidth=num*contenWidth;
    $(".mainbox").css({width:""+mainboxWidth+"px"});

    var framehight; //图片高度的全局变量
    $(".frame").hover(function () {
        framehight=$(this).find(".photoshow img").height(); //获取图片高度
        //console.log(framehight);
        animateon($(this),framehight);   //传入当前对象和图片的高度
    },function () {
        animatelevel($(this),framehight)
    })
});
function animateon(value,framehight) {              //悬停动画函数
    var height=72;   //默认增加的高度
    var all=height+framehight;
    $(value).css({"marginTop":"8px","padding":"16px","width":"280px","height":""+all+"px"});
    $(value).find(".photoshow img").css({"width":"300px","left":"-10px"});
    $(value).find(".photoshow").css({"width":"280px"});
    $(value).next(".date").css( "bottom","0px");
    $(value).find(".text1").css({"opacity":"1",transition:'0.3s'});
    $(value).find(".text2").css({"opacity":"1",transition:'0.3s'});
    $(value).find(".text1 p").animate({left:'0px',opacity:'1'});
    $(value).find(".text2 p").delay(100).animate({left:'0px',opacity:'1'})
}
function animatelevel(value,framehight) {              //移出动画函数

    $(value).css({"marginTop":"100px","padding":"6px","width":"300px","height":""+framehight+"px"});
    $(value).find(".photoshow img").css({"width":"300px","left":"0px"});
    $(value).find(".photoshow").css({"width":"300px"});
    $(value).next(".date").css( "bottom","50px");
    $(value).find(".text1").css({"opacity":"0",transition:'0s'});
    $(value).find(".text2").css({"opacity":"0",transition:'0s'});
    $(value).find(".text1 p").css({left:'-60px',opacity:'0'});
    $(value).find(".text2 p").css({left:'-60px',opacity:'0'})
}