var noseX = 0;
var noseY = 0;
var leftWristX = 0;
var rightWristX = 0;
var difference = 0;

function preload(){

}

function draw(){
    background("grey");
    document.getElementById("dimension").innerHTML="Width and Height of a square will be = "+difference+"px";
    fill("blue");
    stroke("black");
    square(noseX, noseY, difference);


}

function setup(){
    var video=createCapture(VIDEO);
    video.size(550, 500);

    var canvas=createCanvas(550, 500);
    canvas.position(560, 110);

    poseNet= ml5.poseNet(video,modelLoaded);
    poseNet.on("pose", gotPoses);
}

function gotPoses(results){
if(results.length > 0){
    console.log(results);

    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;
    console.log("noseX = " + noseX + ", noseY = " + noseY);

    leftWristX=results[0].pose.leftWrist.x;
    rightWristX=results[0].pose.rightWrist.x;
    difference=floor(leftWristX - rightWristX);
    console.log("leftWristX = " + leftWristX + ", rightWristX = " + rightWristX + ", difference = " + difference);
}
}

function modelLoaded(){
    console.log("apple");
}

