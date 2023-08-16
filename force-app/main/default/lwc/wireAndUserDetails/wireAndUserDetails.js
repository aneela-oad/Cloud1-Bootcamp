import { LightningElement, wire } from 'lwc';
import USER_ID from '@salesforce/user/Id'
import USER_NAME from '@salesforce/schema/User.Name'
import USER_EMAIL from '@salesforce/schema/User.Email'
import ACCOUNT_OBJ from '@salesforce/schema/Account'
import CONTACT_OBJ from '@salesforce/schema/Contact'
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry'

import { getRecord } from 'lightning/uiRecordApi';
import {getObjectInfo, getObjectInfos, getPicklistValues, getPicklistValuesByRecordType} from 'lightning/uiObjectInfoApi'
export default class WireAndUserDetails extends LightningElement {
    userId =USER_ID
 
    // @wire(adaptor, {adaptorConfig})
    // propertyOrFunction
    fields = [USER_NAME, USER_EMAIL]
    recordApiName
    userDetails

    // 1. getRecord Adapter
    @wire(getRecord, {recordId:'$userId', fields})
    getUserDetails({data, err}){

        if(data){
            this.recordApiName = data.apiName
            this.userDetails = data.fields
            // console.log('User details' +JSON.stringify(data));
        }
    }


   // 2. getObjectInfo Adapter
   recordTypeId
   apiName
   @wire(getObjectInfo, {objectApiName: ACCOUNT_OBJ})
   accObj({data, err}){
    if(data){
        this.recordTypeId = data.defaultRecordTypeId
        this.apiName = data.apiName
        // console.log('object info '+ data.defaultRecordTypeId);
    }
    if(err){

    }
   }
//    3. getObjectInfos
objectInfos
   objectApiNames = [ACCOUNT_OBJ, CONTACT_OBJ]
   @wire(getObjectInfos, {objectApiNames:[ACCOUNT_OBJ, CONTACT_OBJ] })
   getMutitpleObjects({data, err}){
    if(data){
        this.objectInfos = data
        // console.log('data' +JSON.stringify(data));
    }
   }

//    4. getPicklistValues adaptor
options= []
selectedIndustry
    @wire(getPicklistValues, {recordTypeId: '$recordTypeId', fieldApiName: INDUSTRY_FIELD})
    getIndustryValues({data, err}){
        if(data){
            this.options = [...this.generatedPicklistValues(data)]        
        }
    }
    generatedPicklistValues(data){
        return data.values.map(item => ({label: item.label, value:item.value}))
    }

   

//    5. getPicklistValuesByRecordType adaptor
    accountSourceOptions
    ratingOptions
    @wire(getPicklistValuesByRecordType, {objectApiName :ACCOUNT_OBJ, recordTypeId: '$recordTypeId'})
    getAllPicklistFieldsOnAccount({data, err}){
        if(data){
            this.accountSourceOptions = [...this.picklistValuesGenerator(data.picklistFieldValues.AccountSource)]
            this.ratingOptions = [...this.picklistValuesGenerator(data.picklistFieldValues.Rating)]
        }       
    }
    picklistValuesGenerator(data){
        return data.values.map(item => ({'label': item.label, 'value': item.value}))
    }



    accountSourceValue
    ratingValue
    handleChange(e){
        // this.selectedIndustry = e.target.value
        console.log(e.target.name +'====>'+ e.target.value);
        if(e.target.name == 'Rating'){
            this.ratingValue = e.target.value
        }
        if(e.target.name == 'AccountSource'){
            this.accountSourceValue = e.target.value
        }
    }
}