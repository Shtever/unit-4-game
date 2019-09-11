 // set win & loss vars to 0
 var wins = 0;
 var losses = 0;
 
 start()


                        //  var crystalRandomNumber = Math.floor(Math.random() * 12) + 1;
                        //  console.log(crystalRandomNumber);
                        //  //assign random numbers to each crystal (1-12)
                        // $("#crystal1");
                        // $("#crystal2");
                        // $("#crystal3");
                        // $("#crystal4");

 //listen - click for each crystal

 //create player score counter

 // if statement - 
        // if player score < goal, add crystal score to player total
        // if player score === goal, wins++ & alert "you won"  *** Possibly sfx - crystal shyps
        // if player score > goal, loss ++ & alert "you lost" *** possibly sfx


        
//function to generate random numbers

//function to reset
function start(){
    var targetNumber = Math.floor(Math.random() * 120) + 19;
    // Generate random number goal (19-120)
    $("#target-number").text(targetNumber);
    console.log(targetNumber);
    }