var n = 0;
var oul = document.getElementsByClassName('header-tow-ul')[0];
var oli = oul.getElementsByTagName('li');
var odiv = document.getElementsByClassName('section-box');
var obox = document.getElementsByClassName('orderbox')[0];
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