import { LightningElement, api } from 'lwc';

export default class C2pParentComponent extends LightningElement {
    @api showModal = false

    handleClick(){
        this.showModal = true
    }
    
    closeHandler(){
        this.showModal = false

    }
}