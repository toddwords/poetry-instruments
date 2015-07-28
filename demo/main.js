//multiple lines of text
Mousetrap.bind("q", function(){
    showText("hello")
})
Mousetrap.bind("w", function(){
    showText("world")
})
//  change the same text zone
Mousetrap.bind("e", function(){
    showText2("hey what's up")
})
Mousetrap.bind("r", function(){
    showText2("how are you")
})
//  add text letter by letter
Mousetrap.bind("t", function(){
    typeText("i'm saying something very important", 300)
})
//  change background image
Mousetrap.bind("a", function(){
    setBgImage("static.gif")
})
Mousetrap.bind("s", function(){
    setBgImage("whoa.gif")
})
//change bg color
Mousetrap.bind("d", function(){
    setBgColor("#432543")
})
Mousetrap.bind("f", function(){
    setBgColor("green")
})
//change text color
Mousetrap.bind("g", function(){
    setTextColor("purple")
})
Mousetrap.bind("h", function(){
    setTextColor("white")
})
//  play sounds that will lay on top of each other
Mousetrap.bind("z", function(){
    playSound("clap")
})
Mousetrap.bind("x", function(){
    playSound("scratch")
})
Mousetrap.bind("c", function(){
    playSound("sax")
})
//  play sounds that cut each other off
Mousetrap.bind("v", function(){
    playSound2("clap")
})
Mousetrap.bind("b", function(){
    playSound2("scratch")
})
Mousetrap.bind("n", function(){
    playSound2("sax")
})


Mousetrap.bind("enter", function(){
	//your code here
})

Mousetrap.bind("space", function(){
	//your code here
})

//some useful functions, we'll talk about these later

//multiple lines
function showText (text){
	$('#textDiv').append("<h1>"+text+"</h1>");
	//scrolls to the bottom
	$('#bottom')[0].scrollIntoView(false);

}

//single line
function showText2 (text){
	if($('#mainText').length == 0){
		$('#textDiv').append("<h1 id='mainText'>"+text+"</h1>");
	}
	else {
		$('#mainText').text(text);
	}
}
function typeText(string, speed) {
    var c = 0;
    $('#textDiv').append('<h1></h1>');
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
//all sounds at once
function playSound (id) {
    sound = $("#" + id)[0]
    if (sound.ended){sound.currentTime = 0};
    if (sound.currentTime > 0){
        sound.currentTime = 0
    } else {
        sound.play()
    }
}
//one sound at a time
var playSound2 = function(id) {
    $("audio").each(function(){
        this.pause();
        this.currentTime = 0
    }); 
    sound = $("#" + id)[0]
    if (sound.ended){sound.currentTime = 0};
    if (sound.currentTime > 0){
        sound.currentTime = 0
    } else {
        sound.play()
    }

}
function setBgImage(fileName){
	$("html").css('background-image', 'url(images/'+fileName+')'); 
}
function setBgColor(color){
    $("html").css('background-color', color); 
    //image overrides color so we need to clear any background images
    $('html').css('background-image', "")
}
function setTextColor(color){
    $('html').css('color', color)
}