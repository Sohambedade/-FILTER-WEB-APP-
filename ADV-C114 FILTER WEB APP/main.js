function preload() {
    clown_nose = loadImage("https://i.postimg.cc/cLrLXGVn/download-4.jpg");
 }
 noseX=0;
 noseY=0;

function setup() 
{ canvas = createCanvas(300, 300); 
    canvas.center();
video = createCapture(VIDEO);
video.size(300,300);
video.hide();

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose' , gotPoses); 
 }

 function modelLoaded() {
    console.log('PoseNet is Initialized');
 }
 function gotPoses(results)
 {
    if(results.length > 0)
    {
        console.log(results);
        beardX = results[0].pose.beard.X;
        beardY = results[0].pose.beard.Y;
        console.log("beard x = "  + results[0].pose.nose.x);
        console.log("beard y = "  + results[0].pose.nose.y);
    }
 }
 function draw() {
    image(video,0,0,300,300);
    image(clown_nose, noseX-15, noseY-15, 30, 30);
 }
 
 function take_snapshot(){
    save('myFilterImage.png');
 }