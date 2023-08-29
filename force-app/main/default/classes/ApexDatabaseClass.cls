public class ApexDatabaseClass {

    public static void insetAccounts(){
        List<Account> accounts = new List<Account>();
        Account acc = new Account();  
        acc.Name = 'Google';
        accounts.add(acc);
        
        Account acc1 = new Account();
        acc1.Name = 'Cloud-1';
        accounts.add(acc1);
        Database.insert(accounts, FALSE);
    }
}