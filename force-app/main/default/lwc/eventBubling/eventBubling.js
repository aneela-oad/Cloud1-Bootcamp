import { LightningElement } from 'lwc';

export default class EventBubling extends LightningElement {

    handleouterBox(){
        console.log("outer box clicked");
    }
    handlemiddleBox(){
        console.log("middle box clicked");
    }
    handleinnerBox(){
        console.log("inner box clicked");
    }
}