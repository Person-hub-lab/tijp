function take_snapshot(){
save('myFilterImage.png'); 
}

function createCanvas(){
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();   
}
