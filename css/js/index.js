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

//图片延迟加载
$(function() {
    $("img.lazy").lazyload({
        effect: "fadeIn",
        placeholder : "../img/white.gif"
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
    //头像淡入淡出
    $(".dropdown").hoverDelay({
        hoverEvent:function() {
            $(".dropdown-conten").fadeIn();
        },
        outEvent: function(){
            $(".dropdown-conten").fadeOut();
        }
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

    // 弹出微信公众号二维码
    $(".wechar-down").mouseenter(function() {
        $(".wechar-box").hide();
        $(".wechar-box").show(300);
    })
    $(".wechar-down").mouseleave(function() {
        $(".wechar-box").hide(300);
    })

    //手机上菜单呼出和隐藏
    $(function(){
        $('.menu').click(function(event){
            event.stopImmediatePropagation();//取消事件冒泡；
            $(".nav2").animate({right:"0"});
        });

        $(document).bind("click",function(e){ //点击窗口外地方消失
            var target = $(e.target);
            if(target.closest(".nav2").length == 0){
                $(".nav2").animate({right:"-200px"});
            }
        })
    });
});