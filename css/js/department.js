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
