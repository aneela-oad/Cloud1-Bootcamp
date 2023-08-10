import { LightningElement, api } from 'lwc';

export default class SetterDemoChild extends LightningElement {
    userDetails
    @api 
    get details() {
        return  this.userDetails
    }
    set details(data){
       let newAge = data.age+5
        this.userDetails = {...data, age:newAge, "Location":"Lahore"}
        
    }
}