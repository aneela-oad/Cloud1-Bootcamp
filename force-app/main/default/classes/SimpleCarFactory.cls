public class SimpleCarFactory {

    public static Car createCar(String type){

        Car car = null;
        switch on type {
            when 'BMW' {
               car = new BMWCar();
            }	
            when 'Revo' {
                car = new RevoCar();
            }	
            when 'Carolla' {
               car = new CarollaCar();
            }
        }
        return car;
    }

}