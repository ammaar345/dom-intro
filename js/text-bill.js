// get a reference to the textbox where the bill type is to be entered
let textBill=TextBill();
const enterTxt=document.querySelector(".billTypeText");
//get a reference to the add button
const addBtn=document.querySelector(".addToBillBtn");
//create a variable that will keep track of the total bill
const callTotalElement=document.querySelector(".callTotalOne");
const smsTotalElement=document.querySelector(".smsTotalOne");
const total=document.querySelector(".totalOne");
const color=document.querySelector(".red");

function calculateBtnClicked(){
   var billSt=enterTxt.value;
   // const billTotal=totPhoneBill(billSt);
  textBill.totPhoneBill(billSt)
   callTotalElement.innerHTML=textBill.getTotalCallPrice();;
    smsTotalElement.innerHTML=textBill.getTotalSmsPrice();
    total.innerHTML = textBill.getTotalPrice();;
    
    textBill.styledTotal(textBill.getTotalPrice());
 
}
    addBtn.addEventListener("click",calculateBtnClicked);
//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
