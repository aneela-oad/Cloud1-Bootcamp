public class NutritionalFacts_Fluent {

    private Integer servingSize;
    private Integer servings;
    private Integer calories;
    private Integer fat;
    private Integer sodium;
    private Integer carbohydrate;
    private Integer days;

    public NutritionalFacts_Fluent(Integer servingSize, Integer servings){
        this.servingSize = servingSize;
        this.servings = servings;
    }
     public NutritionalFacts_Fluent(Integer servingSize, Integer servings, Integer days){
        this.servingSize = servingSize;
        this.servings = servings;
        this.days = days;
    }
    public NutritionalFacts_Fluent calories(Integer calories){
        this.calories = calories;
          System.debug('-----------');
        System.debug('Calories---> ' +this);
        return this;
    }
    public NutritionalFacts_Fluent fat(Integer fat){
        this.fat = fat;
        return this;
    }
    public NutritionalFacts_Fluent sodium(Integer sodium){
        this.sodium = sodium;
        return this;
    }
     public NutritionalFacts_Fluent carbohydrate(Integer carbohydrate){
        this.carbohydrate = carbohydrate;
        return this;
    }
}