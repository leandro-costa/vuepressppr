package Builders;


import Cars.ModelType;
import Components.Engine;
import Components.Multimedia;
import Components.Transmission;

public class CarCompleteBuilder extends CarBuilder {

    
    @Override
    public void buildeName() {
        car.setName("Polo Highline 200 TSI AT");
    }

    @Override
    public void buildeModelType() {
        car.setModelType(ModelType.COMPLETE);
    }
   
    @Override
    public void buildeEngine() {
        car.setEngine(new Engine("Turbo", 1.0));
    }

    @Override
    public void buildeTransmission() {
        car.setTransmission(Transmission.AUTOMATIC);
    }

    @Override
    public void buildeMultimedia() {
        car.setMultimedia(Multimedia.COMPLETE);
    }

    


}
