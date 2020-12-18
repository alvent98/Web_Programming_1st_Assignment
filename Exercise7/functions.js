"use strict";

function howDareYou() {
  var repBut = document.getElementById('report-button');
  repBut.remove();
  var paragraph = document.createElement("P");
  paragraph.innerHTML = "HOW DARE YOU!";
  paragraph.style.color = "red";
  paragraph.style.fontSize = "x-large";
  document.body.appendChild(paragraph);
}

function maximize() {
  document.querySelector("#paragraph1").style.fontSize = "x-large";
  document.querySelector("#paragraph2").style.fontSize = "x-large";
  document.querySelector("#legend").style.fontSize = "x-large";
}

var curDate = (function() {
  var d = new Date();
  var today = d.getDay();
  return function () {
    var pardalos_titlos = document.getElementById("the-title");
    if(today==0) { //Sun
      pardalos_titlos.style.color = "red";
    } else if(today==1){ //Mon
      pardalos_titlos.style.color = "green";
    } else if(today==2){ //Tue
      pardalos_titlos.style.color = "blue";
    } else if(today==3){ //Wed
      pardalos_titlos.style.color = "orange";
    } else if(today==4){ //Thu
      pardalos_titlos.style.color = "purple";
    } else if(today==5){ //Fri
      pardalos_titlos.style.color = "grey";
    } else { //Sat
      pardalos_titlos.style.color = "yellow";
    }
  }
})();

curDate();
