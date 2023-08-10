import { LightningElement } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent'

export default class ShowToastEvents extends LightningElement {


    showEvent(){
        const event = new ShowToastEvent({
            title: 'Toast Message',
            message: 'Toast messaing is showing',
            variant:'success',
            mode: 'dismissable'
        })
        this.dispatchEvent(event)
    }
    showWarning(){
        const event = new ShowToastEvent({
            title: 'Warning!',
            message: 'If you proceed, you will be directed to new page',
            variant: 'warning',
            mode:'pester'
        })
        this.dispatchEvent(event)
    }
}