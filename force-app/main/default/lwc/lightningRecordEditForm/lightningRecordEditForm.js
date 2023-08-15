import { LightningElement } from 'lwc';
import CONTACT_OBJ from '@salesforce/schema/Contact'
import CONTACT_NAME from '@salesforce/schema/Contact.Name'
import CONTACT_DOB from '@salesforce/schema/Contact.Birthdate'
import CONTACT_DEPARTMENT from '@salesforce/schema/Contact.Department'
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class LightningRecordEditForm extends LightningElement {
    contactObj = CONTACT_OBJ
    contactName = CONTACT_NAME
    contactDepartment = CONTACT_DEPARTMENT
    contactDob = CONTACT_DOB
    inputValue=''
    handleReset(){
        let inputFields = this.template.querySelectorAll('lightning-input-field')
        if(inputFields){
            Array.from(inputFields).forEach(field =>{
                field.reset()
            })
        }
    }
    getValue(e){
        this.inputValue = e.target.value

    }
    handleSubmit(e){
        console.log("data" +JSON.stringify(e.detail));
        e.preventDefault()
        let inputCmpt = this.template.querySelector('lightning-input')

       let value = inputCmpt.value
      
       if(!value.includes('Australia')){
        inputCmpt.setCustomValidity('Name must be Australia')
       }
       else {
        inputCmpt.setCustomValidity('')
        const fields = e.detail.fields
        fields.Name= value
        this.template.querySelector('lightning-record-edit-form').submit(fields)

       }
       inputCmpt.reportValidity();
       console.log( "THE VALUE IS: "+ this.inputValue);

    }

    successHandler(e){

        const event = new ShowToastEvent({
            title: 'Contact Created!',
            message: 'Contact Id '+ e.detail.id,
            variant: 'success',
            mode: 'dismissable'
        });
        this.dispatchEvent(event);
    }
    errorHandler(){
        const event = new ShowToastEvent({
            title: 'ERROR :(',
            message: 'Contact not created ',
            variant: 'error',
            mode: 'dismissable'
        });
        this.dispatchEvent(event);
    }
}