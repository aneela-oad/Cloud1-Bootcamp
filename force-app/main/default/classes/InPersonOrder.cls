public class InPersonOrder implements Order {
        public Boolean AcceptOnlineOrder(){return false;}
        public Boolean PayInPerson(){return true;}
        public Boolean PayOnline(){ return false; }
        public Boolean TakeTelephoneOrder(){return false;}
        public Boolean WalkInCustomerOrder(){ return true; }
}