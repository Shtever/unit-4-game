// set win & loss vars to 0
var wins = 0;
var losses = 0;
start();

userTotal = 0
//assign random numbers to each crystal (1-12)

//listen - click for each crystal
$("#crystal1").on("click", function () {
    console.log(crystalNumber1);
    $("#total").text(userTotal + crystalNumber1);
});

$("#crystal2").on("click", function () {
    console.log(crystalNumber2);
    $("#total").text(userTotal + crystalNumber2);
});

$("#crystal3").on("click", function () {
    console.log(crystalNumber3);
    $("#total").text(userTotal + crystalNumber3);
});

$("#crystal4").on("click", function () {
    console.log(crystalNumber4);
    $("#total").text(userTotal + crystalNumber4);
});

//create player score counter

// if statement - 
// if player score < goal, add crystal score to player total
// if player score === goal, wins++ & alert "you won"  *** Possibly sfx - crystal shyps
// if player score > goal, loss ++ & alert "you lost" *** possibly sfx



//function to generate random numbers

//function to reset & regenerate random numbers
function start() {
    // Generate random number goal (19-120)
    targetNumber = Math.floor(Math.random() * 120) + 19;
    // Generate random number for crystals (1-12)
    crystalNumber1 = Math.floor(Math.random() * 12) + 1;
    crystalNumber2 = Math.floor(Math.random() * 12) + 1;
    crystalNumber3 = Math.floor(Math.random() * 12) + 1;
    crystalNumber4 = Math.floor(Math.random() * 12) + 1;
    $("#total").text(0);
}