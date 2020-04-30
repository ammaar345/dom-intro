describe("Tests Settings-Bill",function(){
    it("should be able to use the set call cost.",function(){
        let settingsBill=BillWithSettings();
        settingsBill.setCriticalLevel(10);
        settingsBill.setCallCost("2.25");
        settingsBill.setSmsCost("0.85");
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();
        assert.equal(6.75,settingsBill.getTotalCost());
        assert.equal(6.75,settingsBill.getTotalCallCost());
        assert.equal(0,settingsBill.getTotalSmsCost());
    })
    it("should be able to use the call cost set for 2 calls at R1.35 each. ",function(){
        let settingsBill=BillWithSettings();
        settingsBill.setCriticalLevel(10);
        settingsBill.setCallCost(1.35);
        settingsBill.setSmsCost(0.85);
        settingsBill.makeCall();
        settingsBill.makeCall();
        assert.equal(2.70,settingsBill.getTotalCost());
        assert.equal(2.70,settingsBill.getTotalCallCost());
        assert.equal(0,settingsBill.getTotalSmsCost());
    })
    it("should be able to send 2 sms's at R0.85 each and make 1 call at R1.35. ",function(){
        let settingsBill=BillWithSettings();
        settingsBill.setCriticalLevel(10);
        settingsBill.setCallCost(1.35);
        settingsBill.setSmsCost(0.85);
settingsBill.makeCall();
        settingsBill.sendSms();
        settingsBill.sendSms();
        assert.equal(3.05,settingsBill.getTotalCost());
        assert.equal(1.35,settingsBill.getTotalCallCost());
        assert.equal(1.70,settingsBill.getTotalSmsCost());
    })
    
    it("Should be able to set the call cost.",function(){
        let settingsBill=BillWithSettings();
        settingsBill.setCallCost(1.85);
        assert.equal(1.85,settingsBill.getCallCost());
 
        let settingsBill2=BillWithSettings();
        settingsBill2.setCallCost(2.75);
        assert.equal(2.75,settingsBill2.getCallCost());
 
     });
     it("Should be able to set the sms cost.",function(){
         let settingsBill=BillWithSettings();
         
         settingsBill.setSmsCost(0.85);
         assert.equal(0.85,settingsBill.getSmsCost());
  
         let settingsBill2=BillWithSettings();
         settingsBill2.setSmsCost(0.75);
         assert.equal(0.75,settingsBill2.getSmsCost());
  
      });
      it("Should be able to set the sms and call cost.",function(){
         let settingsBill=BillWithSettings();
         
         settingsBill.setCallCost(2.75);
         settingsBill.setSmsCost(0.85);
         assert.equal(0.85,settingsBill.getSmsCost());
         assert.equal(2.75,settingsBill.getCallCost());
 
      });
      it("Should be able to set the warning level ",function(){
         let settingsBill=BillWithSettings();
         settingsBill.setWarningLevel(20)
         assert.equal(20,settingsBill.getWarningLevel());
        
 
      });
      it("Should be able to set the critical and warning level ",function(){
         let settingsBill=BillWithSettings();
         settingsBill.setCriticalLevel(30)
         settingsBill.setWarningLevel(20)
         assert.equal(30,settingsBill.getCriticalLevel());
         assert.equal(20,settingsBill.getWarningLevel());
        
 
      });
      it("should return a class name of warning if warning level has been reached.",function(){
        let settingsBill=BillWithSettings();
        settingsBill.setCriticalLevel(10);
        settingsBill.setCallCost(1.35);
        settingsBill.setSmsCost(0.85);
        settingsBill.setWarningLevel(5);
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();
        assert.equal("warning",settingsBill.totalClassName()) 
        
        
        })
        it("should allow the total to increase after reaching the critical level and then updating the critical level.",function(){
            let settingsBill=BillWithSettings();
            settingsBill.setCriticalLevel(10);
            settingsBill.setCallCost(2.50);
            settingsBill.setSmsCost(0.85);
            settingsBill.setWarningLevel(5);
            
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            assert.equal("critical",settingsBill.totalClassName()) 
            
            
            })
            
            it("it should stop the Total Call cost from increasing once the critical level has been reached.",function(){
                let settingsBill=BillWithSettings();
                settingsBill.setWarningLevel(8)
                settingsBill.setCriticalLevel(10);
                
                settingsBill.setCallCost(2.50);
                settingsBill.setSmsCost(0.85);
                settingsBill.makeCall();
                settingsBill.makeCall();
                settingsBill.makeCall();
                settingsBill.makeCall();
                settingsBill.makeCall();
                assert.equal("critical",settingsBill.totalClassName()) ;
                assert.equal(10,settingsBill.getTotalCallCost()) ;
                
                settingsBill.setCriticalLevel(20);
                
                assert.equal("warning",settingsBill.totalClassName()) ;
                settingsBill.makeCall();
                settingsBill.makeCall();    
                assert.equal(15,settingsBill.getTotalCallCost()) ;
                
            })
})