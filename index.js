
var numberOfButton = document.querySelectorAll(".drum").length;     //.drum specfics the perticular drum button

for(var i=0;i<numberOfButton;i++){

    document.querySelectorAll("button")[i].addEventListener("click",function(){

        // console.log(this.style.color="white");
        // console.log(this.innerHTML="T");
        var buttonInnerHtml = this.innerHTML;
            makeSound(buttonInnerHtml);
            makeAnimation(buttonInnerHtml);
       }
    );
}

document.addEventListener("keypress",function(event){ 
    makeSound(event.key);
    makeAnimation(event.key);
});

function makeSound(key){
    
    switch (key) {
        case "w":
            var audio = new Audio("./sounds/tom-1.mp3");
            audio.play();
        break;
        
        case "a":
            var audio = new Audio("./sounds/tom-2.mp3");
            audio.play();
        break;
        case "s":
            var audio = new Audio("./sounds/tom-3.mp3");
            audio.play();
        break;
        case "d":
            var audio = new Audio("./sounds/tom-4.mp3");
            audio.play();
        break;
        case "j":
            var audio = new Audio("./sounds/snare.mp3");
            audio.play();
        break;
        case "k":
            var audio = new Audio("./sounds/kick-bass.mp3");
            audio.play();
        break;
        case "l":
            var audio = new Audio("./sounds/crash.mp3");
            audio.play();
        break;

        default:console.log(buttonInnerHtml);
}
}

function makeAnimation(currentKey){
    var activebutton = document.querySelector("."+currentKey);
    activebutton.classList.add("pressed");
    setTimeout(function(){
        activebutton.classList.remove("pressed");
    } , 100);
}