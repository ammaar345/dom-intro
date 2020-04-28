//get a reference to the calculate button
let facCalcBill=calculateBillF();
const btnCalculate=document.querySelector(".calculateBtn");
//get a reference to the billTotal element
const totalBill=document.querySelector(".billTotal");
//get a reference to the billString
const billStr=document.querySelector(".billString")
//create the function that will be called when the calculate button is pressed
var colorChange=document.querySelector(".total");
function totalPhoneBill(billString){
var billItems = billString.split(",");
// a variable for the total phone bill.
var billTotal = 0;
//loop over all the bill items
for (var i=0;i<billItems.length;i++){
    var billItem = billItems[i].trim();
    if (billItem === "call"){
       facCalcBill.callMaker();
    }
    else if (billItem === "sms"){
        facCalcBill.smsMaker();
    }
}

//round to two decimals
return facCalcBill.totalAdder();
}
function styleTotal(roundedBillTotal){ 
      const currTotal=Number(roundedBillTotal);
    colorChange.classList.remove("danger");
    colorChange.classList.remove("warning");
    if(currTotal>=30){
        //make red
        colorChange.classList.add("danger")
    } 
    else if(currTotal>20 && currTotal<30)
    {//make orange
colorChange.classList.add("warning");
    }

}
function calculateBtnClicked(){
    var billString=billStr.value;
   // const roundedBillTotal=totalPhoneBill(billString);
    //totalBill.innerHTML = roundedBillTotal;
// styleTotal(roundedBillTotal);
alert(facCalcBill.totalAdder(billString))
}

    btnCalculate.addEventListener("click",calculateBtnClicked);
      
//  * this function should read the string value entered - split it on a comma.
//  * loop over all the entries in the the resulting list
//  * check if it is a call or an sms and add the right amount to the overall total
//  * once done looping over all the entries - display the total onto the screen in the billTotal element

//link the function to a click event on the calculate button
