
    function from(){
        let boxx = document.getElementById('box')
        let zhang = document.getElementById('zng');
        let mima = document.getElementById('mim');
        let mimas = document.getElementById('mims');

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
        mimas.onchange=function (){
            if(mimas.value!==mima.value){
                boxx.innerHTML='两次密码输入不一致，请重新输入';
            }
        }
        
    }
    from()

 
        
    
    function test(){
        let mytime = 60;
        let Time = document.getElementById('time');
        let clear = null;
        Time.onclick=function(){
            Time.disabled= true;
            clear = setInterval(function() {
                mytime -- ;
                Time.innerHTML = mytime + "秒";
                if(mytime == '0') {
                    clearInterval(clear);
                    Time.innerHTML ="获取验证码";
                    Time.disabled=false;
                    mytime = 60;
                }
            
            }, 1000);
            
        }
 
    
    }
    test()

    function zc(){
       
        let int = document.getElementsByTagName('input')[0];
        let int1 = document.getElementsByTagName('input')[1];
        let int2 = document.getElementsByTagName('input')[2];
        let int3 = document.getElementsByTagName('input')[3];
        let cover = document.getElementById('cov');
        console.log(cover);
        let Btn = document.getElementById('btn');
        Btn.onclick = function(){
            if((int && int1 && int2 && int3).value == ""){
                Btn.setAttribute("disabled", true);
                Btn.style.background="#dadada";
            }else{
                
                Btn.removeAttribute("disabled");
                Btn.style.background="#ff9326";
                cover.style.display="block";
            }
        }
    }
    zc()

    function cover(){
        let cover = document.getElementById('cov');
        let Qu = document.getElementById('qu');
        let Cha = document.getElementById('cha');
        Qu.onclick=function(){
            cover.style.display="none";
        }
        Cha.onclick=function(){
            cover.style.display="none";
        }
    }
    cover()