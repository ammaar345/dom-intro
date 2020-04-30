let settingsBill = BillWithSettings()
const callCost = document.querySelector(".callCostSetting");
const smsCost = document.querySelector(".smsCostSetting");
const warnLevel = document.querySelector(".warningLevelSetting");
const critLevel = document.querySelector(".criticalLevelSetting");
const btnAdding = document.querySelector(".buttonAdding");
const btnUpdate = document.querySelector(".updateSettings");
const callCostTotal = document.querySelector(".callTotalSettings");
const smsCostTotal = document.querySelector(".smsTotalSettings");
const totalCost = document.querySelector(".totalSettings");
const dangerLevel = document.querySelector(".colorCh");
function styleofTotal(roundBill) {
    const current = Number(roundBill);
    dangerLevel.classList.remove("danger");
    dangerLevel.classList.remove("warning");

    if (current >= settingsBill.getWarningLevel() && current < settingsBill.getCriticalLevel()) {
        //make orange
        dangerLevel.classList.add("warning");
    }

    else if (current >= settingsBill.getCriticalLevel()) {
        //make red

        dangerLevel.classList.add("danger");

    }
    else if (current < settingsBill.getWarningLevel() && current < settingsBill.getCriticalLevel()) {
        dangerLevel.classList.remove("danger")
        dangerLevel.classList.remove("warning")
    }


}
function calcBtnClick() {
 var radioSmsCall = document.querySelector("input[name='billItemTypeWithSettings']:checked");
    var item = radioSmsCall.value;
    settingsBill.tCostOfBill(item);
    callCostTotal.innerHTML =(settingsBill.getTotalCallCost());
    smsCostTotal.innerHTML = (settingsBill.getTotalSmsCost());
    totalCost.innerHTML =   ( settingsBill.getTotalCost());

    styleofTotal(settingsBill.getTotalCost());

}
function setValues() {
     settingsBill.setCallCost(callCost.value);
  settingsBill.setSmsCost(smsCost.value);
   settingsBill.setWarningLevel(warnLevel.value);
 settingsBill.setCriticalLevel(critLevel.value)
    alert("Settings Updated.");
}
btnUpdate.addEventListener("click", setValues);
btnAdding.addEventListener("click", calcBtnClick);
//add an event listener for when the 'Update settings' button is pressed

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.
