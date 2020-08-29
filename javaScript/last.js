function $(id) {
    return document.getElementById(id);
}
var oTime = $('time');
var oPic = $('pic');
function getNow() {
    oPic.onclick=function(){
        location.href="/refund.html"
    }
    function zero(n){
        return n=n<10?'0'+n:n;
    }
    setInterval(function () {
        var clock = new Date('2020/09/02,17:20:40');
        var date = new Date;
        var a = clock.getTime() - date.getTime();
        var fall = Math.floor(a / 1000);
        var day = Math.floor(fall / 60 / 60 / 24 % 30);
        var hours = zero(Math.floor(fall / 60 / 60 % 24));
        var minute = zero(Math.floor(fall / 60 % 60));
        var second = zero(Math.floor(fall % 60));
        oTime.innerHTML = (day + '天' + hours + '时' + minute + '分' + second + '秒')

    }, 1000);
}
getNow()