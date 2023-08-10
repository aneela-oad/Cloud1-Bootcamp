import { LightningElement, api } from 'lwc';

export default class ChildComponent extends LightningElement {

    // @api msg
    // @api cardTitle

    @api gotValue;
    @api val;

    @api resetSlider(){
      this.val =  50;
    }
}