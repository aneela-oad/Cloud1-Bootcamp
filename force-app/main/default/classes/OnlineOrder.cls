public class OnlineOrder implements Order
    {
        public Boolean AcceptOnlineOrder(){return true;}
        public Boolean PayInPerson(){return false;}
        public Boolean PayOnline(){ return true; }
        public Boolean TakeTelephoneOrder(){return false;}
        public Boolean WalkInCustomerOrder(){ return false; }
    }