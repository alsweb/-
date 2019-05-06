
//实现商品信息局部刷新
var shangpin=document.getElementById("shangpin-ul").getElementsByTagName("li");
var goods=document.getElementById("goodslist").getElementsByTagName("ul");
var goodstidai=document.getElementsByClassName("scrollgood");

addclick(shangpin,"seckill","");


function addclick(biaoqian,classnact,classnsleep){//给指定标签添加click函数
    
    for(var i=0;i<biaoqian.length;i++){
        /*biaoqian[i].addEventListener("click",function(){
            active(biaoqian,classnact,classnsleep);
        });//只能这样通过匿名方法来传参？因为active函数不再由标签调用，所以用this无法表示标签
        */
       //biaoqian[i].onclick=active(biaoqian,"seckill","");//传递参数时都会执行？
       //biaoqian[i].addEventListener("click",active(biaoqian,"seckill",''));
        biaoqian[i].addEventListener("click",function(){
            for(var i=0;i<biaoqian.length;i++){
                if(biaoqian[i]===this){
                    biaoqian[i].className=classnact;
                    //console.log(this.getAttribute("lei"));
                    for(var k=0;k<goods.length;k++){//用i会有bug
                        if(goods[k].id==this.getAttribute("lei")){
                            //console.log("hallo");
                            goods[k].className="clearfloat goods-active";
                            
                        }
                        else
                        goods[k].className="clearfloat";

                    }
                    
                }     
                
                else{
                biaoqian[i].className=classnsleep;

                }
                }
        });
    }

}

/*function active(biaoqian,classnact,classnsleep){//负责点击激活事件
    //console.log(this);//this返回li，到底this是指啥？因为该方法是li调用的，所以是指li
    for(var i=0;i<biaoqian.length;i++){
        if(biaoqian[i]===this)      
        biaoqian[i].className=classnact;
        else
        biaoqian[i].className=classnsleep;

    }

}*/


//实现商品导航栏上浮

var shangpin=document.getElementById("shangpin");

window.onscroll=function(){//好像属性调用函数只能用匿名函数
    var j=document.documentElement.scrollTop;
    if(j>=260)
    {
    shangpin.className="shangpin-nav scroll";
    goodstidai[0].className="scrollgood scrollactive";
    }
    else
    {
    shangpin.className="shangpin-nav";
    goodstidai[0].className="scrollgood";

    }

    
}



