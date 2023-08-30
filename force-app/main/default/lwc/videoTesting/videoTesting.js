import { LightningElement, wire } from 'lwc';
import getBaseUrl from "@salesforce/apex/VideoViewerController.getBaseUrl";

export default class VideoTesting extends LightningElement {

  videoUrl;
    
      // Get the base url for the org via apex
  

  // Get a list of attached documents based on recordId.
  // If there are no attachments, and the object type is ContentDocument(File)
  // Change the current video url, else show error
  @wire(getBaseUrl)
  vidUrl({data,err}){
    this.videoUrl = data;
    console.log('video url---> ' +this.videoUrl);
  }
 
   
}