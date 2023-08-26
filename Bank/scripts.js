document.getElementById('btn-deposit').addEventListener('click',function(){
    const depositField = document.getElementById('deposit-field');
    const newDepositAmount = parseFloat(depositField.value);

    const DepositTotalElement = document.getElementById('deposit-total');
    const depositNumber = parseFloat(DepositTotalElement.innerText);

    const newDepositTotal = depositNumber + newDepositAmount;
    DepositTotalElement.innerText = newDepositTotal;

    const balanceTotalElement = document.getElementById('deposit-balance');
    const previousBalance = parseFloat(balanceTotalElement.innerText);

    const newBalance = previousBalance + newDepositAmount;
    balanceTotalElement.innerText = newBalance;
    
    depositField.value = '';
})

document.getElementById('btn-withdraw').addEventListener('click',function(){
    const withdrawField = document.getElementById('withdraw-field');
    const newWithrawAmount = parseFloat(withdrawField.value);

    const withdrawElement = document.getElementById('deposit-withdraw');
    const previousWithdraw = parseFloat(withdrawElement.innerText);

    const totalWithdraw = newWithrawAmount + previousWithdraw;
    withdrawElement.innerText = totalWithdraw;

    const balanceElement = document.getElementById('deposit-balance');
    const prevBalance = parseFloat(balanceElement.innerText);

    const newBalance = prevBalance - newWithrawAmount;
    balanceElement.innerText = newBalance;

    withdrawField.value = '';
})