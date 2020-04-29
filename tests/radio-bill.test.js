describe("Tests Radio-Bill function", function() {


    it("Should return R49.50 as the total cost of placing 16 calls(R49.50) , as well as a danger level equal to warning.",function(){
     let radioBillFunct=RadioBill();
  radioBillFunct.makeC();
     radioBillFunct.makeC();
     radioBillFunct.makeC();
     radioBillFunct.makeC();
     radioBillFunct.makeC();
     radioBillFunct.makeC();
     radioBillFunct.makeC();
     radioBillFunct.makeC();
     radioBillFunct.makeC();
    radioBillFunct.makeC();
     radioBillFunct.makeC();
    radioBillFunct.makeC();
    radioBillFunct.makeC();
    radioBillFunct.makeC();
radioBillFunct.makeC();
radioBillFunct.makeC();
radioBillFunct.makeC();
radioBillFunct.makeC();    
    assert.equal(49.50,radioBillFunct.getTotal());
assert.equal(49.50,radioBillFunct.getCTotal());
assert.equal(0,radioBillFunct.getSTotal());
    });
    it("Should return R3.50 for 1 calls(R2.75) and 1 sms(R0.75).",function(){
        let radioBillFunct=RadioBill();
     radioBillFunct.makeC();
     radioBillFunct.sendS() 
        assert.equal(radioBillFunct.getTotal(),3.5);
        assert.equal(radioBillFunct.getSTotal(),0.75)
        assert.equal(radioBillFunct.getCTotal(),2.75)
      });
 
     
     it("Should return R23.75 for 6 sms's(R4.50) and 7 calls(R19.25).",function(){
        let radioBillFunct=RadioBill();
     radioBillFunct.makeC();
    radioBillFunct.makeC();
    radioBillFunct.makeC() ;
    radioBillFunct.makeC() ;
    radioBillFunct.makeC();
    radioBillFunct.makeC() ;
    radioBillFunct.makeC() ;
radioBillFunct.sendS()
radioBillFunct.sendS()
radioBillFunct.sendS()
radioBillFunct.sendS()
radioBillFunct.sendS()
radioBillFunct.sendS()
    assert.equal(radioBillFunct.getTotal(),23.75)
    assert.equal(radioBillFunct.getCTotal(),19.25);
    assert.equal(radioBillFunct.getSTotal(),4.5);
    });

});
