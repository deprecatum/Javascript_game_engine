
d = document.getElementById("game-window");
context = d.getContext("2d");

class main {
    constructor() {
        this.divider = 30;
        this.delta_time = 1000 / this.divider;
        console.log("main");
        this.x = 0;
        this.y = 0;
        this.rotation=0;
        this.step=this.block_width=d.width/10;
        this.block_height=d.height/20;
        this.blocks=new Array();
        
    }

    game_logic(){
        context.fillStyle = "black";
        context.fillRect(0, 0, d.width, d.height);

        for(var i=0; i<this.blocks.length;i++){
            this.draw_square(this.blocks[i][0],this.blocks[i][1],"white");
        }
        this.draw_square(this.x,this.y,"white");
    }   
    //console.log(x)

    //setInterval(, 500);

    draw_square(x, y, color) {
        context.fillStyle = color;
        context.fillRect(x, y, this.block_width,this.block_height);
    }


    key(evt) {
        /*
    	37 //left arrow
    	38 //down arrow
	    39 //right arrow
        40 //up arrow
        87 //w
        83 //s
        65 //a
        68 //d
        */
        switch (evt.keyCode) {
            case 37: {
                this.x-=this.step;
                break;
            }
            case 38: {
                this.y-=this.step;
                break;
            } case 39: {
                this.x+=this.step;
                break;
            } case 40: {
                this.y+=this.step;
                break;
            } case 32:{
                this.rotation++;
            }
            default: {
                break;
            }
        }
        console.log(this.x);
    }

}

/*
function game_logic(x, y) {
    //console.log(x);
    console.log("gamelogic");

    context.fillStyle = "white";
    context.fillRect(0, 0, d.width, d.height);

    //draw_square(main.x, main.y, "black");
}


function draw_square(x, y, color) {
    var xx = x + 4;
    var yy = y + 4;
    context.fillStyle = color;
    context.fillRect(x, y, xx, yy);
    xx = 0;
}


function draw_line(x, y, rotation) {
    color = "#00ffff";
    if (rotation == 0 || rotation == 2) {
        //draw horizontally
    } else {
        //draw vertical
    }
}

function draw_left_l(x, y, rotation) {
    color = "#0000ff";
}

function draw_right_l(x, y, rotation) {
    color = "#ff9900";
}

function draw_big_square(x, y, rotation) {
    color = "#ffff66";
}

function draw_left_s(x, y, rotation) {
    color = "#ffff66";
}

function draw_right_s(x, y, rotation) {
    color = "#ff3300";
}

function draw_t(x, y, rotation) {
    color = "#800080";
}


*/

something = new main();
window.addEventListener("keydown",function(){something.key(event)});
setInterval(function(){something.game_logic()},something.delta_time);