
function Card(opts) {
	if(!Card.validSuit(opts.suit)) {
		throw new Error('Invalid suit');
	}

	this.value = opts.value;
	this.suit = opts.suit;
}

Card.validSuit = function(suit) {
	if(suit != 'Hearts' && suit != 'Clubs' && suit != 'Diamonds' && suit != 'Spades') {
		return false;
	}
	return true;
}

module.exports = Card;
