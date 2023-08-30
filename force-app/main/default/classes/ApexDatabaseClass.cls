public class ApexDatabaseClass {

    public static void insetAccounts(){
        List<Account> accounts = new List<Account>();
        Account acc = new Account();  
        acc.Name = 'Microsoft';
        accounts.add(acc);
        
        Account acc1 = new Account();
        acc.Name = 'Salesforce';
        accounts.add(acc1);
        Database.SaveResult[] insertedList = Database.insert(accounts, FALSE);
        
        for( Database.SaveResult sr: insertedList ){
            if(sr.isSuccess()){
                
            }
        }
    }
}