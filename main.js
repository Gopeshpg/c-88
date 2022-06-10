
var canvas = new fabric.Canvas('myCanvas');

ball_y=0;
ball_x=0;
hole_y=400;
hole_x=800


block_image_width = 5;
block_image_height = 5;

function load_img(){
	fabric.Image.fromURL("golf-h1.png", function(Img){
	    
		hole_obj = Img;
		hole_obj.scaleToWidth(50);
		hole_obj.scaleToHeight(50);
		hole_obj.set({
		      top:hole_y,
			  left:hole_x
		});
		canvas.add(hole_obj);
	});



}
function new_image()
{

	fabric.Image.fromURL("ball.png",  function(Img) {
    ball_obj = Img;
	ball_obj.scaleToWidth(50);
	ball_obj.scaleToHeight(50);
	ball_obj.set({
	top:ball_y,
	left:ball_x
	});
	canvas.add(ball_obj);
	});
}




		if(keyPressed == '38')
        {
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	
	window.addEventListener("keydown", my_keydown);
	
function up()
{
    
      if(player_y >=0)
      {
          player_y = player_y - block_image_height;
          console.log("block image height = " + block_image_object);
          console.log("When Up arrow key is pressed, X =  " + player_x + " , Y = "+player_y);
          canvas.remove(player_object);
          player_update();
      }

}


function down()
{

     if(player_y <=500)
    {

        player_y = player_y + block_image_object;
        console.log("block image height = " + block_image_height);
        console.log("When Up arrow key is pressed, X = " + player_x + " , Y = "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}


function left()
{

    if(player_x >0)
    {
        player_x = player_x - block_image_width;
        console.log("block image width = " + block_image_width);
        console.log("When Left arrow key is pressed, X =  " + player_x +" , Y = "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}


function right()
{

    if(player_x <=850)
    {
        
        player_x = player_x + block_image_object;
        console.log("block image width = " + block_image_width);
        console.log("When Right arrow key is pressed, X = " + player_x + " , Y = "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}
