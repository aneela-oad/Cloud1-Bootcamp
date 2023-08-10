import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation'
export default class NavigationToOtherComponents extends NavigationMixin(LightningElement) {
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
}