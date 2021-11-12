const {check} = require('express-validator')
module.exports = {
   
  validateAmount : check('amount')
 
    // To delete leading and trailing space
    .trim()
 
    // Convert amount to integer from string
    .toInt()
 
    // Validate name to accept only a
    // number divisible by 'num'
    .isDivisibleBy(100)
 
    // Custom message
    .withMessage('Must be multiple of 100')  
}