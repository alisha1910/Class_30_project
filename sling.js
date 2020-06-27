class Slingshot {
    constructor(bodyA,bodyB){
    var options={
    bodyA:bodyA,
    bodyB:bodyB,
    'stiffness':0.05,
    'length':10
    
    }
    //this.bodyB=bodyB;
    this.sling=Constraint.create(options);
    World.add(world,this.sling);
     
    
    }
    fly() {
    this.sling.bodyA=null;
    }
    attach(body){
      this.sling.bodyA=body;

    }


    
    
    
    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.sling.bodyB.position;
            push();
            
            stroke(48,22,8);
            if(pointA.x < 220) {
                stroke("white");
                strokeWeight(7);
                line(pointA.x - 19, pointA.y, pointB.x -9, pointB.y);
                //line(pointA.x - 20, pointA.y, pointB.x + 30, pointB.y - 3);
                
            }
            else{
                stroke("white");
                strokeWeight(3);
                  line(pointA.x + 26, pointA.y, pointB.x -9, pointB.y);
                //line(pointA.x + 25, pointA.y, pointB.x + 30, pointB.y - 3);
                
            }
           
            
            pop();
        }
    }
    
}