var myData; 
var myImg; 
var myImg2;
var astronauts = [];

function preload() {
  myData = loadJSON('assets/peopleinspace.json');
  myImg = loadImage('assets/sfondo.png');
  myImg2 = loadImage('assets/rocket.png');
}
function setup() {
  createCanvas(500,500);
  textFont('Teko');
  textSize(18);
  
  for (var i = 0; i < myData.people.length; i++) {
    
    var astroData= myData.people[i];	
	
		var newAstronaut = new Astronaut(astroData.name, astroData.launchdate);
		astronauts.push(newAstronaut);
	}
}

function draw() {
background ('#003399');


fill('#EFEFEF');
text('PRESS THE BUTTONS TO SEE THE STARS',150,35);
text('AND PASS ON CIRCLES TO KNOW THE HEROES',130,55);

for (var i = 0; i < astronauts.length; i++) {
		var astro = astronauts[i];
		astro.move();
		if(mouseIsPressed){
		  if(mouseButton=='left'){
	  astro.display();
		  }
	  
		  else if(mouseButton=='right'){
		    astro.display2();
		  }
		}
	}
	
image(myImg, 10, 120,480,255);
push();

fill ('#FF4D00');
noStroke();
  var x1 = 75;
  var y1 = 180;
  var r1 = 17.5;
  
  var d1 = dist (x1, y1, mouseX, mouseY);
  
  if (d1 <= r1) {
    
   noStroke()
   fill('#F0F8FF');
   rect(x1,y1,x1+80,y1+70);
   
   fill('#FF4D00');
   ellipse(x1,y1,r1*2); 
   
   text ('Randy Bresnik',x1+35,y1+40);
   text ('Commander',x1+35,y1+55);
   text ('Careerdays : 11',x1+35,y1+70);
   
   
   text ('Mark Vande Hei',x1+35,y1+110);
   text ('Flight Engineer',x1+35,y1+125);
   text ('Careerdays : 11',x1+35,y1+140);
   
   text ('Joseph Acaba',x1+35,y1+180);
   text ('Flight Engineer',x1+35,y1+195);
   text ('Careerdays : 11',x1+35,y1+210);
   
  } else {
   fill('#FF4D00');
  }
  ellipse(x1,y1,r1*2);

pop();

push();

fill ('#FF4D00');
noStroke();
  var x2 = 240;
  var y2 = 195;
  var r2 = 5;
  
  var d2 = dist (x2, y2, mouseX, mouseY);
  
  if (d2 <= r2) {
    
   noStroke()
   fill('#F0F8FF');
   rect(x2-60,y2,x2/2+10,y2+1);
   
   fill('#FF4D00');
   ellipse(x2,y2,r2*2); 
   
   text ('Paolo Nespoli',x1+120,y1+105);
   text ('Flight Engineer',x1+120,y1+120);
   text ('Careerdays : 175',x1+120,y1+135);
    
  } else {
   fill('#FF4D00');
  }
  ellipse(x2,y2,r2*2);
pop();

push();

fill ('#FF4D00');
noStroke();
var x3 = 300;
  var y3 = 175;
  var r3 = 12.5;
  
  var d3 = dist (x3, y3, mouseX, mouseY);
  
  if (d3 <= r3) {
    
   noStroke()
   fill('#F0F8FF');
   rect(x3-30,y3,x3/1.5,y3+2);
   
   fill('#FF4D00');
   ellipse(x3,y3,r3*2); 
   
   text ('Sergey Ryazansky',x1+260,y1+40);
   text ('Flight Engineer',x1+260,y1+55);
   text ('Careerdays : 167',x1+260,y1+70);
   
   text ('Alexander Misurkin',x1+260,y1+105);
   text ('Flight Engineer',x1+260,y1+120);
   text ('Careerdays : 166',x1+260,y1+135);
   
  } else {
   fill('#FF4D00');
  }
  ellipse(x3,y3,r3*2);
pop();
//mouse
image(myImg2, mouseX, mouseY,25,55);
}

function Astronaut(name, date) {
  
  this.name= name;
  this.launchDate = date;
  
  var daysInSpace = (Date.now() - Date.parse(this.launchDate)) / 1000 / 60 / 60 / 24;
  

	this.radius = daysInSpace;

	this.x = random(this.radius, width - this.radius);
	this.y = random(this.radius, height - this.radius);

	this.incrementX = 1;
	this.incrementY = 1;

 
  
	this.display = function() {
    noStroke();
		fill('#FFCC99');
		ellipse(this.x, this.y, this.radius / 3 );
 
	}
	
	this.display2 = function() {
	  noStroke();
		fill('#FFFF66');
		ellipse(this.x, this.y, this.radius / 1.5 );
	}

	this.move = function() {

		this.x += this.incrementX;
		this.y += this.incrementY;

		if (this.x > width - this.radius || this.x < this.radius) {
			this.incrementX *= -1
			print(this.x);
			print(this.radius);
		}

		if (this.y > height - this.radius || this.y < this.radius) {
			this.incrementY *= -1
			print(this.y);
			print(this.radius);
		}
	}

  
}