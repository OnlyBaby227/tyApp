!function(n){
   var e = n.document,
   t=e.documentElement,
   i=750,
   d=i/16,
   o="orienttationchange" in n ? "orienttationchange":"resize",
   a = function () { 
       var n = t.clientWidth || 320; 
       n>750&&(n=750);
    //    let fontsize = n/d<=13?13:n/d;
     let fontsize = parseInt(n/d);
       t.style.fontSize = fontsize+'px'
    };
    e.addEventListener&&(n.addEventListener(o,a,0),e.addEventListener('DOMContentLoaded',a,0))
}(window)