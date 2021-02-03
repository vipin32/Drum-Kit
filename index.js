
//Total Drum Buttons
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

// Play Sound on mouse Click
for(var i=0; i<numberOfDrumButtons; i++)
{
  document.querySelectorAll('.drum')[i].addEventListener("click",function(){

    var buttonInnerHtml = this.innerHTML;

    makeSound(buttonInnerHtml);

    buttonAnimation(buttonInnerHtml);

  })

}

// Play Sound using Keyboard keys
document.addEventListener("keypress", function(event){
    makeSound(event.key);

    buttonAnimation(event.key);
});

//Function to play correct sound associated to buttons clicks using mouse or keyboard
function makeSound(key)
{

  switch (key)
  {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      var kickbass = new Audio("sounds/kick-bass.mp3");
      kickbass.play();
      break;

    default:
      console.log();

  }
}

//Animation function for buttons when they are clicked
function buttonAnimation(currentkey)
{
  //Adding Style class pressed from style.css
  document.querySelector("."+currentkey).classList.add("pressed");

  //Remove Style Class Pressed
  setTimeout(function(){
    document.querySelector("."+currentkey).classList.remove("pressed");
  },100);
}





// document.addEventListener("click", function(event){
//     console.log(event);
// })


// var audio = new Audio("sounds/tom-1.mp3");
// audio.play();
