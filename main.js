var SpeechRecognition=window.webkitSpeechRecognition;

var recognition=new SpeechRecognition();

function start() {
    document.getElementById("textbox").innerHTML="";
recognition.start();
}



recognition.onresult=function run(event) {
    console.log(event);

var content=event.results[0][0].transcript;
contents=content.toLowerCase();
document.getElementById("textbox").innerHTML=content;

if (contents=="take my selfie") {
    speak();

}

    

}



function speak() {
    var synth=window.speechSynthesis;
    var speak_data="taking your selfie in 3 seconds";
var utterThis=new SpeechSynthesisUtterance(speak_data);
synth.speak(utterThis);
Webcam.attach(camera);
setTimeout(function(){
    snapshot();
    save();
}, 3000);
}


Webcam.set({
    width: 320,
    height: 240,
    image_format: 'png',
    png_quality: 100
  });

camera=document.getElementById("camera");

function snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = "<img id='selfie_img' src='"+data_uri+"'>";
    });
}

function save(){
    link=document.getElementById("link");

img=document.getElementById("selfie_img").src;


link.href=img;

link.click();

}



