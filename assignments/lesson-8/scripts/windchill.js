var t = 22;
var 2 = 18;
var f = getWindChill(t,s);

document.getElementById("windSpeed").innerHTML = s;
document.getElementById("temp").innerHTML = t + "&deg";
document.getElementById("windChill").innerHTML = f + "&deg";

console.log(f);

function getWindChill(t,s)
{
    var windChill = 35.74 + .6215 *  t - 35.75 * Math.pow(s, .16) + .4275 * t * Math.pow(s, .16);
    return parseInt(windChill);
}