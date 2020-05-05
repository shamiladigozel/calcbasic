let emeliyyat="";


function faiz(){
    document.getElementById("tarixce").innerText+="%";
    emeliyyat+="%";
   
}
function C(){

    document.getElementById("tarixce").innerText="";
    document.getElementById("cavab").innerText="0";
}
function Bol(){
    document.getElementById("tarixce").innerText+="/";
    emeliyyat+="/";
}
function yedditopla(){

    document.getElementById("tarixce").innerText+="7";
    emeliyyat+="7";

}
function sekkiztopla(){

    document.getElementById("tarixce").innerText+="8";
    emeliyyat+="8";
    
}
function doqquztopla(){

    document.getElementById("tarixce").innerText+="9";
    emeliyyat+="9";
}
function Vur(){
    document.getElementById("tarixce").innerText+="x";
    emeliyyat+="*";
}
function dordtopla(){

    document.getElementById("tarixce").innerText+="4";
    emeliyyat+="4";

}
function bestopla(){

    document.getElementById("tarixce").innerText+="5";
    emeliyyat+="5";
    
}
function altitopla(){

    document.getElementById("tarixce").innerText+="6";
    emeliyyat+="6";
}
function Cix(){
    document.getElementById("tarixce").innerText+="-";
    emeliyyat+="-";
}
function birtopla(){

    document.getElementById("tarixce").innerText+="1";
    emeliyyat+="1";

}
function ikitopla(){

    document.getElementById("tarixce").innerText+="2";
    emeliyyat+="2";
    
}
function uctopla(){

    document.getElementById("tarixce").innerText+="3";
    emeliyyat+="3";
}
function Topla(){
    document.getElementById("tarixce").innerText+="+";
    emeliyyat+="+";
}
function sifirtopla(){

    document.getElementById("tarixce").innerText+="0";
    emeliyyat+="0";
    
}
function vergultopla(){

    document.getElementById("tarixce").innerText+=",";
    emeliyyat+=".";
}
function Netice(){
    document.getElementById("cavab").innerText=eval(emeliyyat);
    emeliyyat=document.getElementById("cavab").innerText;
   
    
}