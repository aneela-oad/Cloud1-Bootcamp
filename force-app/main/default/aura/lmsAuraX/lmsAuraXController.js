({
    handleMessage : function(component, message) {
   if(message != null && message.getParam('lmsDataField') != null){
    component.set('v.messageReceived', message.getParam('lmsDataField').value)
   }
    },
    inputHandler : function(component, event){
        let selectedValue = event.target.value
        component.set("v.messageValue", selectedValue)
    },
    publishMessage : function( component){
        let msg = component.get("v.messageValue")
        let message={
            lmsDataField:{
                value:msg
            }
        }
        component.find("SampleMessageChannel").publish(message)
        console.log("aur check!" );
    }
})
