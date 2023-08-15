import { LightningElement, wire } from 'lwc';
import {NavigationMixin, CurrentPageReference} from 'lightning/navigation'
export default class NavigationToOtherComponents extends NavigationMixin(LightningElement) {

    pageRef;
    navigateToAura(){
        this[NavigationMixin.Navigate]({
            type:'standard__component',
            attributes:{
                componentName:'c__AuraNavigation',
                actionName:'view'
            },
            state:{
                c__id:"32"
            }
        })
    }

    navigateToVisualForce(){
        this[NavigationMixin.Navigate]({
            type:'standard__webPage',
            attributes:{
                url:'/apex/visualForceNavigation'
            }
        }).then(generatedURL =>{
            window.open(generatedURL, "_blank")
        })
    }
    
    @wire(CurrentPageReference)
    pageRef
    get pageReference(){
        return this.pageRef ? JSON.stringify(this.pageRef) : 'NO DATA'
        
    }
}