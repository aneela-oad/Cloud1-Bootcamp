public class DemoClass {
	
    public static void callMethod(){
        Decimal value = calculate('add', 3, 6);
        System.debug('OUTPUT: ' +value);
    }
    public static Decimal calculate(String operation, Integer num1, Integer num2){
        
        if(operation == 'add'){
            return num1+num2;
        }
        else {
            return num1*num2;
        }
       
    }
}