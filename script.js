var firstNames = ["1337", "t0xic", "phantom", "Cyb3r", "v1rus", "90N3", "krypt0", "cob3rT", "Bi0", "acid", "gh0st", "L0Rd", "r4dical"];
var secondNames = ["PWNER", "H4X0R", "buRn", "MuX", "d3st0y3r", "phR34k", "Plague", "0verride", "Ch40s", "H4TT", "M1SK", "D4R3"];

var hackerNameVisible = 0;

document.onkeypress = function (e) {
    e = e || window.event;
    if (e.keyCode == 13) {
      if (!hackerNameVisible) {
        hackerNameVisible = 1;
        var hackerName = getHackerName();
        document.getElementById("window").getElementsByTagName("cursor1")[0].innerHTML = "";
        document.getElementById("hackerName").innerHTML = hackerName;
        document.getElementById("hackerName").style.opacity = 1;
        document.getElementById("clear").style.opacity = 1;
      } else {
        hackerNameVisible = 0;
        document.getElementById("hackerName").style.opacity = 0;
        document.getElementById("clear").style.opacity = 0;
        document.getElementById("window").getElementsByTagName("cursor1")[0].innerHTML = "_";
      }
    }
};

function getHackerName() {
	var firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
	var secondName = secondNames[Math.floor(Math.random() * secondNames.length)];
	return firstName + " " + secondName;
}