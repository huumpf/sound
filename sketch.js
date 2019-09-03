var myRec = new p5.SpeechRec(); // new P5.SpeechRec object
var myVoice = new p5.Speech('Google Deutsch'); // new P5.Speech object

myRec.continuous = false; // do continuous recognition
// myRec.interimResults = true; // allow partial recognition (faster, less accurate)

let ypos = 20;
let ypos_inc = 60;


function setup() {

	createCanvas(window.innerWidth, window.innerHeight);
	background(50);
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

  let einzigartig_btn = createButton('Jeder ist einzigartig').position(20, ypos).addClass( 'btn' ).mousePressed(sayEinzigartig);
  ypos += ypos_inc;

  let urteil_btn = createButton('Urteile nicht über mich').position(20, ypos).addClass( 'btn' ).mousePressed(sayUrteil);
  ypos += ypos_inc;

  let weg_btn = createButton('Eigener Weg').position(20, ypos).addClass( 'btn' ).mousePressed(sayWeg);
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

function sayLaecheln() {
  myVoice.speak("Der kürzeste Weg zwischen 2 Menschen ist ein Lächeln");
}

function sayEinzigartig() {
  myVoice.speak("Kein Mensch ist perfekt, aber jeder ist auf seine Weise einzigartig.");
}

function sayUrteil() {
  myVoice.speak("Bevor du über mich und mein Leben urteilst, zieh meine Schuhe an und geh meinen Weg.");
}

function sayWeg() {
  myVoice.speak("Nur wer seinen eigenen Weg geht, kann Spuren hinterlassen.");
}

// let texts = {};

// function makeButton( name, text ) {
//   let btn = createButton(name).position(20, ypos).addClass( 'btn' ).mousePressed(texts.name);
//   ypos += ypos_inc;

//   texts.prototype.name = function(
//     myVoice.speak(text);
//   }
// }