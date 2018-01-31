var clicks = 0;
var firstchoice;
var secondchoice;

var match = 0;
var backcard = "back.jpeg";

var image = ['nicolas1.jpg', 'nicolas1.jpg', 'nicolas2.jpg', 'nicolas2.jpg', 'nicolas3.jpg', 'nicolas3.jpg', 'nicolas4.jpg', 'nicolas4.jpg', 'nicolas5.jpg', 'nicolas5.jpg', 'nicolas6.jpg', 'nicolas6.jpg', 'nicolas7.jpg', 'nicolas7.jpg', 'nicolas8.jpg', 'nicolas8.jpg'];


function shuffle(a)
{
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
}

image = shuffle(images);



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
