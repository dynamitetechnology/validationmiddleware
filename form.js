const getError = (errors, prop) => {
  try {
    return errors.mapped()[prop].msg
  } catch (error) {
    return ''
  }
}
 
module.exports = ({errors}) => {
  return `
<!DOCTYPE html>
<html>
 
<head>
  <link rel='stylesheet' href=
'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.9.0/css/bulma.min.css'>
  <style>
    div.columns {
      margin-top: 100px;
    }
 
    .button {
      margin-top: 10px
    }
  </style>
</head>
 
<body>
  <div class='container'>
    <div class='columns is-centered'>
      <div class='column is-5'>
        <form action='/info' method='POST'>
          <div>
            <div>
              <label class='label' id='name'>
                Name
              </label>
            </div>
            <input class='input' type='text'
              name='name' placeholder='Vinit singh'
              for='name'>
          </div>
          <div>
            <div>
              <label class='label' id='ano'>
                Account number
              </label>
            </div>
            <input class='input' type='text'
              name='ano' placeholder='Account Nnumber'
              for='ano'>
          </div>
          <div>
            <div>
              <label class='label' id='pin'>
                Secret Password
              </label>
            </div>
            <input class='input' type='text' name='pin'
              placeholder='XXXXXX' for='pin'>
          </div>
          <div>
            <div>
              <label class='label' id='amount'>
                Amount
              </label>
            </div>
            <input class='input' type='text' name='amount'
              placeholder='Amount in multiple of 100'
              for='amount'>
            <p class="help is-danger">
              ${getError(errors, 'amount')}
            </p>
 
          </div>
          <div>
            <button class='button is-primary'>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</body>
 
</html>
  `
}