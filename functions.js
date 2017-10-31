function play(button) {
    document.getElementById("playerH1").innerHTML = "You chose: " + button;
    var computerresult = randomIntegerD();

    console.log("Computer pressed: " + computerresult);

    //Done
    switch (computerresult) {
        case 0:
            computerresult = "rock";
            break;
        case 1:
            computerresult = "paper";
            break;
        case 2:
            computerresult = "scissors";
            break;
        default:
            console.log("Error #1 (RandondPart)");
            break;
    }

    document.getElementById("computerH1").innerHTML = "Computer chose:" + computerresult
    var roundresult = logic(button, computerresult);
    if (roundresult == 1) {
        document.getElementById("roundH1").innerHTML = "Round result: Player wins";
    }
    if (roundresult == 2)
        document.getElementById("roundH1").innerHTML = "Round result: Computer wins";
    if (roundresult == 0) document.getElementById("roundH1").innerHTML = "Round result: tie";
}



//Done
function randomIntegerD() {
    var rand;
    var temp = Math.random();
    console.log("Random raw result: " + temp);

    if (temp < 0.3) {
        rand = 0;
    }
    if (0.3 <= temp && temp <= 0.6) {
        rand = 1;
    }
    if (0.6 < temp && temp < 1) {
        rand = 2;
    }

    return rand;
}

//Done
function namePlease() {
    var name = prompt("What is your name?");
    console.log(name);
    document.getElementById("playersName").innerHTML = "Hello, " + name;
}

function logic(input1, input2) {
    if (input1 == "rock") {
        switch (input2) {
            case 'rock':
                return 0;
                break;
            case 'scissors':
                return 1;
                break;
            case 'paper':
                return 2;
                break;
            default:
                return -1;
        }
    }
    if (input1 == "paper") {
        switch (input2) {
            case 'rock':
                return 1;
                break;
            case 'scissors':
                return 2;
                break;
            case 'paper':
                return 0;
                break;
            default:
                return -1;
        }
    }
    if (input1 == "scissors") {
        switch (input2) {
            case 'rock':
                return 2;
                break;
            case 'scissors':
                return 0;
                break;
            case 'paper':
                return 1;
                break;
            default:
                return -1;
        }
    }
}
