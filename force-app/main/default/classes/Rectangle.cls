public class Rectangle extends Shape {
    
    public override void getArea(){
        Integer ans = getLength()*getWidth();
        System.debug('Area of rectangle: ' +ans);
    }
}