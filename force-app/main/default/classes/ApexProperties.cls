public class ApexProperties {

        public static void getValue(){
            basicApexClass obj = new basicApexClass();
         
            System.debug('Property value ---> '+    obj.property);
        }
        
// Inner class
    public class basicApexClass{
	
        public Integer property{
			
            get{  return 22; }
         //   set{property = Num;}
        }
    }
}