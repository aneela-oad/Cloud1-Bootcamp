public with sharing class VideoViewerController {
    public VideoViewerController() {

    }
    @AuraEnabled
  
    public static String getBaseUrl() {
        // return System.URL.getOrgDomainUrl().toExternalForm();
        return 'https://www.youtube.com/watch?v=SO21BH6vTC4';
      }
}