import { LightningElement,wire } from 'lwc';
import samMsgChannel from "@salesforce/messageChannel/SampleMessageChannel__c";

import { MessageContext, publish } from 'lightning/messageService';

export default class LmsComponentA extends LightningElement {

    @wire(MessageContext)
    context;
    selectedValue
    inputHandler(event){
        this.selectedValue = event.target.value;
        console.log('event value-->' +this.selectedValue);
    }
    // publish(MessageContext, Messagechannel, message/data-to-be-sent)

    publishMessage(){
        console.log("check!");
        message:{
            lmsDataField:this.selectedValue;
        }

        publish(this.context, samMsgChannel, message)
         console.log(this.selectedValue);

    }
}