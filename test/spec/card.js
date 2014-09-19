
var Card = require('card');

describe('Card', function() {
	describe('#constructor', function() {
		it('should copy in the correct values', function() {
			var card = new Card({ value: 5 });
			expect(card).to.have.property('value', 5);
		});
	});
});
