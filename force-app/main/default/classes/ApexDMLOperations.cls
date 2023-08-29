public with sharing class ApexDMLOperations {
    public ApexDMLOperations() {

    }
    // Adding a simple account
    public static List<Account> InsertAccount(){
        List<Account> accountsList = new List<Account>();
        Account acc = new Account();
       acc.Name ='Kushina';
        accountsList.add(acc);

        if(!accountsList.isEmpty()){   
             insert accountsList;
       
            
               System.debug('Account Names  ' + accountsList[0].Name);
               System.debug('Account Ids ' + accountsList[0].Id);
               String accId = accountsList[0].Id;
               insertRelatedContactLists(accountsList[0].Id);
           
        }
      
        return accountsList;
    }

    public static void insertRelatedContactLists(String accId){
        System.debug('Account Id --> ' +accId);
      

        Contact contact = new Contact(
            FirstName = 'Sarada',
            LastName = 'Uchiha',
            AccountId = accId
        );
        insert contact;
      }
}