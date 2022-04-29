package Director;

import Builders.CarBuilder;
import Cars.Car;

public class DirectorPolo {

    private CarBuilder carBuilder;

	public DirectorPolo(CarBuilder carBuilder) {
		this.carBuilder = carBuilder;
	}

    public void constructCar() {
        carBuilder.buildeName();
        carBuilder.buildeModelType();
        carBuilder.buildeEngine();
        carBuilder.buildeTransmission();
        carBuilder.buildeMultimedia();
    }


    public Car getResultCar() {
        return carBuilder.getResult();    }




}
