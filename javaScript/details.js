function $(id){
    return document.getElementById(id);
}
var more=$('more');
var relation=$('relation');
var go=$('go');
var oBtn=$('btn');
var a=0;
go.onclick=function(){
    location.href="/paid.html"
}
more.addEventListener('touchstart',function () {
    a++;
    if(a%2==1){
        relation.style.display="block";
    }else{
        relation.style.display="none";
    }
})
oBtn.addEventListener('click',function(){
    location.href='/refund.html';
})
