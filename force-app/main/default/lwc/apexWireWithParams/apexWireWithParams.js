import { LightningElement, wire } from 'lwc';
import filterAccountByType from '@salesforce/apex/AccountController.filterAccountByType'
import INDUSTRY from '@salesforce/schema/Account.Industry'
import { getPicklistValues } from 'lightning/uiObjectInfoApi';
export default class ApexWireWithParams extends LightningElement {


   get options(){
    return [
        {label:'Engineering', value:'Engineering'},
        {label:'Technology', value:'Technology'},
        {label:'Communications', value:'Communications'},
        {label:'Chemicals', value:'Chemicals'},
    ]
   }
    filteredAccountList
    selectedIndustry = 'Engineering'
    @wire(filterAccountByType, {industry: '$selectedIndustry'})
    filteredList({data, err}){

        if(data){
            this.filteredAccountList = data
            console.log('filteredAccountList '+ JSON.stringify(data));
        }

    }
    // @wire(getPicklistValues, {recordTypeId:''})
    handleValue(e){
        this.selectedIndustry = e.target.value
    }
}