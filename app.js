function LoginValidation(){
  let username = document.forms['lform']['username'].value
  let passcode = document.forms['lform']['passcode'].value
  if(username ==""){
    alert('Enter username')

  }else if(passcode ==""){
    alert('Enter password')

  }else if(username = 'admin' && passcode == 1234){
    alert('Login successful')
  }else if(username !== 'admin' && passcode !== 1234){
    alert ('Username or password incorrect')
  }
  }
  function customerForm(){
    let custname = doc
  }
  
  
    