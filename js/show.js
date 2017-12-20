window.onscroll=function() {
    var scrollTop = document.documentElement.scrollTop+document.body.scrollTop;
    console.log(scrollTop);
    // 图表介绍
    var oIntruds = document.getElementById("intruds");
    var oImg = oIntruds.getElementsByTagName('img')[0];
    var oRecommend = oIntruds.getElementsByClassName('recommend')[0];
    var oBuy = oIntruds.getElementsByClassName('buy')[0];
    var oLoad = oIntruds.getElementsByClassName('load')[0];
    var oDiscuss = oIntruds.getElementsByClassName('discuss')[0];
    

    var oPingce = document.getElementById('pingce');
    var oContainer = oPingce.getElementsByClassName('container')[0];
    var oTop = oContainer.getElementsByClassName('top')[0];
    var oText = oContainer.getElementsByClassName('text')[0];

    // 音频介绍
    var oAdv = document.getElementById('adv');
    var oTitle = oAdv.getElementsByClassName('title')[0];
    var oDescript = oAdv.getElementsByClassName('descript')[0];
    var oDescript_a = oDescript.getElementsByTagName('a')[0];
    var oDescript_ul = oDescript.getElementsByTagName('ul')[0];
    var oDescript1 = oAdv.getElementsByClassName('descript1')[0];
    var oDescript1_a = oDescript1.getElementsByTagName('a')[0];
    var oDescript1_ul = oDescript1.getElementsByTagName('ul')[0];
    var oDescript1_li =oDescript1_ul.getElementsByTagName('li');
    var oVideo1 = oAdv.getElementsByClassName('video1')[0];
    var oVideo2 = oAdv.getElementsByClassName('video2')[0];

    //更多游戏
    var oMoreGame = document.getElementById('moreGame');
    var oMoreGame_ul = oMoreGame.getElementsByTagName('ul')[0];
    var oMoreGame_li = oMoreGame_ul.getElementsByTagName('li');
    var array = new Array();
    for(var i = 0 ;i<oMoreGame_li.length;i++){
        var oMoreGame_li_container = oMoreGame_li[i].getElementsByClassName('container')[0];
        var oMoreGame_li_top =oMoreGame_li_container.getElementsByClassName('top')[0];
        var oMoreGame_li_right =oMoreGame_li_container.getElementsByClassName('right')[0];
        var oMoreGame_li_buttom =oMoreGame_li_container.getElementsByClassName('buttom')[0];
        var oMoreGame_li_left =oMoreGame_li_container.getElementsByClassName('left')[0];
        var oMoreGame_li_span1 =oMoreGame_li_container.getElementsByTagName('span')[0];
        var oMoreGame_li_span2 =oMoreGame_li_container.getElementsByTagName('span')[1];
        var oMoreGame_li_pre =oMoreGame_li_container.getElementsByTagName('pre')[0];
        array[i]=new Array(oMoreGame_li_container,oMoreGame_li_top,oMoreGame_li_right,oMoreGame_li_buttom,oMoreGame_li_left,oMoreGame_li_span1,oMoreGame_li_span2,oMoreGame_li_pre);
        }
    if (scrollTop>280) {
        startMove(oImg,{opacity:100,left:30},16);
        startMove(oRecommend,{opacity:100,top:26},16);
        startMove(oBuy,{opacity:100,top:26},16);
        startMove(oLoad,{opacity:100,top:26},16);
        startMove(oDiscuss,{opacity:100,left:891},16);
    }
    if(scrollTop>600){
        startMove(oPingce,{height:150,opacity:100},10,function(){
            startMove(oTop,{right:0,opacity:100},3,function(){
                startMove(oText,{top:59,opacity:100},10);
            })
        });
    }
    if(scrollTop>750){
        startMove(oTitle,{top:190,opacity:100},16);
    }
     if(scrollTop>950){
         startMove(oDescript_a,{left:0,opacity:100},5,function(){
            startMove(oDescript_ul,{height:175},18,function(){
                startMove(oVideo1,{opacity:100,left:775},5);
            });
         })
     }
     if(scrollTop>1300){
        startMove(oDescript1_a,{right:0,opacity:100},5,function(){
           startMove(oDescript1_ul,{height:80},18,function(){
            startMove(oVideo2,{opacity:100,left:175},5);
           });
        });
     }
     for(var i =0 ;i<oMoreGame_li.length;i++){
        oMoreGame_li[i].index = i;
        oMoreGame_li[i].onmouseover=function(){
            startMove(array[this.index][0],{opacity:80},8);
            startMove(array[this.index][1],{left:15,width:220},14);
            startMove(array[this.index][2],{top:15,height:270},14);
            startMove(array[this.index][3],{left:15,width:220},14);
            startMove(array[this.index][4],{top:15,height:270},14);
            startMove(array[this.index][5],{top:35,opacity:100},6);
            startMove(array[this.index][6],{top:55,opacity:100},6);
            startMove(array[this.index][7],{height:150},34);
        }
        oMoreGame_li[i].onmouseout=function(){
            startMove(array[this.index][0],{opacity:0},1);
            startMove(array[this.index][1],{left:40,width:150},18);
            startMove(array[this.index][2],{top:40,height:220},18);
            startMove(array[this.index][3],{left:40,width:150},18);
            startMove(array[this.index][4],{top:40,height:220},18);
            startMove(array[this.index][5],{top:135,opacity:0},6);
            startMove(array[this.index][6],{top:150,opacity:0},6);
            startMove(array[this.index][7],{height:0},6);
        }
     }

            function getStyle(obj, name){
                if(obj.currentStyle)
                {
            return obj.currentStyle[name];
        }
        else
        {
            return getComputedStyle(obj, false)[name];
        }
    }


    function startMove(obj, json,vel,fnEnd){
        clearInterval(obj.timer);
        obj.timer=setInterval(function (){
            var bStop=true;
            
            for(var attr in json)
            {
                var cur=0;
                
                if(attr=='opacity')
                {
                    cur=Math.round(parseFloat(getStyle(obj, attr))*100);
                }
                else
                {
                    cur=parseInt(getStyle(obj, attr));
                }
                
                var speed=(json[attr]-cur)/vel;
                speed=speed>0?Math.ceil(speed):Math.floor(speed);
                
                if(cur!=json[attr])
                    bStop=false;
                
                if(attr=='opacity')
                {
                    obj.style.filter='alpha(opacity:'+(cur+speed)+')';
                    obj.style.opacity=(cur+speed)/100;
                }
                else
                {
                    obj.style[attr]=cur+speed+'px';
                }
            }
            
            if(bStop)
            {
                clearInterval(obj.timer);
                            
                if(fnEnd)fnEnd();
            }
        }, 30);
    }
};