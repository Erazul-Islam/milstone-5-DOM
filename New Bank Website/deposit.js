document.getElementById('btn-deposit').addEventListener('click', function () {
    const depositField = document.getElementById('deposit-input');
    const newDepositAmount = parseFloat(depositField.value);

    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotal = parseFloat(depositTotalElement.innerText);

    const curentDeposit = previousDepositTotal + newDepositAmount;

    const balanceTotal = document.getElementById('Balance-total');
    const balanceNumber = parseFloat(balanceTotal.innerText);
    const currentBalanceTotal = balanceNumber + newDepositAmount;

    balanceTotal.innerText = currentBalanceTotal;

    depositTotalElement.innerText = curentDeposit;
    depositField.value = '';
})

document.getElementById('btn-withdraw').addEventListener('click',function(){
    const withdrawField = document.getElementById('deposit-withdraw');
    const withdrawNumber = parseFloat(withdrawField.value);

    const withdrawTotalElement = document.getElementById('withdraw-amount');
    const previousWithdraw = parseFloat(withdrawTotalElement.innerText)

    const currentWithdraw = previousWithdraw + withdrawNumber;

    const balanceTotalElement = document.getElementById('Balance-total');
    const balanceTotalValue = parseFloat(balanceTotalElement.innerText);

    withdrawField.value = '';

    if(withdrawNumber > balanceTotalValue){
        alert('Insufficient Money');
        return;
    }

    const newBalanceTotal = balanceTotalValue - withdrawNumber;
    balanceTotalElement.innerText = newBalanceTotal;

    withdrawTotalElement.innerText = currentWithdraw;

    withdrawField.value = ''
    
})