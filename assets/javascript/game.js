var wins = 0;
var losses = 0;
var audioLoss = new Audio("assets/Audio/shellShock.mp3");
var audioWin = new Audio("assets/Audio/cowabunga.mp3");
start();
//assign random numbers to each crystal (1-12)

//listen - click for each crystal
$("#crystal1").on("click", function () {
    userTotal = userTotal + crystalNumber1;
    $("#total").text(userTotal);
    console.log("Total: " + userTotal);
    checkScore()
});

$("#crystal2").on("click", function () {
    userTotal = userTotal + crystalNumber2;
    $("#total").text(userTotal);
    console.log("Total: " + userTotal);
    checkScore()

});

$("#crystal3").on("click", function () {
    userTotal = userTotal + crystalNumber3;
    $("#total").text(userTotal);
    console.log("Total: " + userTotal);
    checkScore()
});

$("#crystal4").on("click", function () {
    userTotal = userTotal + crystalNumber4;
    $("#total").text(userTotal);
    console.log("Total: " + userTotal);
    checkScore()
});

$("#crystal5").on("click", function () {
    if(crystalNumber5 === 1){
        userTotal = targetNumber
        console.log("Sudden Death Success!")
    } else { 
        userTotal = targetNumber + 1
        console.log("Sudden Death Failure!")
    }
    checkScore()
});

//create player score counter

// if statement - 
// if player score < goal, add crystal score to player total
function checkScore() {
    if (userTotal === targetNumber) {
        wins++;
        $("#wins").text(wins);
        audioWin.play();
        alert("YOU WON!");
        start();
    } else if (userTotal > targetNumber) {
        losses++;
        $("#losses").text(losses);
        audioLoss.play();
        alert("YA GOT GREEDY");
        start();
    } else { };
}

//function to reset & regenerate random numbers
function start() {
    // Generate random number goal (19-120)
    targetNumber = Math.floor(Math.random() * 120) + 19;
    $("#target-number").text(targetNumber);
    // Generate random number for crystals (1-12)
    crystalNumber1 = Math.floor(Math.random() * 12) + 1;
    crystalNumber2 = Math.floor(Math.random() * 12) + 1;
    crystalNumber3 = Math.floor(Math.random() * 12) + 1;
    crystalNumber4 = Math.floor(Math.random() * 12) + 1;
    crystalNumber5 = Math.round(Math.random());
    userTotal = 0
    $("#total").text(0);
    console.log("Target Number: " + targetNumber);
    console.log("Crystal Values: " + crystalNumber1 + "/" + crystalNumber2 + "/" + crystalNumber3 + "/" + crystalNumber4);
}

$(document).ready()