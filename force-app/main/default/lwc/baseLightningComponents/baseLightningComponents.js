import { LightningElement, api } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent'
import ACCOUNT_OBJ from '@salesforce/schema/Account'
import NAME from '@salesforce/schema/Account.Name'
import ID from '@salesforce/schema/Account.Id'
import RATING from '@salesforce/schema/Account.Rating'
import INDUSTRY from '@salesforce/schema/Account.Industry'
import TYPE from '@salesforce/schema/Account.Type'
import PHONE from '@salesforce/schema/Account.Phone'

import CONTACT_OBJ from '@salesforce/schema/Contact'
import CONTACT_NAME from '@salesforce/schema/Contact.Name'
import CONTACT_DOB from '@salesforce/schema/Contact.Birthdate'
import CONTACT_DEPARTMENT from '@salesforce/schema/Contact.Department'

export default class BaseLightningComponents extends LightningElement {

    @api recordId
    @api objectApiName
    objectName = ACCOUNT_OBJ
    fields = [NAME,RATING,INDUSTRY,TYPE,PHONE,ID]
    nameField = NAME
    id = ID
    rating = RATING
    industry = INDUSTRY

    contactObj = CONTACT_OBJ
    contactName = CONTACT_NAME
    contactDepartment = CONTACT_DEPARTMENT
    contactDob = CONTACT_DOB
 
    // geting Id of newly created record.
    newRecordId

    showSuccessMessage(e){
        this.newRecordId = e.detail.id
        const event = new ShowToastEvent({
            title:'Record Created!',
            variant:'success',
            mode:'dismissable',
            message: 'The record was successfully created with Id ' +e.detail.id
        })
        this.dispatchEvent(event)
    }
    handleReset(){
        let inputFields = this.template.querySelectorAll('lightning-input-field')
        if(inputFields){
            Array.from(inputFields).forEach(field =>{
                field.reset()
            })
        }
    }
       
}