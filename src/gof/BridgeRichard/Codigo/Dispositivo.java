package gof.BridgeRichard.Codigo;

public interface Dispositivo {
    
    boolean isLigado();

    void Ligado();

    void Desligado();

    int getVolume();

    void setVolume(int volume);

    int getCanal();

    void setCanal(int canal);

    void printStatus();
}