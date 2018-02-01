$(document).ready(function () {
    $("img").on("load",function(){
        imgLocation()

    });
    $(".under").css("display","none")

});

function imgLocation() {
    var box=$(".box");
    var boxWidth=box.eq(0).outerWidth(true);//获取盒子的宽
    console.log(boxWidth);
    var num=Math.floor($(window).width()/boxWidth); //获取盒子的个数
    console.log(num);
    var mainboxWidth=num*boxWidth;                   //设置宽
    $(".container").css({width:""+mainboxWidth+"px"});
    var boxArr=[];
    // var img=box.find("img");
    // console.log(img);

    box.each(function (index,value) {   //对每个盒子进行循环，
        var boxHeight=box.eq(index).outerHeight(true);
        console.log(boxHeight);
        if(index<num){
            boxArr[index]=boxHeight;      //获取第一排盒子的高度
        }else{
            var minboxHeight=Math.min.apply(null,boxArr);    //获取最小盒子高度

            var minboxIndex=$.inArray(minboxHeight,boxArr);  //获取最小盒子的位置

            $(value).css({               //设置位置
                "position":"absolute",
                "top":minboxHeight,
                "left":box.eq(minboxIndex).position().left
            });
            boxArr[minboxIndex]+=box.eq(index).outerHeight(true);      //将图片高度加到最小高度的盒子上
        }

    })
}