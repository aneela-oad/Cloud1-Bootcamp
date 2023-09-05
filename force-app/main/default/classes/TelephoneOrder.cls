public class TelephoneOrder implements Order {
        public Boolean AcceptOnlineOrder(){return false;}
        public Boolean PayInPerson(){return false;}
        public Boolean PayOnline(){ return true; }
        public Boolean TakeTelephoneOrder(){return true;}
        public Boolean WalkInCustomerOrder(){ return false; }
}