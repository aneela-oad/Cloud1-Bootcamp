import { LightningElement, api } from 'lwc';

export default class SetterDemoChild extends LightningElement {
    userInfo
    @api 
    get details() {
        return  this.userInfo
    }
    set details(data){
       let newAge = data.age+5
        this.userInfo = {...data, age:newAge, "Location":"Lahore"}
        
    }
}