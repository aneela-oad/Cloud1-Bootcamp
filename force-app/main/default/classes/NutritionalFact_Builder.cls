public class NutritionalFact_Builder {
    private Integer servingSize;
    private Integer servings;
    private Integer calories;
    private Integer fat;
    private Integer sodium;
    private Integer carbohydrate;
    private Date startDate;
    private Date expirationDate;

  public class NutritionFactsException extends Exception{

    }

   
    public NutritionalFact_Builder (NutritionalFact_Builder.Builder builder){
        this.servingSize = builder.servingSize;
        this.servings = builder.servings;
        this.calories = builder.calories;
        this.fat = builder.fat;
        this.sodium = builder.sodium;
        this.carbohydrate = builder.carbohydrate;
        this.startDate = builder.startDate;
        this.expirationDate = builder.expirationDate;
    }
  // creating an inner class called builder that is used as parameter in constructor of the outer class
    public class Builder{
        private Integer servingSize;
        private Integer servings;
        private Integer calories;
        private Integer fat;
        private Integer sodium;
        private Integer carbohydrate;
        private Date startDate;
        private Date expirationDate;

    }
    public NutritionalFact_Builder build(){
        
        validateDate();
        return this;
    }
    public void validateDate(){
        if(startDate != null && expirationDate == null){
            throw new NutritionFactsException('Hey, you need to add the expiration date as well');
        }
    }
}