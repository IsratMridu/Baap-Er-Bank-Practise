function depositwithdrawupdate(num1, num2) {

    var beforedeposittext = document.getElementById(num1);
    var beforedeposittextt = beforedeposittext.innerText;
    var beforedepositnumber = parseFloat(beforedeposittextt);

    // deposit input
    var insertdepositamounttext = document.getElementById(num2);
    var insertdepositamount = insertdepositamounttext.value;
    var insertdepositamountnumber = parseFloat(insertdepositamount);


    // update deposit ammount
    var totaldepositamount = beforedepositnumber + insertdepositamountnumber;
    beforedeposittext.innerText = totaldepositamount;
    insertdepositamounttext.value = '';
}

function balance() {
    var beforedeposittotalbalancetext = document.getElementById('balanceTotal');
    var beforedeposittotalbalance = beforedeposittotalbalancetext.innerText;
    var beforedeposittotalbalancenumber = parseFloat(beforedeposittotalbalance);

    var insertdepositamounttext = document.getElementById('depositInput');
    var insertdepositamount = insertdepositamounttext.value;
    var insertdepositamountnumber = parseFloat(insertdepositamount);
    console.log(insertdepositamountnumber);

    var insertwithdrawamounttext = document.getElementById('withdrawInput');
    var insertwithdrawamount = insertwithdrawamounttext.value;
    var insertwithdrawamountnumber = parseFloat(insertwithdrawamount);
    console.log(insertwithdrawamountnumber);

}

document.getElementById('depositButton').addEventListener('click',
    function () {
        depositwithdrawupdate('depositBalance', 'depositInput');
        balance();



    })

document.getElementById('withdrawButton').addEventListener('click', function () {

    depositwithdrawupdate('withdrawBalance', 'withdrawInput');
    balance();
})