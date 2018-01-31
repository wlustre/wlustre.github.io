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
            $(".backcolor").css("display","block")
        });

        $(document).bind("click",function(e){ //点击窗口外地方消失
            var target = $(e.target);
            if(target.closest(".nav2").length == 0){
                $(".nav2").animate({right:"-250px"});
                $(".backcolor").css("display","none")
            }
        })
    });
    var deg=0;
    $(".list").click(function () {      //点击相册下拉菜单
        deg=deg+180;
        $(".rotate").css("transform","rotate("+deg+"deg)");  //箭头旋转
        $(".downlist").slideToggle();
        if(deg==180){    //判断，度数置零
            deg=-180;
        }else{
            deg=0;
        }

        var list=$(".downlist ul li");
        var time=0;
        list.each(function (index,value) {   //对每个li盒子进行循环，每次延迟加50毫秒，达到不同延迟的动画效果
            if($(value).css("left")=="-150px"){
                $(value).delay(time).animate({opacity:"1",left:"0"},"fast")
            }else {
                $(value).animate({opacity:"0",left:"-150px"},"fast")
            }
            time=time+50;
        })
    })
});