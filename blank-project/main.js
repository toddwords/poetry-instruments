Mousetrap.bind("q", function(){
    speakSpell("hey wassup")
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

//Initalize Voice
meSpeak.loadConfig("../mespeak_config.json");
//choose a voice from the voice folder here
meSpeak.loadVoice('../meSpeak_voices/en/en-us.json');
var voiceSoundFiles = {};
function speak(words){
    if(!voiceSoundFiles[words]){
        console.log("adding")
        voiceSoundFiles[words] = meSpeak.speak(words, {rawdata: "array"})
    }
    meSpeak.play(voiceSoundFiles[words]);
}
function speakSpell(words) {
    speak(words)
    showText2(words)
}