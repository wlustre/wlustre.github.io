function opentab(n,tabname){
    var i,tabcontent,list,tith2;
    tabcontent=document.getElementsByClassName("show-det");
    list=document.getElementsByClassName("list-1")
    tith2=document.getElementsByClassName("list-1-righth2")

    for(i=0;i<tabcontent.length;i++){
        tabcontent[i].style.display="none"
    }
    // 改变背景
    for(i=0;i<list.length;i++){
        list[i].style.backgroundColor="#162331";
        list[i].style.width="434px";
    }
    list[n-1].style.backgroundColor="#95bbd4";
    list[n-1].style.width="448px";
    // 改变字体
    for(i=0;i<tith2.length;i++){
        tith2[i].style.color="#c7d5e0";
    }
    tith2[n-1].style.color="#10161b";
    document.getElementById(tabname).style.display="block";
}
window.onload=function(){
    document.getElementById("defaultOpen").click();
}