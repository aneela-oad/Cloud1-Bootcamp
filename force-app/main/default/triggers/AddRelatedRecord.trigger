trigger AddRelatedRecord on Account (after insert, after update) {

    List<Opportunity> oppList = new List<Opportunity>();
    Map<Id,Account> acctsWithOpps = new Map<Id,Account>(
        [SELECT Id,(SELECT Id FROM Opportunities) FROM Account WHERE Id IN :Trigger.new]);

    for (Account acc: Trigger.new) {
       System.debug('acctsWithOpps.get(a.Id).Opportunities.size()=' + acctsWithOpps.get(acc.Id).Opportunities.size());
    }

}