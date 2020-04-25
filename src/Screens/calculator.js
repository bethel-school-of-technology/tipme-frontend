import React, { Fragment } from 'react';
import NavBar from '../components/navbar'

// import '../assets/css/Calculator.css'

const Calculator = () => {
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

        function tipCalc() {
            let tipTotal = ((checkAmount * 100) * tipPercentage) / 100;
            tipTotal = tipTotal.toFixed(2);
            return tipTotal;
        }

        let totalTip = tipCalc();

        if (numberOfPeople > 1) {
            document.getElementById("multiple").style.display = "block";
            let check = (checkAmount / numberOfPeople);
            let tip = (totalTip / numberOfPeople);
            document.getElementById("totalTipMultiple").innerHTML = tip.toFixed(2);

            let amountEach = parseFloat(check) + parseFloat(tip);
            document.getElementById("totalAmountEach").innerHTML = amountEach.toFixed(2);

            let multipleTotal = parseFloat(checkAmount) + parseFloat(totalTip);
            document.getElementById("billTotalMultiple").innerHTML = multipleTotal.toFixed(2);

        } else {
            document.getElementById("single").style.display = "block";
            let singleTotal = (parseFloat(checkAmount) + parseFloat(totalTip));
            document.getElementById("tipAmount").innerHTML = totalTip;
            document.getElementById("billTotal").innerHTML = singleTotal.toFixed(2);
        }
    }
//hide single and multiple blocks
     function resetTip() {
        document.getElementById("single").style.display="none";
        document.getElementById("multiple").style.display="none";
     }

    return (
        <Fragment>

    <div className="container">
        <div className="header">
        <h1>Tip Me!</h1>
        </div>
    <form>
        <p>Check Total:</p>
        <input type="number" id="amount" placeholder="Check Amount" maxlength="9" />

        <p>Tip Percentage:</p>
        <select id="tip">
            <option value="0.1">10%</option>
            <option value="0.15">15%</option>
            <option value="0.2">20%</option>
            <option value="0.25">25%</option>
            <option value="0.3">30%</option>
            <option value="0.35">35%</option>
            <option value="0.4">40%</option>
            <option value="0.45">45%</option>
            <option value="0.5">50%</option>
        </select>
        <p>Number of People:</p>
        <select id="numberPeople">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
        </select>
    </form><br />
    <button className="calc" onClick={calculateTip}>Calculate</button>
    <div id="single">
        <p>Tip: $<span id="tipAmount"></span></p>
        <p>Total: $<span id="billTotal"></span></p>
    </div>
    <div id="multiple">
        <p>Tip per Person: $<span id="totalTipMultiple"></span></p>

                <p>Total per Person: $<span id="totalAmountEach"></span></p>
                <p>Bill Total: $<span id="billTotalMultiple"></span></p>
    </div>
</div>
</Fragment>

    )
}



export default Calculator