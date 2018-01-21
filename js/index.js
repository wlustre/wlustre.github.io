(function($){                                       /*延迟*/
    $.fn.hoverDelay = function(options){
        var defaults = {
            hoverDuring: 300,
            outDuring: 0,
            hoverEvent: function(){
                $.noop();
            },
            outEvent: function(){
                $.noop();
            }
        };
        var sets = $.extend(defaults,options || {});
        var hoverTimer, outTimer;
        return $(this).each(function(){
            $(this).hover(function(){
                clearTimeout(outTimer);
                hoverTimer = setTimeout(sets.hoverEvent, sets.hoverDuring);
            },function(){
                clearTimeout(hoverTimer);
                outTimer = setTimeout(sets.outEvent, sets.outDuring);
            });
        });
    }
})(jQuery);

$(document).ready(function(){           /*淡入淡出游戏卡*/
    $(".shop-content1").hoverDelay({
        hoverEvent:function() {
            $(".detailed").fadeIn();
            $(".triangle").fadeIn();
        },
        outEvent: function(){
            $(".detailed").fadeOut();
            $(".triangle").fadeOut();
        }
    });
});
$(document).ready(function(){           /*淡入淡出头像*/
    $(".dropdown").hoverDelay({
        hoverEvent:function() {
            $(".dropdown-conten").fadeIn();
        },
        outEvent: function(){
            $(".dropdown-conten").fadeOut();
        }
    });
});

//图片延迟加载
$(function() {
    $("img.lazy").lazyload({
        effect: "fadeIn",
        placeholder : "../img/white.gif"
    });

});

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


// 置顶
function pageScroll(){
    window.scrollBy(0,-100);
    scrolldelay = setTimeout('pageScroll()',15);
    var sTop=document.documentElement.scrollTop+document.body.scrollTop;
    if(sTop==0) clearTimeout(scrolldelay);
}
window.onscroll=function() {
    var scroll = document.documentElement.scrollTop+document.body.scrollTop;
    console.log(scroll)
    var topv2 = document.getElementById("top2")
    if (scroll>500) {
        topv2.style.position="fixed";
        topv2.style.top="20px";
        topv2.style.right="168px";
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