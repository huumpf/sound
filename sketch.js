var myRec = new p5.SpeechRec(); // new P5.SpeechRec object
var myVoice = new p5.Speech(); // new P5.Speech object

myRec.continuous = true; // do continuous recognition
// myRec.interimResults = true; // allow partial recognition (faster, less accurate)


function setup() {
	// graphics stuff:
	createCanvas(800, 400);
	background(255, 255, 255);
	fill(0, 0, 0, 255);
	// instructions:
	textSize(32);
	textAlign(CENTER);
	text("say something", width / 2, height / 2);
	myRec.onResult = showResult;
	myRec.start();
  
  myVoice.speak("say something");

}

function draw() {
	// why draw when you can talk?
}

function showResult() {
	if (myRec.resultValue === true) {
		background(255);
		text(myRec.resultString, width / 2, height / 2);
    //myVoice.interrupt = checkbox.elt.checked;
		myVoice.speak(myRec.resultString); // debug printer for voice options
		console.log(myRec.resultString);
	}
}