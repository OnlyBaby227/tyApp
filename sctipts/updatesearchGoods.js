const UPDATEGOODS = {
    getID: id => document.getElementById(id),                  //获取ELement 方法
    getClassName: cn => document.getElementsByClassName(cn),
    getTagName: tn => document.getElementsByTagName(tn),

    judge : function(data,obj1){
        let self =this;
        let str = sessionStorage.getItem('goodsName');
        data.forEach(element => {
            if(str.indexOf(element.search) >= 0){
                element.goods.forEach(el => {
                    let oLi = document.createElement('li');
                    oLi.innerHTML = `<a href="javascript:;">
                    <div class="good-show">
                        <div class="pic" style="background-image : url(./images/${el.img})"></div>
                    </div>
                    <div class="good-info">
                        <p class="title">${el.title}</p>
                        <p class="price"><span class="cur-price">
                            <i>￥</i>${el.currPrice}
                        </span></p>
                       <div class="box-bottom">
                            <p class="volume">
                                月销量: <span class="number">${el.volume}</span>
                            </p>
                            <button class="add-car">
                                加入购物车
                            </button>
                       </div>
                    </div>
                </a>`;
                obj1.appendChild(oLi);
                })
            }
        });
        sessionStorage.removeItem('goodsName')
    },
    clickEvent : function(){
        let addBtn = this.getClassName('add-car');
        let gshow = this.getID('gshow')
        for (let i = 0; i < addBtn.length; i++) {
            const element = addBtn[i];
            element.onclick = function(){
                gshow.getElementsByClassName('pic')[0].style.backgroundImage = element.offsetParent.previousElementSibling.children[0].style.backgroundImage;
                gshow.getElementsByClassName('title')[0].innerHTML = element.offsetParent.children[0].innerHTML;
                gshow.getElementsByClassName('price')[0].innerHTML = element.offsetParent.children[1].innerHTML;
                gshow.style.display = 'block';
            }
        }
        this.getID('close').addEventListener('click',function(e){
            gshow.style.display = 'none';
        },true)
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
                self.judge(d,oGoodsList);
                self.clickEvent();
            }
        })
        
    }
    
}
UPDATEGOODS.init();