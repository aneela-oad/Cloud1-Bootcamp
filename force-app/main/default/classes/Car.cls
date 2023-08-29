public abstract class Car {

    protected String name;
    protected String brand;
    protected String color;

    public void start(){
        System.debug('Starting car --> ' + name);
    }
    public void buy(){
        System.debug('Buying the car --> '+name);
    }
    public void displayInfo(){
        System.debug('brand --> ' +brand);
        System.debug('Color --> ' +color);
    }
}