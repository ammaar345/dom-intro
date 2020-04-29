describe("Tests Calculate-Bill function", function() {


    it("Should return R30.50 as the total cost of placing 10 calls(R27.50) and 4 sms's(R3.00) as well as a danger level equal to warning.",function(){
     let calculateBill=TextBill();
     calculateBill.placeCall();
     calculateBill.placeCall();
     calculateBill.placeCall();
     calculateBill.placeCall();
     calculateBill.placeCall();
     calculateBill.placeCall();
     calculateBill.placeCall();
     calculateBill.placeCall();
     calculateBill.placeCall();
    calculateBill.placeSms();
     calculateBill.placeCall();
    calculateBill.placeSms();
    calculateBill.placeSms();
    calculateBill.placeSms();
    
    assert.equal(30.50,calculateBill.getTotalPrice());
assert.equal(27.5,calculateBill.getTotalCallPrice());
assert.equal(3.0,calculateBill.getTotalSmsPrice());
assert.equal("warning",calculateBill.lvlName())
    });
    it("Should return R3.50 for 1 calls(R2.75) and 1 sms(R0.75) as well as return an empty string for the danger level.",function(){
        let calculateBill=TextBill();
        calculateBill.placeCall();
        calculateBill.placeSms();
        assert.equal(calculateBill.lvlName(),"");
        assert.equal(calculateBill.getTotalPrice(),3.5);
        assert.equal(calculateBill.getTotalSmsPrice(),0.75)
        assert.equal(calculateBill.getTotalCallPrice(),2.75)
      });
 
     
     it("Should return R50.25 for 12 sms's(R9.00) and 14 calls(R41.25) as well as return a critical danger level.",function(){
        let calculateBill=TextBill();
        calculateBill.placeSms();
        calculateBill.placeSms();
        calculateBill.placeSms();
        calculateBill.placeSms();
        calculateBill.placeSms();
        calculateBill.placeSms();
        calculateBill.placeSms();
        calculateBill.placeSms();
        calculateBill.placeSms();
        calculateBill.placeSms();
    calculateBill.placeSms();
    calculateBill.placeSms();
   calculateBill.placeCall() ;
    calculateBill.placeCall() ;
    calculateBill.placeCall() ;
    calculateBill.placeCall() ;
    calculateBill.placeCall() ;
    calculateBill.placeCall() ;
    calculateBill.placeCall() ;
    calculateBill.placeCall() ;
    calculateBill.placeCall() ;
    calculateBill.placeCall();
    calculateBill.placeCall() ;
    calculateBill.placeCall() ;
    calculateBill.placeCall();
    calculateBill.placeCall() ;
    calculateBill.placeCall() ;

    assert.equal(calculateBill.getTotalPrice(),50.25)
    assert.equal(calculateBill.getTotalCallPrice(),41.25);
    assert.equal(calculateBill.getTotalSmsPrice(),9);
    assert.equal(calculateBill.lvlName(),"critical")
    });

});
