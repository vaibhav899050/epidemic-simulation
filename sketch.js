const flock1 = [];
const flock2 = [];
const suss = [];
const coin = [];
const rec = [];
let count ={};
let sussCounts = [];
let virus1Counts = [];
let lastUpdate = 0;

function generateRandomBool() {
    return Math.random() >= 0.5;
  }
  
  // Example usage:
//   console.log(generateRandomBool()); // Output will be either true or false

  
function setup() {
    let cnv=createCanvas(1200, 500);
    
    let cnt1 = 0;
    let cnt2 = 0;

    for (let i = 0; i < 800; i++) {
        
        suss.push(new sus());
    }
    for (let i = 0; i < 10; i++) {
        
        flock1.push(new Boid());
        flock2.push(new bb());
    }
    //plot = new GPlot(this);
    
}

function draw() {
    background(51);
    
    // Update and show flock1
    for (let i = flock1.length - 1; i >= 0; i--) {
        let boid = flock1[i];
        boid.update();
        boid.show();
        
        // Check for collisions with flock2
        // for (let j = flock2.length - 1; j >= 0; j--) {
        //     let bb = flock2[j];
        //     let d = dist(boid.position.x, boid.position.y, bb.position.x, bb.position.y);
        //     if (d < 1) { // If the distance is less than 1 (or within a threshold)
        //         flock1.splice(i, 1); // Remove flock1 element
        //         break; // Exit inner loop since this boid has collided
        //     }
        // }
    }
    for (let i = flock2.length - 1; i >= 0; i--) {
        let bb = flock2[i];
        bb.update();
        bb.show();
        
        // Check for collisions with flock2
        for (let j = flock1.length - 1; j >= 0; j--) {
            let boid = flock1[j];
            let d = dist(bb.position.x, bb.position.y, boid.position.x, boid.position.y);
            if (d < 2 && generateRandomBool()) { // If the distance is less than 1 (or within a threshold)
                
                flock2.splice(i, 1); // Remove flock1 element
                coin.push(new co());
                break; // Exit inner loop since this boid has collided
            }
        }
        
    }
    for (let i = suss.length - 1; i >= 0; i--) {
        let sus = suss[i];
        sus.update();
        sus.show();
        
        // Check for collisions with flock2
        for (let j = flock2.length - 1; j >= 0; j--) {
            let bb = flock2[j];
            let d = dist(sus.position.x, sus.position.y, bb.position.x, bb.position.y);
            if (d < 2 && generateRandomBool()) { // If the distance is less than 1 (or within a threshold)
                suss.splice(i, 1); // Remove flock1 element
                flock1.push(new Boid());
                break; // Exit inner loop since this boid has collided
            }
        }
        for (let j = flock1.length - 1; j >= 0; j--) {
            let bbb = flock1[j];
            let d = dist(sus.position.x, sus.position.y, bbb.position.x, bbb.position.y);
            if (d < 2 && generateRandomBool()) { // If the distance is less than 1 (or within a threshold)
                suss.splice(i, 1); // Remove flock1 element
                flock2.push(new bb());
                break; // Exit inner loop since this boid has collided
            }
        }
    }

    


    
    // Update and show flock2
    for (let co of coin) {
        co.update();
        co.show();
    }

    // for (let sus of suss) {
    //     sus.update();
    //     sus.show();
    // }
    
    // Display count of flock1
    fill(25);
    textSize(20);
    text("Virus 1 Count: " + flock1.length, 20, 30);
    
    // Display count of flock2
    text("Virus 2 Count: " + flock2.length, 20, 60);
    text("Susciptible Count: " + suss.length, 20, 90);
    text("Coinfection Count: " + coin.length, 20, 120);

    
    if (frameCount - lastUpdate >= 60 * 0.1) { // 60 frames per second * 2 seconds
        sussCounts.push(suss.length);
        virus1Counts.push(flock2.length);
        lastUpdate = frameCount;
    }



    count = {
        "virus1" : flock1.length,
        "virus2" : flock2.length,
        "Susciptible" : suss.length,
        "Coinfection" : coin.length,
    }


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

function drawGraph2(){
        let points = [];
       

        for (let i = 0; i < sussCounts.length; i++) {
            points.push(new GPoint(i, sussCounts[i]));
        }
        let plot = new GPlot(this);
        plot.setPos(650, 0);
        plot.setOuterDim(550, height);

        // Add the points
        plot.setPoints(points);

        // Set the plot title and the axis labels
        plot.setTitleText("A very simple example");
        plot.getXAxis().setAxisLabelText("x axis");
        plot.getYAxis().setAxisLabelText("y axis");

        // Draw it!
        plot.defaultDraw();
}

//window.countofgraph = count;
//export default count;
