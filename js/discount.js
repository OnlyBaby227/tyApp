var n = 0;
var oul = document.getElementsByClassName('header-tow-ul')[0];
var oli = oul.getElementsByTagName('li');
var odiv = document.getElementsByClassName('section-box');
var obox = document.getElementsByClassName('orderbox')[0];
var odow = document.getElementsByClassName('section-shadow');
var obtn = document.getElementsByClassName('section-shadow-button');
var timer=0;//定时器  
var div = obox.children;
var Div = div[n];
var oLi = oli[0];
var oDiv = odiv[0];
function init() {
    oul.addEventListener('click',
    function(ev){
        var ev = ev || ev.window;
        var target = ev.target || ev.srcElement; 
        if(target.nodeName.toLowerCase() == 'li') {
            oDiv.classList.remove('block')  
            oLi.classList.remove('oli');
            target.classList.add('oli');
            odiv[target.dataset.index].classList.add('block');
            oLi = target;
            n = target.dataset.index;
            oDiv=odiv[n];
        }
    },true)
}   
init();

function mouseSlide() {
    let dx = null;
    let ux = null;
    obox.ontouchstart = function(){
        var event = event || window.event;
        dx = event.touches[0].pageX;
        obox.ontouchend = function(event){
            var event = event || window.event;
            ux = event.changedTouches[0].pageX; 
            if ((dx - ux) > 0 && n < div.length - 1) {
                n++;
                change();
            }else if((dx - ux) < 0 && n > 0){
                n--;
                change();
            }
        }
    }
    function change(){
        oDiv.classList.remove('block');
        div[n].classList.add('block');
        oLi.classList.remove('oli');
        oli[n].classList.add('oli');
        oDiv = div[n];
        oLi = oli[n];
    }
}
mouseSlide();

 
//开始按   
function gtouchstart(){   
    timer = setTimeout(longPress,500);//这里设置定时器，定义长按500毫秒触发长按事件，时间可以自己改，个人感觉500毫秒非常合适     
};   
//手释放，如果在500毫秒内就释放，则取消长按事件，此时可以执行onclick应该执行的事件   
function gtouchend(){   
    clearTimeout(timer);//清除定时器   
    if(timer!=0){   
        //这里写要执行的内容（尤如onclick事件）  
        for (let i = 0; i < odow.length; i++) {
            odow[i].style.display = "none"
        }  

    }      
};   
//如果手指有移动，则取消所有事件，此时说明用户只是要移动而不是长按   
function gtouchmove(){   
    clearTimeout(timer);//清除定时器   
    timer = 0;   
      
};   
   
//真正长按后应该执行的内容   
function longPress(){   
    timer = 0;
    for (let i = 0; i < odow.length; i++) {
        odow[i].style.display = "block"
    }
}   






