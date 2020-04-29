describe("Tests Text-Bill function", function() {


    it("Should return R30.50 as the total cost of placing 10 calls(R27.50) and 4 sms's(R3.00) as well as a danger level equal to warning.",function(){
     let textBillFunction=TextBill();
     textBillFunction.placeCall();
     textBillFunction.placeCall();
     textBillFunction.placeCall();
     textBillFunction.placeCall();
     textBillFunction.placeCall();
     textBillFunction.placeCall();
     textBillFunction.placeCall();
     textBillFunction.placeCall();
     textBillFunction.placeCall();
    textBillFunction.placeSms();
     textBillFunction.placeCall();
    textBillFunction.placeSms();
    textBillFunction.placeSms();
    textBillFunction.placeSms();
    
    assert.equal(30.50,textBillFunction.getTotalPrice());
assert.equal(27.5,textBillFunction.getTotalCallPrice());
assert.equal(3.0,textBillFunction.getTotalSmsPrice());
assert.equal("warning",textBillFunction.lvlName())
    });
    it("Should return R3.50 for 1 calls(R2.75) and 1 sms(R0.75) as well as return an empty string for the danger level.",function(){
        let textBillFunction=TextBill();
        textBillFunction.placeCall();
        textBillFunction.placeSms();
        assert.equal(textBillFunction.lvlName(),"");
        assert.equal(textBillFunction.getTotalPrice(),3.5);
        assert.equal(textBillFunction.getTotalSmsPrice(),0.75)
        assert.equal(textBillFunction.getTotalCallPrice(),2.75)
      });
 
     
     it("Should return R50.25 for 12 sms's(R9.00) and 14 calls(R41.25) as well as return a critical danger level.",function(){
        let textBillFunction=TextBill();
        textBillFunction.placeSms();
        textBillFunction.placeSms();
        textBillFunction.placeSms();
        textBillFunction.placeSms();
        textBillFunction.placeSms();
        textBillFunction.placeSms();
        textBillFunction.placeSms();
        textBillFunction.placeSms();
        textBillFunction.placeSms();
        textBillFunction.placeSms();
    textBillFunction.placeSms();
    textBillFunction.placeSms();
    textBillFunction.placeCall() ;
    textBillFunction.placeCall() ;
    textBillFunction.placeCall() ;
    textBillFunction.placeCall() ;
    textBillFunction.placeCall() ;
    textBillFunction.placeCall() ;
    textBillFunction.placeCall() ;
    textBillFunction.placeCall() ;
    textBillFunction.placeCall() ;
    textBillFunction.placeCall();
    textBillFunction.placeCall() ;
    textBillFunction.placeCall() ;
    textBillFunction.placeCall();
    textBillFunction.placeCall() ;
    textBillFunction.placeCall() ;

    assert.equal(textBillFunction.getTotalPrice(),50.25)
    assert.equal(textBillFunction.getTotalCallPrice(),41.25);
    assert.equal(textBillFunction.getTotalSmsPrice(),9);
    assert.equal(textBillFunction.lvlName(),"critical")
    });

});
