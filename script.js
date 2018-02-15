let firstchoice;

let image = ['nicolas1.jpg', 'nicolas1.jpg', 'nicolas2.jpg', 'nicolas2.jpg', 'nicolas3.jpg', 'nicolas3.jpg', 'nicolas4.jpg', 'nicolas4.jpg', 'nicolas5.jpg', 'nicolas5.jpg', 'nicolas6.jpg', 'nicolas6.jpg', 'nicolas7.jpg', 'nicolas7.jpg', 'nicolas8.jpg', 'nicolas8.jpg'];

function shuffle(a)
{
	var j, x, i;
	for (i = a.length - 1; i > 0; i--) {
		j = Math.floor(Math.random() * (i + 1));
		x = a[i];
		a[i] = a[j];
		a[j] = x;
	}
	return a;
}
image = shuffle(image);

image.forEach(function(img) { //loops through the array "image" and creates a card for every div in the array.
	let card= document.createElement('div'); //creates element div
	card.classList.add('card'); //adds a the class named "card" to the element "card", adding this to the first card

	card.style.backgroundImage = `url('${img}')`; //background of card is img

	card.addEventListener('click', function(event) //adds event listener when clicked, something happens
	{
		let card = event.target; //every time you click a card, it assigns the event target
		card.classList.add('show') //adds the class "show"
		choose(card); //sends the event target to the function
	});
	document.body.querySelector('.content').appendChild(card); //adds content to the body of the document
});

function choose(card) { //this is the function
	if(firstchoice == null) { //checks if the user clicked a card
		firstchoice = card; //assigns the first card to firstchoice
	}
	else {
		if (firstchoice.style.backgroundImage == card.style.backgroundImage) { //compares firstchoice to card
			firstchoice.style.visibility="hidden"; //if they match then remove both
			card.style.visibility="hidden";
			firstchoice = null; //then resets the firstchoice
		}
		else {
			setTimeout(()=>{ //so the cards dont flip right away
				card.classList.remove('show'); //remove class for card and firstchoice
				firstchoice.classList.remove('show');
				firstchoice = null; //resets
			},500);

		}
	}
}


document.getElementById("button").addEventListener("click", function() {
	location.reload();
});
