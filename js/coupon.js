function init(){
    let aBtn = document.getElementsByClassName('section-box-div-button');
    for (let i =0; i<aBtn.length; i++) {
        aBtn[i].onclick = function() {
            this.style.background = '#a3a3a3';
            this.innerHTML = '已领取'
        }
    }
}
init();