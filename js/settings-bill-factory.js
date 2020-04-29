function BillWithSettings(){
    var theCallCost=0;
    var theSmsCost=0;
    var theWarningLevel=0;
    var theCriticalLevel=0;
          var callCostTotal=0;
        var smsCostTotal=0;
      function setCallCost(callCost){
    theCallCost=callCost;
    }
    function getCallCost(){
        return theCallCost;
    } 
    function setSmsCost(smsCost){
        theSmsCost=smsCost;
        }
        function getSmsCost(){
            return theSmsCost;
        } 
        function setWarningLevel(warnLevel){
    theWarningLevel=warnLevel;
        }
        function getWarningLevel(){
            return theWarningLevel;
        }
        function setCriticalLevel(critLevel){
    theCriticalLevel=critLevel;
        }
        function getCriticalLevel(){
    return theCriticalLevel;
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
        return callCostTotal;
        }
        function getTotalSmsCost(){
           return smsCostTotal;
        }
     function getTotalCost(){
     return (callCostTotal+smsCostTotal)
     }
     function hasReachedCriticalLevel(){
         return getTotalCost()>=getCriticalLevel() 
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
        totalClassName ,
        hasReachedCriticalLevel
        }
    }