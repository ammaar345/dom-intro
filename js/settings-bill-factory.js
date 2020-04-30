function BillWithSettings(){
    var theCallCost=0;
    var theSmsCost=0;
    var theWarningLevel=0;
    var theCriticalLevel=0;
          var callCostTotal=0;
        var smsCostTotal=0;
        function tCostOfBill(billItemType) {
            if (billItemType === "call") {
        
                settingsBill.makeCall();
            }
            else if (billItemType === "sms") {
        
                settingsBill.sendSms();
                
            }
        }

        function styleofTotal() {
           dangerLevel.classList.remove("danger");
            dangerLevel.classList.remove("warning");
        
            if (settingsBill.getTotalCost() >= settingsBill.getWarningLevel() && settingsBill.getTotalCost() < settingsBill.getCriticalLevel()) {
                //make orange
                dangerLevel.classList.add("warning");
            }
        
            else if (settingsBill.getTotalCost() >= settingsBill.getCriticalLevel()) {
                //make red
        
                dangerLevel.classList.add("danger");
        
            }
            else if (current < settingsBill.getWarningLevel() && current < settingsBill.getCriticalLevel()) {
                dangerLevel.classList.remove("danger")
                dangerLevel.classList.remove("warning")
            }
        
        
        }
        
        
        function setCallCost(callCost){
    theCallCost=Number(callCost);
    }
    function getCallCost(){
        return theCallCost;
    } 
    function setSmsCost(smsCost){
        theSmsCost=Number(smsCost);
        }
        function getSmsCost(){
            return theSmsCost;
        } 
        function setWarningLevel(warnLevel){
    theWarningLevel=Number(warnLevel);
        }
        function getWarningLevel(){
            return theWarningLevel;
        }
        function setCriticalLevel(critLevel){
    theCriticalLevel=Number(critLevel);
        }
        function getCriticalLevel(){
    return theCriticalLevel;
        }
        
     function hasReachedCriticalLevel(){
        return getTotalCost()>=getCriticalLevel() 
    }
        function makeCall(){
            if (!hasReachedCriticalLevel()){
     callCostTotal+=theCallCost}
     }
     function sendSms(){
       if(!hasReachedCriticalLevel())
        { 
            smsCostTotal+=theSmsCost}
     }
     function getTotalCallCost(){
        return (callCostTotal).toFixed(2);
        }
        function getTotalSmsCost(){
           return (smsCostTotal).toFixed(2);
        }
     function getTotalCost(){
     return (callCostTotal+smsCostTotal).toFixed(2);
     }
     function totalClassName(){
        if(hasReachedCriticalLevel()){
            return "critical";
        }else
        if(getTotalCost()>=getWarningLevel()){
             return "warning";
         }
          
        
     }
     
        return{
           tCostOfBill,
            setCallCost,
        getCallCost,
        setSmsCost,
        getSmsCost,
      getCriticalLevel,
      setCriticalLevel,
      getWarningLevel,
      setWarningLevel,
       makeCall,
       sendSms,
       getTotalCallCost,
        getTotalSmsCost,
        getTotalCost   ,
        styleofTotal,
        totalClassName ,
        hasReachedCriticalLevel
        }
    }