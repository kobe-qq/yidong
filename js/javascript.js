window.onload=function(){
   var lis=document.getElementsByClassName("item");
   var downMenu=document.getElementsByClassName("Menu");
   for(var i=0;i<lis.length;i++){
   	   lis[i].index=i;
      lis[i].onmouseover=function(){
           for(var j=0;j<lis.length;j++){
           	downMenu[j].style.display="none";
           }
        downMenu[this.index].style.display="block";
         }
      lis[i].onmouseout=function(){
      	for(var j=0;j<lis.length;j++){
           	downMenu[j].style.display="none";
           }
      }
    // (function(n){
    // 	lis[n].onmouseover=function(){
    //        for(var j=0;j<lis.length;j++){
    //        	downMenu[j].style.display="none";
    //        }
    //     downMenu[n].style.display="block";
    //      }
    //   lis[n].onmouseout=function(){
    //   	for(var j=0;j<lis.length;j++){
    //        	downMenu[j].style.display="none";
    //        }
    //   }
    // })(i)
}

// var win=$(".banner-zhong")[0]
// var imags=$(".index_banner");
// var rou=$(".round");
// var IbnexL=$(".lbnextpre1")[0];
// var IbnexR=$(".lbnextpre2")[0];
// var num=0;
// var flag=true;
// //让图片跑起来
// var t=setInterval(move,1000);

// function move(){
//   if(!flag){
//   return;
//  }
//flag=false;
//   num++; //改变当前的下标
// if(num==imags.length){       //限定范围 0-7，超出7下标再变为0
//   num=0;
// }
// for(var i=0; i<imags.length; i++){
//   //所有imags的层级降低 圆为灰色
//   rou[i].src="./image/newbannerbg.png";
//   animate(imags[i],{opacity:0},500);
//  }
//   // 当前下标num的层级升高，圆变红
// animate(imags[num],{opacity:1},500);
// rou[num].src="./image/newbannerbg2.png";
// }


//   win.onmouseover=function(){ //移到窗口，轮播停止
//     clearInterval(t);
//   }
//   win.onmouseout=function(){ //移出窗口，轮播
//     clearInterval(t);
//     t=setInterval(move,1000);
//   }
//   //roun按钮 点击效果
//   for(var i=0;i<rou.length;i++){
//     rou[i].index=i;   //保存当前的i
//     rou[i].onclick=function(){
//       num=this.index;   //当前页赋值给Num
//       for(var j=0;j<imags.length;j++){
//         animate(imags[j],{opacity:0},500);
//         rou[j].src="./image/newbannerbg.png";
//       }
//       animate(imags[num],{opacity:1},500);
//       rou[num].src="./image/newbannerbg2.png";

//     }
//   }

//   IbnexR.onclick=function(){
//   move();
// }
//    IbnexL.onclick=function(){
//     num--;
//     if(num<0){
//       num=imags.length-1;
//     }
//     for(var i=0; i<imags.length; i++){
//   animate(imags[i],{opacity:0},500);
//   rou[i].src="./image/newbannerbg.png";

// }
//   animate(imags[num],{opacity:1},500);
// rou[num].src="./image/newbannerbg2.png";
//    }

// 图片无缝轮播


var win=$(".banner-zhong")[0]    //获取元素
var imags=$(".index_banner");    //获取图片
var rou=$(".round");              //获取圆点
var IbnexL=$(".lbnextpre1")[0];   //获取左右把手
var IbnexR=$(".lbnextpre2")[0];
var num=0;
var flag=true;   //解决轮播快速显示bug 
var index=0;
var imgW=parseInt(getStyle(imags[0],"width"));  //获取图片宽度
for(var i=0; i<imags.length;i++){  
     //让所有的图片都移到右边
  //    if(i==0){
  // continue;
  // }
  imags[i].style.left=imgW+"px";
  
}
imags[0].style.left=0+"px"               //让第一张图片显示
rou[0].src="./image/newbannerbg2.png";   //第一个按钮显示
var t=setInterval(move,1000);
win.onmouseover=function(){      //鼠标放上清除函数，暂停轮播
  clearInterval(t);
}
win.onmouseout=function(){      //鼠标移走函数继续运行
  clearInterval(t);
  t=setInterval(move,1000);
}
for(var i=0; i<rou.length;i++){     //for
  rou[i].index=i;              //用rou[i]的index来储存i的值
  rou[i].onclick=function(){
    for(var i=0; i<rou.length;i++){        //for让所有的rou圆变为灰色
      rou[i].src="./image/newbannerbg.png";
    }
    rou[this.index].src="./image/newbannerbg2.png";  //让点击的圆（index）变为红色
    imags[this.index].style.left=imgW+"px";         //让点击要出现的图片准备好
    animate(imags[index],{left:-imgW},600 );       //让当前index图片移出
    animate(imags[this.index],{left:0},600);        //让num图片进入
    index=num=this.index;                    // 点击后Num index 都为当前this.index
  }
}

IbnexR.onclick=function(){
  move();
}
IbnexL.onclick=function(){
  moveL();
}

function move(){
  if(!flag){    //  如果为假 证明门还是关的，直接返回 等执行完之后再处理
    return;     // 如果为真，证明函数已经执行完，可以进入
  }
flag=false;       //进入后改为false 也就是把门关上
  num++;    
  if(num==imags.length){    
    num=0;
  }
  imags[num].style.left=imgW+"px";  //让下一张图片到位准备轮播
  animate(imags[index],{left:-imgW},600,function(){  //让当前index图片移出
    flag=true;                  //利用回调函数返回true 证明门已开    
  });
  animate(imags[num],{left:0},600,function(){   //让num图片进入
    flag=true;
  });
    for(var i=0; i<imags.length;i++){
      rou[i].src="./image/newbannerbg.png";   //for使圆都变灰
    }
    rou[num].src="./image/newbannerbg2.png";  //让num图片，也就是当前图片变色
  index=num;           //因为num图片已经进入，所以num赋值给Index

}
function moveL(){
  if(!flag){
    return;
  }
flag=false;       //解决轮播快速显示bug
  num--;    
  if(num<0){    
    num=imags.length-1;
  }
  imags[num].style.left=imgW+"px";  //让下一张图片到位准备轮播
  animate(imags[index],{left:-imgW},600,function(){  //让当前index图片移出
    flag=true;         
  });
  animate(imags[num],{left:0},600,function(){   //让num图片进入
    flag=true;
  });
    for(var i=0; i<imags.length;i++){
      rou[i].src="./image/newbannerbg.png";   //for使圆都变灰
    }
    rou[num].src="./image/newbannerbg2.png";  //让num图片，也就是当前图片变色
  index=num;           //因为num图片已经进入，所以num赋值给Index

}





////////////////////////////////////////////////////////
var wintoday=$(".lb_today")[0];
var boxtoday=$(".box_today")[0];

var len=litoday.length;
var aW=parseInt(getStyle(as,"width"));
box.style.width=aW*len+"px";
var t;
t=setInterval(move,1000);
b
function move(){
  for(var i=0;i<2;i++){

  }
  animate(box,{left:-aW},function(){
  var first=getFirst(box);
  box.style.left=0+"px";
  box.appendChild(first);
  });

}

function move(){
  var first=getFirst(box);
  var last=getlast(box);
  box.style.left=-aW+"px";
  box.insertBefore(last,first);
  
  animate(box,{left:0},function(){

  });

}






}