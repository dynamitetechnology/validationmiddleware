const express = require('express')
const bodyParser = require('body-parser')
const {validationResult} = require('express-validator')
const { validateAmount } = require('./validator')
const formTemplet = require('./form')
 
const app = express()
const port =  5000
 
// The body-parser middleware to parse form data
app.use(bodyParser.urlencoded({extended : true}))
 
// Get route to display HTML form
app.get('/', (req, res) => {
  res.send(formTemplet({}))
})
 
// Post route to handle form submission logic and
app.post(
  '/info',
  [validateAmount],
  async (req, res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
      return res.send(formTemplet({errors}))
    }
    const {name, ano, pin, amount} = req.body
 
    // New record
    await repo.create({
      'Account Name':name,
      'Account Number':ano,
      'Secret Password':pin,
      'Amount':amount,
    })
    res.send(
'<strong>Transaction successful!</strong>')
})
 
// Server set to run
app.listen(port, () => {
  console.log(`Server start on port ${port}`)
})