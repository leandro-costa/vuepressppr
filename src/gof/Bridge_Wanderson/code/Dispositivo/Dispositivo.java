package Dispositivo;

public interface Dispositivo {
    boolean isligado();

    void enable();

    void disable();

    int getVolume();

    void setVolume(int percent);

    int getChannel();

    void setChannel(int channel);

    void printStatus();

}