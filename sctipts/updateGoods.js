const UPDATEGOODS = {
    getID: id => document.getElementById(id),                  //获取ELement 方法
    getClassName: cn => document.getElementsByClassName(cn),
    getTagName: tn => document.getElementsByTagName(tn),

    judge : function(data,obj1,str){
        let self =this;
        let rushtime = this.getID('timers');
        let curtime = rushtime.children;
        for (let i = 0; i < curtime.length; i++) {
            const element = curtime[i];
            if(element.className == 'hot'){
                obj1.innerHTML = '';
                data.forEach((value) => {
                    if(value.activeTime == element.firstElementChild.innerHTML){
                        value.goods.forEach((val,ind)=>{
                            let goods = document.createElement('div');
                            goods.classList.add('goods');
                            goods.innerHTML = `<div class="goods-show">
                            </div>
                            <div class="goods-info">
                                <div class="goods-title">${val.title}</div>
                                <div class="price">
                                    <span class="cur-price"><i>￥</i>${val.currPrice}</span>
                                    <del class="del-price">￥${val.oldPrice}</del>
                                </div>
                                <div class="rushBtn">
                                    <h2 class="buy-now">马上抢</h2>
                                    <div class="bottom">
                                        <div class="slide">
                                            <div class="value"></div>
                                        </div>
                                        <span class="percent">60%</span>
                                    </div>
                                </div>
                            </div>`;
                            obj1.appendChild(goods);
                            self.getClassName('goods-show')[ind].style.backgroundImage = 'url(./images/'+val.img+')';
                        })
                    }
                });
                
            }
        }
    },
    tab : function(d,obj1){
        let self = this;
        let rushtime = this.getID('timers');
        let curtime = rushtime.children;
        let first = curtime[0];
        for (let i = 0; i < curtime.length; i++) {
            const element = curtime[i];
            element.onclick = function(){
                first.classList.remove('hot');
                this.classList.add('hot');
                first = this;
                self.judge(d,obj1);
            }
        }
    },
    init : function(str){
        let self = this;
        let oGoodsList = this.getID('goodsList');
        new Ajax({
            type: 'get',
            url: './api/goodsList.json',
            async: true,
            success: function (data) {
                let d = JSON.parse(data);
                self.judge(d,oGoodsList,str);
                self.tab(d,oGoodsList);
            }
        })
    }
    
}
UPDATEGOODS.init();