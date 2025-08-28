let addMoney = document.getElementById("add-money-btn");
let pin = 1234;
addMoney.addEventListener("click",function(event){
    event.preventDefault();
    let bank = document.getElementById("selected-bank").value;
    let userPin = parseInt(document.getElementById("add-pin").value);
    let accountNumber =
     document.getElementById("acc-number").value
     if (accountNumber.length < 11){
        alert("Enter Your Valid Account Number")
        return;
     }
     
     if (userPin !== pin){
        alert("Enter the correct pin")
        return;
     }
     //Amount update 
      let addAmountByUser = document.getElementById("added-amount-by-user");
      let addAmountByUserValue = addAmountByUser.value;
    let addAmountByUserValueConvert = parseInt(addAmountByUserValue);
    let currentAmount = parseInt(document.getElementById("current-amount").innerText)
      ;
    let currentAmountConvert =
     parseInt(currentAmount.innerText);
    let updatedAmount =
     addAmountByUserValueConvert + currentAmount;
   document.getElementById("current-amount").innerText = updatedAmount;
    
});
//toggling features
document.getElementById("add-for-money").addEventListener("click",function(){
    document.getElementById("add-money-form").style.display ="block";
    document.getElementById("cash-out-form").style.display ="none";

})
document.getElementById("cash-for-out").addEventListener("click",function(){
    document.getElementById("add-money-form").style.display ="none";
    document.getElementById("cash-out-form").style.display ="block";

});
//Cash out 
document.getElementById("cash-out-btn").addEventListener("click", function(event){
  event.preventDefault();
const agentNumber = document.getElementById("agent-number").value;
const cashOutPin = parseInt(document.getElementById("cash-out-pin").value);
let validCashoutPin = 1234;
if (agentNumber.length < 11){
  alert("Enter your valid agent number");
  return;
}
if (cashOutPin !== validCashoutPin){
  alert("Enter your valid pin");
  return;
}
  const cashOutAmount = parseInt(document.getElementById("cash-out-amount").value);

   let currentAmount = parseInt(document.getElementById("current-amount").innerText)
   const amountAfterCashout = currentAmount - cashOutAmount;
   document.getElementById("current-amount").innerText = amountAfterCashout;
})