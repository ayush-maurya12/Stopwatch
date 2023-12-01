var isStop=true;
let ms=0;
let s=0;
let m=0;
let h=0;
function sTimer(){
    if(isStop==true){
      isStop=false;  
      timer();
    }
}

function timer(){
    if(isStop==false){
        ms=parseInt(ms);
        s=parseInt(s);
        m=parseInt(m);
        h=parseInt(h);
        ms++;
        if(ms==100){
            ms=0;
            s++;
        }
        if(s==60){
            s=0;
            m++;
        }
        if(m==60){
            m=0;
            h++;
        }
        if(ms<10){
            ms="0"+ms;
        }
        if(s<10){
            s="0"+s;
        }
        if(m<10){
            m="0"+m;
        }
        if(h<10){
            h="0"+h;
        }
        document.getElementById("showtime").innerText=h+":"+m+":"+s+":"+ms;
        setTimeout("timer()",10);
    }
}
function stop(){
    isStop=true;
}
function reset(){
    isStop=true;
    let ms=0;
    let s=0;
    let m=0;
    let h=0;
    document.getElementById("showtime").innerText="00:00:00:00";
}