prediction_1="";
prediction_2="";

Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:100
});

Webcam.attach("#camera");

function takesnap(){
    Webcam.snap(function(data_uri){
        document.getElementById("snap").innerHTML = '<img id="image_snap" src="'+data_uri+'"/>';
    });
    
}

console.log("ml5_version is :"+ml5.version);
var classifier =ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/1CWL3wFWW/model.json",model_loaded);
function model_loaded(){
    console.log("YOUR MODEL IS LOADED");
}

function speak(){
    var synth = window.speechSynthesis;
    speak_data_1 = "THE FIRST PREDICTION IS  "+prediction_1;
    speak_data_2 = "AND THE SECOND PREDICTION IS  "+prediction_2;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1+speak_data_2);
    synth.speak(utterThis);

}