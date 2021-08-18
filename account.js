

// Deposit money into account
document.getElementById('depositButton').addEventListener('click', function () {
    // string value of 00 deposit
    var beforedeposittext = document.getElementById('depositBalance');
    var beforedeposittextt = beforedeposittext.innerText;
    var beforedepositnumber = parseFloat(beforedeposittextt);

    // deposit input
    var insertdepositamounttext = document.getElementById('depositInput');
    var insertdepositamount = insertdepositamounttext.value;
    var insertdepositamountnumber = parseFloat(insertdepositamount);

    // update deposit ammount
    var totaldepositamount = beforedepositnumber + insertdepositamountnumber;
    beforedeposittext.innerText = totaldepositamount;
    insertdepositamounttext.value = '';

    // get total balance info
    var beforedeposittotalbalancetext = document.getElementById('balanceTotal');
    var beforedeposittotalbalance = beforedeposittotalbalancetext.innerText;
    var beforedeposittotalbalancenumber = parseFloat(beforedeposittotalbalance);

    // update total balance
    var updatedtotalbalance = insertdepositamountnumber + beforedeposittotalbalancenumber;
    balanceTotal.innerText = updatedtotalbalance;
})

// Withdraw money from account
document.getElementById('withdrawButton').addEventListener('click', function () {
    // string value of 00 withdraw
    var beforewithdrawtext = document.getElementById('withdrawBalance');
    var beforewithdrawtextt = beforewithdrawtext.innerText;
    var beforewithdrawnumber = parseFloat(beforewithdrawtextt);

    // withdraw input
    var insertwithdrawamounttext = document.getElementById('withdrawInput');
    var insertwithdrawamount = insertwithdrawamounttext.value;
    var insertwithdrawamountnumber = parseFloat(insertwithdrawamount);

    // update withdraw ammount
    var totaldepositamount = beforewithdrawnumber + insertwithdrawamountnumber;
    beforewithdrawtext.innerText = totaldepositamount;
    insertwithdrawamounttext.value = '';

    // get total balance info
    var beforedeposittotalbalancetext = document.getElementById('balanceTotal');
    var beforedeposittotalbalance = beforedeposittotalbalancetext.innerText;
    var beforedeposittotalbalancenumber = parseFloat(beforedeposittotalbalance);

    // update total balance
    var updatedtotalbalance = beforedeposittotalbalancenumber - insertwithdrawamountnumber;
    balanceTotal.innerText = updatedtotalbalance;
})


