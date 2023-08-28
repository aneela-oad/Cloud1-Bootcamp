public class Child{
    public static void ret(){
        
   	EmployeePurchaseOrder emp = new EmployeePurchaseOrder();
    double empDis = emp.discount()*2;
    System.debug('Employee Discount: ' +empDis);
        
    CustomerPurchaseOrder cus = new CustomerPurchaseOrder();
    double cusDis = cus.discount()*2;
        System.debug('Customer Discount: ' +cusDis);
    }
}