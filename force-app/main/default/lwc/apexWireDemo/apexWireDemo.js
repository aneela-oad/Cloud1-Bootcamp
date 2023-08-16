import { LightningElement, wire } from 'lwc';
import getAccountList from '@salesforce/apex/AccountController.getAccountList'
import filterAccountByType from '@salesforce/apex/AccountController.filterAccountByType'
export default class ApexWireDemo extends LightningElement {

    accountList

    @wire(getAccountList)
 

    list({data,err}){
        if(data){
            this.accountList = data.map(item => {
                let typeField = item.Type === 'Customer - Direct'? 'Direct': 
                item.Type === 'Customer - Channel'? 'Channel': '--'

                return {...item, typeField}
            })   
            console.log('type--> '+data.Type);             
        }
    }

    
}