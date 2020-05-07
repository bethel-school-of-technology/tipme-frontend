import React, { Fragment, useState } from 'react';
import Navbar from '../components/navbar'
import '../look/css/calculator.css';

const Calculator = () => {
   const [checkAmount, setCheckAmount] = useState("")
   const [tipAmount, setTipAmount] = useState("")
   const [numberOfPeople, setNumberOfPeople] = useState(1)
   const [billTotal, setBillTotal] = useState("")
   const [totalTipMultiple, setTotalTipMultiple] = useState("")
   const [billTotalMultiple, setBillTotalMultiple] = useState("")
   const [totalAmountEach, setTotalAmountEach] = useState("")
   const [tipPercentage, setTipPercentage] = useState("")
   
function calculateTip(){
       //alert("Ready");
       
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
           let check = (checkAmount / numberOfPeople);
           let tip = (totalTip / numberOfPeople);
           setTotalTipMultiple(tip.toFixed(2));
           let amountEach = parseFloat(check) + parseFloat(tip);
           setTotalAmountEach(amountEach.toFixed(2));
           let multipleTotal = parseFloat(checkAmount) + parseFloat(totalTip);
           setBillTotalMultiple(multipleTotal.toFixed(2));

       } else {
           let singleTotal = (parseFloat(checkAmount) + parseFloat(totalTip));
           setTipAmount(totalTip);
           setBillTotal(singleTotal.toFixed(2));
       }
   }
   return (
       <Fragment>
           <Navbar />
       <div className="container">
       <div className="header">
       <h1>Tip Me!</h1>
       </div>
   <form>
       <p>Check Total:</p>
       <input type="number" id="amount" placeholder="Check Amount" maxLength="9" onChange={(e) => setCheckAmount(parseFloat(e.target.value))}/>
       <p>Tip Percentage:</p>
       <select id="tip" onChange={(e) => setTipPercentage(parseFloat(e.target.value))} >
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
       <select id="numberPeople" onChange={(e) => setNumberOfPeople(parseInt(e.target.value))}>
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
      
   {(numberOfPeople == 1) ? (<div id="single">
       <p>Tip: $<span id="tipAmount">{tipAmount}</span></p>
   <p>Total: $<span id="billTotal">{billTotal}</span></p>
   </div>) :
   (<div id="multiple">
       <p>Tip per Person: $<span id="totalTipMultiple">{totalTipMultiple}</span></p>
   <p>Total per Person: $<span id="totalAmountEach">{totalAmountEach}</span></p>
       <p>Bill Total: $<span id="billTotalMultiple">{billTotalMultiple}</span></p>
   </div>)}
</div>
</Fragment>
   )
}

export default Calculator
