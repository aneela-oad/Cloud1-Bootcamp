virtual public class Shape {

 private Integer length = 10;
 private Integer width = 20;

 public virtual void getArea(){
        System.debug('Area of ');
 }
    public virtual Integer getLength(){
        return length;
    }
    public virtual Integer getWidth(){
        return width;
    }
}