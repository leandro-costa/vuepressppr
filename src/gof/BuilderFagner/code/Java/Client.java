import Builders.CarBasicBuilder;
import Builders.CarBuilder;
import Builders.CarCompleteBuilder;
import Builders.CarIntermediaryBuilder;
import Director.DirectorPolo;


public class Client {
    public static void main(String[] args) {
  
        CarBuilder builder = new CarBasicBuilder();
        DirectorPolo director = new DirectorPolo(builder);
        director.constructCar();      
                
        System.out.println(director.getResultCar());

        
        CarBuilder builder2 = new CarIntermediaryBuilder();
        DirectorPolo director2 = new DirectorPolo(builder2);
        director2.constructCar();      
                
        System.out.println(director2.getResultCar());


        CarBuilder builder3 = new CarCompleteBuilder();
        DirectorPolo director3 = new DirectorPolo(builder3);
        director3.constructCar();      
               
        System.out.println(director3.getResultCar());

    
    }
}
