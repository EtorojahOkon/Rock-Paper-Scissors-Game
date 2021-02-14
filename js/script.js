try {
    showName();
    showOpponent();
} catch (error) {
    alert(error);
}

function showName() {
    if(localStorage.getItem("name") !== null) {
        document.getElementById("name").value = localStorage.getItem("name");
        document.getElementById("playerName").innerHTML = localStorage.getItem("name");
    }
}

function showOpponent() {
    if(localStorage.getItem("mode") !== "computer") {
        document.getElementById("oppName").innerHTML = 'Human';
        document.getElementById("hum").setAttribute("checked", true);
        document.getElementById("comp").removeAttribute("checked");
    }
    else{
        document.getElementById("oppName").innerHTML = 'Computer';
        document.getElementById("comp").setAttribute("checked", true);
        document.getElementById("hum").removeAttribute("checked");
    }
}

function changeMode(mode){
    localStorage.setItem("mode", mode);
    showOpponent();
}

function changeName(){
    if(document.getElementById("name").value.length > 8 ) {
        alert("Name must not exceed 8 characters!");
    }
    else{
        localStorage.setItem("name", document.getElementById("name").value);
        alert("Name changed!");
        showName();
    }
}

function resetGame(){
    localStorage.removeItem("computerScore");
    localStorage.removeItem("humanScore");
    showScore();
}

function playGame(game) {
    if (game == "rock") {
        document.getElementById("show-hplay").innerHTML = '<img class="h-type" src="img/rock.jpg" alt="rock"/>';
    } 
    else if(game == "paper"){
        document.getElementById("show-hplay").innerHTML = '<img class="h-type" src="img/paper.jpg" alt="paper"/>';
    }
    else {
        document.getElementById("show-hplay").innerHTML = '<img class="h-type" src="img/scissors.jpg" alt="scissors"/>';
    }
    setTimeout(computerPlay(game), 3000);
}

function computerPlay(selection) {
    var chances = ["rock", "paper", "scissors"];
    var chosen = chances[Math.floor(Math.random() * chances.length)];

    if (chosen == "rock") {
        document.getElementById("show-cplay").innerHTML = '<img class="h-type" src="img/rock.jpg" alt="rock"/>';
    } 
    else if(chosen == "paper"){
        document.getElementById("show-cplay").innerHTML = '<img class="h-type" src="img/paper.jpg" alt="paper"/>';
    }
    else {
        document.getElementById("show-cplay").innerHTML = '<img class="h-type" src="img/scissors.jpg" alt="scissors"/>';
    }


    if (chosen == selection) {
        document.getElementById("result").innerHTML = '<div class="alert alert-warning"> It is a draw</div>';
    } else {
        switch (chosen) {
            case "rock":
                if(selection == "paper") {
                    addScore("human");
                }
                else{
                    addScore("computer")
                }
                break;
            case "paper" :
                if(selection == "scissors") {
                    addScore("human");
                }
                else{
                    addScore("computer")
                }
                break;
            default:
                if(selection == "rock") {
                    addScore("human");
                }
                else{
                    addScore("computer")
                }
                break;
        }
    }
}

function addScore(winner) {

    if (winner == "computer") {
        let a = localStorage.getItem("computerScore");
        localStorage.setItem("computerScore", parseInt(a) + 1);
        document.getElementById("result").innerHTML = '<div class="alert alert-success"> Computer wins</div>';
        showScore();
    } else {
        let a = localStorage.getItem("humanScore");
        localStorage.setItem("humanScore",  parseInt(a) + 1);
        document.getElementById("result").innerHTML = '<div class="alert alert-success"> You win</div>';
        showScore();
    }

}

function showScore() {

    if(localStorage.getItem("computerScore") == null){
        localStorage.setItem("computerScore", 0);
        localStorage.setItem("humanScore",  0);
        document.getElementById("scoreboard").innerHTML = "0 : 0";
    }

    document.getElementById("scoreboard").innerHTML = localStorage.getItem("humanScore") + " " + ":" + " " + localStorage.getItem("computerScore");
    
}

function wrongPlay(){
    document.getElementById("result").innerHTML = '<div class="alert alert-danger"> Computer: Please do not play for me<!/div>';
}

 