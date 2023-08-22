public with sharing class RegionManagerUtility {
    public Map<String, String> regionMap {get; private set;}
    public RegionManagerUtility() {
        this.regionMap = new Map<String, String>();
        for (Region_Manager__c regionM : [SELECT Id, Manager__c, Region__c FROM Region_Manager__c]) {
            this.regionMap.put(regionM.Region__c,regionM.Id );
        }

    }
}