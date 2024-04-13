const flock1 = [];
const flock2 = [];
const suss = [];
const coin = [];
const rec = [];
let count = {};
let sussCounts = [];
let virus1Counts = [];
let lastUpdate = 0;

const canvasWidth = 1200;
const canvasHeight = 500;
const numSuss = 800;
const numBoid = 0;
const numBb = 1;

function generateRandomBool() {
  return Math.random() >= 0.5;
}

function setup() {
  createCanvas(canvasWidth, canvasHeight);

  for (let i = 0; i < numSuss; i++) {
    suss.push(new sus());
    if (i < numBb) flock2.push(new bb());
    if (i < numBoid) flock1.push(new Boid());
  }
}

function draw() {
  background(51);

  // Update and show flock1
  for (let i = flock1.length - 1; i >= 0; i--) {
    let boid = flock1[i];
    boid.update();
    boid.show();

    // Check for collisions with flock2
    for (let j = flock2.length - 1; j >= 0; j--) {
      let bb = flock2[j];
      let d = dist(
        boid.position.x,
        boid.position.y,
        bb.position.x,
        bb.position.y
      );
      if (d < 2 && generateRandomBool()) {
        flock2.splice(j, 1);
        coin.push(new co());
        break;
      }
    }
  }

  // Update and show flock2
  for (let i = flock2.length - 1; i >= 0; i--) {
    let bb = flock2[i];
    bb.update();
    bb.show();
  }

  // Update and show suss
  for (let i = suss.length - 1; i >= 0; i--) {
    let sus = suss[i];
    sus.update();
    sus.show();

    for (let j = flock2.length - 1; j >= 0; j--) {
      let bbb = flock2[j];
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
        flock2.push(mn);
        break;
      }
    }

    for (let j = flock1.length - 1; j >= 0; j--) {
      let bbb = flock1[j];
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
        flock1.push(mn);
        break;
      }
    }
  }

  // Update and show coins
  for (let co of coin) {
    co.update();
    co.show();
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

  // Update counts for graph
  if (frameCount - lastUpdate >= 60 * 0.1) {
    sussCounts.push(suss.length);
    virus1Counts.push(flock2.length);
    lastUpdate = frameCount;
  }

  count = {
    virus1: flock1.length,
    virus2: flock2.length,
    Susciptible: suss.length,
    Coinfection: coin.length,
  };

  console.log(count);
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
  for (let i = 0; i < virus1Counts.length; i++) {
    let x = map(i, 0, virus1Counts.length - 1, 600, width - 20);
    let y = map(virus1Counts[i], 0, max(virus1Counts), height - 20, 200);
    vertex(x, y);
  }
  endShape();
}
