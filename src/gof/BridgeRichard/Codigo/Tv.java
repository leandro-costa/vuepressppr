package gof.BridgeRichard.Codigo;

public class Tv implements Dispositivo{
    private boolean on = false;
    private int volume = 10;
    private int canal = 1;
    
    
    @Override
    public boolean isLigado() {
        return on;
    }

    @Override
    public void Ligado() {
        on = true;
        
    }

    @Override
    public void Desligado() {
        on = false;        
    }

    @Override
    public int getVolume() {
        return volume;
    }

    @Override
    public void setVolume(int volume) {
        if (volume > 100) {
            this.volume = 100;
        } else if (volume < 0) {
            this.volume = 0;
        } else {
            this.volume = volume;
        }
    }
    @Override
    public int getCanal() {
        return canal;
    }
    @Override
    public void setCanal(int canal) {
        this.canal = canal;
        
    }
    @Override
    public void printStatus() {
        System.out.println("------------------------------------");
        System.out.println("| A TV está " + (on ? "ligada " : "desligada"));
        System.out.println("| O Volume é: " + volume + "%");
        System.out.println("| O Canal é: " + canal);
        System.out.println("------------------------------------\n");
    }

}