function isValidInput(strCard) {
    const notString = typeof strCard !== 'string';
    if(notString) {
        return false;
    }
    strCard = strCard.replace(/[^0-9]/g, '');
    const isIncorretSize = strCard.length !== 16;
    if(isIncorretSize) {
        return false;
    }
    return true
}

    // if (typeof strCard !== 'string') {
    //   return false;
    // }
    // strCard = strCard.replace(/[^0-9]/g, '');
    // if (strCard.length !== 16) {
    //   return false;
    // }

function isCardValid(strCard){
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

    // strCard = strCard.split('');
    // let tmp = strCard.map((value, index) => {
    //   if (index % 2 === 0) {
    //     value = parseInt(value) * 2;
    //   }
    //   if (value > 9) {
    //     return (parseInt(value) % 10) + 1;
    //   } else {
    //     return parseInt(value);
    //   }
    // });
    // let sum = tmp.reduce((accumulator, currentValue) => accumulator + currentValue);
    // if (sum % 10 === 0) {
    //   return true;
    // } else {
    //   return false;
    // }
function cardValidator(strCard){
    if(isValidInput(strCard) === false){
        return false
    }
    if(isCardValid(strCard) === true){
        return true
    }
    return false;
}

module.exports.cardValidator = cardValidator;