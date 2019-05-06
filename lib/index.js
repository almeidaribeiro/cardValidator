function isValidInput(strCard) {
  const invalidCard = [
    '0000000000000000', 
    '1111111111111111',
    '2222222222222222',
    '3333333333333333', 
    '4444444444444444',
    '5555555555555555',
    '6666666666666666', 
    '7777777777777777',
    '8888888888888888', 
    '9999999999999999'
  ];
  const notString = typeof strCard !== 'string';
  const isBlackListed = invalidCard.includes(strCard);
  
  if (notString || isBlackListed) {
    return false;
  }
  strCard = strCard.replace(/[^0-9]/g, '');
  const isIncorretSize = strCard.length !== 16;
  if (isIncorretSize) {
    return false;
  }
  return true;
}

function isCardValid(strCard) {
  strCard = strCard.split('');
  let tmp = strCard.map((value, index) => {
    if (index % 2 === 0) {
      value = parseInt(value) * 2;
    }
    if (value > 9) {
      return (parseInt(value) % 10) + 1;
    } else {
      return parseInt(value);
    }
  });
  let sum = tmp.reduce((accumulator, currentValue) => accumulator + currentValue);
  if (sum % 10 === 0) {
    return true;
  } else {
    return false;
  }
}

function cardValidator(strCard) {
  if (isValidInput(strCard) === false) {
    return false;
  }
  if (isCardValid(strCard) === true) {
    return true;
  }
  return false;
}

module.exports.cardValidator = cardValidator;