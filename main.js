img ="";
objects=[];
status="";

function preload (){
img = loadImage('dog_cat.jpg');
}

function setup(){
canvas=createCanvas(640,420);
canvas.center();

}
function draw(){
image(img,0,0,640,420);
fill("#FF0000");
text("dog",45,75);
noFill();
stroke("#FF0000");
Rect(30,60.450,350)

fill("#FF0000");
text("cat",320,120);
noFill();
stroke("#FF0000");
Rect(300,90.270,320);
}

function modelLoaded(){
console.log("Model Loaded!");
status=true;
objectDetector.detect(img,gotResult);

}
function gotResult(error,results){
    if(error){
        console.log(error);
    }
    console.log(results);
}