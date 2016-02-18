/*

	the document will take text randomly from an array of quotes 
	and place them into the html element containing the talk-bubble id
	the text will fade out after every 3 seconds and be updated with another random text from the array


*/

/*************************************STEP 1 Process********************************************************/
/*// Array of quotes
var quotesArray = ["quote 1", "quote 2", "quote 3"];

// get random number between 0 and length of array
var randomNum = Math.floor(Math.random()* quotesArray.length);

// access the actual array object via the random number index
var quote = quotesArray[randomNum];
// alert(quote);

// put the quote into the the html element with the id of text-bubble
document.getElementById("talk-bubble").innerHTML = quote;*/

/****************************************STEP 2 ***********************************************/

/*GLOBAL VARIABLES*/
var randNum = 0; // Random number to access a random array item
var quote; //the quote that will be displayed 
var lastRandNum = 1; // the last random number to compare the current one for duplicates
// Array of quotes from various women in STEM
var quotesArray = [
			"<p>When I was in high school, I was certain that being an astronaut was my goal. It was a very important time -- Sally Ride was making her first flight into space and she had a real impact on me.</p><p>--Karen Nyberg, Astronaut</p>",
	 			"<p>I used to not like being called a 'woman architect.' I'm an architect, not just a woman architect. The guys used to tap me on the head and say 'you're OK for a girl</p><p>--Zaha Hadid, Architect</p>", 
	 			"<p>People ask me all the time: 'What is it like to be a woman at Google?' I'm not a woman at Google, I'm a geek at Google. And being a geek is just great.</p><p>--Marissa Mayer, CEO of Yahoo, former engineer at Google</p>"
 			];



/* FUNCTION TO THAT GETS A NEW RANDOM NUMBER DIFFERENT FROM THE LAST ONE AND RETURNS THE FINAL QUOTE */
function updateBubble() {


	if(randNum === lastRandNum) {
		// get another number
		randNum = Math.floor(Math.random()* quotesArray.length);
		// check again
		updateBubble();
		// console.log(randNum);
	}
	else {
		
		// update lastRandNum to compare next time
		lastRandNum = randNum;
		
		// access the actual array object via the rand number index
		quote = quotesArray[randNum];
		// alert(quote);
		
		// log current number into the console
		console.log(randNum);

		// put the quote into the the html element with the id of text-bubble
		document.getElementById("talk-bubble").innerHTML = quote;
		
	}
	
}

