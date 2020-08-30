function Serive() {
    this.Oter=document.getElementById('footer');
    this.OFoot = document.getElementsByClassName('footer-box')[0];
    this.Obox=document.getElementsByClassName('content-box')[0]
    this.OSound = document.getElementsByClassName('sound')[0];
    this.OSend = document.getElementsByClassName('send')[0];
    this.clickBtn();
    console.log(this);
}
Serive.prototype.clickBtn = function () {
    var me = this;
    var n = 1;
    var j = 1;
    this.OSound.onclick = function () {
        n++;
        if (n % 2 == 0) {
            me.OSend.style.display = 'none';
            me.OAdd = document.createElement('div');
            me.Oimg = document.createElement('img');
            me.OFoot.appendChild(me.OAdd);
            me.OAdd.classList.add('add');
            me.OAdd.appendChild(me.Oimg);
            me.Oimg.setAttribute('src', '../images/add.png');
            me.OAdd.onclick = function () {
                j++;
                if(j%2==0){
                    me.Oimg.setAttribute('src', '../images/remove.png');
                    me.Ohide=document.createElement('div');
                    me.cm=document.createElement('div');
                    me.pic=document.createElement('div');
                    me.vid=document.createElement('div');
                    me.aimg=document.createElement('img');
                    me.bimg=document.createElement('img');
                    me.cimg=document.createElement('img');
                    me.Oter.appendChild(me.Ohide);
                    me.Ohide.classList.add('pop');
                    me.Ohide.appendChild(me.cm);
                    me.Ohide.appendChild(me.pic);
                    me.Ohide.appendChild(me.vid);
                    me.cm.classList.add('camera');
                    me.pic.classList.add('picture');
                    me.vid.classList.add('video');
                    me.cm.appendChild(me.aimg);
                    me.pic.appendChild(me.bimg);
                    me.vid.appendChild(me.cimg);
                    me.aimg.setAttribute('src', '../images/camera.png');
                    me.bimg.setAttribute('src', '../images/photo.png');
                    me.cimg.setAttribute('src', '../images/video.png');
                    me.Obox.style.height='56rem';
                }else{
                    me.Oimg.setAttribute('src', '../images/add.png');
                    me.Oter.removeChild(me.Ohide);
                    me.Obox.style.height='66rem';
                }
            }
        } else {
            me.OSend.style.display = 'block';
            me.OFoot.removeChild(me.OAdd);
        }
    }
}

var ser = new Serive();