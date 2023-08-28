public with sharing class SimplePizzaFactory {


public static Pizza createPizza(String type){

    Pizza pizza = null;
    switch on type {
        when 'cheese' {
            Pizza = new CheesePizza();
        }	
        when 'veg' {
            Pizza = new VegPizza();
        }	
       
    }
    return pizza;
}
}