import { LightningElement, wire } from 'lwc';
import USER_ID from '@salesforce/user/Id'
import USER_NAME from '@salesforce/schema/user.Name'
import USER_EMAIL from '@salesforce/schema/user.Email'
import ACCOUNT_OBJ from '@salesforce/schema/Account'
import CONTACT_OBJ from '@salesforce/schema/Contact'


import { getRecord } from 'lightning/uiRecordApi';
import {getObjectInfo, getObjectInfos} from 'lightning/uiObjectInfoApi'
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
        console.log('data' +JSON.stringify(data));
    }
   }
}