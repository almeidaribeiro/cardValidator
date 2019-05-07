/* eslint-disable no-undef */

let chai = require('chai');
let expect = chai.expect;
let cardValidator = require('../lib/index');

describe('card lib', () => {
  describe('cardValidator', () =>{
    it('it should be true', () => {
      expect(cardValidator.cardValidator('4929534188660375')).to.equal(true);
    });
    it('it should be true', () => {
      expect(cardValidator.cardValidator('4556 6891 4457 4795')).to.equal(true);
    });
    it('it should be true', () => {
      expect(cardValidator.cardValidator('4532 5622 3572 9702')).to.equal(true);
    });
    it('it should be true', () => {
      expect(cardValidator.cardValidator('4532024166762848')).to.equal(true);
    });
    it('it should be false', () => {
      expect(cardValidator.cardValidator('4716421870804443')).to.equal(false);
    });
    it('it should be false', () => {
      expect(cardValidator.cardValidator(4929534188660375)).to.equal(false);
    });
    it('it should be false', () => {
      expect(cardValidator.cardValidator('49295341886603')).to.equal(false);
    });
    it('it should be false', () => {
      expect(cardValidator.cardValidator('ribeiro')).to.equal(false);
    });
    it('it should be false', () => {
      expect(cardValidator.cardValidator('0000000000000000')).to.equal(false);
    });
    it('it should be false', () => {
      expect(cardValidator.cardValidator('4929534188660')).to.equal(false);
    });
    it('it should be false', () => {
      expect(cardValidator.cardValidator('123456789123456789')).to.equal(false);
    });
  });
});