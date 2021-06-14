var canvas = new fabric.Canvas("myCanvas");
block_Width = 30;
block_Height = 30;
document.getElementById("width-span").innerHTML = block_Width;
document.getElementById("height-span").innerHTML = block_Height;
storeBlock = "";

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

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if(keyPressed == 70) {
        new_image("ironman_face.png")
        console.log("f");
    }

    if(keyPressed == 66) {
        new_image("ironman_body.png")
        console.log("b");
    }

    if(keyPressed == 76) {
        new_image("ironman_legs.png")
        console.log("l");
    }

    if(keyPressed == 82) {
        new_image("ironman_right_hand.png")
        console.log("r");
    }

    if(keyPressed == 72) {
        new_image("ironman_left_hand.png")
        console.log("h");
    }

    if(keyPressed == 38) {
        up()
        console.log("up");
    }
}