function calculateTip(){
    //alert("Ready");
    resetTip();

    var checkAmount = document.getElementById("amount").value;
    var tipPercentage = document.getElementById("tip").value;
    var numberOfPeople  = document.getElementById("numberPeople").value;

    
    //validate the bill amount field
    if (checkAmount ==="") {
        alert("Enter total here");
        return;
    }
    
    //calculate the total tip
    function tipCalc() {
        let tipTotal=((checkAmount * 100) * tipPercentage) / 100;
        tipTotal = tipTotal.toFixed(2);
        return tipTotal;
    }

    //call tipCalc() function
    var totalTip = tipCalc();

    if (numberOfPeople > 1) {
        //alert("ready to calculate multiple");
        document.getElementById("multiple").style.display = "block";
        let check = (checkAmount / numberOfPeople);
        let tip = (totalTip / numberOfPeople);
        document.getElementById("totalTipMultiple").innerHTML= tip.toFixed(2);

        let amountEach = parseFloat(check) + parseFloat(tip);
        document.getElementById("totalAmountEach").innerHTML = amountEach.toFixed(2);

        let multipleTotal = parseFloat(checkAmount) + parseFloat(totalTip);
        document.getElementById("billTotalMultiple").innerHTML = multipleTotal.toFixed(2);

    } else {
        //alert("ready to calculate single");
        document.getElementById("single").style.display = "block";
        let singleTotal= (parseFloat(checkAmount) + parseFloat(totalTip));
        document.getElementById("tipAmount").innerHTML = totalTip;
        document.getElementById("billTotal").innerHTML = singleTotal.toFixed(2);
    }
}

resetTip();

//hide single and multiple blocks
function resetTip() {
    document.getElementById("single").style.display="none";
    document.getElementById("multiple").style.display="none";
}
