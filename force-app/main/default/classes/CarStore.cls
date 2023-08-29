public class CarStore {

    public static Car displayCarDetails(String type){

        Car car =  SimpleCarFactory.createCar(type);
        car.start();
        car.buy();
        car.displayInfo();
        return car;
    }
}