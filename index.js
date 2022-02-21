document.querySelectorAll(".drum")[0].addEventListener("click",function(){
    var sound=new Audio("sounds/crash.mp3");
    sound.play();
})
document.querySelectorAll(".drum")[1].addEventListener("click",function(){
    var sound=new Audio("sounds/kick-bass.mp3");
    sound.play();
})
document.querySelectorAll(".drum")[2].addEventListener("click",function(){
    var sound=new Audio("sounds/snare.mp3");
    sound.play();
})
document.querySelectorAll(".drum")[3].addEventListener("click",function(){
    var sound=new Audio("sounds/tom-1.mp3");
    sound.play();
})
document.querySelectorAll(".drum")[4].addEventListener("click",function(){
    var sound=new Audio("sounds/tom-2.mp3");
    sound.play();
})
document.querySelectorAll(".drum")[5].addEventListener("click",function(){
    var sound=new Audio("sounds/tom-3.mp3");
    sound.play();
})
document.querySelectorAll(".drum")[6].addEventListener("click",function(){  
    var sound=new Audio("sounds/tom-4.mp3");
    sound.play();
})

document.addEventListener("keydown",function(e){
    if(e.key==='w'||e.key==='W'){
        var sound=new Audio("sounds/crash.mp3");
        sound.play();
    }
})
document.addEventListener("keydown",function(e){
    if(e.key==='a'||e.key==='A'){
        var sound=new Audio("sounds/kick-bass.mp3");
    sound.play();
    }
})
document.addEventListener("keydown",function(e){
    if(e.key==='s'||e.key==='S'){
        var sound=new Audio("sounds/snare.mp3");
        sound.play();
    }
})
document.addEventListener("keydown",function(e){
    if(e.key==='d'||e.key==='D'){
        var sound=new Audio("sounds/tom-1.mp3");
        sound.play();
    }
})
document.addEventListener("keydown",function(e){
    if(e.key==='j'||e.key==='J'){
        var sound=new Audio("sounds/tom-2.mp3");
        sound.play();
    }
})
document.addEventListener("keydown",function(e){
    if(e.key==='k'||e.key==='K'){
        var sound=new Audio("sounds/tom-3.mp3");
        sound.play();
    }
})
document.addEventListener("keydown",function(e){
    if(e.key==='l'||e.key==='L'){
        var sound=new Audio("sounds/tom-4.mp3");
        sound.play();
    }
})