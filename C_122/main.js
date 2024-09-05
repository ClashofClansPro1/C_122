x = 0;
y = 0;
draw_1 = "";
draw_2 = "";

var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("status").innerHTML = "El sistema está escuchando. Por favor, habla."; 
    recognition.start();
} 
 
function preload()
{
  panda=loadImage("https://i.postimg.cc/ZRQGW7FW/Giant-panda-cub-branch.webp");
  husky= loadImage("https://i.postimg.cc/CMB1m926/images.jpg");
}

recognition.onresult = function(event) {

 console.log(event); 

var content = event.results[0][0].transcript;

   document.getElementById("status").innerHTML = "La voz se reconoció como: " + content; 
      if(content == "panda")
      {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Se empezó a dibujar un círculo "; 
        draw_1 = "set";
      }
      if(content =="husky")
      {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Se empezó a dibujar un rectángulo "; 
        draw_2 = "set";
      }
}

function setup() {
  canvas = createCanvas(900, 600);
}

function draw() {
  if(draw_1 == "set")
  {
    //radius = Math.floor(Math.random() * 100);
    //circle(x, y, radius);
    image(panda, x, y, 100, 100);
    document.getElementById("status").innerHTML = "Se dibujó un panda. ";
    draw_1 = "";
  }

  if(draw_2 == "set")
  {
    image(husky, x, y, 100, 100);
    document.getElementById("status").innerHTML = "Se dibujó un husky. ";
    draw_2 = "";
  }

}








