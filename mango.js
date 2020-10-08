class Mango {
    constructor(x,y) {
      var options = {
		  isStatic: true,
		  restitution:0,
		  friction:1,
      }
      this.image=loadImage("mango.png");
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = 30;
      this.height = 30;
      World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        push();
        translate(pos.x, pos.y);
        rectMode(CENTER);
        strokeWeight(4);
        stroke("red");
        fill("red");
        imageMode(CENTER);
        image(this.image, 0,0,this.width, this.height)

        pop();
      }
    }