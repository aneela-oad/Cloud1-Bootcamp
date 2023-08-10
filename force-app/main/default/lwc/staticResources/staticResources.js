import { LightningElement } from 'lwc';
import USER_IMAGE from '@salesforce/resourceUrl/user_image'
import MOMENT from '@salesforce/resourceUrl/moment'
import ANIMATE from '@salesforce/resourceUrl/animate_css'
import {loadScript, loadStyle} from 'lightning/platformResourceLoader'

export default class StaticImages extends LightningElement {

    image = USER_IMAGE
    realTime
    isLibraryLoaded = false


    renderedCallback(){
        if(this.isLibraryLoaded){
            return
        }
        else{
            Promise.all([
                loadScript(this, MOMENT+'/moment.js'),
                loadStyle(this,ANIMATE+ '/cdnjs/animate.min.css')
            ]).then(() => {
                this.show()
            })
        this.isLibraryLoaded = true
   

        
    }
}
    show(){
        this.realTime = moment().format('LTS');  
        // this.animateShow =  
        // console.log('yes aneela'); 
    }
}