document.getElementById('btn-deposit').addEventListener('click',function(){
    const depositAmount = document.getElementById('deposit-input');
    const inputValue = parseFloat(depositAmount.value);
    
    const previousDeposit = document.getElementById('deposit-amount');
    const PrevDepositValue = parseFloat(previousDeposit.innerText);

    const CurrentDepositAmount = inputValue+PrevDepositValue;

    const balance = document.getElementById('balance-total');
    const balanceNumber = parseFloat(balance);
    const balanceExact = inputValue + balanceNumber;
    balance.innerText = balanceExact;

    previousDeposit.innerText = CurrentDepositAmount;

    depositAmount.value ='';
})