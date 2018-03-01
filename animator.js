var start_b = document.getElementById("start");
var stop_b = document.getElementById("stop");
var svg = document.getElementById("svgfield");
var rect = svg.getBoundingClientRect();
var dvd_b = document.getElementById("dvd");
var circle_b = document.getElementById("shurnk");

var toggler = 0;
var id;
var circle, dvd;
var first = 1;
var x,y,r,xMag,yMag,step;

var animate = function() {
  if (first) {
    console.log("\nstarting animation...");
    if (toggler) {
      console.log("initializing dvd...");
      x = rect.width / 2;
      y = rect.height / 2;
      r = 7;
      xMag = (Math.random() * 20) - 10;
      yMag = (Math.random() * 20) - 10;
      dvd = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      dvd.setAttribute("cx", x);
      dvd.setAttribute("cy", y);
      dvd.setAttribute("r", 7);
      dvd.setAttribute("fill", "green");
      svg.appendChild(dvd);
    }
    else {
      console.log("initializing circle...");
      x = rect.width / 2;
      y = rect.height / 2;
      r = 0;
      step = 3;
      circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      circle.setAttribute("cx", x);
      circle.setAttribute("cy", y);
      circle.setAttribute("r", 7);
      circle.setAttribute("fill", "green");
      svg.appendChild(circle);
    }
    console.log("Initialized");
    first = 0;
  }
    stopit();

    function circ() {
      console.log("Making circle...")
      r += step;
      circle.setAttribute("r", r);
      id = setInterval(animate, 10);
      if (r >= rect.width / 2 || r <= 0) {
        step *= -1;
      }
    }

    function dvdo() {
      x += xMag;
      y += yMag;
      dvd.setAttribute("cx", x);
      dvd.setAttribute("cy", y);
      id = setInterval(animate, 10);
      if(y - r <= 0 || y + r >= rect.height) {
        yMag *= -1;
      }
      if(x - r <= 0 || x + r >= rect.width) {
        xMag *= -1;
      }
    }
    if (toggler) {
      dvdo();
    }
    else {
      circ();
    }
  }

var stopit = function() {
  clearInterval(id);
}


var dvdanim = function() {
  stopit();
  while (svg.lastChild) {
    svg.removeChild(svg.lastChild);
  }
  first = 1;
  toggler = 1;
  animate();
}

var turgle = function() {
  stopit();
  while (svg.lastChild) {
    svg.removeChild(svg.lastChild);
  }
  first = 1;
  toggler = 0;
  animate();
}


id = setInterval(animate, 10);

start_b.addEventListener('click', animate);
stop_b.addEventListener('click', stopit);
dvd_b.addEventListener('click', dvdanim);
circle_b.addEventListener('click', turgle);
