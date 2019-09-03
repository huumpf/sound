var myRec = new p5.SpeechRec(); // new P5.SpeechRec object
var myVoice = new p5.Speech('Google Deutsch'); // new P5.Speech object

myRec.continuous = false; // do continuous recognition
// myRec.interimResults = true; // allow partial recognition (faster, less accurate)

let ypos = 20;
let ypos_inc = 60;


function setup() {

	createCanvas(window.innerWidth, window.innerHeight);
	background(50);
	fill(0, 0, 0, 255);
	instructions:
	textSize(32);
	textAlign(CENTER);
  text("Was willst du, du Otto?", width / 2, height / 2);
	myRec.onResult = showResult;
	myRec.start();

  myVoice.speak("Was guckst du so dumm du Otto?");
  myVoice.setPitch( 2 );


  function showResult() {
    if (myRec.resultValue === true) {
      background(255);
      text(myRec.resultString, width / 2, height / 2);
      //myVoice.interrupt = checkbox.elt.checked;
      myVoice.speak(myRec.resultString); // debug printer for voice options
      console.log(myRec.resultString);
      myVoice.setPitch( 1 );
      myVoice.speak("Immer dieses rumgeheule! Gleich scheppert's hier! Aber gewaltig!");
    }
  }
}