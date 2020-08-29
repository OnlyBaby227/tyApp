function $(id){
    return document.getElementById(id);
}
var oPic=$("pic");
var oLook=$("look");
oLook.addEventListener('click',function(){
    location.href="/details.html"
})
oPic.onclick=function(){
    location.href="/affirm.html"
}