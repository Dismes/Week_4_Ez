window.onload = function () {
    // $("#mainrow").remove();
    StartGame();
}


var wins;
var loses;
var totalvalue = 1;
var RandomArray = [];
var totalvalueGuess = 0;
var havewon = false;

$(document).ready(function () {

    $("#Firstpic").click(function () {
        console.log("first");
        addNumber(0);
    });
    $("#Secondpic").click(function () {
        console.log("Second");
        addNumber(1);
    });
    $("#Thirdpic").click(function () {
        console.log("Third");
        addNumber(2);
    });
    $("#Forthpic").click(function () {
        console.log("fourth");
        addNumber(3);
    });
    $("#reset").click(function () {
        alert("Reseting");
        ResetGame();
    });
});





function StartGame() {
    console.log("startgame");
    wins = 0;
    loses = 0;
    ResetGame();
   

}


function ResetGame() {
    console.log("reset");
    totalvalue = 0;
    totalvalueGuess = 0;
    var value;
    for (i = 0; i < 4; i++) {
        
        value = Math.floor((Math.random() * 10) + 1);
        console.log("The Value shoule be " + value)
        RandomArray[i] = value;
        console.log("Randomarray is equal " + RandomArray[i])
    }
    SetTotalValue();
    updateHTML();
}

function SetTotalValue() {
    console.log("settotalValue");
    var num;
    num = Math.floor((Math.random * 4) + 1);
    totalvalue = 0;
    havewon = false;

    for (i = 0; i < 4; i++) {

        totalvalue += RandomArray[i] * (i+2);
        console.log("totalvalue is = " + totalvalue);
    }

    return num;

}

function Checkifcorrect() {
    console.log("checkifCorrect");
    if (havewon == false) {
        if (totalvalue === totalvalueGuess) {
            wins++;
            alert("Congrats You have won!");
            havewon = true;
        }
        if (totalvalue < totalvalueGuess) {
            loses++;
            alert("You Have lost");
            havewon = true;
        }
    }
}

function addNumber(value) {
    console.log("addnumber");
    console.log("total value guess should be " + totalvalueGuess);
    console.log("random value guess should be " + RandomArray[value]);
    totalvalueGuess += RandomArray[value];
    console.log("total value guess should be " + totalvalueGuess);
    Checkifcorrect();
    updateHTML();
}

function updateHTML() {
    console.log("UpdateHtml");
    document.getElementById("WinsValue").innerHTML = "Wins: " + wins;
    document.getElementById("LosesValue").innerHTML = "Loses: " + loses;
    document.getElementById("TotalValue").innerHTML = "Total Score: " + totalvalueGuess;
    document.getElementById("HitValue").innerHTML = "Value to hit: " + totalvalue;
}