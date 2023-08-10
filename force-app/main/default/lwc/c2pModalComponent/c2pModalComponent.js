import { LightningElement, api } from 'lwc';

export default class C2pModalComponent extends LightningElement {

    @api modalVal;

    handleClose(){
        const myEvent = new CustomEvent('close')
        this.dispatchEvent(myEvent)
     }
}