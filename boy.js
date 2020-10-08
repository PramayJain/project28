class Boy {
    constructor(x,y) {
      var options = {
          isStatic: true
      }
      this.image=loadImage("boy.png");
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = 100;
      this.height = 300;
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