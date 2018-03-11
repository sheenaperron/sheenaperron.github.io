function windChill() {
var h = parseInt(document.getElementById("hightemp").innerHTML);
var l = parseInt(document.getElementById("lowtemp").innerHTML);
var s = parseInt(document.getElementById("speed").innerHTML);

var average = (h + l) / 2;
var windchill = Math.round(35.74 + (.6215 * average) - (35.75 * (Math.pow(s, .16))) + (.4275 * average * (Math.pow(s,.16))));
    
document.getElementById("windChill").innerHTML = windchill;
}