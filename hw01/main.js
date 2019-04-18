"use strict"

let calc_btn = document.getElementById("action");
calc_btn.addEventListener("click", calculate);

let reset_btn = document.getElementById("reset");
reset_btn.addEventListener("click", reset);

function calculate() {
    /*
        Write your "calculation" code in this function.
        1. Create variables to hold values from your form elements
        2. Convert variables from Strings to Numbers if needed
        3. Perform calculations
        4. Call "output" as many times as needed.
        
        Things to remember:
        1. Name your variables meaningfully (with good spelling)
        2. Write at least one multi-line comment that clearly explains in English what your calculations do
        3. Each call to "output" will add a paragraph to your output. Use this to format your output neatly!
        4. Don't forget that you need to edit index.html as well!
        5. Although my example is nonsensical and is just intended to demonstrate what happens when you add Strings and Numbers together, yours should actually do something meaningful (or entertaining) that makes sense!
    */

    /* These variables store the values from the form */
    let H = document.getElementById("totalHits").value;
    let BB = document.getElementById("totalWalks").value;
    let HBP = document.getElementById("totalHitByPitches").value;
    let SF = document.getElementById("totalSacrificeFlys").value;
    let B = document.getElementById("totalSingles").value;
    let D = document.getElementById("totalDoubles").value;
    let T = document.getElementById("totalTriples").value;
    let HR = document.getElementById("totalHomeruns").value;
    let AB = document.getElementById("totalAtBats").value;
    
    /* These variables store the results of our calculations */
    let c1 = H + BB + HBP;
    let c2 = AB + BB + SF + HBP;
    let c3 = (1 * B) + (2 * D) + (3 * T) + (4 * HR);
    let c4 = c1 / c2;
    let c5 = c4 + c3;
    let OPS = c5 / AB;
    
    
    /* These function calls provide the output to our web page */
    output("Your OPS is: " + OPS);
    
    if (OPS >= .9000) {
        output("You are an All-Star!")
    }
    
    if (OPS.between (.8334, .8999) {
        output("You are almost an All-Star!")
    }
    
    if (OPS.between (.7667, .8333)) {
        output("You are an above average player!")
    }
    
    if (OPS.between (.7000, .7666)) {
        output("You are a perfectly average hitter!")
    }
    
    if (OPS.between (.6334, .6999)) {
        output("You are below average but close to getting there.")
    }
    
    if (OPS.between (.5667, .6333)) {
        output("You are not very good I'm afraid.")
    }
    
    if (OPS.between (0, .5666)) {
        output("You are a person who may want to consider coaching.")
    }
}

function reset() {
    let o = document.getElementById("output");
    while (o.childNodes.length > 3) { // includes button text
        let aNode = o.lastChild;
        if (aNode.id != "reset") {
            o.removeChild(aNode);
        }
    }
    o.style.display = "none";
    let i = document.getElementById("input");
    i.style.display = "block";
}

function output(t) {
    if (t == undefined) {
        console.log("WARNING: You did not provide anything to output");
    } else {
        let p = document.createElement("p");
        let tn = document.createTextNode(t);
        p.appendChild(tn);
        let o = document.getElementById("output");
        o.appendChild(p);
        // TO DO HERE: Move button to last child
        o.style.display = "block";
        let i = document.getElementById("input");
        i.style.display = "none";
    }
}
