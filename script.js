var inputs = document.getElementsByTagName("input");
var inputsById = {};
var points = 0;
var year;
//localStorage.clear();
load();

function load() {
    inputsById = JSON.parse(localStorage.getItem("save" + year));
    points = 0;
    if(inputsById == null){
        return;
    }
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].checked = inputsById[i];
        if(parseInt(inputs[i].dataset.points) * 0 == 0 && inputs[i].checked){
            points += parseInt(inputs[i].dataset.points);
        }
    }
    updatePointsSpan();
}

function save() {
    playSound();
    inputsById = {};
    points = 0;
    for (var i = 0; i < inputs.length; i++) {
        inputsById[i] = inputs[i].checked;
        if(parseInt(inputs[i].dataset.points) * 0 == 0 && inputs[i].checked){
            points += parseInt(inputs[i].dataset.points);
        }
    }
    localStorage.setItem("save" + year, JSON.stringify(inputsById));
    updatePointsSpan();
}

function updatePointsSpan() {
    document.getElementById("point").innerHTML = points;
}

function playSound() {
    var rand = getRandomInt(4);
    var audio;
    switch(rand) {
        case 0:
            audio = new Audio("sound_1.mp3");
            break;
        case 1:
            audio = new Audio("sound_2.mp3");
            break;
        case 2:
            audio = new Audio("sound_3.mp3");
            break;
        default:
            audio = new Audio("sound_4.mp3");
            break;
    }
    audio.play();
    
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}