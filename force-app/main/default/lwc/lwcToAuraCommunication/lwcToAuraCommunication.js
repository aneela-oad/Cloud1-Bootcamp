import { LightningElement,api } from 'lwc';

export default class LwcToAuraCommunication extends LightningElement {
    @api name
    
    handleClick(){
        const event = new CustomEvent( 'sendmessage', {
            detail:{
                'msg':'Sending data from LWC to Aura'
            }
        })
        this.dispatchEvent(event)
    }
}