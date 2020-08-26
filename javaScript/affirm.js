function $(id) {
    return document.getElementById(id);
}
var oGo = $("go");
var oAffirm = $("affirm");
oGo.onclick = function () {
    location.href = "/settle.html"
}
oAffirm.onclick=function(){
    location.href = "/paid.html"
}