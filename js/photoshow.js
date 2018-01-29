$(document).ready(function () {
    var contenWidth=$(".box").outerWidth(true); //获取盒子的宽
    //console.log(contenWidth);
    var num=Math.floor($(window).width()/contenWidth);  //获取盒子的个数

    console.log(num)
    var mainboxWidth=num*contenWidth;                   //设置宽
    $(".container").css({width:""+mainboxWidth+"px"});

    imgLocation();
});


function imgLocation() {
    var box=$(".box")
    var boxWidth=box.eq(0).outerWidth(true);
    var num=Math.floor($(window).width()/boxWidth);
    var boxArr=[];
    box.each(function (index,value) {   //对每个盒子进行循环，
        var boxHeight=box.eq(index).outerHeight(ture);
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
            boxArr[minboxIndex]+=box.eq(index).height();      //将图片高度加到最小高度的盒子上
        }

    })
}