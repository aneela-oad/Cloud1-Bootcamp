public class AccountController {
   
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountList(String searchKey){
        String key ='%' + searchKey + '%';
        return [SELECT Id, Name, Type, Industry FROM Account WHERE Name LIKE:key];
    }

    @AuraEnabled(cacheable=true)
    public static List<Account> filterAccountByType(String industry){

        return [SELECT Id, Name, Type, Industry FROM Account WHERE Industry=:industry];
    }
}