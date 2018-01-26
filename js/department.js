$(document).ready(function () {
    var location = window.location.href;
    var href= location+"";
    var href_part=href.split('?');
    var num=(href_part[1])*1;
    $(".nav-main ul li").eq(num).addClass("active").siblings().removeClass("active")
    $(".num>div").eq(num).show().siblings().hide();

    $(".nav-main ul li").click(function () {
        $(this).addClass("active").siblings().removeClass("active")
        var index=$(this).index();
        $(".num>div").eq(index).show().siblings().hide();
    })
});
window.onscroll=function() {
    var scroll = document.documentElement.scrollTop+document.body.scrollTop;
    console.log(scroll);

    var topv = document.getElementById("top1")
    if (scroll>600) {
        topv.style.display="block";
    }
    else if(scroll<600){
        topv.style.display="none";
    }
}