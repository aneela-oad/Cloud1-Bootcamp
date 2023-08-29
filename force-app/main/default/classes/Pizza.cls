public abstract with sharing class Pizza {

    @TestVisible
    protected String name;
    protected String dough;
    protected String sauce;
    protected List<String> toppings;

//constructor
    public Pizza(){
        this.toppings = new List<String>();
    }
// Methods or steps of creating an pizza
    public void prepare(){
        System.debug('Preparing of pizza of type ' +name);
    }
    public void bake(){
        System.debug('Baking ' +name);
    }
    public void cut(){
        System.debug('Cutting ' +name);
        System.debug('dough ' +dough);
    }
    public void box(){
        System.debug('Boxing ' +name);
        System.debug('With sauce ' +sauce);
    }

// method to show ingredients of a pizza

    public void displayNameAndIngredients(){
        System.debug('This is a ' +this.name + 'Pizza');
        System.debug('It\'s ingredients are ');
        for (String topping : toppings) {
            System.debug(String.valueOf(topping));
        }
    }

}