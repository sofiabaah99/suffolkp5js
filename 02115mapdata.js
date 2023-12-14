//map visual with suffolk county vs 02115 zipcode
function preload() {
    //zipcode level data first (A)
    tableDataA = loadTable('5330-02115DataTotals.csv', 'csv', 'header');
    //county level data second (B)
    tableDataB = loadTable('MassSuffolkCounty.csv', 'csv', 'header');
}

let tableDataA; // Variable to hold the loaded CSV data for the NU zipcode
let tableDataB; // Variable to hold the loaded CSV data for the county
let textBoxWidth = 375;
let textBoxHeight = 40;
let dataAToShow = []; // Array to store data to display
let dataBToShow = []; 
let textBoxesVisibleA = false; // Flag to track the visibility of the illustration
let textBoxesVisibleB = false; // Flag to track the visibility of the illustration
let zipcodesBig = false; 
let countyBig = false; 
let countyselect = false;
let = img1;

function setup() {
    //createCanvas(width, height)
    createCanvas(1350, 1000);
    extractData(); // Extract data from the CSVs
    img1 =loadImage("SuffolkMap.png");
    textFont('Helvetica');
}

function extractData() {
    for (let i = 0; i < tableDataA.getRowCount(); i++) {
        let nameA = tableDataA.getString(i, 'Label');
        let valueA = tableDataA.getString(i, 'Estimate');
        dataAToShow.push({ nameA, valueA });
    }

    for (let i = 0; i < tableDataB.getRowCount(); i++) {
        let nameB = tableDataB.getString(i, 'Label');
        let valueB = tableDataB.getString(i, 'Estimate');
        dataBToShow.push({ nameB, valueB });
    }
}

//changing the color of the zipcode and county when you click
function drawText() {
    if (countyBig) {
        fill(255);
        text('Suffolk', 430, 390);
        textSize(18);
    
    } else { 
        fill(65);
        text('Suffolk', 430, 390);
        textSize(18);
        noStroke()
    }

    if (zipcodesBig) {
        fill(255);
        text('02115', 390, 630);
        textSize(18); 
    } else { 
        fill(65);
        text('02115', 390, 630);
        textSize(18);
        noStroke()
    }
}

 // Check if the mouse is clicked on "02115" and "suffolk"
function mousePressed() {
    if (mouseX > 350 && mouseX < 500 && mouseY > 550 && mouseY < 650) {
        textBoxesVisibleA = !textBoxesVisibleA; // Set to show text boxes when zipcode is clicked
        zipcodesBig = !zipcodesBig;
    } else {
        textBoxesVisibleA = false; 
        zipcodesBig = false
    };
    if (mouseX > 400 && mouseX < 550 && mouseY > 360 && mouseY < 420) {
        textBoxesVisibleB = !textBoxesVisibleB; // Set to show text boxes when county is clicked
        countyBig = !countyBig;
    } else {
        textBoxesVisibleB = false; 
        countyBig  = false
    }
}

function draw() {
    background(255);
    //image (x, y, width, height)//
    image(img1, 0, 5, 1000, 1000);
    //add label with white background
    
    //zipcode box
    fill(112, 194, 154);
    rect(385, 615, 65, 25);
    
    //county box
    fill(242, 206, 62);
    rect(420, 375, 75, 25);

    // Display the data using mouseover
    let x = 950;
    let y = 5;
    let spacing = 50;

    if (textBoxesVisibleA) {
        //loop to usse extracted data
        for (let i = 0; i < dataAToShow.length; i++) {
            let data = dataAToShow[i];
            let textBoxText = data.valueA;
            let textBoxText2 = data.nameA


            // Check if the mouse is over the box
            if (
                mouseX > x &&
                mouseX < x + textBoxWidth &&
                mouseY > y &&
                mouseY < y + textBoxHeight
            ) {
                fill(112, 194, 154); // Change color when mouse is over
                // Draw the box
                rect(x, y, textBoxWidth, textBoxHeight);
                // Display text
                fill(0);
                textAlign(LEFT, CENTER);
                text(textBoxText, x + 10, y + textBoxHeight / 2);
                textSize(18);
            } else {
                fill(215);
                // Draw the box
                rect(x, y, textBoxWidth, textBoxHeight);
                // Display text
                fill(0);
                textAlign(LEFT, CENTER);
                text(textBoxText2, x + 10, y + textBoxHeight / 2);
                textSize(18)
            }

            y += spacing; // makes the boxes 50pts apart
        }
    }

    if (textBoxesVisibleB) {
        for (let i = 0; i < dataBToShow.length; i++) {
            let data = dataBToShow[i];
            let textBoxText = data.valueB;
            let textBoxText2 = data.nameB


            // Check if the mouse is over the box
            if (
                mouseX > x &&
                mouseX < x + textBoxWidth &&
                mouseY > y &&
                mouseY < y + textBoxHeight
            ) {
                fill(242, 206, 62); // Change color when mouse is over
                // Draw the box
                rect(x, y, textBoxWidth, textBoxHeight);
                // Display text
                fill(0);
                textAlign(LEFT, CENTER);
                text(textBoxText, x + 10, y + textBoxHeight / 2);
                textSize(18);
            } else {
                fill(215);
                // Draw the box
                rect(x, y, textBoxWidth, textBoxHeight);
                // Display text
                fill(0);
                textAlign(LEFT, CENTER);
                text(textBoxText2, x + 10, y + textBoxHeight / 2);
                textSize(18)
            }

            y += spacing; // makes the boxes 50pts apart
        }
    }

    drawText();
}

