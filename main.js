var canvas = new fabric.Canvas("myCanvas");
block_Width = 30;
block_Height = 30;
document.getElementById("width-span").innerHTML = block_Width;
document.getElementById("height-span").innerHTML = block_Height;
playerX = 120;
playerY = 136;
storePlayer = "";
storeBlock = "";

function PlayerUpdate() {
    fabric.Image.fromURL("zack-1.png", function(IMG)
    {
        storePlayer = IMG;
        storePlayer.scaleToWidth(150);
        storePlayer.scaleToHeight(140);
        storePlayer.set(
            {
                top:playerY,
                left:playerX
            }
        );
        canvas.add(storePlayer);
    });
}

function BlockUpdate(GetIMG) {
    fabric.Image.fromURL(GetIMG, function(IMG)
    {
        storeBlock = IMG;
        storeBlock.scaleToWidth(block_Width);
        storeBlock.scaleToHeight(block_Height);
        storeBlock.set(
            {
                top:playerY,
                left:playerX
            }
        );
        canvas.add(storeBlock);
    });
}