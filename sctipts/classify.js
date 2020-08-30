const CLASSIFY = {
    getID: id => document.getElementById(id),                  //获取ELement 方法
    getClassName: cn => document.getElementsByClassName(cn),
    getTagName: tn => document.getElementsByTagName(tn),
    setWidth: function (father, child) {
        father.style.width = (document.documentElement.clientWidth / 4 * child.length) + 150 + 'px';
    },
    create: function (obj1, data) {
        for (const val of obj1) {
            data.forEach((value, ind) => {
                let oli = document.createElement('li');
                oli.setAttribute('data-index', ind + 1);
                oli.dataset.text = value.kind;
                oli.innerHTML = `<a href="javascript:;">
                            ${value.kind}
                        </a>`;
                val.appendChild(oli);
            });
        }
    },
    change: function (obj1, data) {
        let self = this;
        let index = 0;
        for (const val of obj1) {
            let ali = val.children;
            for (let i = 0; i < ali.length; i++) {
                const element = ali[i];
                element.onclick = function () {
                    ali[index].classList.remove('selected');
                    index = this.getAttribute('data-index');
                    ali[index].classList.add('selected');
                    
                    self.update(data, this.dataset.text);
                }
            }
        }
    },
    update: function (data, tag = '全部') {
        let gS = this.getID('goodsShow');
        tag.innerHTML == "全部" ? (function () {
            creatEl();
        }()) : (function () {
            creatEl(tag);
        }())
        
        function creatEl(info) {
            gS.innerHTML = '';
            try{
                data.forEach((val) => {
                    if (val.kind == info) {
                        gS.innerHTML = '';
                        creatli(val.goods)
                        throw new Error('stop');
                    }else{
                        creatli(val.goods)
                    }
                })
            }catch(e){
                
            }
        };
        function creatli(el){
            let oLi = null
            el.forEach((value) => {
                oLi = document.createElement('li');
                oLi.innerHTML = `<a href="javascript:;">
                <div class="pic" style="background-image:url(./images/${value.img})">
                </div>
                <div class="sekcth">
                    ${value.name}
                </div>
            </a>`;
            // console.log(value.name);
            gS.appendChild(oLi);
            })
            
        }
    },
    init: function () {
        let self = this;
        let list = this.getClassName('list');
        let listnav = this.getID('list-nav');
        new Ajax({
            type: 'get',
            url: './api/goodkinds.json',
            async: true,
            success: function (data) {
                let d = JSON.parse(data);
                self.create(list, d);
                self.setWidth(listnav, d);
                self.change(list, d);
                self.update(d);
            }
        })
    }
}
CLASSIFY.init();
