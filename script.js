function changeBackground(background){
    document.getElementById("background").src = "img/"+ background+".png"
   }
   
   function changeMe(me){
    document.getElementById("me").src = "img/"+ me+".png"
   }
   
   function changeCompanion(companion){
    document.getElementById("companion").src = "img/"+ companion+".png"
   }
   
   function changeHousing(housing){
    document.getElementById("housing").src = "img/"+ housing+".png"
   }
   
   function changeWeather(weather){
    document.getElementById("weather").src = "img/"+ weather+".png"
   }
   
   function changeEquipment(equipment){
    document.getElementById("equipment").src = "img/"+ equipment+".png"
   }
   
   function initAudio(){
       var audio, dir, ext, surround;
       dir = "audio/";
       ext = ".mp3";
       // Audio Object
       audio = new Audio();
       //audio.src = dir+"beach"+ext;
       //audio.play();
       // Event Handling
       surround = document.getElementById("surround");
       surround.addEventListener("change", changeTrack);
       // Functions
       function changeTrack(event){
           audio.src = dir+event.target.value+ext;
       audio.loop = true
           audio.play();
       }
   }
   window.addEventListener("load", initAudio);