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
   let custName =  document.forms['custForm']['custName'].value;
   let Loan = document.forms['custForm']['loan'].value;
    let cust = localStorage.setItem('cust','custName').value;
    let loan = localStorage.setItem('loan','Loan').value;
  }
  function selling(){
    let seller = document.querySelector('#vendor').value;
    if (seller = 'yannick'){
      document.getElementById('debt').value = 100000;
      document.getElementById('realamount').value = ((document.getElementById('saleprice').value) - (document.getElementById('debt').value));

    }else if (seller = 'mirabel'){
      document.getElementById('debt').value = 100000;
      document.getElementById('realamount').value = ((document.getElementById('saleprice').value) - 100000);

    }else if (seller = 'diana'){
      document.getElementById('debt').value = 150000;
      document.getElementById('realamount').value = ((document.getElementById('saleprice').value) - (document.getElementById('debt').value));

    }else if (seller = 'stanwhite'){
      document.getElementById('debt').value = 200000;
      document.getElementById('realamount').value = ((document.getElementById('saleprice').value) - (document.getElementById('debt').value));

    }
  }
  let yandebt = 100000;
  let mirabeldebt = 100000;
  let dianadebt = 150000;
  let standebt = 200000;
  let yansale = 500000 - yandebt;
  let mirabelsale = 400000 - mirabeldebt;
  let dianasale = 300000 - dianadebt;
  let stansale = 200000 -standebt
  document.getElementById('totaldebt').value = yandebt + mirabeldebt + dianadebt + standebt;
  document.getElementById('balance').value = yansale + mirabelsale + dianasale + stansale; 
  
    