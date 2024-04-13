let width1_sim = 600;
let stroke_width_size = 4;

class Boid{

    constructor(){
        this.position = createVector(width1_sim/4, height/2);
        this.velocity = p5.Vector.random2D();
        this.velocity.setMag(random(0.5, 1));
        this.acceleration = createVector();
    }

    update(){
        this.position.add(this.velocity);
        this.velocity.add(this.acceleration);
        if(this.position.x<0 || this.position.x>width1_sim){
            this.velocity.x=-1*this.velocity.x;
            this.acceleration.x=-1*this.acceleration.x;
        }
        if(this.position.y<0 || this.position.y>height){
            this.velocity.y=-1*this.velocity.y;
            this.acceleration.y=-1*this.acceleration.y;
        }
    }

    show(){
        strokeWeight(stroke_width_size);
        stroke(255, 0, 0);
        point(this.position.x, this.position.y);
    }
}

class bb{

    constructor(){
        this.position = createVector(3*width1_sim/4, height/2);
        this.velocity = p5.Vector.random2D();
        this.velocity.setMag(random(0.5, 1));
        this.acceleration = createVector();
    }

    update(){
        this.position.add(this.velocity);
        this.velocity.add(this.acceleration);
        if(this.position.x<0 || this.position.x>width1_sim){
            this.velocity.x=-1*this.velocity.x;
            this.acceleration.x=-1*this.acceleration.x;
        }
        if(this.position.y<0 || this.position.y>height){
            this.velocity.y=-1*this.velocity.y;
            this.acceleration.y=-1*this.acceleration.y;
        }
    }

    show(){
        strokeWeight(stroke_width_size);
        stroke(255);
        point(this.position.x, this.position.y);
    }
}

class sus{

    constructor(){
        this.position = createVector(width1_sim/2, height/2);
        this.velocity = p5.Vector.random2D();
        this.velocity.setMag(random(0.5, 1));
        this.acceleration = createVector();
    }

    update(){
        this.position.add(this.velocity);
        this.velocity.add(this.acceleration);
        if(this.position.x<0 || this.position.x>width1_sim){
            this.velocity.x=-1*this.velocity.x;
            this.acceleration.x=-1*this.acceleration.x;
        }
        if(this.position.y<0 || this.position.y>height){
            this.velocity.y=-1*this.velocity.y;
            this.acceleration.y=-1*this.acceleration.y;
        }
    }

    show(){
        strokeWeight(stroke_width_size);
        stroke(0, 0, 255);
        point(this.position.x, this.position.y);
    }
}

class co{

    constructor(){
        this.position = createVector(width1_sim/3, height/2);
        this.velocity = p5.Vector.random2D();
        this.velocity.setMag(random(0.5, 1));
        this.acceleration = createVector();
    }

    update(){
        this.position.add(this.velocity);
        this.velocity.add(this.acceleration);
        if(this.position.x<0 || this.position.x>width1_sim){
            this.velocity.x=-1*this.velocity.x;
            this.acceleration.x=-1*this.acceleration.x;
        }
        if(this.position.y<0 || this.position.y>height){
            this.velocity.y=-1*this.velocity.y;
            this.acceleration.y=-1*this.acceleration.y;
        }
    }

    show(){
        strokeWeight(stroke_width_size);
        stroke(255, 255, 0);
        point(this.position.x, this.position.y);
    }
}


