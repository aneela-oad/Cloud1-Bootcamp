public class PizzaStore {

public Pizza  orderPizza(String type) {
    Pizza pizza = SimplePizzaFactory.createPizza(type);
    pizza.prepare();
    pizza.bake();
    pizza.cut();
    pizza.box();
    return pizza;
}
}