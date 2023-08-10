import { LightningElement,api } from 'lwc';
import {NavigationMixin} from 'lightning/navigation'
export default class EditRecordAction extends NavigationMixin(LightningElement) {

    @api recordId
    navigateToEditAccountRecord(){
        this[NavigationMixin.Navigate]({
            type:'standard__objectPage',
            attributes:{
                recordId:this.recordId,
                objectApiName:'Account',
                actionName:'edit'
            }
        })
    }
    navigateToccountRelatedList(){
        this[NavigationMixin.Navigate]({
            type:'standard__recordRelationshipPage',
            attributes:{
                recordId: this.recordId,
                objectApiName:'Account',
                relationshipApiName:'Contacts',
                actionName:'view'
            }
        })
    }
}