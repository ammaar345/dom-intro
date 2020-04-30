function TextBill(){
    var callPriceVal=2.75;
    var smsPriceVal=0.75;
    var warningVal=30;
    var criticalVal=50;
  var  callPriceTotal=0;
   var smsPriceTotal=0;
   function totPhoneBill(billSt){
      // logic goes here
      var billItems = billSt.split(",");
      // a variable for the total phone bill
      for (var i=0;i<billItems.length;i++){
          var billItem = billItems[i].trim();
          if (billItem === "call"){
              textBill.placeCall();
            
              
          }
          else if (billItem === "sms"){
            textBill.placeSms();
             
              
          }
      }
  }

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
totPhoneBill,
placeCall,
placeSms,
getTotalCallPrice,
getTotalSmsPrice,
getTotalPrice,
lvlName

   } 
}