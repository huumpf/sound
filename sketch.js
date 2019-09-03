var myRec = new p5.SpeechRec(); // new P5.SpeechRec object
var myVoice = new p5.Speech('Google Deutsch'); // new P5.Speech object

myRec.continuous = false; // do continuous recognition
// myRec.interimResults = true; // allow partial recognition (faster, less accurate)

let ypos = 20;
let ypos_inc = 60;


function setup() {

	// graphics stuff:
	createCanvas(window.innerWidth, window.innerHeight);
	background(50);
	// fill(0, 0, 0, 255);
	// instructions:
	// textSize(32);
	// textAlign(CENTER);
  // text("Was willst du, du Otto?", width / 2, height / 2);
	// myRec.onResult = showResult;
	// myRec.start();

  // myVoice.speak("Was guckst du so dumm du Otto?");
  myVoice.setPitch( 1 );

  // button:
  let ja_btn = createButton('Nein').position(20, ypos).addClass( 'btn' ).mousePressed(sayNein);
  ypos += ypos_inc;
  // button:
  let nein_btn = createButton('Ja').position(20, ypos).addClass( 'btn' ).mousePressed(sayJa);
  ypos += ypos_inc;

  let brat_btn = createButton('Brat mir nen Storch').position(20, ypos).addClass( 'btn' ).mousePressed(sayBrat);
  ypos += ypos_inc;

  let coolStory_btn = createButton('Krasse Geschichte').position(20, ypos).addClass( 'btn' ).mousePressed(sayCoolStory);
  ypos += ypos_inc;

}

function sayNein() {
  myVoice.speak("Nein");
}

function sayJa() {
  myVoice.speak("Ja");
}

function sayBrat() {
  myVoice.speak("Na da brat mir doch einer einen Storch");
}

function sayCoolStory() {
  myVoice.speak("Wow, das ist aber eine krasse Geschichte");
}

    // function showResult() {
    // 	if (myRec.resultValue === true) {
    // 		background(255);
    // 		text(myRec.resultString, width / 2, height / 2);
    //     //myVoice.interrupt = checkbox.elt.checked;
    // 		myVoice.speak(myRec.resultString); // debug printer for voice options
    //     console.log(myRec.resultString);
    //     myVoice.setPitch( 1 );
    //     myVoice.speak("Immer dieses rumgeheule! Gleich scheppert's hier im Karton!");
    // 	}
    // }