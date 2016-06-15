
//getElementByClassName
// alert(1)
function getClass(classname,range){
	var range=range?range:document;
	if(range.getElementsByClassName){
		return range.getElementsByClassName(classname);
		//FF下因为有此方法，所以可以直接获取到
	}else{

	var all=range.getElementsByTagName("*");
	//获取页面里所有元素，因为他会匹配全页面元素，所以性能上有缺陷，但是可以约束他的搜索范围
	var arr=[];
	//用来保存符合的className；   all[i].className==classname;
	for(var i=0;i<all.length;i++){
       if(hasClass(all[i],classname)){
          arr.push(all[i]);
       }
	}
	return arr;
   }
}
function hasClass(obj,classname){
	var cName=obj.className.split(" ");
	for(var i=0;i<cName.length;i++){
		if(cName[i]==classname){
			return true;
		}
	}
	return false;
}
   // html里边的引用;
  //   window.onload=function(){
  //   var one1=getClassName("one")
  //   var two2=getClassName("two",one1[0])[0];

  //   alert(two2.innerHTML);
  // }

//给指定元素传入一个值
//***********************************************
function getcontent(obj,val){
	if(obj.textContent){
      if(val==undefined){
      	return obj.textContent;	
       }
          obj.textContent=val;
	}else{
      if(val==undefined){
      	return obj.innerHTML;	
       }
          obj.innerHTML=val;
	}
}

// 获取样式，obj 指定的样式，pro 获取的样式
//********************************************
function getStyle(obj,pro){
	if(obj.currentStyle){
		var a=obj.currentStyle[pro];
       return a;
	}else{
		var b=getComputedStyle(obj,null)[pro];

		return b; 
	}
}



// $ 获取. # div 等
function $(selecter){
	var first=selecter.charAt(0);
	if(first=="."){
        return getClass(selecter.substring(1));
	}else if(first=="#"){
		return document.getElementById(selecter.substring(1));
	}
	else if(/^[a-z][a-z1-6]{0,10}$/.test(selecter)){
	return document.getElementsByTagName(selecter);
}

}



