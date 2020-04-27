var drums= document.querySelectorAll(".drum");

for (var i=0; i<drums.length; i++ ){
  drums[i].addEventListener("click", function(){
    var buttonpressed=this.innerHTML;
    makesound(buttonpressed);
    animate(buttonpressed);

  });
}

document.addEventListener("keypress", function(){
  makesound(event.key);
  animate(event.key);
});


function animate(activekey){
  var activebutton=document.querySelector("." + activekey);
  activebutton.classList.add("pressed");
  setTimeout(function(){
    activebutton.classList.remove("pressed");
  }, 100);
}


 function makesound(key){
   if (key==="w"){
     var beat= new Audio("sounds/tom-1.mp3");
     beat.play();
   }
   else if (key==="a"){
     var beat= new Audio("sounds/tom-2.mp3");
     beat.play();
   }
   /**else if (key==="s"){
     var beat= new Audio("sounds/tom-3.mp3");
     beat.play();
   }**/
   else if (key==="d"){
     var beat= new Audio("sounds/tom-4.mp3");
     beat.play();
   }
   else if (key==="j"){
     var beat= new Audio("sounds/crash.mp3");
     beat.play();
   }
   else if (key==="k"){
     var beat= new Audio("sounds/snare.mp3");
     beat.play();
   }
   else if(key==="l"){
     var beat= new Audio("sounds/kick-bass.mp3");
     beat.play();
   }
   else{
     console.log(key);
   }
 }
