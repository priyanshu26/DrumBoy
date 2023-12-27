
// Detected all the clicks...
for(let i=0;i<(document.querySelectorAll(".drum").length); i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
        let nameOfEvent = this.innerHTML;

        makeSound(nameOfEvent);
        buttonAnimation(nameOfEvent);
    });
}

//detected all the keyboard press.....
document.addEventListener("keypress", function(event){
    eventKey = event.key;

    makeSound(eventKey);
    buttonAnimation(eventKey);
    
});


function makeSound(key){
    switch (key) {
        case "w":
            let aud2 = new Audio("./sounds/tom-1.mp3");
            aud2.play();
            break;
        case "a":
            let aud3 = new Audio("./sounds/tom-2.mp3");
            aud3.play();
            break;
        case "s":
            let aud4 = new Audio("./sounds/tom-3.mp3");
            aud4.play();
            break;
        case "d":
            let aud5 = new Audio("./sounds/tom-4.mp3");
            aud5.play();
            break;
        case "j":
            let aud6 = new Audio("./sounds/snare.mp3");
            aud6.play();
            break;
        case "l":
            let aud7 = new Audio("./sounds/kick-bass.mp3");
            aud7.play();
            break;
        case "k":
            let aud1 = new Audio("./sounds/crash.mp3");
            aud1.play();
            break;
        default:
            console.log(nameOfEvent);
    }
}


function buttonAnimation(valueKey){
    let buttonStyle = document.querySelector("."+valueKey);

    buttonStyle.classList.add("pressed");

    setTimeout(function(){
        buttonStyle.classList.remove("pressed");
    }, 200);
}


//For playing Audio.....
// let audioPlay = new Audio("./sounds/tom-1.mp3");
// audioPlay.play();
