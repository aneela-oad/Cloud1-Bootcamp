import { LightningElement } from 'lwc';
import FORM_FACTOR from '@salesforce/client/formFactor'
import ID from '@salesforce/user/Id'
import IS_GUEST from '@salesforce/user/isGuest'
export default class FormFactorDemo extends LightningElement {
    userId = ID
    isGuest = IS_GUEST
    deviceType

    connectedCallback(){
        this.displayDeviceType()
    }
    displayDeviceType(){
        if(FORM_FACTOR === 'Large'){
            this.deviceType = 'Desktop/Laptop'
        }
        else if(FORM_FACTOR === 'Medium'){
            this.deviceType = 'Tablet'

        }
        else if(FORM_FACTOR === 'Small'){
            this.deviceType = 'Mobile/Phone'
        }
    }
}