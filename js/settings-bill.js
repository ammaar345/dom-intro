let settingsBill=BillWithSettings()
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




function TCostOfBill(billItemType) {

    // billItemType will be 'call' or 'sms'

    if (billItemType === "call" ) {

   settingsBill.makeCall();}

        
        // totalCostAll += callCostVal;
    
    else if (billItemType === "sms" ) {

    settingsBill.sendSms();
  ;
}


        
        // totalCostAll += smsCostVal;
    
    //round to two decimals
   
}
function styleofTotal(roundBill) {
    const current = Number(roundBill);
    dangerLevel.classList.remove("danger");
    dangerLevel.classList.remove("warning");

    if (current >= settingsBill.getWarningLevel() && current < settingsBill.getCriticalLevel()) {
        //make orange
        dangerLevel.classList.add("warning");
    }

    else if (current >= settingsBill.getCriticalLevel() ) {
        //make red

        dangerLevel.classList.add("danger");
        
    }
    else if(current<settingsBill.getWarningLevel() &&current<settingsBill.getCriticalLevel()){
dangerLevel.classList.remove("danger")
dangerLevel.classList.remove("warning")    
}


}
function calcBtnClick() {
    // get a reference to the sms or call radio buttons
    var radioSmsCall = document.querySelector("input[name='billItemTypeWithSettings']:checked");
    var item = radioSmsCall.value;
     TCostOfBill(item);
 callCostTotal.innerHTML = settingsBill.getTotalCallCost();
smsCostTotal.innerHTML = settingsBill.getTotalSmsCost();
totalCost.innerHTML = settingsBill.getTotalCost();

    styleofTotal(settingsBill.getTotalCost());

}
function setValues() {
    callCostVal =(settingsBill.setCallCost(callCost.value));
    smsCostVal = (settingsBill.setSmsCost(smsCost.value));
    warnLevelTxt =(settingsBill.setWarningLevel(warnLevel.value));
    critLevelTxt =(settingsBill.setCriticalLevel(critLevel.value));
  //  styleofTotal(settingsBill.getTotalCost());
    alert("Settings Updated.");
  //  alert(settingsBill.getCallCost())
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
