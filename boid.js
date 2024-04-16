let width1_sim = 600;
let stroke_width_size = 4;

class person{
  

  constructor(){
    this.position = createVector(width1_sim / 4, height / 2);
    this.velocity = p5.Vector.random2D();
    this.velocity.setMag(random(0.5, 2));
    this.acceleration = createVector();
    this.immune = [];
    this.viruses = [];

  }
  update() {
    this.position.add(this.velocity);
    this.velocity.add(this.acceleration);
    if (this.position.x < 0 || this.position.x > width1_sim) {
      this.velocity.x = -1 * this.velocity.x;
      this.acceleration.x = -1 * this.acceleration.x;
    }
    if (this.position.y < 0 || this.position.y > height) {
      this.velocity.y = -1 * this.velocity.y;
      this.acceleration.y = -1 * this.acceleration.y;
    }
  }

  show() {
    strokeWeight(4);
    if(this.viruses.length==2){
      stroke(255,255,255);
      console.log("white");
    }
    else if(this.viruses.length==0){
      if(this.immune.length==2){
        console.log("green");
        stroke(0, 255, 0);
      }
      else{
        console.log("blue");
        stroke(0, 0, 255);
      }
    }
    else if(this.viruses.length==1){
      if(this.viruses[0]==1){
        console.log("red");
        stroke(255, 0, 0);
      }
      else{
        console.log("yellow");
        stroke(255, 255, 0);
      }
    }
    point(this.position.x, this.position.y);
  }
  recover(){
    for(let i = 0; i<this.viruses.length; i++){
      this.immune.push(this.viruses[i]);
    }
    this.viruses.length = 0;
    //console.log(this);
  }
//   recover() {
//     // Copy viruses to immune
//     this.immune = this.immune.concat(this.viruses);
//     // Clear viruses array
//     this.viruses.length = 0;
//     console.log(this);
// }

  infect(attacker){
    // let isImmune = false;
    
    for(let i = 0; i<this.immune.length; i++){
      if(this.immune[i]==attacker){
        
        return;
      }
    }
    for(let i = 0; i<this.viruses.length; i++){
      if(this.viruses[i]==attacker){
        
        return;
      }
    }
    this.viruses.push(attacker);





  }
}


class Boid {
  constructor() {
    this.position = createVector(width1_sim / 4, height / 2);
    this.velocity = p5.Vector.random2D();
    this.velocity.setMag(random(0.5, 1));
    this.acceleration = createVector();
  }

  update() {
    this.position.add(this.velocity);
    this.velocity.add(this.acceleration);
    if (this.position.x < 0 || this.position.x > width1_sim) {
      this.velocity.x = -1 * this.velocity.x;
      this.acceleration.x = -1 * this.acceleration.x;
    }
    if (this.position.y < 0 || this.position.y > height) {
      this.velocity.y = -1 * this.velocity.y;
      this.acceleration.y = -1 * this.acceleration.y;
    }
  }

  show() {
    strokeWeight(stroke_width_size);
    stroke(255, 0, 0);
    point(this.position.x, this.position.y);
  }
}

class bb {
  constructor() {
    this.position = createVector((3 * width1_sim) / 4, height / 2);
    this.velocity = p5.Vector.random2D();
    this.velocity.setMag(random(0.5, 1));
    this.acceleration = createVector();
  }

  update() {
    this.position.add(this.velocity);
    this.velocity.add(this.acceleration);
    if (this.position.x < 0 || this.position.x > width1_sim) {
      this.velocity.x = -1 * this.velocity.x;
      this.acceleration.x = -1 * this.acceleration.x;
    }
    if (this.position.y < 0 || this.position.y > height) {
      this.velocity.y = -1 * this.velocity.y;
      this.acceleration.y = -1 * this.acceleration.y;
    }
  }

  show() {
    strokeWeight(stroke_width_size);
    stroke(255, 255, 0);
    point(this.position.x, this.position.y);
  }
}

class sus {
  constructor() {
    this.position = createVector(width1_sim / 2, height / 2);
    this.velocity = p5.Vector.random2D();
    this.velocity.setMag(random(0.5, 1));
    this.acceleration = createVector();
  }

  update() {
    this.position.add(this.velocity);
    this.velocity.add(this.acceleration);
    if (this.position.x < 0 || this.position.x > width1_sim) {
      this.velocity.x = -1 * this.velocity.x;
      this.acceleration.x = -1 * this.acceleration.x;
    }
    if (this.position.y < 0 || this.position.y > height) {
      this.velocity.y = -1 * this.velocity.y;
      this.acceleration.y = -1 * this.acceleration.y;
    }
  }

  show() {
    strokeWeight(stroke_width_size);
    stroke(0, 255, 255);
    point(this.position.x, this.position.y);
  }
}

class co {
  constructor() {
    this.position = createVector(width1_sim / 3, height / 2);
    this.velocity = p5.Vector.random2D();
    this.velocity.setMag(random(0.5, 1));
    this.acceleration = createVector();
  }

  update() {
    this.position.add(this.velocity);
    this.velocity.add(this.acceleration);
    if (this.position.x < 0 || this.position.x > width1_sim) {
      this.velocity.x = -1 * this.velocity.x;
      this.acceleration.x = -1 * this.acceleration.x;
    }
    if (this.position.y < 0 || this.position.y > height) {
      this.velocity.y = -1 * this.velocity.y;
      this.acceleration.y = -1 * this.acceleration.y;
    }
  }

  show() {
    strokeWeight(stroke_width_size);
    stroke(255, 255, 255);
    point(this.position.x, this.position.y);
  }
}

class re {
  constructor() {
    this.position = createVector(width1_sim / 3, height / 2);
    this.velocity = p5.Vector.random2D();
    this.velocity.setMag(random(0.5, 1));
    this.acceleration = createVector();
  }

  update() {
    this.position.add(this.velocity);
    this.velocity.add(this.acceleration);
    if (this.position.x < 0 || this.position.x > width1_sim) {
      this.velocity.x = -1 * this.velocity.x;
      this.acceleration.x = -1 * this.acceleration.x;
    }
    if (this.position.y < 0 || this.position.y > height) {
      this.velocity.y = -1 * this.velocity.y;
      this.acceleration.y = -1 * this.acceleration.y;
    }
  }

  show() {
    strokeWeight(stroke_width_size);
    stroke(0, 255, 0);
    point(this.position.x, this.position.y);
  }
}