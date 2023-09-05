//--interface segregation principle--//

public interface Order {
         Boolean acceptOnlineOrder();
         Boolean takeTelephoneOrder();
         Boolean payOnline();
         Boolean walkInCustomerOrder();
         Boolean payInPerson();
}