/*eslint-disable no-undef */

let chai = require('chai');
let expect = chai.expect;
let cardValidator =require('../lib/index');

describe('card lib', () => {
    describe('cardValidator', () =>{
      it('card is invalid', () => {
        expect(cardValidator.cardValidator('4716421870804443')).to.equal(false);
      });
      it('card is valid', () => {
        expect(cardValidator.cardValidator('4929534188660375')).to.equal(true);
      });
    });
});