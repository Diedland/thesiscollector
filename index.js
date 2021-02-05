window.onload = function main(){

var tori = document.getElementById("tori");

var irodalom = document.getElementById("irodalom");

var matek = document.getElementById("matek");

var nyelvtan = document.getElementById("nyelvtan");

var targyak = new Array(tori,irodalom,matek,nyelvtan);


function transition(targy){
    
    for (let i = 0; i<targyak.length;i++){
        if(targyak[i] == targy){
            targy.style.width = "55%";
            targy.style.transition = "width 1s";
        }else
        targyak[i].style.width= "15%";
        targyak[i].style.transition = "width 1s";

    }


}


tori.addEventListener("click", function(){transition(this)});
irodalom.addEventListener("click" ,function(){transition(this)});
nyelvtan.addEventListener("click", function(){transition(this)});
matek.addEventListener("click", function(){transition(this)});
}