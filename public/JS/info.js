document.querySelector("#a").addEventListener("click", function(){
    document.querySelector("#info1").style.display = "block";
    document.querySelector("#info2").style.display = "none";
    document.querySelector("#info3").style.display = "none";
    document.querySelector("#info4").style.display = "none";
    document.querySelector("#info5").style.display = "none";
});

document.querySelector("#b").addEventListener("click", function(){
    document.querySelector("#info1").style.display = "none";
    document.querySelector("#info2").style.display = "block";
    document.querySelector("#info3").style.display = "none";
    document.querySelector("#info4").style.display = "none";
    document.querySelector("#info5").style.display = "none";
});

document.querySelector("#c").addEventListener("click", function(){
    document.querySelector("#info1").style.display = "none";
    document.querySelector("#info2").style.display = "none";
    document.querySelector("#info3").style.display = "block";
    document.querySelector("#info4").style.display = "none";
    document.querySelector("#info5").style.display = "none";
});

document.querySelector("#d").addEventListener("click", function(){
    document.querySelector("#info1").style.display = "none";
    document.querySelector("#info2").style.display = "none";
    document.querySelector("#info3").style.display = "none";
    document.querySelector("#info4").style.display = "block";
    document.querySelector("#info5").style.display = "none";
});

document.querySelector("#e").addEventListener("click", function(){
    document.querySelector("#info1").style.display = "none";
    document.querySelector("#info2").style.display = "none";
    document.querySelector("#info3").style.display = "none";
    document.querySelector("#info4").style.display = "none";
    document.querySelector("#info5").style.display = "block";
});