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

var callCostVal = 0;
var smsCostVal = 0;
var smsTotalNew = 0;
var callTotalNew = 0;
var totalCostAll = 0;
var warnLevelTxt = 0;
var critLevelTxt = 0;


function TCostOfBill(billItemType) {

    // billItemType will be 'call' or 'sms'

    if (billItemType === "call") {


        callTotalNew += callCostVal;
        totalCostAll += callCostVal;
    }
    else if (billItemType === "sms") {


        smsTotalNew += smsCostVal;
        totalCostAll += smsCostVal;
    }
//round to two decimals
     var roundBill = totalCostAll.toFixed(2)
 return roundBill;
}
function styleofTotal(roundBill) {
    const current = Number(roundBill);
    dangerLevel.classList.remove("danger");
    dangerLevel.classList.remove("warning");

    if (current >= warnLevelTxt && current < critLevelTxt) {
        //make orange
        dangerLevel.classList.add("warning");
    }
    else if (current > critLevelTxt) {
        //make red
        dangerLevel.classList.add("danger");
    }

}
function calcBtnClick() {
    // get a reference to the sms or call radio buttons
    var radioSmsCall = document.querySelector("input[name='billItemTypeWithSettings']:checked");
    var item = radioSmsCall.value;
TCostOfBill(item);
callCostTotal.innerHTML = (callTotalNew.toFixed(2))
    smsCostTotal.innerHTML = (smsTotalNew.toFixed(2));
    totalCost.innerHTML = (totalCostAll).toFixed(2);//working
    styleofTotal(totalCostAll);
}
function setValues() {

    callTotalNew = 0;
    smsTotalNew = 0;
    totalCostAll = 0;
    callCostVal = Number(callCost.value);
    smsCostVal = Number(smsCost.value);
    warnLevelTxt = Number(warnLevel.value);
    critLevelTxt = (Number)(critLevel.value);
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
