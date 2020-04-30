let radioBill=RadioBill();
const radAddBtn = document.querySelector(".radioBillAddBtn");
const callTotal2 = document.querySelector(".callTotalTwo");
const smsTotal2 = document.querySelector(".smsTotalTwo");
const total2 = document.querySelector(".totalTwo");
const colorChanger = document.querySelector(".orange");
function calculateBtnClick() {
    // get a reference to the sms or call radio buttons
    
var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
    var billItemType = checkedRadioBtn.value;
        radioBill.tPhoneBill(billItemType);
        callTotal2.innerHTML=radioBill.getCTotal();
    smsTotal2.innerHTML=radioBill.getSTotal();
        total2.innerHTML = radioBill.getTotal();
    stylingTotalApplication();
        ;
    }
    function stylingTotalApplication() {

        colorChanger.classList.remove("danger");
        colorChanger.classList.remove("warning");
          colorChanger.classList.add(radioBill.stylingTotal());
    }
    

radAddBtn.addEventListener("click", calculateBtnClick);
//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
