document.getElementById("deposit-button").addEventListener("click",function(){
    const depositInput = document.getElementById("deposit-input");
    const newDepositAmount = depositInput.value;

    const depositTotal = document.getElementById("deposit-total");
    const previousDepositAmount = depositTotal.innerText;
    const updateDepositTotal = parseFloat(previousDepositAmount) + parseFloat(newDepositAmount); 
    depositTotal.innerText = updateDepositTotal;

    //update account balance
    const balanceTotal = document.getElementById("balance-total");
    const previousBalanceAmount = balanceTotal.innerText;
    const updateBalanceTotal = parseFloat(previousBalanceAmount) + parseFloat(newDepositAmount);
    balanceTotal.innerText = updateBalanceTotal;


    //clear the deposit input field
    depositInput.value = ""
  })
  //handle withdraw event
  document.getElementById("withdraw-button").addEventListener("click",function(){
      
     const withdrawInput = document.getElementById("withdraw-input");
     const newWithdrawAmount = withdrawInput.value;

     //set withdraw total
     const withdrawTotal = document.getElementById("withdraw-total");
    const previousWithdrawAmount = withdrawTotal.innerText;
    const updateWithdrawTotal = parseFloat(previousWithdrawAmount) + parseFloat(newWithdrawAmount); 
    withdrawTotal.innerText = updateWithdrawTotal;


    //update account balance
    const balanceTotal = document.getElementById("balance-total");
    const previousBalanceAmount = balanceTotal.innerText;
    const updateBalanceTotal = parseFloat(previousBalanceAmount) - parseFloat(newWithdrawAmount);
    balanceTotal.innerText = updateBalanceTotal;

    //clear the withdraw input field
    withdrawInput.value = "";

  })