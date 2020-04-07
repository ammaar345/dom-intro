// get a reference to the textbox where the bill type is to be entered
const enterTxt=document.querySelector(".billTypeText");
//get a reference to the add button
const addBtn=document.querySelector(".addToBillBtn");
//create a variable that will keep track of the total bill
const callTotalElement=document.querySelector(".callTotalOne");
const smsTotalElement=document.querySelector(".smsTotalOne");
const total=document.querySelector(".totalOne");
const color=document.querySelector(".red");
bTotal=0;
    callsTotal=0;
    smsTotal=0;
//add an event listener for when the add button is pressed
function totPhoneBill(billSt){
    // logic goes here
        
    
    //alert(billString)
    //split the string
    var billItems = billSt.split(",");
    // a variable for the total phone bill.
  //  var totalBill = 41.25;
    
    //loop over all the bill items
    for (var i=0;i<billItems.length;i++){
        var billItem = billItems[i].trim();
        if (billItem === "call"){
            callsTotal += 2.75;
            bTotal+=2.75;
           
        }
        else if (billItem === "sms"){
            smsTotal += 0.75;
            bTotal+=0.75;
            
        }
        else{
            smsTotal=smsTotal;
            bTotal=bTotal;
            callsTotal=callsTotal;
        }
    }
    //round to two decimals
var roundedBill =bTotal.toFixed(2)
return roundedBill;
}
function styledTotal(roundedBill){ 
    const currentTotal=Number(roundedBill);
    color.classList.remove("danger");
    color.classList.remove("warning");
    
  if(currentTotal>=30 && currentTotal<50){
      //make orange
      color.classList.add("warning");
  } 
  else if(currentTotal>50 )
  {//make red
color.classList.add("danger");
  }

}
function calculateBtnClicked(){
    var billSt=enterTxt.value;
    const billTotal=totPhoneBill(billSt);
    total.innerHTML = billTotal;
    callTotalElement.innerHTML=(callsTotal).toFixed(2);
    smsTotalElement.innerHTML=(smsTotal).toFixed(2);
    
    
   styledTotal(billTotal);
 
}
    addBtn.addEventListener("click",calculateBtnClicked);
//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
