var inputs = document.getElementsByTagName("input");
var inputsById = {};
//localStorage.clear();
load();

function load() {
    inputsById = JSON.parse(localStorage.getItem("save"));
    if(inputsById == null){
        return;
    }
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].checked = inputsById[i];
    }
}

function save() {
    var inputsById = {};
    for (var i = 0; i < inputs.length; i++) {
        inputsById[i] = inputs[i].checked;
    }
    localStorage.setItem("save", JSON.stringify(inputsById));
}