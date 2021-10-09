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


function new_image(GetIMG) {
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
    }

    if(keyPressed == 39) {
        right()
    }

    if(keyPressed == 40) {
        down()
    }

    if(keyPressed == 37) {
        left()
    }

}

if (keyPressed == 80 && e.shiftKey == true) {
        block_Width = block_Width + 10;
        block_Height = block_Height + 10;
        document.getElementById("width-span").innerHTML = block_Width;
        document.getElementById("height-span").innerHTML = block_Height;
    }

    if (keyPressed == 77 && e.shiftKey == true) {
        block_Width = block_Width - 10;
        block_Height = block_Height - 10;
        document.getElementById("width-span").innerHTML = block_Width;
        document.getElementById("height-span").innerHTML = block_Height;
    }

function up() {
    if(playerY >= 0) {
        console.log("top is pressed");
        playerY = playerY - block_Height;
        canvas.remove(storePlayer);
        PlayerUpdate();
    }
}

function down() {
    if(playerY <= 450) {
        console.log("down is pressed");
        playerY = playerY + block_Height;
        canvas.remove(storePlayer);
        PlayerUpdate();
    }
}

function left() {
    if(playerX >= 0) {
        console.log("left is pressed");
        playerX = playerX - block_Width;
        canvas.remove(storePlayer);
        PlayerUpdate();
    }
}

function right() {
    if(playerX <= 650) {
        console.log("right is pressed");
        playerX = playerX + block_Width;
        canvas.remove(storePlayer);
        PlayerUpdate();
    }
}
