//图片延迟加载
$(function() {
    $("img.lazy").lazyload({
        effect: "fadeIn",
        placeholder : "../img/white.gif"
    });
});

window.onscroll=function() {
    var scroll = document.documentElement.scrollTop+document.body.scrollTop;
    console.log(scroll);
    var topv2 = document.getElementById("top2");
    var margrigth = $(".container").css('marginLeft');
    console.log(margrigth);
    if (scroll>500) {
        topv2.style.position="fixed";
        topv2.style.top="20px";
        topv2.style.right=margrigth;
    }
    else{
        topv2.style.position="relative";
        topv2.style.top="0";
        topv2.style.right="0";
    }

    var topv = document.getElementById("top1")
    if (scroll>600) {
        topv.style.display="block";
    }
    else if(scroll<600){
        topv.style.display="none";
    }
}


$(document).ready(function(){
    // 轮播图
    $(function() {
        $(".flexslider").flexslider({
            animation: "solid",
            slideshowSpeed: 3500, //展示时间间隔ms
            animationSpeed: 500, //滚动时间ms
            prevText: '❮',
            nextText: '❯',
            directionNav:"true"
        });
    });
});