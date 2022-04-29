package Components;


public class Engine {
    private final String type;
    private final double volume;
   

    public Engine(String type, double volume) {
        this.type = type;
        this.volume = volume;
       
    }

    public double getVolume() {
        return volume;
    }

    public String getType() {
        return type;
    }
}
