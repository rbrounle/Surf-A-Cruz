/* 
Author: Sam Fields

Name: Beach Object for Surf-A-Cruz

Description: Includes Javascript definition of the object "Beach." Declare
beaches and put them into array "myBeaches." Call sorting functions to 
re-arrange the array "myBeaches." 

*/

// The class is defined like this:
Beach = function(name, waveSL, waveMS, windSL, windMS, thumbs ){

   // The properties of the class are defined like this:
   this.name = name;
   this.waveSL = waveSL;
   this.waveMS = waveMS;
   this.waveA = (parseInt(waveSL.charAt(0)) + parseInt(waveMS.charAt(0))) / 2; //Calculates int for avg weight height using strings
   this.windSL = windSL; //Surfline
   this.windMS = windMS; //Magic Seaweed
   this.windA = (parseInt(windSL.charAt(0)) + parseInt(windMS.charAt(0))) / 2; //Calculates int for avg wind speed using strings
   this.thumbs = thumbs; //user rating
}

//Add methods like this.  All Beach objects will be able to invoke this
Beach.prototype.speak = function(){
    document.write("Howdy, my name is " + this.name);
}

// Instantiate new objects with 'new'
var beach1 = new Beach("Steamer Lane", "1", "2", "3", "4", 300);
var beach2 = new Beach("Davenport","20","20","8","9",10);
var beach3 = new Beach("Pleasure Point","31","12","60","14",15);

//make an array and stick each beach in it
var myBeaches = new Array();
myBeaches[0] = beach1;
myBeaches[1] = beach2;
myBeaches[2] = beach3;

//The following prints beach names for testing
function printNames() {
     for (var i = 0; i < myBeaches.length; i++) {
          myBeaches[i].speak();
          // document.write(" ");
		  // document.write(myBeaches[i].waveSL + " ");
     }
	 // document.write("<br>");
}

//The following are needed for sorting:

function sortWaveNum(a,b) {
    return b.waveA - a.waveA;
}

function sortWindNum(a,b) {
    return b.windA - a.windA;
}

function sortThumbsNum(a,b) {
    return b.thumbs - a.thumbs;
	}

//Call the following to sort beaches:
function sortByWave() {
    myBeaches.sort(sortWaveNum);
	// printNames();
}

function sortByWind() {
    myBeaches.sort(sortWindNum);
	// printNames();
}

function sortByThumbs() {
    myBeaches.sort(sortThumbsNum);
	printNames();
}

//Testing calls:
// document.write("By Wind:<br>");
// sortByWind();
// document.write("By Wave:<br>");
// sortByWave();
// document.write("By Thumbs:<br>");
// sortByThumbs();
