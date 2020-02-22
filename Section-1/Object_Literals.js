/*
	Object Literals
*/

//Example of a card object
let card0 = {
	suit: 'hearts',
	number: 2
}//end card0

let card1 = {
	suit: 'spades',
	number: 1
}//end card0

//Access Object propteries with dot operator
card0.suit
card0.number

function isRed(cardToCheck) {
	console.log('in isRed', cardToCheck);
	if(cardToCheck.suit === 'Hearts' || cardToCheck.suit === 'Diamonds') {
		return true;
	} else {
		return false;
	}
}//end isRed


//Function Call
isRed(card0); //returns true
isRed(card1); //returns false