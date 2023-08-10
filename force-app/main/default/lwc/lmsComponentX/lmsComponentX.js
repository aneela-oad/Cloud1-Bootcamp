import { LightningElement, wire } from 'lwc';
import { subscribe, unsubscribe, MessageContext, APPLICATION_SCOPE } from 'lightning/messageService';
import samMsgChannel from "@salesforce/messageChannel/SampleMessageChannel__c";

export default class LmsComponentX extends LightningElement {
    @wire(MessageContext)
    context;
    // subscription
    recievedMessage
   

    // subscribe(messageContext, messagechannel, listener/reciever, subscriberOptions)
    subscribeMethod(){
        subscribe(this.context, samMsgChannel, (message)=> {this.handleMessage(message)}, {scope:APPLICATION_SCOPE})
    }

    handleMessage(message){
        console.log("clicked");

        this.recievedMessage = message.lmsDataField.value? message.lmsDataField.value : 'NO DATA PUBLISHED'
        // console.log("clicked");
    }

    connectedCallback(){
        this.subscribeMethod()
    }
}