function calculateBillF ()
{ var criticalThresh=30;
    var warningThresh=20;
    var totalCallPr=0;
    var totalSmsPr=0;
    var smsValue=0.75;
    var callValue=2.75;
    function getSmsPriceVal(){
return smsValue;

    }
    function getCallPriceVal(){
return callValue
    }
function callMaker(){
totalCallPr+=callValue;
}
function smsMaker(){
totalSmsPr+=smsValue;

}
function totalAdder(){
    return (totalSmsPr+totalCallPr).toFixed(2)
}
function getWaLevel(){
return warningThresh;
}
function getCrLevel(){
    return criticalThresh;
}
function levelOfWarn (){
if (totalAdder()>getCrLevel()){
return "critical"
}
else if (totalAdder()>getWaLevel()){
return "warning"
}
}
    
    return{ getCrLevel,
        getWaLevel,
        levelOfWarn,
        smsMaker,
        callMaker,
        getCallPriceVal,
        getSmsPriceVal,
        totalAdder

    }
}