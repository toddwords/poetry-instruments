Mousetrap.bind("q", function(){
	//your code here
})

Mousetrap.bind("enter", function(){
	//your code here
})

Mousetrap.bind("space", function(){
	//your code here
})

//bind same function to multiple keys
Mousetrap.bind(['a','s','d','f'], function(){
	//your code here
})


//some useful functions, we'll talk about these later

//multiple lines
function showText (text){
	$('body').append("<h1>"+text+"</h1>");
}

//single line
function showText2 (text){
	if($('#textZone').length == 0){
		$('body').append("<h1 id='textZone'>"+text+"</h1>");
	}
	else {
		$('#textZone').text(text);
	}
}
function playSound (id) {
    sound = $("#" + id)[0]
    if (sound.ended){sound.currentTime = 0};
    if (sound.currentTime > 0){
        sound.currentTime = 0
    } else {
        sound.play()
    }
}

function setBgImage(fileName){
	$("html").css('background-image', 'url('+fileName+')'); 
}