package Builders;

import Cars.ModelType;
import Components.Engine;
import Components.Multimedia;
import Components.Transmission;

public class CarIntermediaryBuilder extends CarBuilder {

    @Override
    public void buildeName() {
        car.setName("Polo 1.6 MSI AT");
    }

    @Override
    public void buildeModelType() {
        car.setModelType(ModelType.COMPLETE);
    }
   
    @Override
    public void buildeEngine() {
        car.setEngine(new Engine("Aspirado", 1.6));
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
