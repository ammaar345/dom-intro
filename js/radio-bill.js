let radioBill=RadioBill();

//get a reference to the add button
const radAddBtn = document.querySelector(".radioBillAddBtn");
//create a variable that will keep track of the total bill
const callTotal2 = document.querySelector(".callTotalTwo");
const smsTotal2 = document.querySelector(".smsTotalTwo");
const total2 = document.querySelector(".totalTwo");
const colorChanger = document.querySelector(".orange");
function tPhoneBill(billItemType) {
  // billItemType will be 'call' or 'sms'
     if (billItemType === "call") {     
radioBill.makeC();
//billTotal2+=2.75;
    }
    else if (billItemType === "sms") {       
radioBill.sendS();
//billTotal2+=0.75;
    }

    //round to two decimals
    
}
function stylingTotal(roundBill) {
    const currentTot = Number(roundBill);
    colorChanger.classList.remove("danger");
    colorChanger.classList.remove("warning");

    if (currentTot >= 30 && currentTot < 50) {
        //make orange
        colorChanger.classList.add("warning");
    }
    else if (currentTot >= 50) {//make red
        colorChanger.classList.add("danger");
    }

}

function calculateBtnClick() {
// get a reference to the sms or call radio buttons
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
    var billItemType = checkedRadioBtn.value;
    tPhoneBill(billItemType);
    callTotal2.innerHTML=radioBill.getCTotal();
smsTotal2.innerHTML=radioBill.getSTotal();
    total2.innerHTML = radioBill.getTotal();

    stylingTotal(radioBill.getTotal());
}
radAddBtn.addEventListener("click", calculateBtnClick);
//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
