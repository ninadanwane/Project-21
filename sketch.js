var canvas;
var music;
var surface1, surface2, surface3, surface4;
var box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(900,500);
    
    //create 4 different surfaces
    surface1 = createSprite(105,480,205,10);
    surface1.shapeColor = rgb(0,0,255);

    surface2 = createSprite(342,480,205,10);
    surface2.shapeColor = rgb(255,0,0);

    surface3 = createSprite(579,480,205,10);
    surface3.shapeColor = rgb(255,223,0);
    
    surface4 = createSprite(816,480,205,10);
    surface4.shapeColor = rgb(68,228,28);

    //create box sprite and give velocity
    box = createSprite(random(450,750));
    box.scale = 0.35;
    box.velocityX = -7;
    box.velocityY = 7;
    box.shapeColor = rgb(255,255,255);

}

function draw() {
    background(rgb(169,169,169));
    edges = createEdgeSprites();
    box.bounceOff(edges);
    
    //add condition to check if box touching surface and make it box
    
    if(box.isTouching(surface1)){
        box.shapeColor = rgb(0,0,255);
        box.velocityX = 0;
        box.velocityY = 0;
        music.play();
    }
    if(box.isTouching(surface2)){
        box.shapeColor = rgb(255,0,0);
        box.velocityX = 0;
        box.velocityY = 0;
        music.play();
    }
    if(box.isTouching(surface3)){
        box.shapeColor = rgb(255,223,0);
        box.velocityX = 0;
        box.velocityY = 0;
        music.play();
    }
    if(box.isTouching(surface4)){
        box.shapeColor = rgb(68,228,28);
        box.velocityX = 0;
        box.velocityY = 0;
        music.play();
    }

    drawSprites();  
}
