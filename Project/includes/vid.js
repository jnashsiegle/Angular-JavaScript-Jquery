/**
 * Created by janasiegle on 7/23/2015.
 */

//var for videos

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


    
    

    




/*});
        value: 46,
        color:"#F7464A",
        highlight: "#FF5A5E",
        label: "Prostitution"
    },
    {
        value: 27,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "Domestic Servitude"
    },
    {
        value: 10,
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "Agriculture"
    },
    {
        value: 5,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "Factories"
    },
    {
        value: 12,
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "Misc"
    }
] */



