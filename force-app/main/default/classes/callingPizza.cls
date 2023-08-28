public class callingPizza {

    public static void getPizza(){
         PizzaStore store = new PizzaStore();
       	Pizza pizza = store.orderPizza('veg');
        pizza.displayNameAndIngredients();
    }
}