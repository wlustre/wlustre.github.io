window.onload=function(){
	var oContainer = document.getElementById('container');
	var oUl= oContainer.getElementsByTagName('ul')[0];
	var oLi = oUl.getElementsByTagName('li');

	var oInp=oContainer.getElementsByTagName('input');

	var oHeader = oContainer.getElementsByClassName('header')[0];
	var oP=oHeader.getElementsByTagName('p')[0];

	var oPsw = oContainer.getElementsByClassName('psw')[0];
	var oMesg = oContainer.getElementsByClassName('mesg')[0];

	
	for(var i=0;i<oLi.length;i++){
		oLi[i].index=i;
		oLi[i].onclick=function(){
			if(this.index==0){
				oPsw.style.display="block";
				oMesg.style.display="none";
				
			}else if(this.index==1){
				oPsw.style.display="none";
				oMesg.style.display="block";
			}
			for(var i=0;i<oLi.length;i++){
				oLi[i].className=" ";
			}
			oLi[this.index].className="active";
		};	
	}
	for(var i=0;i<oInp.length;i++){
		if(i==2||i==6){
		}else{
			oInp[i].onfocus=function(){
				this.style.background="white";
			};
			oInp[i].onblur=function(){
				this.style.background="#eee";
			}
		}
	}//区号的选择
	oP.onclick=function(){

	};
};