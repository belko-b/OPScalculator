"use strict"

let calc_btn = document.getElementById("action");
calc_btn.addEventListener("click", calculate);

let reset_btn = document.getElementById("reset");
reset_btn.addEventListener("click", reset);

function calculate() {
    /*
        These calculations take baseball statistics that are required to calculate the stat: On-Base Plus Slugging Percentage (OPS).
        OPS represents the ability of a baseball player to both get on base and hit for power. These are two very important
        abilities for a good player to have. The range in which the final result is found gives a good indication as to the 
        quality of the player. 
        
        The second part of this OPS calculator outputs a message to the user informing them of how their calculated OPS stacks 
        up to the range of results. This calculator is handy for both fans of baseball and players at any level of the game.
    */

    let H = document.getElementById("totalHits").value;
    let BB = document.getElementById("totalWalks").value;
    let HBP = document.getElementById("totalHitByPitches").value;
    let SF = document.getElementById("totalSacrificeFlys").value;
    let B = document.getElementById("totalSingles").value;
    let D = document.getElementById("totalDoubles").value;
    let T = document.getElementById("totalTriples").value;
    let HR = document.getElementById("totalHomeruns").value;
    let AB = document.getElementById("totalAtBats").value;
    
    
    let c1 = Number(H) + Number(BB) + Number(HBP);
    let c2 = Number(AB) + Number(BB) + Number(SF) + Number(HBP);
    let c3 = Number(B) * 1;
    let c4 = Number(D) * 2;
    let c5 = Number(T) * 3;
    let c6 = Number(HR) * 4;
    let c7 = c3 + c4 + c5 + c6;
    let c8 = ((c1) / (c2) + (c7) / Number(AB));
    let OPS = c8;
    

    output("Your OPS is: " + OPS);
    
    if (OPS >= .9000) {
        output("You are an All-Star!");
    }
    
    if (.8334 <= OPS && OPS <= .8999) {
        output("You are almost an All-Star!");
    }
    
    if (.7667 <= OPS && OPS <= .8333) {
        output("You are an above average player!");
    }
    
    if (.7000 <= OPS && OPS <= .7666) {
        output("You are a perfectly average hitter!");
    }
    
    if (.6334 <= OPS && OPS <= .6999) {
        output("You are below average but close to getting there.");
    }
    
    if (.5667 <= OPS && OPS <= .6333) {
        output("You are not very good I'm afraid.");
    }
    
    if (0 <= OPS && OPS <= .5666) {
        output("You are a person who may want to consider coaching.");
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
