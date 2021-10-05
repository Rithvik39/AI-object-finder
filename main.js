Status = "";

function preload(){

}

function setup(){
    canvas = createCanvas(800 , 600);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video , 0 , 0 , 800 , 600);
}

function start(){
    object_detector = ml5.objectDetector("cocossd" , modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting objects";
}

function modelLoaded(){
    console.log("model is loaded !!!");
    Status = true;
}