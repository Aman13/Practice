
var Card = require('card');

describe('Card', function() {
	describe('#IsValidSuit', function()	{
		it('It should return true when suit is valid', function() {
			expect(Card.validSuit('Clubs')).to.be.true;
		});
		it('It should return true when suit is valid', function() {
			expect(Card.validSuit('Hearts')).to.be.true;
		});
		it('It should return true when suit is valid', function() {
			expect(Card.validSuit('Spades')).to.be.true;
		});
		it('It should return true when suit is valid', function() {
			expect(Card.validSuit('Diamonds')).to.be.true;
		});				
		it('IT should return false when suit is invalid', function() {
			expect(Card.validSuit('herpderp')).to.be.false;
		});
	})

	describe('#constructor', function() {
		it('should copy in the correct values', function() {
			var card = new Card({ value: 5, suit: 'Clubs' });
			expect(card).to.have.property('value', 5);
			expect(card).to.have.property('suit', 'Clubs')
		});
	});
});
