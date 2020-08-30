

function ss(){
    let fot1 =document.getElementsByClassName('font')[0];
    let fot2 =document.getElementsByClassName('font')[1];
    let fot3 =document.getElementsByClassName('font')[2];
    let cover = document.getElementById('cov');
    let baa = document.getElementById('covo');
    let caa = document.getElementById('covt');
    fot1.onclick=function(){
        caa.style.display="block"
    }
    fot2.onclick=function(){
        baa.style.display="block"
    }
    fot3.onclick=function(){
        cover.style.display="block"
    }
}
ss()



function cer(){
    let caa = document.getElementById('covt');
    let abb = document.getElementById('btns');
    let Cha = document.getElementById('cas');
    let tex = document.getElementsByTagName('textarea')[1];
    let fot = document.getElementsByClassName('font')[0];
    abb.onclick=function(){
        caa.style.display="none";
        fot.innerHTML=tex.value;
        console.log(tex.value);
    }
    Cha.onclick=function(){
        caa.style.display="none";
    }
}
cer()



function cov(){
    let baa = document.getElementById('covo');
    let fot = document.getElementsByClassName('font')[1];
    let sex =document.getElementsByClassName('chao');
    console.log(sex);
    for(let i=0;i<sex.length;i++){
        sex[i].onclick=function(){
            baa.style.display="none";
            fot.innerHTML= sex[i].innerHTML
        }
    }
}
cov()




function cover(){
    let cover = document.getElementById('cov');
    let Btn = document.getElementById('btn');
    let Cha = document.getElementById('cha');
    let tex = document.getElementsByTagName('textarea')[0];
    let fot = document.getElementsByClassName('font')[2];
    Btn.onclick=function(){
        cover.style.display="none";
        fot.innerHTML=tex.value;
    }
    Cha.onclick=function(){
        cover.style.display="none";
    }
}
cover()

