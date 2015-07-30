/**
 * Created by janasiegle on 7/23/2015.
 */

 function clicked(){
    var vid = document.getElementById("vid");
    var button = document.getElementById("vidBtn");   
    var muteBtn = document.getElementById("muteBtn");

        if(vid.paused){
            vid.play();
            button.textContent = "||";
        }else{
            vid.pause();
            button.textContent = ">";
        }
    }
    function pauseToggle(){
        if(vid.paused){
            vid.play();
        }else{
            vid.pause();
        }
    }    
    function vidmute(){
        if(vid.muted){
            vid.muted = false;
            muteBtn.innerHTML = "Mute";
        }else{
            vid.muted = true;
            muteBtn.innerHTML = "Unmute";
        }
    }


    
    

    







