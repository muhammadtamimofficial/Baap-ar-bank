document.getElementById('Deposit-btn').addEventListener('click', function () {



    // get the depositAmount
    const depositInput = document.getElementById('input-Deposit');
    const newdepoAmount = parseFloat(depositInput.value);

    const depositTotal = document.getElementById('total-deposit');
    const previousDepositAmount = parseFloat(depositTotal.innerText);
    const newdepoTotal = previousDepositAmount + newdepoAmount;
    depositTotal.innerText = newdepoTotal;

    // add balance deposit 
    const balanceTotal = document.getElementById('total-amount');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + newdepoAmount;
    balanceTotal.innerText = newBalanceTotal;


    // clear depositInput 
    depositInput.value = '';
});
// handel Withdrow event

document.getElementById('widthrow-btn').addEventListener("click", function () {

    const withdrowInout = document.getElementById('input-withdrow');
    const withdrowAmountText = withdrowInout.value;
    const newWithdrowAmount = parseFloat(withdrowAmountText);
    console.log(newWithdrowAmount);

    // set withdrow-total 
    const withdrowTotal = document.getElementById('withdrow-total');
    const previousWithdrowText = withdrowTotal.innerText;
    const previousWithdrowTotal = parseFloat(previousWithdrowText);

    const newWithdrowTotal = previousWithdrowTotal + newWithdrowAmount;

    withdrowTotal.innerText = newWithdrowTotal;

    // update balanceTotal
    const balance_total = document.getElementById('total-amount');
    const balance_totalText = balance_total.innerText;
    const previous_balance_total = parseFloat(balance_totalText);
    const new_balance_total = previous_balance_total - newWithdrowAmount;

    balance_total.innerText = new_balance_total;


    //clear width Input
    withdrowInout.value = "";

    /* const withdrowInout = document.getElementById('input-withdrow');
    const previousWidthdrowInput = withdrowInout.value;
    const newWithdrowAmount = parseFloat(previousWidthdrowInput);

    // console.log(newWithdrowAmount);

    // set widthdrow total 
    const widthdrowTotal = document.getElementById('input-withdrow');
    const previousWidthdrowamount = widthdrowTotal.innerText;
    const previousWidthdrowTotal = parseFloat(previousWidthdrowamount);

    const newWidthdrowTotal = previousWidthdrowTotal + newWithdrowAmount;
    // console.log(newWidthdrowTotal);  */


})