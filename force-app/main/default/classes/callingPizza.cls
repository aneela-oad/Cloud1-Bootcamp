public class callingPizza {

    public static void getPizza(){
        PizzaStore store = new PizzaStore();
       	Pizza CheesePizza = store.orderPizza('cheese');
        System.debug('----------------------');
        Pizza VegPizza = store.orderPizza('veg');
        CheesePizza.displayNameAndIngredients();
      
        VegPizza.displayNameAndIngredients();
    }
}