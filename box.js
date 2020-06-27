class Box extends Base {
  constructor(x, y, width, height) {
  super(x,y,width,height);
  this.Visibility=255;
  
  }
  display(){
   if(this.body.speed<10){
       super.display();

   }
     else{
      World.remove(world,this.body);
      push()
      this.Visibility=this.Visibility-5;
      //tint(255,this.Visibility);

      pop();

     }

  }
};