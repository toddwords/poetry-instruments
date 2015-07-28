# Make and Play Your Own Poetry Instrument
In this class we will build poetry instruments and try to get good at playing them. By 'instrument ' I mean an interactive work that can be played differently each time, has a learning curve and can be remixed and improvised when performed live. We will build our instruments using Javascript keyboard events to control the text on the screen, and also corresponding sounds, images and animations (depending on how deep you want to go).

###Day 1
* Play around with some web instruments / poetry instruments
  * [Patatap](http://patatap.com)
  * [Sweet Old Etcetera](http://collection.eliterature.org/2/works/clifford_sweet_old_etcetera/sweetweb/sweetoldetc.html)
  * [GifRapBot](http://hotwriting.net/gifRapBot)
* Talk about Javascript functions and jQuery Interactivity
* Try modifying existing instrument code for new results
* Discuss writing for this medium

**HW:** Design and write a poetry instrument. What will the interactions be? What do you want it to feel like to play? Write the text, gather the images and sounds you want to use, we'll put it all together in the next class.
###Day2
* Introduce core js interactivity functions
  * Sound - Blocking and non-blocking
  * Images
  * jQuery Animation
  * Add text letter-by-leter
  * Button mash
* Work on our instruments
* Perform our instruments and play each other's

###Things we'll be using
* [jQuery](http://jquery.com) - core library for interactive websites
* [Mousetrap](http://craig.is/killing/mice) - small library for easily binding keyboard events
* [MeSpeak.js](http://www.masswerk.at/mespeak/) - Javascript text-to-speech library
* [http-server](https://www.npmjs.com/package/http-server) - local web server that runs real fast
* [Freesound.org](http://freesound.org) - great source for sound effects
* [Google Images](http://images.google.com) - where else are you gonna find your animated gifs?
* [Google Fonts](http://google.com/fonts) - good source of easy to implement fonts

###Running a local http server
1. Open the Terminal / command prompt 
2. Cd (change directory) into the 'poetry-instruments' folder
3. Run your http-server
	a. If you have a Mac, you can run a python http server by typing **python -m SimpleHTTPServer 8080**
	b. If you have Python 3 (newest version), you'll have to type **python -m http.server 8080**
	c. If you have a PC you can download the node http-server linked above and just type **http-server**
4. Open your browser and go to http://localhost:8080/your-project-folder-name

###Editable Examples
Press Shift+Space to see the code
* [Who Am I?](http://hotwriting.net/whoami)
* [Yardley, PA 1997](http://hotwriting.net/inthedark)
* [GifRapBot](http://hotwriting.net/gifRapBot)

###Stuff to help practice
This [Codecademy course](https://www.codecademy.com/skills/make-an-interactive-website) covers a lot of the stuff we'll be talking about with javascript and jquery for interactivity.

###Running a local http server
1. Open the Terminal / command prompt 
2. Cd (change directory) into the 'poetry-instruments' folder
3. Run your http-server
	a. If you have a Mac, you can run a python http server by typing **python -m SimpleHTTPServer 8080**
	b. If you have a PC you can download the node http-server linked above and just type **http-server**
4. Open your browser and go to http://localhost:8080/your-project-folder-name
