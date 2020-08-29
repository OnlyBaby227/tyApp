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
    var oDel = $("del");
    var oShop = $("shop");
    var check = $("check");
    var checkTwo = document.getElementsByClassName('check')[1];
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

    function entrust() {
        var li = oShop.children[0].querySelectorAll('li')[0];
        var li2 = oShop.children[0].querySelectorAll('li')[1];
        li.onclick = function (ev) {
            i++;
            var ev = ev || window.event;
            var target = ev.target || ev.srcElement;
            if (target.className.toLowerCase() == 'check' && i % 2 == 1) {
                check.style.backgroundImage = 'url(../images/no.png)';
                oPrice.innerText = '￥' + 0;
            } else {
                check.style.backgroundImage = 'url(../images/check.png)';
                oPrice.innerText = '￥' + (98.9 * Number(oNum.innerText)).toFixed(1);
            }
        }
        li2.onclick = function (ev) {
            i++;
            var ev = ev || window.event;
            var target = ev.target || ev.srcElement;
            if (target.className.toLowerCase() == 'check' && i % 2 == 0) {
                checkTwo.style.backgroundImage = 'url(../images/no.png)';
                oPrice.innerText = '￥' + 0;
            } else {
                checkTwo.style.backgroundImage = 'url(../images/check.png)';
                oPrice.innerText = '￥' + 130;
            }
        }
    }
    entrust()
    var oLi = oShop.querySelector('ul').querySelectorAll('li')
    oDel.onclick = function () {
        i++;
        if (i % 2 == 0) {
            oLi[0].remove('li');
            oPrice.innerText = '￥' + 0;
        } else {
            confirm("请选择要删除的物品");
        }

    }

    var oSettle = $("settle");
    oSettle.onclick = function () {
        location.href = "/affirm.html"
    }
}
show()