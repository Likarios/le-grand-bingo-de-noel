var inputs = document.getElementsByTagName("input");
var inputsById = {};
var points = 0;
//localStorage.clear();
load();

function load() {
    inputsById = JSON.parse(localStorage.getItem("save"));
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
    inputsById = {};
    points = 0;
    for (var i = 0; i < inputs.length; i++) {
        inputsById[i] = inputs[i].checked;
        if(parseInt(inputs[i].dataset.points) * 0 == 0 && inputs[i].checked){
            points += parseInt(inputs[i].dataset.points);
        }
    }
    localStorage.setItem("save", JSON.stringify(inputsById));
    updatePointsSpan();
}

function updatePointsSpan() {
    document.getElementById("point").innerHTML = points;
}