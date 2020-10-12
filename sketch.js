var Runner
var canvas
var PlayButton, Infinite, Title, DevName
var Lightning1, Lightning2, Dragon
var LightningImage, PlayButtonImage, InfiniteImage
var TitleImage, DragonImage, DevImage
var gameState = "Home"
var Road1, Road2, Road3, Road4
var RoadGrp, DownRoadGrp


function preload(){
    InfiniteImage = loadImage("Woah.png")
    TitleImage = loadImage("Gravity Game Logo.png")
    PlayButtonImage = loadImage("PlayButtonImage.png")
    LightningImage = loadImage("Lightning.png")
    DragonImage = loadImage("DragonIDKWhy.png")
    DevImage = loadImage("RDevs.png")

}



function setup(){
   
   createCanvas(displayWidth-140,displayHeight-181.5)
   PlayButton = createSprite(760,375,50,50)
   Infinite = createSprite(760,600,50,50)
   Title = createSprite(760,100,50,50)
   Lightning1 = createSprite(250,330,50,50)
   Dragon = createSprite(1200,330,50,50)
   DevName = createSprite(100,625,50,50)
   Runner = createSprite(270,280,30,30)
   Road1 = createSprite(1189,253,250,20)
   Road2 = createSprite(1189,440,250,20)
   Road3 = createSprite(1540,253,250,20)
   Road4 = createSprite(1540,440,250,20)

   RoadGrp = new Group()
   DownRoadGrp = new Group()

}

function draw(){
    background("black")

    
   
    
    if(gameState === "Home"){
        PlayButton.addImage(PlayButtonImage)
        Title.addImage(TitleImage)
        Lightning1.addImage(LightningImage)
        Dragon.addImage(DragonImage)
        DevName.addImage(DevImage)
        DevName.scale = 0.3
        Dragon.scale = 1
        Lightning1.scale = 1
        Title.scale = 0.4
        PlayButton.scale = 0.425
        Infinite.addImage(InfiniteImage)
        Infinite.scale = 0.325
        Runner.visible = false
        Road1.visible = false
        Road2.visible = false
        Road3.visible = false
        Road4.visible = false

    }
    

    if(mousePressedOver(Infinite)){
        PlayButton.destroy()
        Infinite.destroy()
        Title.destroy()
        Lightning1.destroy()
        Dragon.destroy()
        DevName.destroy()
        gameState = "Infinite"

    }


    if(gameState === "Infinite"){
        background("black")
        if(keyDown(UP_ARROW)){
            Runner.velocityY = -6
        }

        if(keyDown(DOWN_ARROW)){
            Runner.velocityY = 6
        }

          CREATEROADS()

        Runner.visible = true

        Road1.visible = true
        Road2.visible = true
        Road3.visible = true
        Road4.visible = true

        Road1.velocityX = -3
        Road2.velocityX = -3
        Road3.velocityX = -3
        Road4.velocityX = -3

        if(Runner.isTouching(Road1||Road2||Road3||Road4)){
        Runner.collide(Road1,Road2,Road3,Road4)
        }

        
        Road4.shapeColor = "Red"
        Road3.shapeColor = "Blue"

    }

     console.log(mouseY)
     console.log(mouseX)
     drawSprites()
}   


function CREATEROADS(){
    if(frameCount%100===0){
        var Road = createSprite(1190,253,250,20)
        Road.velocityX = -3
        Road.shapeColor = "Green"
        
        RoadGrp.add(Road)

        if(Runner.isTouching(RoadGrp)){
            Runner.velocityY = 0
        }

        var DownRoad = createSprite(1190,440,250,20)
        DownRoad.velocityX = -3
        DownRoad.shapeColor = "Green"

        DownRoadGrp.add(DownRoad)

        if(Runner.isTouching(DownRoadGrp)){
            Runner.velocityY = 0

        }
    }
}



