function TextBill(){
    var callPriceVal=2.75;
    var smsPriceVal=0.75;
    var warningVal=30;
    var criticalVal=50;
  var  callPriceTotal=0;
   var smsPriceTotal=0;


function placeCall(){
   callPriceTotal+=callPriceVal;
   }
   function placeSms(){
   smsPriceTotal+=smsPriceVal;  
   }
   
function getTotalCallPrice(){
 return  callPriceTotal;
}
function getTotalSmsPrice(){
return smsPriceTotal;}
function getTotalPrice(){
   return (callPriceTotal+smsPriceTotal).toFixed(2);
}

function getWarnLevel(){
   return warningVal;
}
function getCritLevel (){
   return criticalVal;
}
function lvlName(){
   if (getTotalPrice()>getCritLevel())
   {return "critical";

   }

   else if (getTotalPrice()>getWarnLevel()){
      return "warning"
   }
      else {return ""}
}



   return{

placeCall,
placeSms,
getTotalCallPrice,
getTotalSmsPrice,
getTotalPrice,
lvlName

   } 
}