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

//show multiple lines of text
function showText (text){
	$('#textDiv').append("<h1>"+text+"</h1>");
	//scrolls to the bottom
	$('#bottom')[0].scrollIntoView(false);

}

//show single line
function showText2 (text){
	if($('#mainText').length == 0){
		$('textDiv').append("<h1 id='mainText'>"+text+"</h1>");
	}
	else {
		$('#textZone').text(text);
	}
}
function typeText(string, container, speed) {
    var c = 0;
    $(container).append('<h1></h1>');
    var dest = $('h1:last')[0]; 
    var i = setInterval(function () { //basically a while loop with a delay between each iteration
        if (c >= string.length) {
            $(dest).html(string);
            clearInterval(i);
        } else {
            $('<span>').text(string[c]).
            appendTo(dest);
            c += 1;
        }
    }, speed); //this is the delay in milliseconds between each character, increase to slow down, decrease to speed up
};
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