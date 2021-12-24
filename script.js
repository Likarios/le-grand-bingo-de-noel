var checkbox = document.getElementsByTagName("input");
localStorage.setItem("checkbox1", checkbox.checked);

var checked = JSON.parse(localStorage.getItem("checkbox1"));
document.getElementsByTagName("input").checked = checked;