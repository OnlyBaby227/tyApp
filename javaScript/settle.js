function $(id) {
    return document.getElementById(id);
}

function show() {
    var i = 0;
    var admin = $("admin");
    var oMinus = $("minus");
    var oNum = $("num");
    var oPlus = $("plus");
    var oPrice = $("price");
    var oDel=$("del");
    var itemOne = document.getElementsByClassName("item")[0];
    var itemTwo = document.getElementsByClassName("item2")[0];
    admin.onclick = function () {
        i++;
        if (i % 2 == 1) {
            admin.innerText = "完成";
            itemOne.style.display = "none";
            itemTwo.style.display = "flex";
        } else {
            admin.innerText = "管理";
            itemOne.style.display = "flex";
            itemTwo.style.display = "none";
        }

    }
    oMinus.onclick = function () {
        oNum.innerText--;
        if (oNum.innerText <= 0) {
            oMinus.style.background = "red";
            oNum.innerText = 0;
            oPrice.innerText = '￥' + 98.9 * Number(oNum.innerText);
        } else {
            oMinus.style.background = "white";
            oPrice.innerText = '￥' + (98.9 * Number(oNum.innerText)).toFixed(1);
        }
    }
    oPlus.onclick = function () {
        oNum.innerText++;
        if (oNum.innerText <= 0) {
            oMinus.style.background = "red";
            oNum.innerText = 0;

        } else {
            oPrice.innerText = '￥' + (98.9 * Number(oNum.innerText)).toFixed(1);
            oMinus.style.background = "white";
        }
    }
    var check = $("check");
    check.onclick = function () {
        i++;
        if (i % 2 == 1) {
            this.style.backgroundImage = 'url(../images/no.png)';
            oPrice.innerText = '￥' + 0 ;
        }else{
            this.style.backgroundImage = 'url(../images/check.png)';
            oPrice.innerText = '￥' + (98.9 * Number(oNum.innerText)).toFixed(1);
        }
        
    }
    var oShop=$("shop");
        var oLi=oShop.querySelector('ul').querySelectorAll('li')
        // console.log(oLi);
        oDel.onclick=function(){
            i++;
            if(i % 2 == 0){
                oLi[0].remove();
                oPrice.innerText = '￥' + 0 ;
            }else{
                oLi[1].remove();
                oPrice.innerText = '￥' + 0 ;
            }
        }
        var oSettle=$("settle");
        oSettle.onclick=function(){
            location.href="/affirm.html"
        }
}
show()