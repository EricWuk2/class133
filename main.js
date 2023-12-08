
img = "";
status = "";
objects = [];

function preload()
{
    img = loadImage("dog_cat.jpg");
}

function setup()
{
    canvas = createCanvas(640,420);
    canvas.center();
    objectdetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function draw()
{
    image(img,0,0,640,420);

if(status !="")
{
    for(i = 0 ; i < objects.length ; i++){
        document.getElementById("status").innerHTML = "status : Object Detected";

        fill("red");
        percent =floor(objects[i].confidence * 100);
        text(objects[i].label + " " + percent + "%", objects[i].x, objects[i].y);
        noFill();
        stroke("red");
        rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);

    }
}
}

function modelLoaded() {
    console.log("Model Loaded!");
    status = true;
    objectdetector.detect(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
    objects = results;
}

