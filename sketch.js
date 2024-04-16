const flock1 = [];
const flock2 = [];
const suss = [];
const coin = [];
const rec = [];
let count = {};
let sussCounts = [];
let virus1Counts = [];
let virus2Counts = [];
let lastUpdate = 0;
let reccnt = [];
let cocnt = [];
const canvasWidth = 1200;
const canvasHeight = 500;
const numSuss = 2800;
const numVirus1 = 10;
const numVirus2 = 10;
let time = 0;
function generateRandomBool() {
  return Math.random() >= 0.5;
}


function newrand(){
  return generateRandomBool()&&generateRandomBool()&&generateRandomBool()&&generateRandomBool()&&generateRandomBool();
}
let recTime = 100;
let rectime2=100;
let recTime1 = 100;
function setup() {
  createCanvas(canvasWidth, canvasHeight);

  for (let i = 0; i < numSuss; i++) {
    let nn = new sus();
    nn.position.x = random(0, 600);
    nn.position.y = random(0, 500);
    suss.push([0,nn]);
    if (i < numVirus2) flock2.push([0,new bb()]);
    if (i < numVirus1) flock1.push([0,new Boid()]);
  }
}

function draw() {
  background(0, 0, 0);
  time+=1;
  stroke(255); // Set stroke color to white
  strokeWeight(5); // Set stroke weight to control the thickness of the border
  //noFill(); // Don't fill the rectangle
  rect(0, 0, width, height);
  strokeWeight(5); // Set stroke weight
  line(width / 2, 0, width / 2, height);
  for(let i = 0; i<flock1.length; i++){
    if(newrand()){
      
      
        if(time-flock1[i][0]>=rectime2){
          let aa = flock1[i][1];
          let bb = new re();
          bb.position.x=aa.position.x;
          bb.position.y=aa.position.y;
          flock1.splice(i, 1);
          rec.push(bb);
        }
    }
  }
  for(let i = 0; i<flock2.length; i++){
    if(newrand()){
      
      
        if(time-flock2[i][0]>=recTime){
          let aa = flock2[i][1];
          let bb = new re();
          bb.position.x=aa.position.x;
          bb.position.y=aa.position.y;
          flock2.splice(i, 1);
          rec.push(bb);
        }
    }
  }
  for(let i = 0; i<coin.length; i++){
    if(newrand()){
      
        if(time-coin[i][0]>=recTime1){
          let aa = coin[i][1];
          let bb = new re();
          bb.position.x=aa.position.x;
          bb.position.y=aa.position.y;
          coin.splice(i, 1);
          rec.push(bb);
        }
    }
  }
  //Update and show flock1
  

  // Update and show flock2
  for (let i = flock2.length - 1; i >= 0; i--) {
    let bb = flock2[i][1];
    bb.update();
    bb.show();
  }

  // Update and show suss
  for (let i = suss.length - 1; i >= 0; i--) {
    let sus = suss[i][1];
    sus.update();
    sus.show();

    for (let j = flock2.length - 1; j >= 0; j--) {
      let bbb = flock2[j][1];
      let d = dist(
        sus.position.x,
        sus.position.y,
        bbb.position.x,
        bbb.position.y
      );
      if (d < 2 && generateRandomBool()) {
        suss.splice(i, 1);
        let mn = new bb();
        mn.position.x = sus.position.x;
        mn.position.y = sus.position.y;
        flock2.push([time,mn]);
        break;
      }
    }

    for (let j = flock1.length - 1; j >= 0; j--) {
      let bbb = flock1[j][1];
      let d = dist(
        sus.position.x,
        sus.position.y,
        bbb.position.x,
        bbb.position.y
      );
      if (d < 2 && generateRandomBool()) {
        suss.splice(i, 1);
        let mn = new Boid();
        mn.position.x = sus.position.x;
        mn.position.y = sus.position.y;
        flock1.push([time,mn]);
        break;
      }
    }
  }
  for (let i = flock1.length - 1; i >= 0; i--) {
    let bb = flock1[i][1];
    bb.update();
    bb.show();

    // Check for collisions with flock2
    for (let j = flock2.length - 1; j >= 0; j--) {
      let boid = flock2[j][1];
      let d = dist(
        boid.position.x,
        boid.position.y,
        bb.position.x,
        bb.position.y
      );
      if (d < 2 && generateRandomBool()) {
        flock2.splice(j, 1);
        coin.push([time,new co()]);
        break;
      }
    }
  }

  // Update and show coins
  for (let co of coin) {
    co[1].update();
    co[1].show();
  }
  for (let re of rec) {
    re.update();
    re.show();
  }

  // Update counts
  document.getElementById("virus1Count").textContent =
    "Virus 1 Count: " + flock1.length;
  document.getElementById("virus2Count").textContent =
    "Virus 2 Count: " + flock2.length;
  document.getElementById("susceptibleCount").textContent =
    "Susceptible Count: " + suss.length;
  document.getElementById("coinfectionCount").textContent =
    "Coinfection Count: " + coin.length;

  document.getElementById("recover").textContent =
    "Recovered Count: " + rec.length;

  // Update counts for graph
  
    sussCounts.push(suss.length);
    virus1Counts.push(flock2.length);
    virus2Counts.push(flock1.length);
    reccnt.push(rec.length);
    cocnt.push(coin.length);
    //console.log(flock2.length-coin.length);
    console.log(virus1Counts.length);
    console.log(cocnt.length)

    lastUpdate = frameCount;
  

  count = {
    virus1: flock1.length,
    virus2: flock2.length,
    Susciptible: suss.length,
    Coinfection: coin.length,
    
  };

  //console.log(count);
  drawGraph();
  drawGraph1();
  drawGraph2();
  drawGraph3();
  drawGraph4();
}

function drawGraph() {
  stroke(0, 255, 255);
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
  stroke(255, 255, 0);
  noFill();
  beginShape();
  for (let i = 0; i < virus1Counts.length; i++) {
    let x = map(i, 0, virus1Counts.length - 1, 600, width - 20);
    let y = map(virus1Counts[i]-40, 0, max(virus1Counts), height - 20, 200);
    vertex(x, y);
  }
  endShape();
}


function drawGraph2() {
  stroke(255, 0, 0);
  noFill();
  beginShape();
  for (let i = 0; i < virus2Counts.length; i++) {
    let x = map(i, 0, virus2Counts.length - 1, 600, width - 20);
    let y = map(virus2Counts[i], 0, max(virus2Counts), height - 20, 200);
    vertex(x, y);
  }
  endShape();
}

function drawGraph3() {
  stroke(0, 255, 0);
  noFill();
  beginShape();
  for (let i = 0; i < reccnt.length; i++) {
    let x = map(i, 0, reccnt.length - 1, 600, width - 20);
    let y = map(reccnt[i], 0, max(reccnt), height - 20, 200);
    vertex(x, y);
  }
  endShape();
}


function drawGraph4() {
  stroke(255, 255, 255);
  noFill();
  beginShape();
  for (let i = 0; i < cocnt.length; i++) {
    let x = map(i, 0, cocnt.length - 1, 600, width - 20);
    let y = map(cocnt[i]/2, 0, max(cocnt), height - 20, 200);
    vertex(x, y);
  }
  endShape();
}