package Builders;

import Cars.Car;

public abstract class CarBuilder {
    protected Car car;

    public CarBuilder() {
        car = new Car();
    }



    public void buildeName() {
    }

    public void buildeModelType() {
    }

    public void buildeEngine() {
    }

    public void buildeTransmission() {
    }

    public void buildeMultimedia() {
    }


    public Car getResult() {
        return car;
    }
}