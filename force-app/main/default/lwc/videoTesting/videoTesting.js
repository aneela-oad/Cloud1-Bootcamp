import { LightningElement, wire } from 'lwc';
import getBaseUrl from "@salesforce/apex/VideoViewerController.getBaseUrl";
import { getBaseVideoUrl } from "./utils";
export default class VideoTesting extends LightningElement {
videoUrl
  @wire(getBaseUrl)
  baseUrl({ data, error }) {
    if (data) {
         this.videoUrl = data.replace('/watch?v=', '/embed/');
         
    console.log('video url---> ' +JSON.stringify(data));
    console.log('embedded url---> ' + this.videoUrl);

    } else if (error) {
      console.log('video error---> '+JSON.stringify(error))
      console.error('ERROR '+error)

    }
  }
  
 

}