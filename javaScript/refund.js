function $(id) {
    return document.getElementById(id);
}


var oClose = $("close");
var oSmall = $("small");
var oItems = $("items");
var oShade = $("shade");
var oGo=$("go");
var oSubmit = $("submit");
var a = 0;

function cause() {
    var pic=document.getElementsByClassName("pic")[0];
    var noPic=document.getElementsByClassName("noPic")[0];
    var right = document.getElementsByClassName("right")[0];
    var cause = document.getElementsByClassName("cause")[0];
    var lis = oItems.querySelector('ul').querySelectorAll('li');
    for (let i = 0; i < lis.length; i++) {
        lis[i].onclick = function () {
            oSmall.innerHTML = lis[i].querySelector('h5').innerText;
            cause.style.display = "none";
            oShade.style.display="none";
            for (let j = 0; j < lis.length; j++) {
                lis[j].children[1].className="noPic"; 
            }
            this.children[1].className="pic";
        }
    }
    right.addEventListener('click', function () {
        a++;
        if (a % 2 == 1) {
            cause.style.display = "inherit";
            cause.style.transform = "translateY(0px)";
            cause.style.transition = "all .7s"
            oShade.style.display="block";
        } else{
            cause.style.display = "block";
            cause.style.transform = "translateY(0px)";
            cause.style.transition = "all .7s"
            oShade.style.display="block";
        }
    })
    oClose.onclick = function () {
        cause.style.display = "none";
        oShade.style.display="none";
    }
    oGo.onclick=function(){
        location.href="/details.html"
    }
    oSubmit.onclick=function(){
        location.href="/last.html"
}
}
cause()