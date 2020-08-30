const SLIDERSHOW = {
    getID: id => document.getElementById(id),                  //获取ELement 方法
    getClassName: cn => document.getElementsByClassName(cn),
    getTagName: tn => document.getElementsByTagName(tn),
    index: 0,                   //索引
    btn_num:0,
    clearTimer: null,          //定时器
    setUlWidth: function (father, count) {            //设置ul 的宽
        father.style.width = (document.documentElement.clientWidth * (count+1)) + 'px';
    },
    creatElements: function (father, imgs) {
        let count = imgs.length;
        let frame = document.createDocumentFragment();
        let oul = document.createElement('ul');
        this.setUlWidth(oul, count);
        oul.classList.add('banlist');
        oul.id = 'banList';
        let oulbtn = document.createElement('ul');
        let cloneItem = null;
        oulbtn.classList.add('pageBtn');
        oulbtn.id = 'pageBtn';
        frame.appendChild(oul);
        frame.appendChild(oulbtn);
        for (let i = 0; i < count; i++) {
            let oLi = document.createElement('li');
            oLi.style.backgroundImage = 'url(./images/' + imgs[i] + ')';
            oLi.classList.add('item');
            let oLibtn = document.createElement('li');
            i == 0 ? (function(){
                cloneItem = oLi.cloneNode(true);
                oLibtn.classList.add('active');
            }()) : '';
            oul.appendChild(oLi);
            oulbtn.appendChild(oLibtn);
        }
        oul.appendChild(cloneItem);
        father.appendChild(frame);
    },
    autoPlay: function (oUl, aLi, aLiBtn) {
        let target = 0;
        this.btn_num = this.index;
        if (this.index > aLiBtn.length - 1) {
            oUl.style.left = - this.index * aLi[0].offsetWidth + 'px';
            this.index = 0;
            this.btn_num = 0;
        } 
        if (this.index < 0) {
            this.index = aLiBtn.length - 1;
            this.btn_num = this.index;
        }
        target = - this.index * aLi[0].offsetWidth;
        this.startMove(oUl, target, 'left'); 
        for (let i = 0; i < aLiBtn.length; i++) {
            aLiBtn[i].classList.remove('active');
        }
        
        aLiBtn[this.btn_num].classList.add('active');
        
    },
    ontouchMove: function (oUl, aLi, aLiBtn) {
        let self = this;
        let sx = 0;
        let ux = 0;
        let distance = 0;
        oUl.addEventListener('touchstart', function (e) {
            e = e || window.event;
            sx = e.changedTouches[0].clientX;
            e.preventDefault();
            clearInterval(self.clearTimer);
        }, true);
        oUl.addEventListener('touchmove', function (e) {
            e = e || window.event;
            clearInterval(self.clearTimer);
            distance = e.changedTouches[0].clientX - sx;
            oUl.style.transform = 'translateX(' + distance + 'px)';
        }, true);
        oUl.addEventListener('touchend', function (e) {
            e = e || window.event;
            ux = e.changedTouches[0].clientX;
            if ((ux - sx) < - aLi[0].offsetWidth / 3) {
                self.index++;
                self.autoPlay(oUl, aLi, aLiBtn);
            } else if ((ux - sx) > aLi[0].offsetWidth / 3) {
                self.index--;
                self.autoPlay(oUl, aLi, aLiBtn);
            }
            self.clearTimer = setInterval(() => {
                self.index++;
                self.autoPlay(oUl, aLi, aLiBtn);
            }, 3000);
            oUl.style.transform = 'translateX(0px)';
        }, true);
    },

    init: function () {
        let self = this;
        let imgs = null;
        let banner = this.getClassName('banner')[0];
        new Ajax({
            type: 'get',
            url: './api/banner.json',
            async: true,
            success: function (data) {
                var d = JSON.parse(data);
                imgs = d[0].img;
                self.creatElements(banner, imgs);
                let oUl = self.getID('banList'),
                    aLi = oUl.children,
                    oUlBtn = self.getID('pageBtn'),
                    aLiBtn = oUlBtn.children;
                self.clearTimer = setInterval(() => {
                    self.index++;
                    self.autoPlay(oUl, aLi, aLiBtn);
                }, 3000);
                self.ontouchMove(oUl, aLi, aLiBtn);
            }
        })


    },
    getStyle: function (obj, name) {
        if (obj.currentStyle) {
            return obj.currentStyle[name];
        }
        else {
            return getComputedStyle(obj, name)[name];
        }
    },
    startMove: function (obj, target, direction, elfn, velocity) {
        var self = this;
        clearInterval(obj.timer);
        let cur = '';
        obj.timer = setInterval(function () {
            if (direction == 'opacity') {
                cur = Math.round(parseFloat(self.getStyle(obj, direction)) * 100);
            } else {
                cur = parseInt(self.getStyle(obj, direction));
            }
            let speed = (cur < target ? velocity : -velocity) || (target - cur) / 5;
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
            if (cur === target || Math.abs(target - cur) < Math.abs(velocity)) {
                obj.style[direction] = cur + Math.abs(target - cur) + 'px';
                clearInterval(obj.timer);
                elfn ? elfn() : '';
            } else {
                if (direction == 'opacity') {
                    obj.style.filter = 'alpha(opacity:' + (cur + speed) + ')';
                    obj.style.opacity = (cur + speed) / 100;
                } else {
                    obj.style[direction] = cur + speed + 'px';
                }
            }
        }, 30);
    }
};

SLIDERSHOW.init();