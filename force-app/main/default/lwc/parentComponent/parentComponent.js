import { LightningElement, api } from 'lwc';

export default class ParentComponent extends LightningElement {


  @api ty= "Done!"
  @api selectedVal
 @api carouselData = [
    {
        heading:'Tiger',
        type: 'Anmal',
        age: 33
    },
    {
        heading:'Butterfly',
        type: 'Insect',
        age: 12
    }
  ]

  handlePercentage(e){
   this.selectedVal = e.target.value
  }

  handleSlider(){
    this.template.querySelector('c-child-component').resetSlider()
  }
}