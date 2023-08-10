import { LightningElement } from 'lwc';

export default class SlotDemoChild extends LightningElement {

    handleSlotChange(){
        let footerElement = this.template.querySelector('.slds-card__footer');
        if(footerElement){
            footer.classList.remove('.slds-hide')
        }
        console.log("slot entered");
    }
}