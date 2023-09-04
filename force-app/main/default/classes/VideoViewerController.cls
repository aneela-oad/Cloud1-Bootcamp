public with sharing class VideoViewerController {
    public VideoViewerController() {

    }
 @AuraEnabled(cacheable=true)
    public static String getBaseUrl() {
        String url = 'https://www.youtube.com/watch?v=SO21BH6vTC4';
        System.debug('video url ' +url);
        return url;
      }
}