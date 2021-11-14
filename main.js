var canvas=new fabric.Canvas("my_canvas");
player_x=10;
player_y=10;
block_img_width=20;
block_img_height=20;
var player_object="";
var block_image_object="";

function player_update(){
    fabric.Image.fromURL("player.png", function(Img){
        player_object=Img;
        player_object.scaleToWidth(100);
        player_object.scaleToHeight(100);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
    });
}

function new_img(get_image){
    fabric.Image.fromURL(get_image, function(Img){
        block_image_object=Img;
        block_image_object.scaleToWidth(100);
        block_image_object.scaleToHeight(100);
        block_image_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_image_object);
    });
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e) {
    var keypressed=e.keyCode;
    console.log(keypressed);

    if (e.shiftKey==true  && keypressed=="80") {
        console.log("p and shift key  are pressed")
        block_img_width=block_img_width+10
        block_img_height=block_img_height+10
        document.getElementById("current_height").innerHTML=block_img_height
        document.getElementById("current_width").innerHTML=block_img_width
    }

    if (e.shiftKey==true  && keypressed=="77") {
        console.log("m and shift key  are pressed")
        block_img_width=block_img_width-10
        block_img_height=block_img_height-10
        document.getElementById("current_height").innerHTML=block_img_height
        document.getElementById("current_width").innerHTML=block_img_width
    }

    if (keypressed=="84"){
        new_img("Oak wook log.jpg");
        console.log("t");
    }

    if (keypressed=="68"){
        new_img("Moss.png");
        console.log("d");
    }

    if (keypressed=="76"){
        new_img("old_grass_texture.png");
        console.log("l");
    }

    if (keypressed=="71"){
        new_img("dirt_block.png");
        console.log("g");
    }

    if (keypressed=="87"){
        new_img("brick_wall.jpg");
        console.log("w");
    }

    if (keypressed=="89"){
        new_img("this_doesn't_exist!!!!.png");
        console.log("y");
    }

    if (keypressed=="82"){
        new_img("Netherack.jpg");
        console.log("r");
    }

    if (keypressed=="67"){
        new_img("Stone.jpg");
        console.log("c");
    }

    if (keypressed=="85"){
        new_img("Glowstone.png");
        console.log("u");
    }

    if (keypressed=="38"){
        up();
        console.log("up");
    }

    if (keypressed=="40"){
        down();
        console.log("down");
    }

    if (keypressed=="37"){
        left();
        console.log("left");
    }

    if (keypressed=="39"){
        right();
        console.log("right");
    }
}

function down() {
    if(player_y<=500){
        player_y=player_y+block_img_height;
        console.log("block image height"+block_img_height);
        console.log("when down arrow key is pressed,X="+player_x+" , y="+player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function up() {
    if(player_y>0){
        player_y=player_y-block_img_height;
        console.log("block image height"+block_img_height);
        console.log("when up arrow key is pressed,X="+player_x+" , y="+player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function left() {
    if(player_x>0){
        player_x=player_x-block_img_width;
        console.log("block image width"+block_img_width);
        console.log("when up left key is pressed,X="+player_x+" , y="+player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function right() {
    if(player_x<=850){
        player_x=player_x+block_img_width;
        console.log("block image width"+block_img_width);
        console.log("when up right key is pressed,X="+player_x+" , y="+player_y);
        canvas.remove(player_object);
        player_update();
    }
}
