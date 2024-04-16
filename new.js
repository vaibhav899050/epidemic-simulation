// const flock1 = [];
// const flock2 = [];
// const suss = [];
// const coin = [];
// const rec = [];
// let count = {};
let sussCounts = [];
let rec = [];
// let virus1Counts = [];
// let lastUpdate = 0;

const canvasWidth = 1200;
const canvasHeight = 500;
// const numSuss = 800;
// const numBoid = 0;
// const numBb = 1;

const people = 1000;
const virus1 = 10;
const virus2 = 10;
const humanity = [];
const sim_width = 600;
const sim_height = 500;
const ini_inf_radius = 10;
const virus1x = sim_width/4;
const virus1y = sim_height/2;
const virus2x = 3*sim_width/4;
const virus2y = sim_height/2;
let lastUpdate1 = 0;
const infectionRadius = 2;
let frameCount1 = 0;
let f = 0;
let l = 0;

function generateRandomBool() {
  return Math.random() >= 0.5;
}

function setup() {
  createCanvas(canvasWidth, canvasHeight);

  for(let i =0; i<people; i++){
    let newPerson = new person();
    newPerson.position.x = random(0, sim_width);
    newPerson.position.y = random(0, sim_height);
    
    humanity.push(newPerson);
    
  }

  for(let i =0; i<virus1; i++){
    let newvirus1 = new person();
    newvirus1.viruses.push(1);
    newvirus1.position.x = virus1x+random(0, ini_inf_radius);
    newvirus1.position.y = virus1y-random(0, ini_inf_radius);
    humanity.push(newvirus1);
    
  }
  for(let i =0; i<virus2; i++){
    let newvirus2 = new person();
    newvirus2.viruses.push(2);
    newvirus2.position.x = virus2x+random(0, ini_inf_radius);
    newvirus2.position.y = virus2y-random(0, ini_inf_radius);
    humanity.push(newvirus2);
    
  }

}

function draw() {
    background(0, 0, 0);
    frameCount1=frameCount1+1;
    f=f+1;
    for(let i = 0; i<humanity.length; i++){
        humanity[i].update();
        humanity[i].show();
        let person1  = humanity[i];
        
        
        for(let j = 0; j<humanity.length; j++){
            let person2 = humanity[j];
            
            if(i==j){
                continue;
            }
            let d = dist(person1.position.x, person1.position.y, person2.position.x, person2.position.y);
            if(d<infectionRadius){
                for(let virus of person2.viruses){
                    if(generateRandomBool()){
                        person1.infect(virus);
                        //console.log(virus);
                        
                    }
                }
            }
        }
        if(generateRandomBool()){
            //console.log(1);
            
        }
        //console.log(frameCount1 - lastUpdate1);
        
        
        humanity[i].update();
        humanity[i].show();

        
    }

    
      let cnt = 0;
      let cnt1 = 0;
      for(let i = 0; i<humanity.length; i++){
        if(humanity[i].viruses.length==0){
          cnt++;
        }
        if(humanity[i].immune.length==2){
          cnt1++;
        }
      }
      rec.push(cnt1);
      sussCounts.push(cnt);
      l=f;
    
    

    if (frameCount1 - lastUpdate1 >= 60*3) {
        let cnt = 0;
        for(let i = 0; i<humanity.length; i++){
            if(humanity[i].viruses.length==0){
              cnt++;
            }
            // let person1  = humanity[i];
            
            
            // for(let j = 0; j<humanity.length; j++){
            //     let person2 = humanity[j];
                
            //     if(i==j){
            //         continue;
            //     }
            //     let d = dist(person1.position.x, person1.position.y, person2.position.x, person2.position.y);
            //     if(d<infectionRadius){
            //         for(let virus of person2.viruses){
            //             if(generateRandomBool()){
            //                 person1.infect(virus);
            //                 //console.log(virus);
                            
            //             }
            //         }
            //     }
            // }
            // if(generateRandomBool()){
            //     //console.log(1);
                
            // }
            //console.log(frameCount1 - lastUpdate1);
            
            if(humanity[i].viruses.length==1){
                if(generateRandomBool()){
                    humanity[i].recover();
                }
               }
               
                lastUpdate1 =frameCount1;
            
    
            
        }
        sussCounts.push(cnt);
        // if(humanity[i].viruses.length==1){
        //  console.log(1);
        // }
        // humanity[i].recover();
        //  lastUpdate1 =frameCount1;
     }
     drawGraph();
     drawGraph1();

    
}



function drawGraph() {
  stroke(255);
  noFill();
  beginShape();
  for (let i = 0; i < sussCounts.length; i++) {
    let x = map(i, 0, sussCounts.length - 1, 600, width - 20);
    let y = map(sussCounts[i], 0, max(sussCounts), height - 20, 200);
    vertex(x, y);
  }
  endShape();
}

function drawGraph1() {
  stroke(255);
  noFill();
  beginShape();
  for (let i = 0; i < rec.length; i++) {
    let x = map(i, 0, rec.length - 1, 600, width - 20);
    let y = map(rec[i], 0, max(rec), height - 20, 200);
    vertex(x, y);
  }
  endShape();
}
