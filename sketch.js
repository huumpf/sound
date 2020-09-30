var myRec = new p5.SpeechRec(); // new P5.SpeechRec object
var myVoice = new p5.Speech('Google Deutsch'); // new P5.Speech object

var schimpf = ["Ekelpaket", "Halunke", "Hanswurst", "Holzkopf", "Lump", "Schlawiner", "Schuft", "Schurke", "Taugenichts", "Tunichtgut", "Tölpel"];

myRec.continuous = false; // do continuous recognition
// myRec.interimResults = true; // allow partial recognition (faster, less accurate)

let ypos = 20;
let ypos_inc = 60;


function setup() {

	createCanvas(window.innerWidth, window.innerHeight);
	background(50);
  myVoice.setPitch( 1 );

  // button:
  let ja_btn = addButton('Nein', 20, ypos, sayNein);
  ypos += ypos_inc;
  // button:
  let nein_btn = addButton('Ja', 20, ypos, sayJa);
  ypos += ypos_inc;

  let brat_btn =   addButton('Brat mir nen Storch', 20, ypos, sayBrat);
  ypos += ypos_inc;

  let coolStory_btn = addButton('Krasse Geschichte', 20, ypos, sayCoolStory);
  ypos += ypos_inc;

  let einzigartig_btn = addButton('Jeder ist einzigartig', 20, ypos, sayEinzigartig);
  ypos += ypos_inc;

  let urteil_btn = addButton('Urteile nicht über mich', 20, ypos, sayUrteil);
  ypos += ypos_inc;

  let weg_btn = addButton('Eigener Weg', 20, ypos, sayWeg);
  ypos += ypos_inc;

  let spiegel_btn = addButton('Wie ein Spiegel', 20, ypos, saySpiegel);
  ypos += ypos_inc;

  let wunder_btn = addButton('Viele kleine Wunder', 20, ypos, sayWunder);
  ypos += ypos_inc;

  let meilen_btn = addButton('1000 Meilen kleiner Schritt', 20, ypos, sayMeilen);
  ypos += ypos_inc;

  let schimpfwort_btn = addButton('Beschimpfen', 20, ypos, saySchimpf);
  ypos += ypos_inc;

  let frohes_btn = addButton('Frohes Neues', 20, ypos, sayFrohesNeues);
}

function addButton(title, posX, posY, action) {
  return createButton(title).position(posX, posY).addClass('btn').mousePressed(action);
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

function saySpiegel() {
  myVoice.speak("Das Leben ist wie ein Spiegel: Lächelt man hinein, lächelt es zurück!");
}

function sayWunder() {
  myVoice.speak("Warte nicht auf das große Wunder, sonst verpasst du die vielen kleinen.");
}

function sayMeilen() {
  myVoice.speak("Selbst ein Weg von 1000 Meilen beginnt mit einem Schritt.");
}

function sayFrohesNeues() {
  myVoice.speak('Frohes Neues!');
}

function saySchimpf() {
  let schimpf = getSchimpfwort();
  myVoice.speak(`Du ${schimpf}`);
}

function getSchimpfwort() {
  let rand = floor( random(0, schimpf.length) );
  return schimpf[rand];
}