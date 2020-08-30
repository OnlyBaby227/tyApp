const SEARCH = {
    getID: id => document.getElementById(id),                  //获取ELement 方法
    getClassName: cn => document.getElementsByClassName(cn),
    getTagName: tn => document.getElementsByTagName(tn),

    create : function(){
        let oBox = document.createElement('div');
        oBox.id = 'divBox';
        oBox.style.cssText = `position:fixed;
            top:3.666666rem;
            left : 0;
            width:100%;
            height: ${document.documentElement.clientHeight}px;
            background:#fff;
            z-index:99999999;
        `;
        document.body.style.overflow = 'hidden';
        if(this.getID('divBox')){

        }else{
            document.body.appendChild(oBox);
        }
        
    },
    remove : function(){
        console.log(1);
        this.getID('divBox').remove();
        document.body.style.overflow = '';
        this.changeBack(this.getID('h-nav'));
    },
    init : function() {
        let self = this;
        let searchBtn = this.getID('searchBox');
        let nav = this.getID('h-nav');
        let submitBtn = this.getID('submit')
        let cBack = this.getClassName('come-back')[0] || null;
        let news = nav.children[2];
        
        searchBtn.onclick = function(){
            this.children[1].value = "";
            cBack ? cBack.style.display = 'block' : '';
            submitBtn.style.display = 'block';
            news.style.display = 'none';
            self.create();
        }
        cBack ? (function(){cBack.onclick = function(){
            self.getID('divBox') ? self.getID('divBox').remove() : '';
            searchBtn.children[1].value = "请输入搜索内容";
            document.body.style.overflow = '';
            news.style.display = 'block';
            submitBtn.style.display = 'none';
            cBack ? cBack.style.display = 'none' : '';
        }}()) : '';
        submitBtn.onclick = function(){
            sessionStorage.setItem('goodsName',self.getID('search').value);
        }
    },
}
SEARCH.init();