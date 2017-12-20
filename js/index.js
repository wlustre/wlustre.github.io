// $(document).ready(function () {
//     $("#myBtn").click(function () {
//         $("#myModal").css({"display":"block"})
//     })
//     $(".close").click(function(){
//         $("#myModal").css({"display":"none"})
//     })
// })

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
$(document).ready(function(){           /*淡入淡出*/
    $(".dropdown").hoverDelay({
        hoverEvent:function() {
            $(".dropdown-conten").fadeIn();
    },
        outEvent: function(){
            $(".dropdown-conten").fadeOut();
        }
    });
});
$(document).ready(function(){           /*淡入淡出*/
    $(".dropdown2").hoverDelay({
        hoverEvent:function() {
            $(".dropdown-conten2").fadeIn();
        },
        outEvent: function(){
            $(".dropdown-conten2").fadeOut();
        }
    });
});
$(document).ready(function(){           /*淡入淡出*/
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

function opentab(evt,tabname){
        var i,tabcontent,tablinks;
        tabcontent=document.getElementsByClassName("tabcontent");
        for(i=0;i<tabcontent.length;i++){
            tabcontent[i].style.display="none"
        }
        tablinks=document.getElementsByClassName("tablinks");
        for(i=0;i<tablinks.length;i++){
            tablinks[i].className=tablinks[i].className.replace(" active","");
        }
        document.getElementById(tabname).style.display="block";
        evt.currentTarget.className+=" active";
    }
window.onload=function(){
    document.getElementById("defaultOpen").click();
}


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
    var topv = document.getElementById("top1")
    if (scroll>600) {
        topv.style.display="block";
    }
    else if(scroll<600){
        topv.style.display="none";
    }
}
function addcar(){
    var num=0
    num++
    document.getElementById(shop-car)

}