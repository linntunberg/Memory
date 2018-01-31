var clicks = 0;
var firstchoice;
var secondchoice;

var match = 0;
var backcard = "back.jpeg";

var image = [];
image[0] = 'nicolas1.jpg';
image[1] = 'nicolas2.jpg';
image[2] = 'nicolas3.jpg';
image[3] = 'nicolas4.jpg';
image[4] = 'nicolas5.jpg';
image[5] = 'nicolas6.jpg';
image[6] = 'nicolas7.jpg';
image[7] = 'nicolas8.jpg';
image[8] = 'nicolas1.jpg';
image[9] = 'nicolas2.jpg';
image[10] = 'nicolas3.jpg';
image[11] = 'nicolas4.jpg';
image[12] = 'nicolas5.jpg';
image[13] = 'nicolas6.jpg';
image[14] = 'nicolas7.jpg';
image[15] = 'nicolas8.jpg';


function choose(card) {
				if (clicks == 2) {
						return;
				}
				if (clicks == 0) {
						firstchoice = card;
						document.images[card].src = image[card];
						clicks = 1;
				} else {
						clicks = 2;
						secondchoice = card;
						document.images[card].src = image[card];
						timer = setInterval("check()", 1000);
				}
		}


		function check() {
				clearInterval(timer); 
				clicks = 0;
				if (image[secondchoice] == image[firstchoice]) {
						match++;

				} else {
						document.images[firstchoice].src = backcard;
						document.images[secondchoice].src = backcard;
						return;
				}
		}
