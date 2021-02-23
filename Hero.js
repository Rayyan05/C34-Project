class Hero{
    constructor(x,y,r){
        var options = {
            'isStatic':false,
            'density': 1,
            'frictionAir': 1,
           
        }

       
        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle(x,y,(this.r)/2,options)
        this.image =  loadImage("Superhero-01.png")
        World.add(world,this.body)
    }

    display(){
        var heropos = this.body.position
        push();
    translate(heropos.x, heropos.y-100);
    
    imageMode(CENTER);
  
    fill(255,0,255);
    image(this.image,0, 0, this.r+150, this.r);
    pop();

       
    }
}