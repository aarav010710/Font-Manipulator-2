function setup()
{
    video = createCapture(VIDEO);
    video.size(500,500);
    video.position(150,100);

    canvas = createCanvas(500,450);
    canvas.position(750,110);

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);

}

function modelLoaded()
{
    console.log("Model is loaded!!")
}

function gotPoses(results)
{
if(results.length > 0)
{
    console.log(results)
}
}

function draw()
{
    background("green");
}