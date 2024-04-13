// const flock1 = [];
// const flock2 = [];
// const suss = [];
// const coin = [];
// const rec = [];
// let count = {};
// let sussCounts = [];
// let virus1Counts = [];
// let lastUpdate = 0;

const canvasWidth = 1200;
const canvasHeight = 500;
// const numSuss = 800;
// const numBoid = 0;
// const numBb = 1;

const people = 0;
const virus1 = 100;
const virus2 = 100;
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
    frameCount1=frameCount1+15;
    for(let i = 0; i<humanity.length; i++){
        let person1  = humanity[i];
        
        
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
        console.log(frameCount1 - lastUpdate1);
        if (frameCount1 - lastUpdate1 >= 6) {
            console.log(1);
           if(person1.viruses.length==1){
            
           }
           person1.recover();
            lastUpdate1 =frameCount1;
        }
        
        person1.update();
        person1.show();

        
    }

    // humanity[2].recover();
    // humanity[3].recover();
    // humanity[4].recover();
    // humanity[5].recover();
    // humanity[6].recover();
    //console.log(humanity.length);
  // Update and show flock1
//   for (let i = flock1.length - 1; i >= 0; i--) {
//     let boid = flock1[i];
//     boid.update();
//     boid.show();

//     // Check for collisions with flock2
//     for (let j = flock2.length - 1; j >= 0; j--) {
//       let bb = flock2[j];
//       let d = dist(
//         boid.position.x,
//         boid.position.y,
//         bb.position.x,
//         bb.position.y
//       );
//       if (d < 2 && generateRandomBool()) {
//         flock2.splice(j, 1);
//         coin.push(new co());
//         break;
//       }
//     }
//   }

//   // Update and show flock2
//   for (let i = flock2.length - 1; i >= 0; i--) {
//     let bb = flock2[i];
//     bb.update();
//     bb.show();
//   }

//   // Update and show suss
//   for (let i = suss.length - 1; i >= 0; i--) {
//     let sus = suss[i];
//     sus.update();
//     sus.show();

//     for (let j = flock2.length - 1; j >= 0; j--) {
//       let bbb = flock2[j];
//       let d = dist(
//         sus.position.x,
//         sus.position.y,
//         bbb.position.x,
//         bbb.position.y
//       );
//       if (d < 2 && generateRandomBool()) {
//         suss.splice(i, 1);
//         let mn = new bb();
//         mn.position.x = sus.position.x;
//         mn.position.y = sus.position.y;
//         flock2.push(mn);
//         break;
//       }
//     }

//     for (let j = flock1.length - 1; j >= 0; j--) {
//       let bbb = flock1[j];
//       let d = dist(
//         sus.position.x,
//         sus.position.y,
//         bbb.position.x,
//         bbb.position.y
//       );
//       if (d < 2 && generateRandomBool()) {
//         suss.splice(i, 1);
//         let mn = new Boid();
//         mn.position.x = sus.position.x;
//         mn.position.y = sus.position.y;
//         flock1.push(mn);
//         break;
//       }
//     }
//   }

//   // Update and show coins
//   for (let co of coin) {
//     co.update();
//     co.show();
//   }

//   // Update counts
//   document.getElementById("virus1Count").textContent =
//     "Virus 1 Count: " + flock1.length;
//   document.getElementById("virus2Count").textContent =
//     "Virus 2 Count: " + flock2.length;
//   document.getElementById("susceptibleCount").textContent =
//     "Susceptible Count: " + suss.length;
//   document.getElementById("coinfectionCount").textContent =
//     "Coinfection Count: " + coin.length;

//   // Update counts for graph
//   if (frameCount - lastUpdate >= 60 * 0.1) {
//     sussCounts.push(suss.length);
//     virus1Counts.push(flock2.length);
//     lastUpdate = frameCount;
//   }

//   count = {
//     virus1: flock1.length,
//     virus2: flock2.length,
//     Susciptible: suss.length,
//     Coinfection: coin.length,
//   };

//   console.log(count);
//   drawGraph();
//   drawGraph1();
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
  for (let i = 0; i < virus1Counts.length; i++) {
    let x = map(i, 0, virus1Counts.length - 1, 600, width - 20);
    let y = map(virus1Counts[i], 0, max(virus1Counts), height - 20, 200);
    vertex(x, y);
  }
  endShape();
}
