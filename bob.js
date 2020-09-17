class Bob {
    constructor(x,y,r){
    
    var options ={
    
    restitution:1.2,
    friction:1,
    density:0.7
    
    }
    
    this.x=x;
    this.y=y;
    this.r=r;
    this.body = Bodies.circle(this.x, this.y,this.r/2, options);   
          World.add(world, this.body);
    }
    
    display(){
          var pos =this.body.position;
          var angle = this.body.angle;
          push();
          angleMode(RADIANS);
          translate(pos.x, pos.y);
          rotate(angle);
          ellipseMode(CENTER);
          fill("obsidian");
          strokeWeight(4);
          stroke("green");
          ellipse(0,0,this.r,this.r);
          
          pop();
    
        }
    
    }
    
    
    