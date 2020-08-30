function Send() {
    let Obox = document.getElementsByClassName('content-box')[0]
    let OSend = document.getElementsByClassName('send')[0];
    let Otext=document.getElementsByClassName('text')[0];
    OSend.onclick = function () {
        let Omes=document.createElement('div');
        let Oleft=document.createElement('div');
        let Oright=document.createElement('div');
        let Oinfo=document.createElement('div');
        let Op=document.createElement('p');
        let Oimg=document.createElement('img');
        Obox.appendChild(Omes);
        Omes.appendChild(Oleft);
        Omes.appendChild(Oright);
        Oleft.appendChild(Op);
        Oleft.appendChild(Oinfo);
        Oright.appendChild(Oimg);
        Oimg.setAttribute('src', '../images/cat.png');
        Omes.classList.add('message');
        Oleft.classList.add('message-left');
        Oright.classList.add('message-right');
        Oinfo.classList.add('info');
        Op.innerHTML='小阿喵';
        Oinfo.innerHTML=Otext.value;
    }
  
}
Send();
