/**
 * Created by janasiegle on 7/23/2015.
 */
 
window.onload = function() {
	var canvas = document.getElementById("canvas1");
	var stage = new createjs.Stage(canvas);
	
	var sentence = new createjs.Text();
	var sentence2 = new createjs.Text();

	//text properties
	sentence.text = "LightPoint";
	sentence2.text = "Development"
	sentence.font = "bold 80px 'Goudy Old Style'";
	sentence2.font = "bold 80px 'Goudy Old Style'";
	sentence.color = "#657036";
	sentence2.color = "#657036";	

	//text coordinates
	sentence.x = 225;
	sentence.y = 100;
	sentence2.x = 300;
	sentence2.y = 195;
	
	stage.addChild(sentence);
	stage.addChild(sentence2);
	stage.update();	

	//Let's add my star now

	var image = new Image();
            image.src = "img/nautStar.png";
            image.onload = handleImageLoad;        

        function handleImageLoad(event) {
            var image = event.target;
            var bitmap = new createjs.Bitmap(image);

            stage.addChild(bitmap);
            stage.update();
        }
}

/*+++++++++++++++++Let's fade in the site name++++++++++++++++*/
$(document).ready(function() { 
	$("#canvas1").fadeIn(2000);            
});

/*++++++++++++++++Let's make a hidden navigation set ++++++++++++++ */
$(document).ready(function(){
    $( '.menu-btn' ).click(function(){
    $('.hamburger').toggleClass('expand')
   })
 })

$(document).ready(function(){
	$( '#overlay').click(function(){
	overlay.appendTo(document.body)
	});
});

/*+++++++++++++++++Let's make a tagline++++++++++++++++*/
$().ready(function() {
	$(upArc).arctext({radius: 300})
	$(downArc).arctext({radius: 400, dir: -1});
});

/*+++++++++++++preLoad Images*/
$.preloadImages = function() {
  for (var i = 0; i < arguments.length; i++) {
    $("<img />").attr("src", arguments[i]);
  }
}

$.preloadImages("img/nautStar.png");

