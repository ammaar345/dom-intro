function RadioBill(){
 var priceC=2.75
 var priceS=0.75
 var priceCTotal=0
var priceSTotal=0;
 var  wLvl=30
var cLvl=50;
function tPhoneBill(billItemType) {
    if (billItemType === "call") {     
radioBill.makeC();
  }
   else if (billItemType === "sms") {       
radioBill.sendS();
}    
}

    function getSPrice (){
return priceS;
    }
function getCPrice(){
return priceC;
}
function getCTotal(){
return priceCTotal;
}
function getSTotal(){
    return priceSTotal;
}
function getTotal(){
    return (priceCTotal+priceSTotal).toFixed(2)
}
function getWLevel(){
    return wLvl;
}
function getCLevel(){
    return cLvl
}
function makeC(){
priceCTotal+=priceC
}
function sendS(){
    priceSTotal+=priceS
}
function stylingTotal() {

    if (radioBill.getTotal() >= 30 &&radioBill.getTotal() < 50) {
        //make orange
      return "warning"
        //  colorChanger.classList.add("warning");
    }
    else if (radioBill.getTotal() >= 50) {
        return "danger"
        //colorChanger.classList.add("danger");
    }

}


function getClsName(){
   if (getTotal()>getCLevel){
       return "critical"
       
   } 
   else if(getTotal()>getWLevel()){
       return "warning"
   }
}
    return{
        tPhoneBill,
        getCLevel,
        getClsName,
        getCPrice,
        getCTotal,
        getWLevel,
        getSPrice,
        sendS,
        makeC,
        stylingTotal,
        getSTotal,
        getTotal
    }
}