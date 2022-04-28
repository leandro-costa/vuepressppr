package Cars;

import Components.Engine;
import Components.Multimedia;
import Components.Transmission;



public class Car {
    private String name;
    private ModelType modelType;
    private Engine engine;
    private Transmission transmission;    
    private Multimedia multimedia;

    public void setName(String name) {
        this.name = name;
    }

    public ModelType getModelType() {
        return this.modelType;
    }

    public void setModelType(ModelType modelType) {
        this.modelType = modelType;
    }
    public void setEngine(Engine engine) {
        this.engine = engine;
    }
    public void setTransmission(Transmission transmission) {
        this.transmission = transmission;
    }

    public Multimedia getMultimedia() {
        return this.multimedia;
    }

    public void setMultimedia(Multimedia multimedia) {
        this.multimedia = multimedia;
    }


     public Multimedia getMultimidia() {
        return multimedia;
    }

    public ModelType getmodelType() {
        return modelType;
    }

    public Engine getEngine() {
        return engine;
    }

    public Transmission getTransmission() {
        return transmission;
    }

    public String getName() {
        return name;
    }

    @Override
    public String toString() {
        return "Tipe: " + name + "\n" + "Model: " + modelType + "\n" + "Engine: " + engine.getVolume() + " "+ engine.getType() +  "\n" + "Transmission: " + transmission + "\n" + "Multimedia: " + multimedia + "\n";
    }
}
