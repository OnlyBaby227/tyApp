
    function from(){
        let boxx = document.getElementById('box')
        let zhang = document.getElementById('zng');
        let mima = document.getElementById('mim');

        zhang.onchange=function (){
            let res = /^1[3|5|7|8][0-9]{9}$/;
            if(res.test(this.value)==false){
                boxx.innerHTML='账号输入错误';
            }
        }
        mima.onchange=function (){
            let res = /^[A-Za-z0-9]{8,16}$/;
            if(res.test(this.value)==false){
                boxx.innerHTML='密码不得少于8位数，请重新输入';
            }
        
        }
    }
    from()

    function zc(){
       
        let int = document.getElementsByTagName('input')[0];
        let int1 = document.getElementsByTagName('input')[1];
        let Btn = document.getElementById('btn');
        Btn.onclick = function(){
            if((int && int1).value == ""){
                Btn.setAttribute("disabled", true);
                Btn.style.background="#dadada";

            }else{
                Btn.removeAttribute("disabled");
                Btn.style.background="#ff9326";
                
            }
        }
    }
    zc()

    function pin(){
        let Pink = document.getElementById('pink');
        let svvg = document.getElementById('sg');
        console.log(svvg)
        let num = 1;
        Pink.onclick=function(){
            
            num++;
            if(num%2==0){
            Pink.style.border="1px solid #ff9326";
            svvg.style.display="block";
            }else{
                svvg.style.display="none";
                Pink.style.border="1px solid #999";
            }
           console.log(num)
        }
    }
    pin()

    function zc(){
       
        let int = document.getElementsByTagName('input')[0];
        let int1 = document.getElementsByTagName('input')[1];
        let Btn = document.getElementById('btn');
        Btn.onclick = function(){
            if((int && int1).value == ""){
                Btn.setAttribute("disabled", true);
                Btn.style.background="#dadada";
            }else{
                
                Btn.removeAttribute("disabled");
                Btn.style.background="#ff9326";
                window.location = "../html/personaldata.html";
            }
        }
    }
    zc()