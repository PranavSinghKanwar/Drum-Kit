var arr = document.getElementsByClassName("drum");

function f(cc){
    if(cc == 'w'){
        var aud = new Audio('sounds/tom-1.mp3');
        aud.play();
    }
    if(cc == 'a'){
        var aud = new Audio('sounds/tom-2.mp3');
        aud.play();
    }
    if(cc == 's'){
        var aud = new Audio('sounds/tom-3.mp3');
        aud.play();
    }
    if(cc == 'd'){
        var aud = new Audio('sounds/tom-4.mp3');
        aud.play();
    }
    if(cc == 'j'){
        var aud = new Audio('sounds/snare.mp3');
        aud.play();
    }
    if(cc == 'k'){
        var aud = new Audio('sounds/crash.mp3');
        aud.play();
    }
    if(cc == 'l'){
        var aud = new Audio('sounds/kick-bass.mp3');
        aud.play();
    }
}

function animate(cc){
    var curButton = document.querySelector('.' + cc);
    curButton.classList.add("pressed");

    setTimeout(function(){
        curButton.classList.remove("pressed");
    }, 100);
}

for(let i=0; i<arr.length; ++i){
    arr[i].addEventListener("click", function() {
        var cc = this.innerText;
        f(cc);

        animate(cc);        
    })
}

document.addEventListener("keydown", function(event) {
    var cc = event.key;
    f(cc);

    animate(cc);
})