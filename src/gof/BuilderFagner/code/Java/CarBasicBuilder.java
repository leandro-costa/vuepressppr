package Builders;


import Cars.ModelType;
import Components.Engine;
import Components.Multimedia;
import Components.Transmission;

public class CarBasicBuilder extends CarBuilder {

    @Override
    public void buildeName() {
        car.setName("Polo 1.0 MPI");
    }

    @Override
    public void buildeModelType() {
        car.setModelType(ModelType.BASIC);
    }
   
    @Override
    public void buildeEngine() {
        car.setEngine(new Engine("Aspirado", 1.0));
    }

    @Override
    public void buildeTransmission() {
        car.setTransmission(Transmission.MANUAL);
    }

    @Override
    public void buildeMultimedia() {
        car.setMultimedia(Multimedia.BASIC);
    }

  
    

}
